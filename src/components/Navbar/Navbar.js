import React from "react";
import "./navbar.css";
import logo from "./img/Logo_SNCF_Transilien_2019.png";

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <nav
          role="navigation"
          className="mastheader bg-white Sticky-top col-12 d-flex justify-content-start align-items-center"
        >
          <img className="logoTransilien" alt="SNCF" src={logo} />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
