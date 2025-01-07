import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x1fivt8", // Replace with your EmailJS Service ID
        "template_kd8eea6", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
        },
        "Sg4eDRGHEq7GEjV7a" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", subject: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="Contact-div">
      <ToastContainer /> {/* Add this to render toast notifications */}
      <div className="contact-heading">
        Contact <span className="color_00abf0">Me!</span>
      </div>
      <div className="contact-inner-div">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Full Name"
          className="contact-input"
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          value={formData.subject}
          name="subject"
          placeholder="Enter Subject"
          className="contact-input-100"
          onChange={handleInputChange}
          required
        />

        <textarea
          name="message"
          rows="4"
          value={formData.message}
          className="contact-input-100"
          placeholder="Enter Your Message ..."
          onChange={handleInputChange}
          required
        ></textarea>

        <button
          className="btn-about contact-submit-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
