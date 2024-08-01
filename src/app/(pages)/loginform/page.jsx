"use client"

import axios from "axios"
import { useState, useEffect} from "react"
function page() {
    const [username, setUsername] = useState("")     //("")->show initial state
    const [email,setEmail] = useState("")
    const [mobile,setMobile] =useState("")
    const [message,setMessage] = useState(null)
    const [isValidUser, setIsValidUser] = useState(false)
    ;
    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("Form Submit")
        const std = {
            name:username,
            mail:email,
            contact:mobile
        }
        await axios.post("/api/loginform",std).then(res=>{
            console.log("Client Received : ",res.data)
            // setMessage(res.data)
            setIsValidUser(res.data.success)
        })

      
    }
    
    useEffect(()=>{
        const getAllStudents=async()=>{
            await axios.get("/api/loginform").then(res=>{         //res->response
                console.log(res.data)
            })
        }
        getAllStudents();
    },[])
    return (
    <div className='max-w-sm mx-auto mt-10'>
        <p className="mx-20 text-xl font-mono border border-black-400 bg-stone-300 text-center">API FORM</p>
    <div className="py-4 border mt-10 border-blue-300 bg-slate-400 text-center ">  
        <form onSubmit={handleSubmit}>
            <div className=" py-3 ">
                <label>User Name:</label>
                { <input type="text" /*{...register=(username,{reuired:true})}*/onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="Username" className='outline outline-none border border-blue-700 px-4 py-2'/> }
                
            </div>
            <div className=" py-3">
                <label>Email Id:</label>
                <input type="text"/* {...register=(email,{reuired:true})} */onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="useremail" className='outline outline-none border border-blue-700 px-4 py-2'/>
                
            </div>

            <div className=" py-3">
                <label>Mobile no:</label>
                <input type="text"/* {...register=(mobile,{required:true,length:10})}*/ onChange={(e)=>setMobile(e.target.value)} name="mobile" placeholder="mobileno." className='outline outline-none border border-blue-700 px-4 py-2'/>
               {/* {
                errors.mobile?.type=="required"&&<p className="text-red-600">Mobile no must be required</p>
               }
               {
                 errors.mobile?.type=="length"&&<p className="text-red-600">must be of 10-digits</p>
               } */}
            </div>

            <div className=" py-3 text-center">
                <button className='border border-blue-200 bg-zinc-500 px-10 py-1' type="submit">Login</button>
            </div>
        </form>
        </div>
        <div>
          {
            isValidUser?(<p>You are a valid User</p>):(<p className="text-red-500">Please enter valid user credentials</p>)
          }
        </div>
    </div>
  )
}

export default page