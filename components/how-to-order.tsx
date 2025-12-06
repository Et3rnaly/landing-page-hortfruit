import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Truck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "Escolha seus produtos",
    description: "Navegue pelo catálogo e selecione frutas, verduras e legumes frescos",
  },
  {
    icon: Truck,
    title: "Selecione entrega ou retirada",
    description: "Escolha receber em casa ou retirar na loja física",
  },
  {
    icon: CheckCircle,
    title: "Finalize no Anota Ai",
    description: "Complete seu pedido de forma rápida e segura na plataforma",
  },
]

export function HowToOrder() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Como Funciona o Pedido Online
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Comprar no Zé das Frutas é simples e rápido. Siga os passos abaixo:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative p-8 text-center border-0 bg-card shadow-md">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              <div className="mt-6 mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-base px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-[#FF6B35] hover:bg-[#E55A2B]"
            asChild
          >
            <a href="https://pedido.anota.ai/" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Começar a Comprar
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
