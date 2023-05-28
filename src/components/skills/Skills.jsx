import React from 'react'
import Techs from "../../utils/Tech";
import './Skills.css';
import  LaptopImage from'./Laptop.jpg'

const Skills = () => {
  return (
    <div className='tools'>
        <div className='inner-tools'>
            <div className='tools-left'>
                <img src={LaptopImage} alt="Skills" className='tools-laptop' />
                <div>
                    Tools and Technologies
                </div>
            </div>
            <div className='tools-right'>
                Hiii
            </div>
        </div>
    </div>
  )
}

export default Skills
