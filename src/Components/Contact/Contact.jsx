import React, { useState } from 'react'
import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from 'axios';

const Contact = () => {
  const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [message, setmessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
    
        axios.post("https://66712b43e083e62ee43a5e7a.mockapi.io/getdata",
            {
                name,
                email,
                phoneno,
                message
            }
        )
    
    };
  return (
    <>
    <div className="goolgle-link">
        
    </div>
    <div className="contact">
        <div className="contact-left">
            <h2>Get in touch</h2>
            <p>If you want to custom make your suits then we are here. Feel free to contact us. You will find various options with high quality making.</p>
            <a href="https://maps.app.goo.gl/Cb8WQTkvwuphZos1A"><div className="location">
            <FaLocationDot />
            <div className="location-right">
            <h3>Visit our shop</h3>
            <p>Bharatpur-11,Chitwan</p>
            </div>   
            </div></a>
            <div className="call">
            <IoCall />
            <div className="call-right">
            <h3>Call us</h3>
            <p>+977-9876540321</p>
            </div>
            </div>
            <div className="email">
            <MdOutlineMail />
            <div className="email-right">
            <h3>Email us</h3>
            <p>mensware@gmail.com</p>
            </div>
            </div>
        </div>
        <div className="contact-right">
            <div className="contact-us">
                <form onSubmit={submit} className="form">
                <input type="text" id="name" name="name" placeholder="Full name" onChange={(e)=>setname(e.target.value)} required/>
                <input type="email" id="email" name="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} required/>
                <input type="number" id="phoneno" name="phoneno" placeholder="Phone Number" onChange={(e)=>setphoneno(e.target.value)} required/>
                <input type="text" id="message" name="message" placeholder="Message" onChange={(e)=>setmessage(e.target.value)} required/>
                <button type="submit">Submit</button>
                </form>

            </div>
        </div>
 </div>
 </>
  )
}

export default Contact