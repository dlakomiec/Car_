import React from "react";
import "./carSearchAssistance.css";
import ButtonPrices from "./buttonPrices";

const carSearchAssistance = () => (
  <>
    <div className="carSearchAssistance">
      <div className="carSearchAssistanceWrapper">
        <div className="carSearchAssistancePhoto"> </div>
        <h4 className="carSearchAssistanceText">
          Car search
          <br /> assistance
        </h4>
      </div>
      <div>
        <p className="carSearchAssistanceDesription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br /> from 250$
        </p>
      </div>
      <ButtonPrices />
    </div>
  </>
);

export default carSearchAssistance;
