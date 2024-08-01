"use client"

import {useForm} from 'react-hook-form'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
function CustomFormPage() {

    const {register,handleSubmit,formState:{errors},reset} = useForm()

    const onSubmit=(formData)=>{
        console.log(formData)
        reset();
    }
  return (
    <div>
      <div  className='max-w-sm mx-auto h-screen '>
        <h1>User Form</h1>
            <div className='w-full h-[350px] p-20 border border-gray-500 rounded-lg'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='flex w-full flex-col my-4'>
                    <label>User Name</label><FaUser size={30} className='text-blue-600 flex flex-col'/>
                    <input type="text" {...register("username",{required:true, minLength:3})} className='outline-none border border-blue-300 px-3 py-1 rounded-lg'/>
                    

                    {
                        errors.username?.type=="required" && <p className='text-red-600'>Username is required.</p>
                    }
                    {
                        errors.username?.type=="minLength" && <p className='text-red-600'>Username must be at least 3 character</p>
                    }
                </fieldset>
                <fieldset className='flex w-full flex-col my-4'>
                    <label>Email</label>
                    <input type="text" {...register("email",{required:true})} className='outline-none border border-blue-300 px-3 py-1 rounded-lg'/>
                    {
                        errors.email?.type=="required" && <p className='text-red-600'>Email is required.</p>
                    }
                </fieldset>
                <fieldset className='flex w-full flex-col my-4'>
                   <button type="submit" className='bg-green-800 py-1 rounded-lg text-white font-semibold'>Save Data</button>
                </fieldset>
            </form>
            </div>
        </div>
    </div>
  )
}

export default CustomFormPage