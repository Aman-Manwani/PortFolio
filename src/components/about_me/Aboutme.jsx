import React from 'react'
import './Aboutme.css';
import Image from './MyImg.jpg';
import { annotate, annotationGroup } from "rough-notation";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";



const About_me = () => {

  const annoOne = useRef(null);

  useEffect(() => {
    const a1 = annotate(annoOne.current, { type: "highlight", color: "#00abf0" });
    const ag = annotationGroup([a1]);
    ag.show();
  }, []);
  return (
    <div className='about-me'>
      <div className='inner-content'>
        <div className='about-me-heading'>About <span className='color_00abf0'>Me</span></div>
        <img src={Image} alt="Personal_Photo" className='personal-image'/>
        <div className='about-me-subhead'>
        <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Full Stack Developer !")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
            ref={annoOne}
          />
        </div>
        <div className='about-me-descrip'>
        I am a Full Stack Developer with a passion for building scalable and efficient web applications. With hands-on experience in modern technologies like React.js, Next js and Node.js. My journey includes working on innovative projects, contributing to open-source, and some internship experiences. Beyond coding, I enjoy mentoring aspiring developers and exploring the latest trends in technology.
        </div>
        {/* <button className='hire-btn btn-about read-more-btn'>Read More ...</button> */}
      </div>
    </div>
  )
}

export default About_me
