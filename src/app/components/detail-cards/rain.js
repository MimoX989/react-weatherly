import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { WiRain } from "react-icons/wi";
const Rain = (props) => {
  return (
    <Card className="detail-card">
    <CardHeader className="detail-card-header pb-0 pt-2 px-4">
      <div>
        <p className="font-semibold">Precipitation</p>
        <small className="text-default-500"></small>
      </div>
      <WiRain className="text-4xl" />
    </CardHeader>
    <CardBody className="overflow-visible pb-10 justify-center">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold">{props.value.current.precip_mm} ml</h2>
      </div>
    </CardBody>
  </Card>
  )
}

export default Rain