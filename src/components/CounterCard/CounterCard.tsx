import React from "react";
import "../../assets/styles/CounterCardStyles.css";

const CounterCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">CounterCard</div>
        <div className="flip-card-back">card back</div>
      </div>
    </div>
  );
};

export default CounterCard;
