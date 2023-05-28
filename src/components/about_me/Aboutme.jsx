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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab impedit cupiditate repellat iusto unde omnis atque expedita, tempore dolor, animi nesciunt dolorem beatae sit dolores eius fugit praesentium consectetur rem voluptatibus repellendus accusantium. Mollitia aliquam facere cumque voluptate velit.
        </div>
        <button className='hire-btn btn-about read-more-btn'>Read More ...</button>
      </div>
    </div>
  )
}

export default About_me
