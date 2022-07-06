import React from "react";

//styles
import "../../assets/styles/CounterCardStyles.css";
import { CardTitle } from "../../assets/styles/CardStyles";

interface Title {
  text: string;
}

const CounterCard = (props: Title) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">10</div>
          <div className="flip-card-back"></div>
        </div>
      </div>
      <CardTitle>{props.text}</CardTitle>
    </div>
  );
};

export default CounterCard;
