import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="Contact-div">
      <div className="contact-heading">
        Contact <span className="color_00abf0">Me!</span>
      </div>
      <div className="contact-inner-div">
        <div className="contact-inner-first-div">
          <input
            type="text"
            placeholder="Full Name"
            className="contact-input"
          />

          <input
            type="text"
            placeholder="Email Address"
            className="contact-input"
          />
        </div>

        <input
          type="text"
          placeholder="Enter Subject"
          className="contact-input-100"
        />

        <textarea name="email" id="email" rows="7" className="contact-input-100" placeholder="Enter Your Message ...">
        </textarea>

        <button className="btn-about contact-submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
