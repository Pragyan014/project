import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assest'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const[menu,setMenu]=useState("home");
const [navbar,setNavbar]=useState("true");

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
        <img src={assets.menslogo} alt="" className="logo"/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><Link to="/">Home</Link></li>
            <li onClick={()=>setMenu("service")} className={menu==="service"?"active":""}><Link to="/service">Services</Link></li>
            <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}><Link to="/about-us">About us</Link></li>
            <li><button><a href="#contact">Contact-us</a></button></li>
        </ul>
        


    </nav>
  )
}

export default Navbar