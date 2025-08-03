import React, { useEffect, useState } from 'react'
import ProfileMenu from '../components/ProfileMenu'


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
    <div className={`flex justify-around items-center fixed w-full z-50 py-5 shadow-md ${scrolled? 'bg-white' : 'bg-transparent'} `}  >
        <section>
            <h1 className=' italic text-4xl max-mobile:text-[26px] max-tablet:text-center'>SpeakTribe</h1>
        </section>
        <section className=' flex gap-4 items-center max-tablet:justify-center'>
            <button className=' text-[16px] font-light p-3 hover:bg-[#388E3C] text-black hover:text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px] max-tablet:hidden'>Get Started</button>
            <button className=' text-[17px] font-light p-3  text-black hover:text-white hover:bg-[#388E3C]  hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px] px-4 max-tablet:hidden'>Sign in</button>
        </section>
        <div className=' hidden max-tablet:block'>
        <ProfileMenu />
        </div>
    </div>
  )
}

export default Header