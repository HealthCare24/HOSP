'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EmailVerification() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleVerify = async () => {
    const res = await fetch('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (res.ok) {
      router.push(data.redirect);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-[350px] space-y-4">
        <h1 className="text-xl font-bold">Email Verification</h1>
        <p className="text-gray-600">Please enter the OTP sent to your email.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2"
        />
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border p-2"
        />
        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Verify
        </button>
        {message && <p className="text-red-500">{message}</p>}
      </div>
    </div>
  );
}
