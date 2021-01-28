import React from "react";
import "./buyCar.css";
import Button from "./../button/button";

const buyCar = () => (
  <>
    <div className="buyCar">
      <h3 className="buyCarText">
        Want a buy a car? <br />
        Let us help you!
      </h3>
      <div className="buyCarContactUs">
        <h4 className="buyCarContacUsText">
          Leave a request and our consultant will call you within 24 hours
        </h4>
        <div className="buyCarContactUsForm">
          <form className="form">
            <input
              className="buyCarContactUsInput"
              type="number"
              placeholder="Enter your phone"
            />
            <Button />
          </form>
        </div>
      </div>
    </div>
  </>
);

export default buyCar;
