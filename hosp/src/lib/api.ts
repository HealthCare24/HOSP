import { Product } from '@/types/product'

// This is a mock function. In a real application, you would fetch data from an API or database.
export async function getProducts(): Promise<Product[]> {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    {
      id: '1',
      name: 'Paracetamol',
      brand: 'Generic',
      price: 5.99,
      rating: 4.5,
      reviewCount: 120,
      imageUrl: '/placeholder.svg?height=200&width=200',
      category: 'Medications',
      subcategory: 'Over-the-Counter (OTC) Medications',
    },
    // Add more mock products here...
  ]
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts()
  return products.find(product => product.id === id) || null
}

