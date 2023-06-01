import React from "react";
import "./FooterSec.css";
import "boxicons";

const FooterSec = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-heading">
          Aman <span className="color_00abf0"> Manwani 📈</span>
        </div>
        <div className="footer-quote">
          <div>"Strength and growth come only through</div>
          <div className="color_00abf0">continuous effort and struggle."</div>
        </div>
        <div className="socials socials-in-footer">
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aman-manwani-098891240/"
          >
            <box-icon name="github" type="logo" color="#00abf0"></box-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aman-manwani-098891240/"
          >
            <box-icon name='envelope' color="#00abf0"></box-icon>
          </a>
        </div>
      </div>
      <div className="made-with">
        Made With 💗 By <span className="color_00abf0"> AMAN MANWANI</span>
      </div>
    </div>
  );
};

export default FooterSec;
