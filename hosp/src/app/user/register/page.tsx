'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { useState, FormEvent } from 'react';
import axios from 'axios'

export default function SignupPage() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target; 
        setUser(prev => ({ ...prev, [id]: value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(user); 
        if(user.password!==user.confirmPassword){
            alert("Passwords do not match");
        }
        const request = await axios.post('/api/register',{
            name:user.name,
            email:user.email,
            password:user.password
        });

        if(request.status===201){
            alert('user registered')  ;      
        }
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <form onSubmit={handleSubmit}>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>Create a new account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" value={user.name} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" value={user.email} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" value={user.password} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" value={user.confirmPassword} onChange={handleChange} />
                        </div>
                        <Button type="submit" className="w-full">Sign Up</Button>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>
                        <Button type="button" variant="outline" className="w-full">
                            <FaGoogle className="mr-2 h-4 w-4" /> Sign up with Google
                        </Button>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <p className="text-sm text-center w-full">
                            Already have an account? <Link href="/signin" className="underline">Login</Link>
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
