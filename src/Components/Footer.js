import React from 'react';
import '../StyleSheets/footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer id='p-footer'>
        <h2> Connect with me on </h2>
        <div className="contact-icon">
            <a href="https://www.linkedin.com/in/dharmender-joshi-7568a816a/" target="_main"> <LinkedInIcon /></a>
            <a href="https://github.com/joshidha" target="_main"> <GitHubIcon /></a>
            <a href="mailto:dheeraj091999@gmail.com" target="_main"><MailIcon /></a>
        </div>
    </footer>
  )
}

export default Footer