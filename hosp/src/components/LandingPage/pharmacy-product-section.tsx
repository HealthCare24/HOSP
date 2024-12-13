import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock, Truck, HeartPulse, Phone } from 'lucide-react'
import Link from "next/link"


interface Feature {
  name: string
  description: string
  icon: React.ReactNode
}



const features: Feature[] = [
  {
    name: "24/7 Service",
    description: "Our pharmacy is open round the clock for your convenience.",
    icon: <Clock className="h-6 w-6 text-emerald-600" />,
  },
  {
    name: "Fast Delivery",
    description: "Get your medications delivered to your doorstep in no time.",
    icon: <Truck className="h-6 w-6 text-emerald-600" />,
  },
  {
    name: "Expert Care",
    description: "Our pharmacists provide personalized care and advice.",
    icon: <HeartPulse className="h-6 w-6 text-emerald-600" />,
  },
  {
    name: "Easy Consultation",
    description: "Connect with our healthcare professionals anytime.",
    icon: <Phone className="h-6 w-6 text-emerald-600" />,
  },
]

export default function PharmacyFeaturesSection() {
     
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Pharmacy?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
        <Button  asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">  
            <Link href="/signin">Shop Our Products</Link>
        </Button>
 
        </div>
      </div>
    </section>
  )
}
