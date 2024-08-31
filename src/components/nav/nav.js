import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function nav() {
  return (
    <div className='nav-Bar'>
    <div className='nav-title'>Fitness</div>
    <div className='nav-option'>
    <Link to='/' className='links'>Home</Link>
    <Link to='/about' className='links'>About</Link>
    </div>
    </div>
  )
}

export default nav