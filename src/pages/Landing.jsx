import React from 'react'
import Nav from '../static/Nav'
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className=' pb-10'>
      <Nav/>
      <section className=' mt-10 relative '>
        <div className=' w-full  overflow-hidden'>
        <video src="/united_nation.mp4" 
        autoPlay
        loop
        muted
        playsInline
        className=' w-full mx-auto h-full object-cover rounded-lg'
        />
        </div>
        <div className=' absolute bg-black/50 inset-0 z-10'></div>
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
             className="text-[70px] font-bold text-white
               bg-clip-text  max-tablet:text-[30px] max-mobile:text-[14px] mb-3 text-center absolute inset-0 z-20 flex max-tablet:pt-60 max-mobile:pt-30 max-mobile:h-dvh pt-90 justify-center italic"
               >
             Welcome To SpeakTribe
               </motion.h1>
        </section> 
        <p className=' bg-[#009688] py-10 text-center text-4xl my-7 text-white font-bold max-tablet:py-5 max-tablet:text-3xl max-mobile:text-2xl'>Available Languages</p> 
        <section className=' flex justify-around w-full max-tablet:flex-col'>
          <div className=' w-[30%] max-tablet:w-[90%] mx-auto'>
            <img src="./yorubaMan.png" alt="" className=' w-[400px] mb-3 max-tablet:w-full max-tablet:mx-auto'/>
            <p className=' text-2xl font-bold italic'>Yoruba </p>
            <p className=' text-[18px] font-medium'>Fun Facts</p>
            <p>- Yoruba is a tonal language with 3 tones: high, mid, and low.</p>
            <p>- That means the same spelling can have different meanings depending on how it's said!</p>
            <ul className=' list-disc pl-7'>
              <li className=' font-medium'>“Òwò” = broom</li>
              <li className=' font-medium'>“Ówó” = money</li>
              <li className=' font-medium'>“Ọwọ́” = hand</li>
            </ul>
            <p>- So you're not just learning words — you're learning how to sing the language!</p>
            <button className=' mt-3 bg-[#009688] text-[16px] mb-5 font-light p-2 hover:bg-[#388E3C] text-white rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Start Now</button>
          </div>
          <div className=' w-[30%] max-tablet:w-[90%] mx-auto'>
            <img src="./igboWoman.png" alt="" className=' w-[400px] mb-3 max-tablet:w-full max-tablet:mx-auto' />
            <p className=' text-2xl font-bold italic'>Igbo</p>
            <p className=' text-[18px] font-medium'> Fun Facts</p>
            <p>- Igbo is also a tonal language like Yoruba, but with two main tones (high and low).</p>
            <p>- The meaning of a word totally changes depending on the tone!</p>
            <ul className=' list-disc pl-7'>
              <li className=' font-medium'>“Akwụkwọ” = book</li>
              <li className=' font-medium'>“Àkụ́kwọ́” = leaf</li>
              <li className=' font-medium'>“Àkụ̀” = wealth</li>
            </ul>
            <p>- So mastering tone = mastering meaning.</p>
            <button className=' mt-3 bg-[#009688] text-[16px] mb-5 font-light p-2 hover:bg-[#388E3C] text-white rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Start Now</button>
          </div>
          <div className=' w-[30%] max-tablet:w-[90%] mx-auto'>
            <img src="./hausa.jpg" alt="" className=' w-[400px] mb-3 max-tablet:w-full max-tablet:mx-auto' />
            <p className=' text-2xl font-bold italic'>Hausa</p>
            <p className=' text-[18px] font-medium'> Fun Facts</p>
            <p>- You Can Learn It With the Alphabet You Already Know</p>
            <p>- Hausa is written in Latin script (just like English), called <span className=' italic font-medium'>Boko</span> easy for beginners!</p>
            <ul className=' list-disc pl-7'>
              <li className=' font-medium'> Ina kwana = Good morning</li>
              <li className=' font-medium'>Sannu = Hello</li>
            </ul>
            <p>- No new script to learn (unless you want to explore the Ajami Arabic script too!).</p>
            <button className=' mt-3 bg-[#009688] text-[16px] font-light p-2 hover:bg-[#388E3C] text-white rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Start Now</button>
          </div>
        </section>
      
    </div>
  )
}

export default Landing