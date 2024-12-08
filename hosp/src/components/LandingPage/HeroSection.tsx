import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Revolutionizing Healthcare with HOSP
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the future of patient care with our cutting-edge technology and personalized solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              We're redefining healthcare by combining AI-powered diagnostics, telemedicine, and personalized care plans to meet the needs of tomorrow's patients.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900 transition-colors"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Advanced Healthcare Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
              <img src="/placeholder.svg?height=50&width=50" alt="AI Icon" className="w-12 h-12" />
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
              <img src="/placeholder.svg?height=50&width=50" alt="Tech Icon" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
