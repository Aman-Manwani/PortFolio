import React from 'react'
import Logo from './Logo.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-div'>
            <img src={Logo} alt='aman' className='logo' /> 
        </div>
        <div className='components-navbar'>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Tools</li>
                <li>Contact</li>
                <li className='resume'>Resume</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
