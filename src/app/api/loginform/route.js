import { NextResponse } from "next/server";
import students from "@/app/mydb/studentdb";

export async function POST(req)
{
//     let userinfo = await req.json()
//     console.log(" userdata is",userinfo)
//     if(userinfo.name=='admin' && userinfo.mail=='admin@gmail.com')
//    return NextResponse.json({message:"you are a valid user"})
// else
//     return NextResponse.json({message:"Invalid user"})

let userdata = await req.json()
// console.log("userinfo is:",userdata)

let myinfo  = students.filter((items)=> items.name == userdata.name && items.email == userdata.mail && items.mobile == userdata.contact)  //items.email/mobile= db content and userdata.contact=page.jsx content

console.log("the infomation",myinfo)
if(myinfo.length>0)
return NextResponse.json({success:true})
else
{
  // students.push(userdata)
  return NextResponse.json({success:false})
} 
}

export async function GET()
{
    console.log("Get Request")

    return NextResponse.json(students)
}

