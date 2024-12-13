import PharmacyLayout from '@/components/Pharmacy/PharmacyLayout'
import HeroBanner from '@/components/Pharmacy/HeroBanner'
import FeaturedCategories from '@/components/Pharmacy/FeaturedCategories'
import ProductGrid from '@/components/Pharmacy/ProductGrid'
import TrustAndAssurance from '@/components/Pharmacy/TrustAndAssurance'
import HealthResources from '@/components/Pharmacy/HealthResources'
import SpecialOffers from '@/components/Pharmacy/SpecialOffers'
import CustomerSupport from '@/components/Pharmacy/CustomerSupport'
import { getProducts } from '@/lib/api'

export default async function PharmacyPage() {
  const products = await getProducts()

  return (
    <PharmacyLayout>
      <HeroBanner />
      <FeaturedCategories />
      <ProductGrid products={products} />
      <TrustAndAssurance />
      <HealthResources />
      <SpecialOffers />
      <CustomerSupport />
    </PharmacyLayout>
  )
}

