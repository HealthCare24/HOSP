import Link from 'next/link'
import { Pill, Heart, Dumbbell, Thermometer } from 'lucide-react'

const categories = [
  { name: 'Medications', icon: Pill, description: 'Prescription and over-the-counter medicines' },
  { name: 'Vitamins & Supplements', icon: Heart, description: 'Boost your health and wellness' },
  { name: 'Fitness & Wellness', icon: Dumbbell, description: 'Equipment and supplements for your fitness journey' },
  { name: 'Medical Equipment', icon: Thermometer, description: 'Home healthcare and monitoring devices' },
]

export default function FeaturedCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={`/pharmacy/category/${category.name.toLowerCase().replace(' ', '-')}`}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <category.icon className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

