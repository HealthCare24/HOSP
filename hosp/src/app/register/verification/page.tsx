'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function VerifyEmailPage() {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Verify Email</CardTitle>
          <CardDescription>Enter the OTP sent to your email</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="otp">OTP</Label>
            <Input id="otp" type="text" placeholder="Enter 6-digit OTP" />
          </div>
          <Button className="w-full">Verify</Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-sm text-center w-full">
            Didn't receive the OTP? <Button variant="link" className="p-0">Resend</Button>
          </p>
          <Button variant="link" asChild>
            <Link href="/register">Back to Register</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

