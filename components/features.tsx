import { Leaf, Truck, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Produtos Frescos",
    description: "Selecionados diariamente dos melhores produtores",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Delivery em até 2 horas na sua região",
  },
  {
    icon: Clock,
    title: "Sempre Disponível",
    description: "Pedidos de segunda a sábado, das 6h às 17:30h",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "100% de satisfação ou seu dinheiro de volta",
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="flex flex-col items-center text-center space-y-4 p-6">
                <div className="rounded-full bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
