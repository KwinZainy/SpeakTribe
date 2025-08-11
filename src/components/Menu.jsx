import React, { useState } from 'react'
import { ImCancelCircle } from "react-icons/im";
import { IoPersonCircleSharp } from "react-icons/io5";
const Menu = () => {
    const [drop, setDrop] = useState(false)
  return (
       <div>
           <div onClick={(()=>setDrop(!drop))}>
              {drop? <ImCancelCircle size={35}/>: <IoPersonCircleSharp size={40}/>} 
               </div>
         <div >
         {drop&&(
           <div  className=' bg-white w-full flex flex-col gap-12 items-end  h-dvh py-10 fixed top-0 right-0  z-1000 overflow-y-hidden'> 
               <div className=' flex items-center max-mobile:gap-40  max-tablet:gap-90'>
                  <div onClick={(()=>setDrop(!drop))} className=' '>
              {drop? <ImCancelCircle size={35} className=' left-'/>: <IoPersonCircleSharp size={40} />} 
               </div>
               </div>
               {/* <div className='flex flex-col gap-4 mx-auto  max-tablet:mt-3 max-mobile:gap-2 '>
                <p cl>DashBoard</p> 
                <p>Profile</p> 
                <p>About</p> 
                <p>Log Out</p>
                
             </div> */}
           </div>
           
     )}
           </div>
       </div>
  )
}

export default Menu