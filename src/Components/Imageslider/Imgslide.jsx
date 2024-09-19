import React, { useState } from 'react'
import "./Imgslide.css"
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa6";


const Imgslide = () => {

    const images = [
        "https://i.pinimg.com/736x/fa/74/f5/fa74f530d840b696f045a302688653f9.jpg",
        "https://th.bing.com/th/id/OIF.PuiWhZVLP96xPZyIFPsezQ?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.UlPVXU4ZsdMW1jDIin5s0QHaEK?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.h_aPHhpgFDBmpizBPJsteAHaE7?rs=1&pid=ImgDetMain"
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };

  return (
    <div className="slides">
        <button className="prev" onClick={prevSlide}> <FaLessThan /> </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      <button className="next" onClick={nextSlide}><FaGreaterThan/></button>
    </div>
  )
};

export default Imgslide