import React from "react";
import "./mainSection.css";
import ButtonRequest from "../button/button";
import HeaderMenu from "../headerMenu/headerMenu";

const mainSection = () => (
  <>
    <div className="mainSection">
      <HeaderMenu />

      <h2 className="mainParagraphs">
        MyCar car <br />
        search assistance
      </h2>
      <p className="mainDescriptions">
        Professional assistance in the search of vehicles by <br /> individual
        parameters and diagnostics
      </p>
      <ButtonRequest />
    </div>
  </>
);

export default mainSection;
