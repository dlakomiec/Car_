import React from "react";
import "./location.css";

const location = () => (
  <>
    <div className="location">
      <section className="locationLeft">
        <h2 className="locationLeftText">Our location</h2>
        <ul className="locationLeftUlWrapper">
          <li className="flex">
            <div className="locationLeftUlImg1"></div>
            <p>Moscow, Mohovaya st., 1A</p>
          </li>
          <li className="flex">
            <div className="locationLeftUlImg2"></div>
            <p className="locationLeftUlParagraphs">+7(900)-000-00-00</p>
          </li>
        </ul>
        <h3 className="locationText">
          Check our social media for <br /> updates!
        </h3>
        <ul className="locationSocialMedia">
          <li className="locationSocialMediaW">
            <a href></a>
          </li>
          <li className="locationSocialMediaInstagram">
            <a href></a>
          </li>
          <li className="locationSocialMediaYT">
            <a href></a>
          </li>
        </ul>
      </section>
      <section className="locationRight"></section>
    </div>
  </>
);

export default location;
