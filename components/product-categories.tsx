import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingCart } from "lucide-react"

const categories = [
  {
    name: "Frutas",
    description: "Morango, banana, maçã, laranja e muito mais",
    image: "/fresh-colorful-fruits-strawberries-bananas-apples-.jpg",
  },
  {
    name: "Verduras",
    description: "Alface, rúcula, couve, espinafre fresquinhos",
    image: "/fresh-green-leafy-vegetables-lettuce-natural-clean.jpg",
  },
  {
    name: "Legumes",
    description: "Tomate, cenoura, batata, brócolis e mais",
    image: "/fresh-vegetables-tomatoes-carrots-broccoli-natural.jpg",
  },
  {
    name: "Orgânicos",
    description: "Produtos orgânicos certificados",
    image: "/fresh-organic-vegetables-natural-clean-white-baske.jpg",
  },
]

export function ProductCategories() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Nosso Catálogo
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Variedade, frescor e qualidade em todas as categorias
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group overflow-hidden border-0 bg-card transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <Button
                  variant="ghost"
                  className="w-full justify-between px-0 hover:bg-transparent hover:text-primary transition-all duration-300 hover:px-2 cursor-pointer"
                >
                  Ver produtos
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] transition-all duration-300 cursor-pointer"
                  asChild
                >
                  <a href="https://pedido.anota.ai/" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Comprar no Anota Ai
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
