import React from "react";
import "./navbar.css";
import logo from "./img/logo.png";

function Navbar() {
  return (
    <div className="mastheader">
      <div className="mastheader-logo">
        <a href="/docs">
          <img alt="SNCF" src={logo} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
