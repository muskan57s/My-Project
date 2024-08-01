"use client"

import axios from "axios"
import { useState } from "react"
function page() {
    const [username, setUsername] = useState("")     //show initial state
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState(null)
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
       console.log({username,email})
        await axios.get("/api/employee").then(res=>{
           console.log(res.data.message)
            setMessage(res.data.message)
        })
    }

    // const handleSubmit=async(e)=>{
    //     e.preventDefault();
    //     await axios.post("/api/employee",{username,email}).then(res=>{
    //         console.log(res.data)
    //     })
    // }
    return (
    <div className='max-w-sm mx-auto mt-10'>
       
     
        <form onSubmit={handleSubmit}>
            <div className=" py-3 ">
                <label>User Name:</label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Username" className='outline outline-none border border-blue-700 px-4 py-2'/>
            </div>
            <div className=" py-3">
                <label>Email Id:</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="useremail" className='outline outline-none border border-blue-700 px-4 py-2'/>
            </div>

           

            <div className=" py-3 text-center">
                <button className='border border-blue-200 bg-zinc-500 px-10 py-1' type="submit">submit</button>
            </div>
        </form>
        
        <div>
          Response =   {message}
        </div>
        
    </div>
  )
}

export default page