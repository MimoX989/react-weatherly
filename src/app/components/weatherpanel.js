"use client";
import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Input,
  Chip,
} from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ThemeSwitch } from "./theme-switch";
import dayjs from "dayjs";
import { WeatherContext } from "../utils/provider";

const WeatherPanel = (props) => {
  const date = dayjs().format("ddd, MMM D, YYYY h:mm A");
  const [qry, setQry] = useState(null);
  let [data, setData, query, setQuery] = useContext(WeatherContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(qry);
    setQuery(qry);
  };

  return (
    <Card fullWidth="true" style={{ paddingRight: "30px" }}>
      <CardHeader className="flex justify-between ">
        <div className="flex flex-row gap-2">
          <Image
            alt="weatherly logo"
            height={40}
            width={120}
            src="weatherly-logo-tr.svg"
          />
          <div>
            <ThemeSwitch />
          </div>
        </div>

        <div>
          {data.current.is_day ? (
            <Image width={40} src="day-icon.png"></Image>
          ) : (
            <Image width={40} src="night-icon.png"></Image>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="gap-5">
        <div className="px-3 my-2">
          {" "}
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Search"
              placeholder={query}
              labelPlacement="outside-left"
              onValueChange={setQry}
              endContent={
                <HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </form>
        </div>
        {props.iserror == "0" ? (
          <>
            <div className="details">
              <p> {data.location.name}</p>
              <p className="cityName">
                {data.location.region}
                <span className="text-small">
                  , {data.location.country}
                </span>{" "}
              </p>
              <p className="date">Today, {date}</p>
            </div>
            <div className="flex flex-col items-center justify-center deg-container">
              <p className="w-degree">
                {data.current.temp_c}
                <sup>°</sup>
              </p>
              <p className="w-status flex">
                <span>
                  <Image src={data.current.condition.icon} />
                </span>{" "}
                {data.current.condition.text}
              </p>
            </div>
          </>
        ) : (
          <>
            {props.iserror == "1" ? (
              <div className="flex h-full w-full justify-center">
                <Chip size="lg" color="warning">
                  <p className="text-xl font-semibold ">Location Error !</p>
                </Chip>
              </div>
            ) : (
              <div className="flex h-full w-full justify-center">
                <Chip size="lg" color="warning">
                  <p className="text-xl font-semibold ">Connection Error !</p>
                </Chip>
              </div>
            )}
          </>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <p className="text-sm font-semibold text-zinc-600">Copyright 2023</p>
      </CardFooter>
    </Card>
  );
};

export default WeatherPanel;
