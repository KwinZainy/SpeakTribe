import React from 'react'

const Languages = () => {
  return (
    <div className=' flex justify-center my-20 items-center gap-16 max-w-[1800px] mx-auto max-tablet:flex-col-reverse'>
      
        <section className=' w-[40%] max-tablet:w-[85%] max-tablet:mx-auto'>
            <h1 className=' text-[#263238] text-[40px] font-bold text-center mb-3 max-mobile:text-[30px]'>Languages to Explore....</h1>
            <p className=' text-[18px] font-serif text-[#263238] max-mobile:text-centr max-mobile:text-[16px] '>Speak Tribe currently supports Yoruba, Igbo, and Hausa — three of Nigeria’s most widely spoken languages. Each course is designed to help you speak confidently in real-life situations, from simple greetings to everyday conversations. Whether you're learning for travel, work, or personal growth, you'll pick up useful words, phrases, and cultural tips that make communication easier.</p>
            <ul className=' flex justify-around mt-8 max-mobile:justify-start max-mobile:gap-12'>
              <a href=""><li className=' bg-[#009688] text-[18px] font-light p-2 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Yorùbá</li></a>
              <a href=""><li className='  bg-[#009688] text-[18px] font-light px-4 py-2 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Igbo</li></a>
              <a href=""><li className='  bg-[#009688] text-[18px] font-light p-2 hover:bg-[#388E3C] text-white hover:rounded-[10px] max-mobile:text-[14px] min-desktop:text-[23px]'>Hausa</li></a>
            </ul>
        </section>
         <section>
            <img src="./language.png" alt="" className=' max-mobile:w-[300px]' />
        </section>
       
    </div>
  )
}

export default Languages