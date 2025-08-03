import React, { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
const ProfileMenu = () => {
    const [open,setOpen] = useState(false)


  return (
    <div>
        <div onClick={(()=>setOpen(!open))}>
           {open? <ImCancelCircle/>: <IoPersonCircleSharp size={40}/>} 
            </div>
      <div >
      {open&&(
        <div  className=' bg-white flex flex-col gap-12 items-center h-screen py-10 fixed inset-0 overflow-y-hidden'>
            
            <div className=' flex items-center max-mobile:gap-40 max-tablet:gap-80'>
                <h1 className=' text-[30px] italic'>SpeakTribe</h1>
                <div onClick={(()=>setOpen(!open))}>
           {open? <ImCancelCircle size={35}/>: <IoPersonCircleSharp />} 
            </div>
            </div>
            <div className='flex flex-col gap-4 mx-auto max-tablet:pl-4 max-tablet:mt-3 max-mobile:gap-2 '>
            <button className=' bg-[#009688] text-[18px] font-light p-3 hover:bg-[#388E3C] text-white  hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px] '> Begin Your Journey!</button>
            <button className=' bg-[#009688] text-[18px] font-light p-3 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'> Already have an account?</button>
          </div>
        </div>
        
  )}
        </div>
    </div>
  )
}

export default ProfileMenu