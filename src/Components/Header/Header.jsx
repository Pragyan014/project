import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="header-content">
            <h1>You choose we make.</h1>
            <p>If you want to custom make your suits then we are here. Feel free to contact us. You will find various options with high quality making.</p>
            <button><Link to="/contact">Make appointment</Link></button>
        </div>


    </div>
  )
}

export default Header