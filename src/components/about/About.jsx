import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-sec">
      <div className="inner-about-sec">
        <div className="left-sec">
          <h1 className="about-heading">Hi, I'm Aman Manwani</h1>
          <div className="subhead-about">Full Stack Developer</div>
          <div className="descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            laboriosam iure ducimus provident asperiores repellendus numquam
            possimus magni animi aperiam. Laboriosam numquam eligendi eos!
            Molestias sequi reprehenderit, 
          </div>
          <div className="button-about">
            <button className="hire-btn btn-about">Hire Me</button>
            <button className="contact-btn btn-about">Let's Talk</button>
          </div>
        </div>
        <div className="right-sec">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
