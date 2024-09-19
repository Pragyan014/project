import React from 'react'
import "./Design.css"
import Imgslide from '../../Components/Imageslider/Imgslide'
import { Link } from 'react-router-dom';

const Design = () => {



  return (
    <div className="images">
        <h2>Some of our designs.</h2>
        <div className="slider">
        <Imgslide/>
        </div>
        <button><Link to="*">View more</Link></button>
    </div>
  )
}

export default Design