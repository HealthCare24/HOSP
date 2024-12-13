import { getProductById } from '@/lib/api'
import PharmacyLayout from '@/components/Pharmacy/PharmacyLayout'
import ProductDetail from '@/components/Pharmacy/ProductDetail'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <PharmacyLayout>
      <ProductDetail product={product} />
    </PharmacyLayout>
  )
}

