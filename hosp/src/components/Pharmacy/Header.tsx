'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, User, Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import LandingPage from '../LandingPage/LandingPage'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            HOSP
          </Link>
          <div className="flex items-center space-x-4">
            <Phone className="text-gray-600" />
            <span className="text-sm">1-800-PHARMA</span>
            <Button variant="outline">Live Chat</Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex space-x-4">
            <Link href="/pharmacy" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/pharmacy/products" className="text-sm font-medium hover:text-primary">Products</Link>
            <Link href="/pharmacy/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
            
          </nav>
          <div className="flex-1 mx-4">
            <form onSubmit={(e) => { e.preventDefault(); console.log('Search:', searchQuery) }}>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/pharmacy/account">
              <User className="text-gray-600 hover:text-primary" />
            </Link>
            <Link href="/pharmacy/cart" className="relative">
              <ShoppingCart className="text-gray-600 hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

