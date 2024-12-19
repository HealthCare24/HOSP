'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/pharmacy/product/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
              {product.discount}% OFF
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.brand}</p>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 mr-1" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-gray-500 ml-2">({product.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">₹{product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</p>
          )}
        </div>
        {isHovered && (
          <div className="flex space-x-2">
            <Button className="flex-1" onClick={() => console.log('Add to cart:', product.id)}>
              <ShoppingCart className="mr-2" size={16} />
              Add to Cart
            </Button>
            <Button variant="outline" onClick={() => console.log('Quick view:', product.id)}>
              <Eye size={16} />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

