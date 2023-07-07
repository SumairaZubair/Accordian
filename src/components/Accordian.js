import React, { useState } from 'react'

function Accordian({Question,Answer}) {
    const[show ,setShow]=useState(false)
  return (
    <div className='main-head'>
        <h3>{Question}</h3><span onClick={()=>setShow(!show)}>{show ? "➖": "➕"} </span>
        
        {show &&  <p>{Answer}</p>}
       
    </div>
  )
  
}

export default Accordian