import React from "react";
import Header from "../components/header/index";
import FirstCard from "../components/FirstCard/index";
import SecondCard from "../components/SecondCard/index";
import "./index.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FirstCard />
      <div className="secondCardContainer">
        <SecondCard />
      </div>
    </div>
  );
};

export default HomePage;
