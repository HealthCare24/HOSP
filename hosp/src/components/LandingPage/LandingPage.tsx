'use client'
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import PricingSection from "./PricingSection";
import HeroSection from "./HeroSection";
import { Button } from "../ui/button";
import Header from "./Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header
      <header className="border-b">
        <nav className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="grid size-6 place-items-center rounded bg-foreground text-background dark:bg-background dark:text-foreground">
              <div className="size-4 rounded-sm border-2" />
            </div>
            <div className="hidden items-center space-x-6 md:flex">
              <Link href="#" passHref>
                <a className="text-sm font-medium">Products</a>
              </Link>
              <Link href="#" passHref>
                <a className="text-sm font-medium">Solutions</a>
              </Link>
              <Link href="#" passHref>
                <a className="text-sm font-medium">Community</a>
              </Link>
              <Link href="#" passHref>
                <a className="text-sm font-medium">Resources</a>
              </Link>
              <Link href="#" passHref>
                <a className="text-sm font-medium">Pricing</a>
              </Link>
              <Link href="#" passHref>
                <a className="text-sm font-medium">Contact</a>
              </Link>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">
              Sign in
            </Button>
            <Button className="text-sm">Register</Button>
          </div>
        </nav>
      </header> */}
      <section id="navbar" className="">
        <Header/>

      </section>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      <section id="promise">
        <OurPromise />
      </section>

      {/* Service Section */}
      <section id="service">
        <ServicesSection />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Footer */}
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
    </div>
  );
}
