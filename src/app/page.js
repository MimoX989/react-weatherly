"use client";
import { useContext, useEffect } from "react";
import WeatherDetails from "./components/weatherdetails";
import WeatherPanel from "./components/weatherpanel";
import "./globals.css";
import { WeatherContext } from "./utils/context";

export default function Home() {
  let [data, setData, query, setQuery] = useContext(WeatherContext);

  useEffect(() => {
    fetchData();
  }, [query, setQuery]);

  const fetchData = async () => {
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + query + "'";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      await setData(result);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="flex h-screen w-screen justify-center">
      <div className="flex flex-row p-5">
        <div
          className="flex"
          style={{
            minWidth: "320px",
            marginRight: "-30px",
          }}
        >
          <WeatherPanel />
        </div>

        <div
          className="flex"
          style={{ minWidth: "600px", marginRight: "-30px" }}
        >
          <WeatherDetails />
        </div>
      </div>
    </main>
  );
}
