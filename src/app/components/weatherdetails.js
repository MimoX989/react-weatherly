import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import Humidity from "./detail-cards/humidity";
import Wind from "./detail-cards/wind";
import Rain from "./detail-cards/rain";
import Uv from "./detail-cards/uv";
import Pressure from "./detail-cards/pressure";
import Feelslike from "./detail-cards/feelslike";
import { WeatherContext } from "../utils/context";

const WeatherDetails = () => {
  let [data] = useContext(WeatherContext);
  return (
    <Card >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Weather Details</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="card-grid">
          <Humidity value={data}/>
          <Wind value={data}/>
          <Rain value={data}/>
          <Uv value={data}/>
          <Pressure value={data}/>
          <Feelslike value={data}/>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/MimoX989/"
        >
          Visit my GitHub repositories.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default WeatherDetails;
