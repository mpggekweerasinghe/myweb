import React from 'react'
import './Footer.css'
import theme from '../../assets/theme.png'
import user from '../../assets/user.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={theme} alt=""/>
                <p>I am an undergraduate software engineering student with a strong passion for developing 
                    innovative solutions. Skilled in Java, Python, and SQL, I enjoy working on projects that
                     enhance user experiences and solve real-world problems.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt=""/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Gayani Weerasinghe. All rights reserved. </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
