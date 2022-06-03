import React from "react";
import "./card.css";

interface cardTwoProps {
  title: string;
  description: string;
  icon: string;
}

const CardTwo: React.FC<cardTwoProps> = (props) => {
  return (
    <div>
      <div className="Card">
        <p className="cardTitle">{props.title}</p>
        <img src={props.icon} alt="image" className="iconImg" />
        <div>
          <span>
            <p className="name">
              Qiskit <span className="nameTwo">/qiskit-terra</span>
            </p>
          </span>
        </div>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default CardTwo;
