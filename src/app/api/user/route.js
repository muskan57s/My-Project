// HTTP Method :
// GET,
// POST,
// PUT,
// PATCH,
// DELETE 

import { NextResponse } from "next/server";



// Route : /api/user
// Server will respond
export async function GET()
{
    let userdata = {
        name:"Amit",
        roll:300
    }
    return NextResponse.json(userdata)

}