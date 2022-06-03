import React from "react";
import qBraidImg from "../../assets/qBraidImg.png";
import "./cardOne.css";
import CardOne from "../cardOne/index";
import tool from "../../assets/toolImage.png";

const FirstCard = () => {
  return (
    <div className="cardOneContainer">
      <div className="logo">
        <img src={qBraidImg} alt="image" className="qBraidImg" />
        <p className="logoName">
          <b>qBraid</b>
        </p>
      </div>

      <div className="cardContainer">
        <CardOne
          title="Development"
          icon={tool}
          image={qBraidImg}
          description="This is the ground from where we start developing.
          It can include text and color styles as well as standard interactions and spacing"
        />
      </div>
    </div>
  );
};

export default FirstCard;
