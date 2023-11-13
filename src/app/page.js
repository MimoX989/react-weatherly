"use client";
import { useContext, useEffect, useState } from "react";
import WeatherDetails from "./components/weatherdetails";
import WeatherPanel from "./components/weatherpanel";
import "./globals.css";
import { WeatherContext } from "./utils/provider";

export default function Home() {
  let [data, setData, query, setQuery] = useContext(WeatherContext);
  const [iserror, setError] = useState(0);

  useEffect(() => {
    fetchData();
  }, [query, setQuery]);

  const fetchData = async () => {
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + query + "'";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (result.error) {
        console.log({ Error: "No location found!" });
        setError(1);
      } else {
        setError(false);
        setData(result);
      }
      // console.log(result);
    } catch (error) {
      setError(2);
      console.error(error);
    }
  };
  return (
    <main className="flex h-screen w-screen justify-center">
      <div className="flex flex-row p-5 max-md:flex-col h-full">
        <div
          className="flex panel-card-layout"
        >
          <WeatherPanel iserror={iserror} />
        </div>

        <div
          className="flex det-card-layout"
        >
          <WeatherDetails />
        </div>
      </div>
    </main>
  );
}
