import Link from 'next/link';
import { Pill, Heart, Dumbbell, Thermometer } from 'lucide-react';

const categories = [
  { name: 'Medications', icon: Pill, description: 'Prescription and over-the-counter medicines' },
  { name: 'Vitamins & Supplements', icon: Heart, description: 'Boost your health and wellness' },
  { name: 'Fitness & Wellness', icon: Dumbbell, description: 'Equipment and supplements for your fitness journey' },
  { name: 'Medical Equipment', icon: Thermometer, description: 'Home healthcare and monitoring devices' },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Featured Categories</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Explore our curated categories to find the best products for your health and wellness needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/pharmacy/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 h-72 flex flex-col justify-between">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-light rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
