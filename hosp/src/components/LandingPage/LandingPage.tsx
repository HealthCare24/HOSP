"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Github, Linkedin, Youtube } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <nav className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center space-x-6">
            <div className="grid size-6 place-items-center rounded bg-foreground text-background dark:bg-background dark:text-foreground">
              <div className="size-4 rounded-sm border-2" />
            </div>
            <div className="hidden items-center space-x-6 md:flex">
              <a href="#" className="text-sm font-medium">Products</a>
              <a href="#" className="text-sm font-medium">Solutions</a>
              <a href="#" className="text-sm font-medium">Community</a>
              <a href="#" className="text-sm font-medium">Resources</a>
              <a href="#" className="text-sm font-medium">Pricing</a>
              <a href="#" className="text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">Sign in</Button>
            <Button className="text-sm">Register</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Heading</h1>
            <p className="text-lg text-muted-foreground">Subheading</p>
            <p className="text-muted-foreground">
              Body text for your article or post. We'll put in some lorem ipsum to show how a filled-out page might look.
            </p>
            <p className="text-muted-foreground">
              Excepteur efficitur emerging, lorem veniam ante aute carefully curated UI/UX consectetur faucibus perfect nostrud elit adipisicing, esse elit non-contextual text-centric odio ut. Proactively adipisicing, eleifend lovely ipsum tempor exerci irure.
            </p>
          </div>
          <div className="aspect-video bg-muted" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-24">
        <Tabs defaultValue="monthly" className="mx-auto mb-12 w-fit">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <div className="text-3xl font-bold">
                  <span className="text-sm align-top">$</span>50
                  <span className="text-sm text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <li key={j}>List item</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Button</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Use cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>UX design</li>
                <li>UI design</li>
                <li>Wireframing</li>
                <li>Diagramming</li>
                <li>Brainstorming</li>
                <li>Online whiteboard</li>
                <li>Team collaboration</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Design</li>
                <li>Prototyping</li>
                <li>Development features</li>
                <li>Design systems</li>
                <li>Collaborative features</li>
                <li>Design process</li>
                <li>FigJam</li>
              </ul>
            </div>
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
            <div className="space-y-4">
              <div className="grid size-6 place-items-center rounded bg-foreground text-background dark:bg-background dark:text-foreground">
                <div className="size-4 rounded-sm border-2" />
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Youtube</span>
                  <Youtube className="size-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="size-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="size-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">GitHub</span>
                  <Github className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

