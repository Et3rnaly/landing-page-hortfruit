import { Button } from "@/components/ui/button"
import { ShoppingBag, MapPin, MessageSquare } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 -z-10">
        <img
          src="/fresh-colorful-fruits-and-vegetables-on-clean-whit.jpg"
          alt="Frutas e vegetais frescos"
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">Entrega rápida em toda região</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <img
              src="/logo.png"
              alt="Zé das Frutas Logo"
              className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 drop-shadow-2xl"
            />
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Zé das Frutas
            </h1>
          </div>

          <p className="text-balance mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Frutas, verduras e legumes frescos, direto do produtor para sua mesa. Qualidade e sabor em cada entrega.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-[#25D366] hover:bg-[#20BD5A]"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send/?phone=558388137672&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Pedir por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-[#FF6B35] hover:bg-[#E55A2B]"
              asChild
            >
              <a href="https://pedido.anota.ai/" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Comprar Online (Anota Ai)
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 rounded-full border-2 bg-transparent transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
