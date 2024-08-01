// List Rendering

function studentPage() {
const studentList = [
    {
        name:'Rakesh',
        reg:90
    },
    {
        name:'Manish',
        reg:23
    },
    {
        name:'Suresh',
        reg:56
    },
    {
        name:'Harish Kumar',
        reg:190
    },
    {
        name:'Mr.T.k.Sena',
        reg:89
    }

]
    return (
    <div className='max-w-xl mx-auto mt-20'>
        
        {
            studentList.map((std,x)=>{
                return(
                    <div key={x}  className='grid grid-cols-2 gap-5 p-10 border border-gray-400 rounded-xl my-2'>
                        <div>{std.name}</div>
                        <div>{std.reg}</div>
                       
                    </div>
                )
            })
            // <div  className='grid grid-cols-2 gap-5 p-10 border border-gray-400 rounded-xl my-2'>{studentList.name}</div>
        }
        
        
        </div>
  )
}

export default studentPage