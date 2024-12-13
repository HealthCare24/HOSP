'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Star, ShoppingCart, Truck, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/product'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex flex-col md:flex-row gap-8 py-12">
      <div className="md:w-1/2">
        <div className="relative h-96 mb-4">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex space-x-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-20 h-20 relative rounded-md overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-primary' : ''
              }`}
            >
              <Image src={image} alt={`${product.name} ${index + 1}`} layout="fill" objectFit="cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{product.brand}</p>
        <div className="flex items-center mb-4">
          <Star className="text-yellow-400 mr-1" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-gray-500 ml-2">({product.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center mb-4">
          <p className="text-3xl font-bold mr-4">₹{product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-xl text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</p>
          )}
        </div>
        <p className="mb-4">{product.description}</p>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border rounded px-2 py-1 w-16"
          />
        </div>
        <Button className="w-full md:w-auto mb-4" onClick={() => console.log('Add to cart:', product.id, 'Quantity:', quantity)}>
          <ShoppingCart className="mr-2" size={16} />
          Add to Cart
        </Button>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Truck className="mr-2" size={16} />
            <span>Free shipping on orders over ₹500</span>
          </div>
          <div className="flex items-center">
            <RotateCcw className="mr-2" size={16} />
            <span>30-day return policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

