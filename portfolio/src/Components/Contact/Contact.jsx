import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.png'
import mail from '../../assets/mail.png'
import location from '../../assets/location.png'
import call from '../../assets/call.png'



const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme} alt=''/>
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Feel free to reach out if you're interested in any of my services! I'm always ready to
                 collaborate and bring your ideas to life with my expertise.</p>
        <div className="contact-details">
            <div className="contact-detail">
                <img src={mail} alt=""/><p>gayaniweerasinghe@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call} alt=""/><p>+94715330202</p>
            </div>
            <div className="contact-detail">
            <img src={location} alt=""/><p>Matale, Sri Lanka</p>
            </div>
        </div>
        </div>
        <form action="" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
