import React from "react";
//styles
import { CounterCards } from "../../assets/styles/CardStyles";
//components
import CounterCard from "../../components/CounterCard/CounterCard";

const CardBlock = () => {
  const dateFormat = new Date();

  const dayNum = dateFormat.getDate().toString();
  const hourNum = dateFormat.getHours().toString();
  const minsNum = dateFormat.getMinutes().toString();
  const secsNum = dateFormat.getSeconds().toString();

  return (
    <CounterCards>
      <CounterCard counter={dayNum} text={"Days"} />
      <CounterCard counter={hourNum} text={"Hours"} />
      <CounterCard counter={minsNum} text={"Minutes"} />
      <CounterCard counter={secsNum} text={"Seconds"} />
    </CounterCards>
  );
};

export default CardBlock;
