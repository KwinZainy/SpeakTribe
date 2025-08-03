import React, { useEffect, useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
      const handleScroll = ()=>{
        const set = window.scrollY
        if(set > 40){
          setScrolled(true)
        }else{
          setScrolled(false)
        }
      }
      window.addEventListener("scroll", handleScroll)
     return ()=>{window.removeEventListener("scroll", handleScroll)} 
    }, [])

  return (
    <div className={`flex justify-around items-center fixed w-full py-5 ${scrolled? 'bg-white' : 'bg-transparent'}`}  >
        <section>
            <h1 className=' italic text-4xl max-mobile:text-[16px]'>SpeakTribe</h1>
        </section>
        <section className=' flex gap-4 items-center max-tablet:justify-center'>
            <button className=' text-[16px] font-light p-3 hover:bg-[#388E3C] text-black hover:text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Get Started</button>
            <button className=' text-[17px] font-light p-3  text-black hover:text-white hover:bg-[#388E3C]  hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px] px-4'>Sign in</button>
        </section>
    </div>
  )
}

export default Header