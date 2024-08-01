'use client'


 import React from 'react'
 import {useRef,useEffect } from 'react'
 import { FaUser } from "react-icons/fa";
 import { MdEmail } from "react-icons/md";
 import { FaMobileAlt } from "react-icons/fa";
function iconPage() {

    const userRef=useRef();
    const emailRef =useRef();
    const numRef =useRef();

    const handleForm=(event)=>{
        event.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numRef.current .value)
        console.log("form submitted");
    }
    

  return (
    <div className='max-w-xl  mx-auto mt-4 justify-center items-center flex border border-stone-500'>
       

         <form onSubmit={handleForm} className='py-8'>
            <fieldset className='flex flex-row mt-3'>
                <label>User Name:</label>
                <input  type="text" ref={userRef} placeholder='Username' className='outline-none border border-gray-400'  />
                <FaUser size={30} className='border border-gray-400 text-blue-700'/> 
            </fieldset>
            <feildset  className='flex flex-row mt-3'>
              <label> User Email:</label>
              <input type="email" ref={emailRef} placeholder='UserEmail' className='outline-none border border-gray-400'></input>
              <MdEmail size={30} className='border border-gray-400 text-blue-700 '/>
            </feildset>
            <feildset className='flex flex-row mt-3'>
              <label>Mobile No.:</label>
              <input type="number" ref={numRef} placeholder='Usermobileno.' className='outline-none border border-gray-400 '></input>
              <FaMobileAlt size={30} className='border border-gray-400 text-blue-700'/>
            </feildset>
        </form>    

    </div>
  )
}

export default iconPage