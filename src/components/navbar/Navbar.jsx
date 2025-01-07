import React from "react";
import Logo from "./Logo.png";
import "./Navbar.css";
import Resume from '../../utils/Aman_Manwani_Resume.pdf'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-div">
        <a href="#/" style={{textDecoration:'none',color:'inherit'}}>
          <img src={Logo} alt="aman" className="logo" />
        </a>
      </div>
      <div className="components-navbar">
        <ul>
          <li><a href="#about" style={{textDecoration:'none',color:'inherit'}}> About</a></li>
          <li><a href="#skills" style={{textDecoration:'none',color:'inherit'}}> Skills</a></li>
          <li><a href="#projects" style={{textDecoration:'none',color:'inherit'}}> Projects</a></li>
          <li><a href="#contact-me" style={{textDecoration:'none',color:'inherit'}}> Contact</a></li>
          <li className="resume"> <a href={Resume} download="Aman.pdf" style={{textDecoration:'none',color:'inherit'}}>Resume</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
