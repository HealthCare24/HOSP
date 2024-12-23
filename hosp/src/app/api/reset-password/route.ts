import dbConnect from '@/lib/db';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {NextResponse,NextRequest} from 'next/server'

const JWT_SECRET='HOSP$123'

export async function POST(req:NextRequest) {
  const { token, newPassword } = await req.json();

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    await dbConnect();

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.findByIdAndUpdate(decoded.userId, {
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({ message: 'Password has been reset successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Invalid or expired token', error: error.message }),
      { status: 500 }
    );
  }
}
