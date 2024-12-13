'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/product'

interface CartItem extends Product {
  quantity: number
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.brand}</p>
                <p className="text-sm">₹{item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border rounded px-2 py-1 w-16 mr-2"
                />
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}

