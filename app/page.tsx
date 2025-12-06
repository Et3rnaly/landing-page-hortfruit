import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ProductCategories } from "@/components/product-categories"
import { HowToOrder } from "@/components/how-to-order"
import { DeliveryInfo } from "@/components/delivery-info"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ProductCategories />
      <HowToOrder />
      <DeliveryInfo />
      <Location />
      <Footer />
    </main>
  )
}
