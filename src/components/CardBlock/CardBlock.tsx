import React from "react";
//styles
import { CounterCards } from "../../assets/styles/CardStyles";
//components
import CounterCard from "../../components/CounterCard/CounterCard";

const CardBlock = () => {
  var countDownDate = new Date("Jan 5, 2023 15:30:30").getTime();
  const now = new Date().getTime();
  var difference = countDownDate - now;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return (
    <CounterCards>
      <CounterCard counter={days} title={"Days"} />
      <CounterCard counter={hours} title={"Hours"} />
      <CounterCard counter={minutes} title={"Minutes"} />
      <CounterCard counter={seconds} title={"Seconds"} />
    </CounterCards>
  );
};

export default CardBlock;
