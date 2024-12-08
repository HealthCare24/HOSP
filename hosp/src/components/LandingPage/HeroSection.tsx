import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-2">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
            Empowering Your Health, Simplified.
            </h1>
            <p className="text-lg text-gray-600">
            At HOSP, we connect you with seamless healthcare solutions. From expert consultations to personalized care plans, we're here to make your health journey effortless and effective.
            </p>
            <div className="flex space-x-4">
              <Button>
              Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
              Explore Our Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="HOSP-hero.png"
              alt="Advanced Healthcare Technology"
              className="w-4/5 h-4/5 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

