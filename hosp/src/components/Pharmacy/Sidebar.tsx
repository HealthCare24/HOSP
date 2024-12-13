'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

const categories = [
  {
    name: 'Medications',
    subcategories: ['Prescription Medications', 'Over-the-Counter (OTC) Medications', 'Generic Medications']
  },
  {
    name: 'Health & Wellness',
    subcategories: ['Vitamins & Supplements', 'Fitness & Nutrition', 'Weight Management']
  },
  // Add more categories here...
]

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name} className="mb-2">
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex items-center justify-between w-full text-left"
            >
              {category.name}
              {expandedCategories.includes(category.name) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {expandedCategories.includes(category.name) && (
              <ul className="ml-4 mt-2">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory} className="mb-1">
                    <Link href={`/pharmacy/category/${encodeURIComponent(subcategory.toLowerCase())}`} className="text-sm hover:text-primary">
                      {subcategory}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

