import React from "react";
import Techs from "../../utils/Tech";
import "./Skills.css";
import LaptopImage from "./Laptop.jpg";

const Skills = () => {
  return (
    <div className="tools">
      <div className="inner-tools">
        <div className="tools-left">
          <img src={LaptopImage} alt="Skills" className="tools-laptop" />
          <div className="tools-heading">Tools and <span className="color_00abf0">Technologies</span></div>
        </div>
        <div className="tools-right">
          {Techs.map((tech, index) => (
            <div key={index} className="skill-card">
              <img src={tech} alt="skill" className="skills" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
