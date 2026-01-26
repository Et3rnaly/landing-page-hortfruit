"use client"

import { ShoppingCart, ClipboardList, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderStepsProps {
  isCatalogOpen: boolean
  onToggleCatalog: () => void
}

const steps = [
  {
    number: 1,
    icon: ShoppingCart,
    title: "Escolha os Produtos",
    description: "Navegue pelo catalogo abaixo e adicione ao carrinho",
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Informe seus Dados",
    description: "Preencha nome, telefone, endereco e pagamento",
  },
  {
    number: 3,
    icon: MessageCircle,
    title: "Envie pelo WhatsApp",
    description: "Pedido enviado automaticamente para nosso atendimento",
  },
]

export function OrderSteps({ isCatalogOpen, onToggleCatalog }: OrderStepsProps) {
  return (
    <section id="catalogo" className="py-8 sm:py-12 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-8">
          <h2 className="text-balance text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Como Funciona?
          </h2>
          <p className="mt-2 text-pretty text-sm text-muted-foreground sm:text-base">
            Pedido rapido em 3 passos simples
          </p>
        </div>

        {/* Steps - horizontal on mobile */}
        <div className="flex flex-row justify-center gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center p-2 sm:p-4 flex-1 max-w-[140px] sm:max-w-none"
            >
              {/* Step Circle */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground mb-2 sm:mb-3">
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Step Number Badge */}
              <span className="absolute top-1 sm:top-2 right-1/2 translate-x-6 sm:translate-x-9 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                {step.number}
              </span>

              {/* Content */}
              <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                {step.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug hidden sm:block">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Toggle Catalog Button */}
        <div className="flex justify-center">
          <Button
            onClick={onToggleCatalog}
            variant="ghost"
            size="sm"
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          >
            {isCatalogOpen ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Ocultar Catalogo
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Mostrar Catalogo
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
