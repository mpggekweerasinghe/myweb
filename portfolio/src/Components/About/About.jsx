import React from 'react'
import './About.css'
import theme from '../../assets/theme.png'
import profile from '../../assets/dp.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme} alt=''/>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m an undergraduate Software Engineering student in  Open University of Sri Lanka with a deep passion 
                        for crafting intuitive and high-performing digital solutions. Specializing in both 
                        frontend and backend development, I enjoy building seamless web and mobile applications
                         that enhance user experiences and solve real-world problems.</p>
                    <p>I am constantly exploring new technologies and frameworks to stay ahead in the 
                        ever-evolving tech industry. My goal is to create innovative, scalable, and efficient 
                        applications that bridge the gap between functionality and great design.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java Script</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-qualifications">
            <div className="about-qualification">
                <h1>Programing languages</h1>
                <p>Java, C, Python</p>
            </div>
            <hr/>
            <div className="about-qualification">
                <h1>Database languages</h1>
                <p>MySQL, MongoDB, Firebase</p>
            </div>
            <hr/>
            <div className="about-qualification">
                <h1>Web development</h1>
                <p>HTML, CSS, PHP</p>
            </div>
            <hr/>
            <div className="about-qualification">
                <h1>Mobile app development</h1>
                <p>React native, Kotlin</p>
            </div>
            <hr/>
            <div className="about-qualification">
                <h1>Data science</h1>
                <p>R language</p>
            </div>
        </div>
    </div>
  )
}

export default About
