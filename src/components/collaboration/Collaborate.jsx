import React from 'react'
import './Collaborate.css'
import Image from './person.png'

const Collaborate = () => {
  return (
    <div className='collaboration-div'>
      <div className='collaboration-main-head'>
        Let's start <span className='color_00abf0'> Projects Together 😉</span>
      </div>
       <div className='inner-collab-div'>
          <div className='collaboration-left'>
            <div className='collaborate-head'>
              You have an Amazing Project Idea
            </div>
            <div className='collaborate-subhead'>
              Contact me now, I'm always open to collaborate, discuss or partnership opportunities.
            </div>
            <div className='Collaborate-contact-btn-div'>
              <button className='Collaborate-contact-btn btn-about'>
                Contact Me →
              </button>
            </div>
          </div>
          <div className='collaboration-right'>
            <img src={Image} alt="collaborate" className='collaboration-img'/>
          </div>
       </div>
    </div>
  )
}

export default Collaborate
