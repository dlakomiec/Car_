import React from "react";
import "./headerMenu.css";
import ButtonRequest from "../button/button";

const HeaderMenu = () => (
  <>
    <ul className="wrapper">
      <li>About</li>
      <li>Services</li>
      <li>Team</li>
      <li>Reviews</li>
      <li>Contcts</li>
      <ButtonRequest />
    </ul>
  </>
);

export default HeaderMenu;
