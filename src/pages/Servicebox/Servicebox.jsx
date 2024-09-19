import React from 'react'
import "./Servicebox.css"

const Servicebox = (props) => {
  return (
    <div className="service-box">
            <img src={props.image} alt="loading..." />
        
        <div className="s-b-text">
            <h2>{props.text}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

    </div>
  )
}

export default Servicebox