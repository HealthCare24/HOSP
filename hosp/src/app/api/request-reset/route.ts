import jwt from 'jsonwebtoken'
import connectDB from '@/lib/db'

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import User from '@/models/user'



const JWT_SECRET='HOSP$123';
const EMAIL_FROM='hospmailer.com'

export async function POST(req:NextRequest){
  const body=await req.json();
  const {email}=body;

  await connectDB();

  const user=await User.findOne({email});
  const tokenpayload={
    id:user._id,
    email:user.email
  }

  const token=jwt.sign(tokenpayload,JWT_SECRET,{expiresIn:'1h'});

  const resetlink=`http://localhost:3000/reset-pass?token=${token}`

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL_FROM, // Replace with the sender email
      clientId: ,
      clientSecret: ,
      refreshToken: '<YOUR_REFRESH_TOKEN>',
      accessToken: '<YOUR_ACCESS_TOKEN>', // Optional, if you have a valid access token
    },
  });

  await transporter.sendMail({
    from: 'hospmailer.com',
    to: email,
    subject: 'Reset Password',
    html: `
      <h1>Password Reset Request</h1>
      <p>Please click the link below to reset your password:</p>
      <a href="${resetlink}">Reset Password</a>
    `,
  });

  return NextResponse.json({
    message:'Password reset link sent to your email'
  },{status:200});

  



}