/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGoogle, FaApple } from 'react-icons/fa';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = typeof window !== 'undefined' ? useRouter() : null;

  if (!router) {
    return null; // Or a fallback UI
  }

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setUser(prev => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const request = await axios.post('/api/login', {
        email: user.email,
        password: user.password,
      });

      if (request.status === 200) {
        alert('Logged in');
        router.push('/pharmacy'); // Redirect to /pharmacy
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please check your credentials.');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <form onSubmit={handleSubmit}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Choose your preferred login method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" value={user.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={user.password} onChange={handleChange} />
            </div>
            <Button className="w-full" type="submit">Login</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                <FaGoogle className="mr-2 h-4 w-4" /> Google
              </Button>
              <Button variant="outline">
                <FaApple className="mr-2 h-4 w-4" /> Apple
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <p className="text-sm text-center w-full">
              Don’t have an account? <Link href="/register" className="underline">Sign up</Link>
            </p>
            <Button variant="link" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
