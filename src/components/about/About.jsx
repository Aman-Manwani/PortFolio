import React from "react";
import "./About.css";
import "boxicons";
import Image from "../about_me/MyImg.jpg";

const About = () => {
  return (
    <div className="about-sec">
      <div className="inner-about-sec">
        <div className="left-sec">
          <h1 className="about-heading">Hi, I'm Aman Manwani</h1>
          <div className="subhead-about">Full Stack Developer</div>
          <div className="descrip">
            I am a passionate Full Stack Developer with expertise in building scalable web applications and user-friendly interfaces. With experience in modern technologies like React, Node.js, and Kubernetes, I aim to deliver innovative solutions that drive digital transformation. Let's collaborate to turn ideas into reality!"
          </div>
          <div className="button-about">
            <button className="hire-btn btn-about">Hire Me</button>
            <button className="contact-btn btn-about">
              <a
                href="#contact-me"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Let's Talk
              </a>
            </button>
          </div>
        </div>
        <div className="right-sec">
          <img
            src={Image}
            alt="Personal_Photo"
            className="front-personal-img"
          />
        </div>
      </div>
      <div className="socials">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/amanmanwani__official/"
        >
          <box-icon name="instagram" type="logo" color="#00abf0"></box-icon>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Amanmanwani0?t=XHqXuM7Hc7JswOhX2ohFlA&s=09"
        >
          <box-icon type="logo" name="twitter" color="#00abf0"></box-icon>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aman-manwani-098891240/"
        >
          <box-icon name="linkedin" type="logo" color="#00abf0"></box-icon>
        </a>
      </div>
    </div>
  );
};

export default About;
