'use client'

import React from 'react'
import {useRef} from 'react'
function Company() {

    const nameRef=useRef();
    const lstRef= useRef();
    const addRef=useRef();
    const mobRef=useRef();
    const mailRef=useRef();
  
    const radRef = useRef();
    const upRef =useRef();
    const odRef =useRef()
    const jkRef=useRef();
    const mpRef=useRef();
    const apRef=useRef();
    // const selRef=useRef();
    const bhRef=useRef();

    const changeForm=(event)=>{
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(lstRef.current.value);
        console.log(addRef.current.value);
        console.log(mobRef.current.value);
        console.log(mailRef.current.value);
        console.log(bhRef.current.value);
  
        console.log(radRef.current.value);
        
        console.log("form submited")
    }
  return (
    <div className='bg-blue-800 max-h-screen'>
      
      <p className=' bg-green-600  font-bold max-w-screen h-16 mx-auto  justify-center text-slate-100 items-center flex'> Form Using React Hook</p>
        <div className='max-w-xl  mx-auto mt-3 px-1 rounded-sm text-white font-extralight'>
        
        <form onSubmit={changeForm}  >
            <fieldset className='flex flex-col w-full  mx-3  '>
                <label >Enter name:</label>
                <input type='text' ref={nameRef} className='outline-none  border border-gray-800 rounded-lg my-3 px-3 py-1 text-black'/>
              
            </fieldset>
            <fieldset className='flex flex-col w-full mx-3 '>
                <label >Enter Last name:</label>
                <input type='text' ref={lstRef} className='outline-none  border border-gray-800 rounded-lg my-3 px-3 py-1 text-black'/>
              
            </fieldset>
            <fieldset className='flex flex-col w-full  mx-3 '>
                <label>Enter Address:</label>
                <input type='text' ref={addRef} className='outline-none rounded-lg  border border-gray-800 my-3 px-3 py-1 text-black'/>
            </fieldset>
            <fieldset  className='flex flex-col w-full  mx-5 '>
                <label>Enter Mobile no:</label>
                <input type='text' ref={mobRef} className='outline-none rounded-lg  border border-gray-800 px-3 py-1 my-3 text-black'/>
            </fieldset>
            <fieldset  className='flex flex-col w-full gap-1 mx-5 '>
                <label>Enter Email Id:</label>
                <input type='text' ref={mailRef} className='outline-none rounded-lg  border border-gray-800 px-3 py-1 my-3 text-black'/>
            </fieldset>
            <fieldset  className='flex flex-col w-full gap-1 mx-5 '>
                <label >select state:</label>
              <select name='stateName' className='my-3 outline-none rounded-lg  border border-gray-800 font-mono text-pink-950 px-3 py-1'>
               <option>select</option>
                <option value="Bihar" ref={bhRef}>Bihar</option>
        
                <option value="" ref={upRef}>UP</option>
                <option value="" ref={mpRef}>MP</option>
                <option value="" ref={jkRef}>Jharkhand</option>
                <option value="" ref={odRef}>Odisha</option>
                <option ref={apRef}>AP</option>
              </select>
            </fieldset>
            <fieldset  className='flex gap-5 mx-5'>
                <label> Select Gender:</label>
                <input type='radio' value='Male' ref={radRef}/>Male
                <input type='radio' value='Female'ref={radRef} /> Female
            </fieldset>

            <button type='submit' className='  text-white bg-blue-900 py-1 px-3 rounded-md mt-3'>submit</button>
        </form>
    </div>
    </div>
  
  )
}

export default Company