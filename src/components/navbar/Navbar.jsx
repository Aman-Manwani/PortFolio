import React from "react";
import Logo from "./Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={Logo} alt="aman" className="logo" />
      </div>
      <div className="components-navbar">
        <ul>
          <li><a href="second-page" style={{textDecoration:'none',color:'inherit'}}> About</a></li>
          <li><a href="third-page" style={{textDecoration:'none',color:'inherit'}}> Skills</a></li>
          <li><a href="fourth-page" style={{textDecoration:'none',color:'inherit'}}> Projects</a></li>
          <li><a href="fifth-page" style={{textDecoration:'none',color:'inherit'}}> Contact</a></li>
          <li className="resume">Resume</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
