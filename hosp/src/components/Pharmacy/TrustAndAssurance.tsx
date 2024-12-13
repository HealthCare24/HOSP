import Image from 'next/image'
import { Shield, Award, ThumbsUp } from 'lucide-react'

export default function TrustAndAssurance() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">100% Authentic Products</h3>
            <p className="text-gray-600">We guarantee the authenticity of all our products</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">FDA Approved</h3>
            <p className="text-gray-600">All our medications are FDA approved for your safety</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <ThumbsUp className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">Rated 4.9/5 by over 10,000 happy customers</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Image src="/placeholder.svg?text=SSL+Secure" alt="SSL Secure" width={100} height={50} />
          <Image src="/placeholder.svg?text=HIPAA+Compliant" alt="HIPAA Compliant" width={100} height={50} />
          <Image src="/placeholder.svg?text=PCI+DSS" alt="PCI DSS" width={100} height={50} />
        </div>
      </div>
    </section>
  )
}

