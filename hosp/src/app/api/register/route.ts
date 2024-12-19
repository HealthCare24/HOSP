// src/app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET='HOSP$123'

export async function POST(req: NextRequest) {
  try {
    
    await connectDB();    
    const body = await req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    const hashedpassword= await bcrypt.hash(password,10)
    const newUser = await User.create({ 
      name, 
      email, 
      password:hashedpassword 
    });

    const tokenpayload={
      id:newUser._id,
      name:newUser.name,
      email:newUser.email
    }

    const token=jwt.sign(tokenpayload,JWT_SECRET,{expiresIn:'30d'});




    return NextResponse.json(
      {
        message: "User registered successfully",
        token,        
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Registration failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}