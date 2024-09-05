import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assest'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const[menu,setMenu]=useState("home")
  return (
    <div className="navbar">
        <img src={assets.menslogo} alt="" className="logo"/>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><Link to="/">Home</Link></li>
            <li onClick={()=>setMenu("service")} className={menu==="service"?"active":""}><Link to="/service">Services</Link></li>
            <li onClick={()=>setMenu("accessories")} className={menu==="accessories"?"active":""}><Link to="/accessories">Accessories</Link></li>
            <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}><Link to="/about-us">About us</Link></li>
        </ul>
        <div className="navbar-right">
            <button><Link to="/contact">Contact-us</Link></button>
        </div>


    </div>
  )
}

export default Navbar