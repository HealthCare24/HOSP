import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'

export default function SpecialOffers() {
  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Buy One Get One Free</h3>
            <p className="mb-4">On all vitamins and supplements. Limited time offer!</p>
            <div className="flex items-center justify-between">
              <Button variant="outline">Shop Now</Button>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>Ends in 2 days</span>
              </div>
            </div>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">20% Off All Orders Over ₹1000</h3>
            <p className="mb-4">Use code HEALTH20 at checkout. Valid for all products.</p>
            <div className="flex items-center justify-between">
              <Button variant="outline">Shop Now</Button>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>Ends in 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

