import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { WiDaySunny } from "react-icons/wi";
const Uv = (props) => {
  return (
    <Card className="detail-card">
    <CardHeader className="detail-card-header pb-0 pt-2 px-4">
      <div>
        <p className="font-semibold">UV</p>
        <small className="text-default-500"></small>
      </div>
      <WiDaySunny className="text-4xl" />
    </CardHeader>
    <CardBody className="overflow-visible pb-10 justify-center">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold">{props.value.current.uv}</h2>
      </div>
    </CardBody>
  </Card>
  )
}

export default Uv