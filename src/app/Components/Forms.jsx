"use client"

import { useState } from "react";

function Forms() {

  // function component is stateless(it does not hold the state value) component
  // state (current details) management
  // function component used - useState hook to manage the state.

  const [x,changeNumber] = useState(30) // x=0(start)
  const [userName,setUserName] = useState("");  //("")=this defines the intitial stage .
  const [address,setAddress] =useState("");
  const [mobile,setMobile] =useState("");

  const handleForm=(e)=>{
    // e.preventDefault();  //it will hold the details or info.on the console.
    console.log("Form submit")
  }

  const increaseX=()=>{
    changeNumber(x+1)
    console.log("Clicked on ",x)
  }

  const handleUserName=(e)=>{      //e is the object passing the even name is haldleUser
    //console.log(e.target.value)
    setUserName(e.target.value)  
  }
  const handleAddress=(event)=>{
    //console.log(event.target.value)
   setAddress(event.target.value)

  }
  const handleMobile=(event)=>{
    //console.log(event.target.value)
    setMobile(event.target.value)
  }
  return (
    <div className='max-w-xl mx-auto'>
        <div className='flex flex-col gap-3 justify-center items-center border p-10 boder-500 h-screen'>
         <p>
          x = {x}<br/>
          <button onClick={increaseX}>Increase the value of x</button>
         </p>
         
          <form onSubmit={handleForm}>

          <div className='flex flex-col w-full gap-1 mx-5'> 
            <label>Enter name:</label>
            <input type='text' onChange={handleUserName} className='border border-blue-400 p-1 outline-none'/>

            <p>
              {userName}
            </p>
            </div>
          <div className='flex flex-col w-full gap-1 mx-5'>

            <label>Enter address:</label>
            <input type='text' onChange={handleAddress} className='border border-blue-400 p-1 outline-none'/>
            <p>{address}</p>
            
          </div>
          <div className='flex flex-col w-full gap-1 mx-5'>
            <label>Enter Mobile number:</label>
            <input type="number" onChange={handleMobile} className='border border-blue-400 p-1 outline-none'/>
            <p>{mobile}</p>
          </div>
          <div>
            <button type="submit">Save Data</button>
          </div>
          </form>
          
          
        </div>

    </div>
  )
}

export default Forms
