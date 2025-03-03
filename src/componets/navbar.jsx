
import React ,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-removebg-preview.png'

function Navbar(props) {
     const [scrolled, setScrolled]= useState(false);
     useEffect(()=>{
      const handleScroll = () => {
        if (window.scrollY > 100) {  // Change class when scrolled more than 100px
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
     }, [])
  return (
    <div className={`navbar ${!props.isHome?'green':""} ${props.isHome && scrolled?'green-home':null}`}>
        <div className='logo'><img style={{height:'70px'}} src={logo}/></div>
        <div classname='buttons' style={{display:'flex', gap:'25px'}}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">My Profile</Link>
            <Link to="/kissanlogin">Kissan/Buyer Login</Link>
            <Link to="/dashboard">Services</Link>
            <Link to="/about">About Us</Link>
        </div>
        <Link className="contact-button" to="/contact">Contact Us</Link>
    </div>
  )
}

export default Navbar
