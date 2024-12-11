'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, ShoppingCart } from 'lucide-react'
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  category: string
}

const products: Product[] = [
  { id: "1", name: "Pain Relief Tablets", price: 12.99, image: "/images/paintabs.jpg", rating: 4.5, category: "Medication" },
  { id: "2", name: "Vitamin C Complex", price: 19.99, image: "/images/Vitamin C Complex.jpg", rating: 4.8, category: "Supplements" },
  { id: "3", name: "First Aid Kit", price: 29.99, image: "/images/First Aid Kit.jpg", rating: 4.2, category: "Medical Supplies" },
  { id: "4", name: "Digital Thermometer", price: 15.99, image: "/images/Digital Thermometer.jpg", rating: 4.6, category: "Medical Devices" },
  { id: "5", name: "Allergy Relief Syrup", price: 8.99, image: "/images/Allergy Relief Syrup.jpeg", rating: 4.3, category: "Medication" },
  { id: "6", name: "Multivitamin Gummies", price: 14.99, image: "/images/Multivitamin Gummies.jpg", rating: 4.7, category: "Supplements" },
  { id: "7", name: "Blood Pressure Monitor", price: 39.99, image: "/images/Blood Pressure Monitor.jpg", rating: 4.4, category: "Medical Devices" },
  { id: "8", name: "Hand Sanitizer", price: 3.99, image: "/images/Hand Sanitizer.jpg", rating: 4.1, category: "Medical Supplies" },
]

export default function PharmacyEcommerceSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<{ [key: string]: number }>({})

  const filteredProducts = products.filter(product => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addToCart = (productId: string) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }))
  }

  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)

  return (
    <section id="pharmacy-ecommerce" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Medication">Medication</SelectItem>
              <SelectItem value="Supplements">Supplements</SelectItem>
              <SelectItem value="Medical Supplies">Medical Supplies</SelectItem>
              <SelectItem value="Medical Devices">Medical Devices</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-4 w-4" /> Cart ({totalItems})
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                </div>
                <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart {cart[product.id] ? `(${cart[product.id]})` : ''}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

