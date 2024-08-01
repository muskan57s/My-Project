
function scool({params}) {
    const info = params.info          //this "info" in params.info will have similar spell to the [...info] folder 
    console.log(info)
  return (
    <div>school info
        {
             info.map((data,i)=>{
                return(
                    <p key ={i} className="border border-green-600 ">
                       {i} - {data}
                    </p>
                )
             })
        }
    </div>
  )
}

export default scool