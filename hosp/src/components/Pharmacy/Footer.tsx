import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">PharmaCare is your trusted online pharmacy, providing quality healthcare products and services.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/pharmacy" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link href="/pharmacy/products" className="text-sm hover:text-primary">Products</Link></li>
              <li><Link href="/pharmacy/services" className="text-sm hover:text-primary">Services</Link></li>
              <li><Link href="/pharmacy/contact" className="text-sm hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/pharmacy/faq" className="text-sm hover:text-primary">FAQ</Link></li>
              <li><Link href="/pharmacy/shipping" className="text-sm hover:text-primary">Shipping Information</Link></li>
              <li><Link href="/pharmacy/returns" className="text-sm hover:text-primary">Returns & Exchanges</Link></li>
              <li><Link href="/pharmacy/privacy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter for updates and special offers.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-gray-700 text-white" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} PharmaCare. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

