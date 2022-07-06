import React from "react";
//styles
import { CounterCards } from "../../assets/styles/CardStyles";
//components
import CounterCard from "../../components/CounterCard/CounterCard";

const CardBlock = () => {
  return (
    <CounterCards>
      <CounterCard text={"Days"} />
      <CounterCard text={"Hours"} />
      <CounterCard text={"Minutes"} />
      <CounterCard text={"Seconds"} />
    </CounterCards>
  );
};

export default CardBlock;
