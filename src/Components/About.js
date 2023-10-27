import React from 'react'
import '../StyleSheets/about.css';
import profile from '../ProjectImages/Profile.jpg'
const About = () => {
  return (
        <div id="about-page">
            <h1 className='about-Header'> About Me</h1>
            <div id="about">
                    <div className="profile"> 
                        <img src={profile} alt="" width="250px"/>
                    </div>
                    <div className="profileDescription">
                    <h1 >Dharmender Joshi</h1>
                    <p className="role"> Software Developer</p>
                    <p className='role-description'> Hello, I am a skilled Software Developer with expertise in React.js ,Javascript and State Management tool like Redux. With two years of hands-on experience, I'm well-versed in the art of front-end development and bring a wealth of knowledge in Node.js and Express.js for robust back-end support. I hold a degree from Delhi University in computer Science with a CGPA of 8.4. I am currently working in Tata Consultancy Service limited as a System Engineer.</p>
                    </div>
            </div>
        </div>
  )
}

export default About