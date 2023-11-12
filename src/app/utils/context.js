"use client";
import { createContext, useState } from "react";

export const WeatherContext = createContext();

function Context({ children }) {
  const [data, setData] = useState({
    "location": {
        "name": "--",
        "region": "Delhi",
        "country": "--",
        "tz_id": "Asia/Kolkata",
        "localtime": "2023-11-12 20:57"
    },
    "current": {
        "temp_c": "--",
        "temp_f": 68.0,
        "is_day": 0,
        "condition": {
            "text": "--",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
            "code": 1030
        },
        "wind_mph": 2.5,
        "wind_kph": 4.0,
        "wind_degree": 220,
        "wind_dir": "SW",
        "pressure_mb": 1019.0,
        "pressure_in": 30.09,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 68,
        "cloud": 0,
        "feelslike_c": 20.0,
        "feelslike_f": 68.0,
        "vis_km": 3.5,
        "vis_miles": 2.0,
        "uv": 1.0,
        "gust_mph": 6.8,
        "gust_kph": 11.0
    }
});
  const [query, setQuery] = useState("Delhi,IN");
  return (
    <WeatherContext.Provider value={[data, setData, query, setQuery]}>
      {children}
    </WeatherContext.Provider>
  );
}

export default Context;
