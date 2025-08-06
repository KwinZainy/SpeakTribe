import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
const Nav = () => {
  return (
    <div className=' flex justify-between py-3 px-34 max-mobile:px-0'>
       <section className=' flex gap-6 items-center'>
        <img src="./speaktribe-logo.png" alt="" className=' w-[90px]'/>
        <p className=' max-tablet:hidden'>DashBoard</p>
        <p className='max-tablet:hidden'>About</p>
        </section> 
       <section className=' flex gap-5 items-center'>
        <p className=' max-tablet:hidden'>Log Out</p>
        <IoPersonCircleSharp size={30}/>
        </section> 
    </div>
  )
}

export default Nav