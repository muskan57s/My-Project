'use client'

import React from 'react'

import {useRef,useState } from 'react';

function Student() {
    
    const[x,setX] = useState(0);  
    const[y,setY] =useState(100);

  const changeX=()=>{
    setX(x+1);
    console.log("on clicked",x);
  }

  const changeY=()=>{
    setY(y-1);
    console.log("on click =",y);
  }
    

    const stdRef = useRef();
    const addRef = useRef();
    const mailRef = useRef();
    

    const handleStudent=(event)=>{
        event.preventDefault();
        console.log(stdRef.current.value);
        console.log(addRef.current.value);
        console.log(mailRef.current.value);
        console.log("form submitted")
       }  
  return (

    <div className='max-w-xl mx-auto mt-40   border-gray-800 border-2 p-3 '>
           <div>
          x={x};<br/>
                      <button onClick={changeX} className='border border-blue-700 bg-slate-700 text-teal-50 py-1 px-2'>click</button>
                     
           </div>
           <p>
           y={y};<br/>
                      <button onClick={changeY}  className='border border-blue-700 bg-black text-teal-50 py-1 px-2'>decrease</button>
           </p>
       
        <form onSubmit={handleStudent} >

            <fieldset >
            <label>Enter your name:</label>
            <input className='outline-none border border-blue-900 my-3 '   type='text'placeholder='name' ref={stdRef } />
            </fieldset>
            <fieldset>
                <label>Enter Address:</label>
                <input type='text' ref={addRef} className='outline-none border border-blue-900' placeholder='address'/>
            </fieldset>
            <fieldset>
                <label>Enter Email</label>
                <input type='email' ref={mailRef} className='outline-none border border-blue-900 my-3 '/>
            </fieldset>
            <fieldset>
              <label>Enter Mobile no:</label>
              <input type='number'/>
            </fieldset>

            <button className='border border-black bg-slate-800 text-white p-1'  type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Student