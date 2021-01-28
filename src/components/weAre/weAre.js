import React from "react";
import "./weAre.css";

const weAre = () => (
  <>
    <div className="weAre">
      <h3 className="weAreText">We are professionals</h3>
      <div className="weAreWrapper">
        <div className="weAreWrapperPerson">
          <div className="weAreImg"></div>
          <h4>John Gold</h4>
          <p>
            <i>Founder of MtCar</i>
          </p>
          <h4 className="weAreDescription">
            I have assembled the best team <br /> of specialists and we prove it{" "}
            <br /> with our work
          </h4>
        </div>
        <div className="weAreWrapperPerson">
          <div className="weAreImg2"></div>
          <h4>Andrew Smith</h4>
          <p>
            <i>Chief of development</i>
          </p>
          <h4 className="weAreDescription">
            We develop the best products <br /> for our customers
          </h4>
        </div>
      </div>
    </div>
  </>
);

export default weAre;
