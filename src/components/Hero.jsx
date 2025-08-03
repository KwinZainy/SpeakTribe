import React from 'react'
import { FaHeadSideCough } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className=' flex justify-center py-50 max-tablet:py-30 max-tablet:flex-col-reverse max-mobile:py-25 max-desktop:py-60 max-w-[1800px] m-auto min-desktop:justify-center  '>
        <section className=' w-[50%] flex flex-col gap-2 justify-center
         max-tablet:items-center max-tablet:w-full max-tablet:mt-6 '> 
          <h1 className=' text-[#263238] text-[40px] font-bold max-mobile:text-[23px] mx-auto min-desktop:text-[55px] min-desktop:text-center'> “Your Language. Your Power. <span className=' items-baseline inline-block text-[#009688]'><FaHeadSideCough/></span>”</h1>
          <p className=' w-[72%] pl-5 items-center p-3 text-[20px] text-[#263238] text-center font-medium max-tablet:pl-2 max-mobile:w-[88%] max-mobile:text-[16px] mx-auto min-desktop:text-[28px] min-desktop:w-[90%]'>Yoruba, Igbo, Hausa — SpeakTribe brings your heritage to life with audio learning, cultural phrases, and real conversations.</p>
          <div className=' flex gap-4 mx-auto max-tablet:pl-4 max-tablet:mt-3 max-mobile:gap-2 '>
            <button className=' bg-[#009688] text-[18px] font-light p-3 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'> Begin Your Journey!</button>
            <button className=' bg-[#009688] text-[18px] font-light p-3 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'> Already have an account?</button>
          </div>
        </section>
        <section >
          <img src="./tribe.jpg" alt=""  className='w-[500px] max-tablet:w-full p-5 rounded-[40px]' />
          
        </section>
    </div>
  )
}

export default Hero