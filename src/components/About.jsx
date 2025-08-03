import React from 'react'
import { motion } from 'framer-motion';
import { h1 } from 'framer-motion/client';
const About = () => {
    const aboutUs =[
        {
        h1:'Our Mission',
        p:'“We’re building more than a language app — we’re building bridges to culture, identity, and pride.SpeakTribe exists to help Nigerians and Africans at large learn their native languages — not just to speak, but to belong, understand, and preserve what matters most: our roots.”'
    },
        {
        h1:'Why we exist',
        p:"Many Nigerians struggle to speak their native language confidently — especially the younger generation.SpeakTribe bridges that gap with interactive tools that teach you how to speak, understand, and connect."
    },
         {
        h1:'Our Audience',
        p:"Whether you’re a student, a traveler, or just someone reconnecting with your roots — SpeakTribe is for you."
    },
         {
        h1:'Our Story',
        p:"SpeakTribe was born from a simple truth — our languages are fading, and we need to act now.As passionate Nigerians, we asked:“What if learning Yoruba, Igbo, or Hausa was as easy as chatting with a friend?”That’s how SpeakTribe began — a platform built with culture in mind and technology as the tool."
    },
         {
        h1:'Our Vision',
        p:"We dream of an Africa where every child grows up fluent in their mother tongue.Where people speak with pride, preserve culture, and pass it on — confidently.With SpeakTribe, we’re starting with Yoruba, Igbo, and Hausa. But we won’t stop there."
    },
]

  return (
    <div className=' mx-auto max-w-[1800px]'>
        <section>
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
             className="text-4xl font-bold text-center 
               bg-gradient-to-r from-[#C0CA33] via-[#009688] to-[#1B5E20]  
               bg-clip-text text-transparent max-tablet:text-[30px] max-mobile:text-[14px]"
               >
             Speak Proud. Speak Native. <span className=' italic text-5xl max-mobile:text-2xl'>SpeakTribe.</span>
               </motion.h1>

             <p className=' text-center w-[62%] font-medium mx-auto my-5 text-[20px] text-[#263238] max-tablet:w-[90%] max-mobile:text-[14px]'>Learn your language, live your culture. SpeakTribe helps you connect to your heritage in a bold, modern way — through fun lessons, quizzes, and real conversations in Yoruba, Igbo, and Hausa.</p>
        </section>
        <section className=' flex flex-wrap gap-9 items-center text-center justify-center my-10 max-tablet:flex-col'>
            {aboutUs.map((element,index)=>(
                <div key={index} className='bg-[#118478] w-[25%] h-[300px] max-tablet:rounded-bl-[40px] max-tablet:rounded-tr-[40px]  rounded-bl-[30px] rounded-tr-[30px] px-3 py-4 hover:scale-105 shadow-2xl duration-500 ease-in-out transition-all mb-4 max-tablet:w-[60%] max-mobile:w-[84%]'>
                 <h1 className='  text-[30px] font-bold bg-white text-[#009688] flex items-center justify-center h-[30%] max-mobile:text-[20px]'>{element.h1}</h1>
                 <p className=' text-white text-[15px] font-medium py-3 max-mobile:text-[13px]'>{element.p}</p>
                </div>
            ))}

        </section>

    </div>
  )
}

export default About