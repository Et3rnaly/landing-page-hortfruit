"use client"

import { useState } from "react"
import { CartProvider } from "@/lib/cart-context"
import { OrderSteps } from "@/components/order-steps"
import { ProductCatalog } from "@/components/product-catalog"
import { FloatingCart } from "@/components/floating-cart"
import { CheckoutForm } from "@/components/checkout-form"

export function OrderSection() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(true)

  return (
    <CartProvider>
      <OrderSteps 
        isCatalogOpen={isCatalogOpen} 
        onToggleCatalog={() => setIsCatalogOpen(!isCatalogOpen)} 
      />
      {isCatalogOpen && <ProductCatalog />}
      <FloatingCart onCheckout={() => setIsCheckoutOpen(true)} />
      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </CartProvider>
  )
}
