import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { OrderSection } from "@/components/order-section"
import { DeliveryInfo } from "@/components/delivery-info"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <OrderSection />
      <DeliveryInfo />
      <Location />
      <Footer />
    </main>
  )
}
