import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../StyleSheets/nav.css';
const Navbar = () => {
const expand=()=>{
    const navigationBar=document.querySelector('#navbar');
    const close=document.querySelector('.closeIcon');
    const ham=document.querySelector('.hamIcon');
    navigationBar.style.display="block";
    close.style.display="block";
    ham.style.display="none";
}
const minimize=()=>{
    const navigationBar=document.querySelector('#navbar');
    const close=document.querySelector('.closeIcon');
    const ham=document.querySelector('.hamIcon');
    close.style.display="none";
    ham.style.display="block";
    navigationBar.style.display="none";
}
  return (
    <div className='Nav'>
        <div className="first-half">
            <p className="user-name">Dharmender Joshi</p> 
            <button className="hamIcon" onClick={expand}><MenuIcon /></button>
            <button className="closeIcon" onClick={minimize}><CloseIcon /></button>
        </div>
        <div className="second-half">
            <ul id="navbar">
                <li className="nav-item"><a href="#intro" >Home</a> </li>
                <li className="nav-item"><a href="#about-page" >About</a> </li>
                <li className="nav-item"><a href="#projects" >Projects</a> </li>
                <li className="nav-item"><a href="#p-footer" >Contact</a> </li>   
            </ul>
    </div>
    </div>
  )
}

export default Navbar