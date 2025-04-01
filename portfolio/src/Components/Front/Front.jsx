import React from 'react'
import './Front.css'
import dp from '../../assets/dp.png'

const Front = () => {
  return (
    <div className='front'>
        <img src={dp} alt=''/>
      <h1><span>"I'm Gayani Weerasinghe, Welcome to my portfolio! "</span></h1>
      <h3>Front-end Developer | Backend Developer | UI/UX Designer</h3>
      <p>I’m an undergraduate Software Engineering student with a passion for building seamless digital 
        experiences. I specialize in both frontend and backend development, creating innovative web and 
        mobile applications. Constantly exploring new technologies, I strive to craft efficient, 
        user-friendly, and scalable solutions.</p>
        <div className="front-action">
            <div className="front-connect">Connect with me</div>
            <div className="front-resume">My resume</div>
        </div>
    </div>
  )
}

export default Front
