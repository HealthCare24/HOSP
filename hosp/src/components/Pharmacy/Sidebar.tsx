'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronDown, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"

const categories = [
  {
    name: 'Medications',
    subcategories: ['Prescription Medications', 'Over-the-Counter (OTC) Medications', 'Generic Medications']
  },
  {
    name: 'Health & Wellness',
    subcategories: ['Vitamins & Supplements', 'Fitness & Nutrition', 'Weight Management']
  },
  {
    name: 'Personal Care',
    subcategories: ['Skincare', 'Haircare', 'Oral Care', 'Hygiene Products']
  },
  {
    name: 'Medical Devices & Equipment',
    subcategories: ['Diagnostic Devices', 'Mobility Aids', 'First Aid Supplies']
  },
  {
    name: 'Mother & Baby Care',
    subcategories: ['Baby Food & Formula', 'Diapers & Wipes', 'Pregnancy & Maternity Products']
  },
  {
    name: 'Ayurveda & Herbal Products',
    subcategories: ['Herbal Medicines', 'Ayurvedic Tonics', 'Organic Skincare']
  },
  {
    name: 'COVID-19 Essentials',
    subcategories: ['Masks', 'Sanitizers', 'Oximeters', 'Rapid Test Kits']
  },
  {
    name: 'Home Healthcare',
    subcategories: ['Nebulizers', 'Humidifiers', 'Orthopedic Supports']
  },
  {
    name: 'Sexual Wellness',
    subcategories: ['Contraceptives', 'Lubricants', 'Intimate Wash']
  },
  {
    name: 'Pet Care',
    subcategories: ['Pet Medications', 'Grooming Products']
  }
]

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] w-64 rounded-md border">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Categories</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        {categories.map((category) => (
          <Collapsible key={category.name} className="mb-4">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between">
                {category.name}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-4 mt-2 space-y-2">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory}>
                    <Link 
                      href={`/pharmacy/category/${encodeURIComponent(subcategory.toLowerCase().replace(/ /g, '-'))}`}
                      className="text-sm hover:text-primary"
                    >
                      {subcategory}
                    </Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </ScrollArea>
  )
}

