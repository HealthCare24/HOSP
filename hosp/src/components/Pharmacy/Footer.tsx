import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: support@hosp.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: Bengaluru</li>
              </ul>
            </div>
    
            {/* Main Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">HOSP</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Services</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Blog</li>
                <li>Best practices</li>
                <li>Others</li>
                <li>Color wheel</li>
                <li>Support</li>
                <li>Developers</li>
                <li>Resource library</li>
              </ul>
            </div>

            {/* Social Info */}
            <div>
              <h3 className="mb-4 text-sm font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" passHref>
                  <span className="sr-only">Youtube</span>
                  <Youtube className="size-6" />
                </Link>
                <Link href="#" passHref>
                  <span className="sr-only">Facebook</span>
                  <Facebook className="size-6" />
                </Link>
                <Link href="#" passHref>
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="size-6" />
                </Link>
                <Link href="#" passHref>
                  <span className="sr-only">GitHub</span>
                  <Github className="size-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

