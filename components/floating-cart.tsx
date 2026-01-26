"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface FloatingCartProps {
  onCheckout: () => void
}

export function FloatingCart({ onCheckout }: FloatingCartProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart()

  if (totalItems === 0) return null

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all cursor-pointer hover:scale-105 active:scale-95"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="font-semibold">{totalItems}</span>
        <span className="hidden sm:inline">
          | R$ {totalPrice.toFixed(2).replace(".", ",")}
        </span>
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-50 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <Card className="fixed bottom-0 left-0 right-0 z-50 rounded-b-none rounded-t-2xl max-h-[85vh] overflow-hidden flex flex-col sm:max-w-md sm:right-4 sm:left-auto sm:bottom-4 sm:rounded-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Seu Carrinho</h3>
                <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                  {totalItems} {totalItems === 1 ? "item" : "itens"}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3 bg-secondary/30 rounded-xl"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      R$ {item.product.price.toFixed(2).replace(".", ",")} / {item.product.unit}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center font-medium text-sm">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive cursor-pointer"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total estimado:</span>
                <span className="text-xl font-bold text-foreground">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <Button
                onClick={() => {
                  setIsOpen(false)
                  onCheckout()
                }}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 cursor-pointer"
              >
                Continuar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </>
      )}
    </>
  )
}
