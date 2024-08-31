import React from 'react'
import './card.css'
import Img1 from './1.png'
import Img2 from './2.png'
import Logo from './logo.jpg'
function card(props) {
  return (
    <div className='card'>
      <img src={props.Imgurl} alt="hey"  className='imgsupp'/>
      <img src={Logo} alt="hey"  className='imgcard'/>
        <h1 className='title'>{props.title}</h1>
        <p>{props.description}</p>
        
    </div>
  )
}

export default card