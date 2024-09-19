import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import Contact from '../../Components/Contact/Contact'
import Servicebox from '../Servicebox/Servicebox'
import { assets } from '../../assets/assest'
import Design from '../Designs/Design'


const Home = () => {
  return (
    <div>
   <Header/>
   <div className="service">
    <h2>We provide</h2>
    <div className="s-box">
      <Servicebox image={assets.swe} text="Sewing"/>
      <Servicebox image={assets.fabrics} text="Quality Fabrics"/>
      <Servicebox image={assets.cut} text="Feating"/>
    </div>
   </div>

   <Design/>
   
   <Contact/>
    </div>

  )
}

export default Home 