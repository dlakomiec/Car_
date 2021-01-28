import React from "react";
import "./index.css";
import "./components/headerMenu/headerMenu";
import MainSection from "./components/mainSection/mainSection";
import BuyCar from "./components/buyCar/buyCar";
import Prices from "./components/prices/prices";
import WeAre from "./components/weAre/weAre";
import Reviews from "./components/rewievs/reviews";
import DreamCar from "./components/blueDreamCar/dreamCar";
import Location from "./components/location/location";
import Footer from "./components/footer/footer";

const App = () => (
  <>
    <MainSection />
    <BuyCar />
    <Prices />
    <WeAre />
    <Reviews />
    <DreamCar />
    <Location />
    <Footer />
  </>
);

export default App;
