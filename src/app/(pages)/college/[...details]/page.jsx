"use client"
// catch all segment : [...details]

function page({params}) {                      //the parameter that will be on the        search-bar will be received on the this params as a props. 
    const details = params.details;           //this details in params will have similar spell to the [...details] folder
    console.log(details)

  return (
    <div>

        <h1>Details</h1>
       {                    //to render all the info.or details on the client page we have to 'map'it.
        details.map((data,i)=>{                
            return(
                <p key={i} className='p-3 border border-gray-200 rounded-xl w-full'>
                   {i} -  {data}
                </p>
            )
        })
       }
    </div>
  )
}

export default page