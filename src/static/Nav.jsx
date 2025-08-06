import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
const Nav = () => {
  return (
    <div className=' flex justify-between py-3 px-14'>
       <section className=' flex gap-6'>
        <p>SpeakTribe</p>
        <p>DashBoard</p>
        <p>About</p>
        </section> 
       <section>
        <p>Log Out</p>
        <IoPersonCircleSharp/>
        </section> 
    </div>
  )
}

export default Nav