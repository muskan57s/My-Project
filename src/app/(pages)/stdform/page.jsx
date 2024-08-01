"use client"
import {useForm} from 'react-hook-form'

function stdform() {

    const {register,handleSubmit,formState:{errors},reset}=useForm()

    const onSubmit=(formdetails)=>{
        console.log(formdetails)
        reset();
    } 
  return (
    <div>
        <div className="max-w-sm mx-auto h-screen">
        <p className='justify-center items-center text-2xl'>Student Form</p>    
            <div className='h-[450px] w-full px-5  border border-orange-900 rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <feildset className='flex w-full flex-col my-2'>
                        <label>Enter Name:</label>
                        <input type="text" {...register("username",{required:true,minLength:3})} className='outline-border-none border border-orange-600 px-3 py-2'/>

                        {
                            errors.username?.type=="required"&&<p className='text-red-600'>Username is required.</p>
                        }

                        {
                            errors.username?.type=="minLength"&&<p  className='text-red-600'>Username must be more than 3 characters.</p>
                        }
                    </feildset>
                    <feildset className='flex w-full flex-col my-4'>
                        <label>Enter Email:</label>
                        <input type="text" {...register("email",{required:true})}className='outline-border-none border border-orange-600 px-3 py-2'/>
                        {
                            errors.email?.type=="required"&&<p className='text-red-600'>Email is required.</p>
                        }

                    </feildset>
                    <feildset className='flex flex-col my-4'>
                        <label>Roll number:</label>
                        <input type="number" {...register("num",{required:true})}className='outline-border-none border border-orange-600 px-3 py-2'/>

                        {
                            errors.num?.type=="required"&&<p className='text-red-600'>Roll number is required.</p>
                        }
                    </feildset>
                    <fieldset className='flex flex-col my-4'>
                        <button type="submit" className='border border-gray-200 bg-orange-900 text-white'>save</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default stdform


