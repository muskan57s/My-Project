"use client"

// useRef is react hook to created the reference of any element
// or to set the value of a variable

// it is an example of uncontrolled form
import {useRef,useState} from 'react'

function EmployeeForm() {

    const userRef = useRef();  //to make username reference.
    // const mobileRef = useRef()
    // const addRef = useRef()
    const addRef = useRef();

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("")

    
    const handleForm=(event)=>{      //write this in both ref.and usestate.
        event.preventDefault();    
        console.log(userRef.current.value)
        console.log(addRef.current.value)
        console.log("Form Submitted")
    }

    const changeNumber=()=>{
        // setNumber(number+1)

        setNumber((prevNum)=>{
            return prevNum+1;
        })
    }

    const setNewName=()=>{
        
        setName("Manish Raj")
    }
  return (
    <div className='max-w-xl mx-auto mt-20'>
        <div>
            User Name = {name}<br/>

            <button onClick={setNewName} className='px-5 py-1 border border-gray-300 my-5'>Set New Name</button>
        </div>
        <div className='my-5 border border-orange-600 p-5'>
            <p>
                Number is {number}
            </p>
            <p>
                <button className='my-3 border border-green-400 px-5 py-1' 
                onClick={changeNumber}>Change Number</button>
            </p>

            <p>
                <button className='my-3 border border-green-400 px-5 py-1' 
                onClick={()=>setNumber(number +1)}>New Change</button>
            </p>
        </div>

        <form onSubmit={handleForm}>
            <fieldset>
                <label>UserName:</label>
                <input  type="text" ref={userRef}  className='outline-none border border-gray-400 p-1' />
            </fieldset>
            <fieldset>
                <label>Address:</label>
                <input type="text" ref={addRef} className='outline-none border border-gray-400 p-1 my-2'/>
            </fieldset>
            <fieldset>
                <button type="submit" className='px-5 py-1 border border-green-500 mt-5'>Click Here</button>
            </fieldset>
        </form>


        </div>
  )
}

export default EmployeeForm