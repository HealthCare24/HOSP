import connectDB from "@/lib/db";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { NextRequest,NextResponse } from "next/server";
import User from '@/models/user';


const JWT_SECRET=process.env.secret || 'HOSP$123';

export async function POST(req:NextRequest){
    await connectDB();
    const body= await req.json();
    const {email,password}=body;
    if(!email || !password){
        return NextResponse.json({
            error:"All fields required"
        },{status:400}
    )
    }

    

    const user=await User.findOne({email});
    if(!user){
        return NextResponse.json({error:"Email not registered"},{status:404})
    }

    const passwordvalidation=bcrypt.compare(password,user.password)
    if(!passwordvalidation){
        return NextResponse.json({error:"Invalid password"},{status:401});
    }

    const tokenpayload={
        id:user._id,
        name:user.name,
        email:user.email
    }

    const token=jwt.sign(tokenpayload,JWT_SECRET,{expiresIn:'30d'});

    return NextResponse.json({
        token,
        message:'logged in '
    },{status:200});



}

