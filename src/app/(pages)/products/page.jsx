"use client"
import Link from 'next/link'
import { useState } from 'react'

function ProductHomePage() {
    const [itemName,setItemName] = useState("")

    const handleItem=(e)=>{
        setItemName(e.target.value);
    }
  return (
    <div>Product HomePagepage
        <div>
            <form>
                <label>Item Name</label>
                <input className='outline-none border border-gray-300 mx-4 p-1' type="text" onChange={handleItem} />
            </form>
            
        </div>
        <div className='my-5'>

        <Link className='px-5 py-1 border border-green-400' href={`/products/${itemName}`}>Show Details</Link>
        </div>
    </div>
  )
}

export default ProductHomePage