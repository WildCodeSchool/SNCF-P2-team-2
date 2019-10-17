import React from "react";
import "./navbar.css";
import logo from "./img/logo.png";

function Navbar() {
  return (
    <div className="mastheader">
      <header role="banner" className="mastheader-title d-none d-xl-block">
        <img src={logo} alt="My logo" />
      </header>
    </div>
  );
}

export default Navbar;
