'use client'

import Image from 'next/image'
import { Shield, Award, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TrustAndAssurance() {
  const features = [
    {
      icon: Shield,
      title: "100% Authentic Products",
      description: "We guarantee the authenticity of all our products, ensuring you receive only genuine items.",
    },
    {
      icon: Award,
      title: "FDA Approved",
      description: "All our medications are FDA approved, meeting the highest standards of safety and efficacy.",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Join our community of over 10,000 happy customers who rate us 4.9/5 stars.",
    },
  ]

  const certifications = [
    { src: "/placeholder.svg?text=SSL+Secure", alt: "SSL Secure", description: "Your data is protected with industry-standard encryption" },
    { src: "/placeholder.svg?text=HIPAA+Compliant", alt: "HIPAA Compliant", description: "We adhere to strict healthcare privacy standards" },
    { src: "/placeholder.svg?text=PCI+DSS", alt: "PCI DSS", description: "Your payment information is securely processed" },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-center text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-20">
          <motion.h3 
            className="text-3xl font-semibold text-center mb-10 text-gray-800 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Trusted and Certified
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </motion.h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="absolute inset-0 bg-primary/20 rounded-lg filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src={cert.src || "/placeholder.svg"}
                        alt={cert.alt}
                        width={140}
                        height={70}
                        className="relative transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{cert.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

