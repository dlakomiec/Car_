import React from "react";
import "./prices.css";
import FieldDiagnostic from "./pricesComponents/fieldDiagnostics";
import CarSearchAssistance from "./pricesComponents/carSearchAssistance";
import ExpertForTheDay from "./pricesComponents/expertForTheDay";
const Prices = () => (
  <>
    <div className="ourPrices">
      <h3 className="ourPricesText">Our Prices:</h3>
      <div className="ourPricesWrapper">
        <FieldDiagnostic />
        <CarSearchAssistance />
        <ExpertForTheDay />
      </div>
    </div>
  </>
);

export default Prices;
