import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=' bg-[#009688] py-10 max-mobile: pl-4'>
      <section className=' flex justify-around mb-10 max-mobile:flex-col max-mobile:gap-3.5'>
      <p className=' text-white max-mobile:text-14px'>About us</p>
      <p className=' text-white max-mobile:text-14px'>Contact</p>
      <p className=' text-white max-mobile:text-14px'>Privacy Policy</p>
      <p className=' text-white max-mobile:text-14px'>Terms of service</p>
      </section>
        <section className=' flex justify-center gap-10 pb-10 max-mobile:justify-start'>
        <FaXTwitter className=' text-white'/>
        <FaFacebook className=' text-white'/>
        <FaInstagram className=' text-white'/>
      </section>

         <section className='text-center max-mobile:text-green-900'>
        <p className=' text-white  max-mobile:text-start max-mobile:text-[14px]'>@ 2025 SpeakTribe. All rights reserved.</p>
      </section>
    
     
    </div>
  )
}

export default Footer