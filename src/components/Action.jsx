import React from 'react'
import { motion } from 'framer-motion';
const Action = () => {
  return (
    <div className=' flex max-w-[1800px] mx-auto justify-center items-center gap-14 my-24 max-tablet:flex-col-reverse'>
        <section>
            <img src="./last.jpg" alt="" className=' w-[400px] max-tablet:w-[700px] max-mobile:w-[360px] rounded-[40px]' />
        </section>
        <section className='max-w-[600px]'>
            <div>
                <h1 className=' text-center text-6xl font-bold italic mb-4 text-[#009688] max-mobile:text-4xl'>SpeakTribe</h1>
             <motion.h1
             animate={{
               opacity: [0, 1, 1, 0],
               y: [20, 0, 0, 10],
             }}
             transition={{
               duration: 12, 
               times: [0, 0.1, 0.9, 1], 
               repeat: Infinity,
               ease: "easeInOut",
             }}
             className="text-[20px] font-bold
               bg-gradient-to-r from-[#C0CA33] via-[#009688] to-[#1B5E20]  
               bg-clip-text text-transparent max-tablet:text-[30px] max-mobile:text-[14px] mb-3 text-center max-mobile:text"
               >
             Speak Proud. Speak Native. <span className=' italic text-4xl max-mobile:text-[16px]'>SpeakTribe.</span>
               </motion.h1>
               <p className=' text-center max-mobile:text-[15px]'>"At the heart of it all, what matters most is that we stay connected, united, and proud of our shared roots — and through language,<span className=' text-[#1B5E20] font-medium italic text-[20px]'>SpeakTribe</span> makes that possible."</p>
               </div>
                <div className=' flex gap-4 mt-4 items-center max-tablet:justify-center'>
                    <button className='   bg-[#009688] text-[16px] font-light p-3 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]' >Get Started</button>
                    <button className=' bg-[#009688] text-[17px] font-light p-3 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px] px-4' >Sign Up</button>
                </div>
        </section>
    </div>
  )
}

export default Action