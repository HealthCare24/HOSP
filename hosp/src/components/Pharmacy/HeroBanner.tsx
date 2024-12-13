import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroBanner() {
  return (
    <div className="relative h-[500px] bg-gray-100">
      <Image
        src="/placeholder.svg?height=500&width=1200"
        alt="Healthcare products"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Partner in Wellness</h1>
          <p className="text-xl mb-8">Providing Trusted Health Solutions</p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
            Shop Now for Health Essentials
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2 text-center">
        Free shipping on orders over $50 | 20% off all vitamins
      </div>
    </div>
  )
}

