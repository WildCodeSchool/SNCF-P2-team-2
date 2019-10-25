import React from "react";
import "./navbar.css";
import logo from "./img/Sncf-logo.svg";

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <nav
          role="navigation"
          className="mastheader bg-white Sticky-top col-12 py-5 d-flex justify-content-start"
        >
          <img className="img-fluid" alt="SNCF" src={logo} />
          <h1 className="ml-3 mt-4 text-uppercase">Transilien</h1>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
