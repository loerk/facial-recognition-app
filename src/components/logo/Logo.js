import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "./logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div
          className="Tilt br2 shadow-2"
          style={{
            width: "150px",
            height: "150px",
          }}
        >
          <div className="pa4">
            <img style={{ paddingTop: "10px" }} src={logo} alt="logo" />
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
