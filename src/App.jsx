import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Aboutus from './pages/Aboutus/Aboutus'
import Copyright from './Components/Copyright/Copyright'
import Error from './pages/Errorpage/Error'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Copyright/>
    </div>
  )
}

export default App