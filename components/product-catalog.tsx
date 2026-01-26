"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Check } from "lucide-react"
import { products, categoryLabels, categoryImages, type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem(product, quantity)
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
      setQuantity(1)
    }, 1000)
  }

  return (
    <Card className="overflow-hidden border border-border/50 bg-card transition-all hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={categoryImages[product.category] || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        <div className="flex justify-between items-start gap-1">
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">{product.name}</h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground">/{product.unit}</p>
          </div>
          <p className="text-base sm:text-lg font-bold text-primary whitespace-nowrap">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
        </div>
        
        {/* Mobile-friendly controls */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center border border-border rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-9 sm:w-9 rounded-r-none cursor-pointer touch-manipulation"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 sm:w-10 text-center font-semibold text-base sm:text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 sm:h-9 sm:w-9 rounded-l-none cursor-pointer touch-manipulation"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            onClick={handleAdd}
            disabled={justAdded}
            className={`w-full cursor-pointer h-11 sm:h-10 text-sm font-semibold touch-manipulation transition-all ${
              justAdded 
                ? "bg-green-600 hover:bg-green-600" 
                : "bg-primary hover:bg-primary/90"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Adicionado!
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Adicionar
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  )
}

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products

  return (
    <section className="py-8 sm:py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-8">
          <h2 className="text-balance text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Nossos Produtos
          </h2>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">
            Toque para adicionar ao carrinho
          </p>
        </div>

        {/* Category Filter - scrollable on mobile */}
        <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="cursor-pointer whitespace-nowrap flex-shrink-0 h-9 text-sm touch-manipulation"
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer whitespace-nowrap flex-shrink-0 h-9 text-sm touch-manipulation"
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        {/* Products Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
