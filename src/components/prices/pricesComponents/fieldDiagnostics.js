import React from "react";
import "./fieldDiagnostic.css";
import ButtonPrices from "./buttonPrices";

const fieldDiagnostic = () => (
  <>
    <div className="fieldDiagnostic">
      <div className="fieldDiagnosticWrapper">
        <div className="fieldDiagnosticPhoto"> </div>
        <h4 className="fieldDiagnosticText">
          Field <br /> diagnostic
        </h4>
      </div>
      <div>
        <p className="fieldDiagnosticDesription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          from 100$
        </p>
      </div>
      <ButtonPrices />
    </div>
  </>
);

export default fieldDiagnostic;
