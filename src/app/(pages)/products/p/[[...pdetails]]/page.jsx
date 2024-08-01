"use client"
// Optional catch all segment : [[...pdetails]]
function page({params}) {
    console.log(params.pdetails);
    
  return (
    <div>page
        <p>this page is rendering the page.jsx under the pdetails.
            it will show only one page that is present already in the file and show on the browser.
        </p>

        {
            params.pdetails ?
            params.pdetails.map((item,i)=>{            //i is key . params.details=array    
                return(
                    <p key={i}>{item}</p>
                )
            }):<p>No Items</p>
        }
    </div>
  )
}

export default page