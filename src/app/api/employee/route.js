// REST(Representational State Transition) API Testing

//server

import { NextResponse } from "next/server";

export async function GET()        //to get requested link/page from the server.
{
    return NextResponse.json({message:"This is GET Request"})
}

//to give something to server through http. 
export async function POST(req)
{
    let userdata = await req.json();
    console.log("Saving user is ",userdata)
    return NextResponse.json({message:userdata})
}

// to update the record
export async function PUT(req)
{
    return NextResponse.json({mssage:"It is PUT Request"})
}


export async function DELETE(req)
{
    let data =await req.json();
    console.log(data)
    return NextResponse.json({message:data})
}