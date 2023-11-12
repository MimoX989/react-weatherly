import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { WiThermometer } from "react-icons/wi";
const Feelslike = (props) => {
  return (
    <Card className="detail-card">
    <CardHeader className="detail-card-header pb-0 pt-2 px-4">
      <div>
        <p className="font-semibold">Feels Like</p>
        <small className="text-default-500"></small>
      </div>
      <WiThermometer className="text-4xl" />
    </CardHeader>
    <CardBody className="overflow-visible pb-10 justify-center">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold">{props.value.current.feelslike_c}<sup>°</sup></h2>
      </div>
    </CardBody>
  </Card>
  )
}

export default Feelslike