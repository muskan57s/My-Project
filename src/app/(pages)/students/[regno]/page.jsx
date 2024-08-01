'use client'

// Example of dynamic route

function page({params}) {
    console.log(params.regno)

   
  return (
    <div>this is registration number : {params.regno}</div>
  )
}

export default page

