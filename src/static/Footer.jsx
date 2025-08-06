import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=' bg-red-400 py-10'>
      <section className=' flex justify-around mb-10'>
      <p>About us</p>
      <p>Contact</p>
      <p>Privacy Policy</p>
      <p>Terms of service</p>
      </section>
      <div className=' flex justify-around items-center px-10 pb-10'>
         <section className=' '>
        <p>@ 2025 SpeakTribe. All rights reserved.</p>
      </section>
      <section className=' flex justify-center gap-7 '>
        <FaXTwitter/>
        <FaFacebook/>
        <FaInstagram/>
      </section>
     
      </div>
    </div>
  )
}

export default Footer