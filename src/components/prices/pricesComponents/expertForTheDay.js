import React from "react";
import "./expertForTheDay.css";
import ButtonPrices from "./buttonPrices";

const expertForTheDay = () => (
  <>
    <div className="expertForTheDay">
      <div className="expertForTheDayWrapper">
        <div className="expertForTheDayPhoto"> </div>
        <h4 className="expertForTheDayText">
          Expert For <br />
          The Day
        </h4>
      </div>
      <div>
        <p className="expertForTheDayDesription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          from 130$
        </p>
      </div>
      <ButtonPrices />
    </div>
  </>
);

export default expertForTheDay;
