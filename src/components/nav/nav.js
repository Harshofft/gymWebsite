import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import Logo from './IMG-20240831-WA0001.jpg'
function nav() {
  return (
    <div className='nav-Bar'>
      <div className='nav-logo'>
    <img src={Logo} alt="hey" className='nav-title'/>
    <p>SBM</p>
      </div>
    
    <div className='nav-option'>
    <Link to='/' className='links'>Home</Link>
    <Link to='/about' className='links'>About</Link>
    </div>
    </div>
  )
}

export default nav