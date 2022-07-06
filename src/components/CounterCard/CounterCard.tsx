import React from "react";

//styles
import "../../assets/styles/CounterCardStyles.css";
import { CardTitle } from "../../assets/styles/CardStyles";

interface CounterText {
  counter: number;
  title: string;
}

const CounterCard = (props: CounterText) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">{props.counter}</div>
          <div className="flip-card-back"></div>
        </div>
      </div>
      <CardTitle>{props.title}</CardTitle>
    </div>
  );
};

export default CounterCard;
