"use client"
import React from 'react'
import { useEffect,useState } from 'react'
function myPage() {
    const[num,setNum]= useState(0);

    // useEffect(()=>{
    //     console.log("item added to cart")
    // },[num])

    const handleClick=()=>{
         setNum(num+1)
    }
  return (
    <div>
        <p>number is :{num}</p>
        <button onClick={handleClick} className='border border-stone-400 bg-stone-300 font-serif text-blue-500'> Add to cart</button>
    </div>
  )
}

export default myPage