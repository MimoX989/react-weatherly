"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function Providers({ children }) {
  const [data, setData] = useState({
    location: {
      name: "--",
      region: "Delhi",
      country: "--",
      tz_id: "Asia/Kolkata",
      localtime: "2023-11-12 20:57",
    },
    current: {
      temp_c: "--",
      is_day: 0,
      condition: {
        text: "--",
        icon: "//cdn.weatherapi.com/weather/64x64/night/143.png",
       
      },
      wind_mph: 2.5,
      wind_kph: 0,
      wind_degree: 220,
      wind_dir: "--",
      pressure_mb: 0.0,
      pressure_in: 0.0,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0.0,
      feelslike_f: 0.0,
      uv: 0,
    },
  });
  const [query, setQuery] = useState("Delhi,IN");

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <WeatherContext.Provider value={[data, setData, query, setQuery]}>
          {children}
        </WeatherContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
