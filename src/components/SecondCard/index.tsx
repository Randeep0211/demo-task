import React from "react";
import CardTwo from "../cardTwo/index";
import { Data } from "../../data";

const SecondCard = () => {
  return (
    <div className="secondCardContainer">
      {Data.map((el: any) => {
        return (
          <CardTwo
            title={el.title}
            icon={el.icon}
            description={el.description}
          />
        );
      })}
    </div>
  );
};

export default SecondCard;
