"use client"

import { useEffect , useState} from "react"
import { CiPaperplane } from "react-icons/ci";
function EffectPage() {
    const [num, SetNum] = useState(0); 
    const [data, setData] = useState(100);
    // it(useEffect) is automatically called after page render
    // it is called only once (when we pass any dependency/data in the useffect array then the action performed on that array will only show the effect on console).
    // dependency array is used to call the function based on the given variable 
    useEffect(()=>{
        console.log("UseEffect called")
    },[num,data])    

    //console.log("Render page")
    const handleNumber=()=>{
        SetNum(num+1);

    }
    return (
    <div>EffectPage : {num}              
    <p>Data is {data}</p>
    <p> 
        <button onClick={handleNumber}>Change Number</button>            
    </p>
    <div>
        <button onClick={()=>setData(data+10)} className=' justify-center items-center flex flex-row gap-5 border border-gray-500 px-10 py-2'>
            <span>Change Data</span> 
        <CiPaperplane size={20} className='text-blue-600 font-semibold' />
        </button>
    </div>
    
    </div>
  )
}

export default EffectPage



// React hook form