import React, { useState } from 'react'
import { ImCancelCircle } from "react-icons/im";

const Menu = () => {
    const [drop, setDrop] = useState(false)
  return (
    <div>
        <div onClick={(()=>setOpen(!open))}>
                   {drop? <ImCancelCircle/>: <IoPersonCircleSharp size={40}/>} 
                    </div>
              {drop&&(
                <div>
        <section><ImCancelCircle/></section>
        <section>
            <p>Profile</p>
            <p>Dashboard</p>
            <p>About</p>
            <p>Log Out</p>
        </section>
                </div>
              )}
        
    </div>
  )
}

export default Menu