import Image from 'next/image'
import Link from 'next/link'


function EmployeeHome() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white'>
        <div>
            <ul>
                <li>
                    <Link href="/form">User Form</Link>
                </li>
                <li>
                    <Link href="/students">Student</Link>
                </li>
            </ul>
        </div>
        <Image src="/next.svg" alt="" height={200} width={200}  className='my-5'/>
    </div>
  )
}

export default EmployeeHome