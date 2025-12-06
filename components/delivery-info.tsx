import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react"

export function DeliveryInfo() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Delivery Rápido e Seguro
                </h2>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Levamos produtos frescos até você com todo cuidado e agilidade. Faça seu pedido e receba em casa com
                  segurança.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cobertura Completa</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Atendemos toda a região central e bairros adjacentes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horários de Entrega</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Segunda a Sexta: 6h às 17:30
                      <br />
                      Sábado: 6h às 16h
                      <br />
                      Domingo: 6h às 12:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Atendimento Direto</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">WhatsApp: (83) 98813-7672</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full cursor-pointer bg-[#25D366] hover:bg-[#20BD5A]"
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
            </div>

            <Card className="overflow-hidden border-0 shadow-lg">
              <img
                src="/delivery-promotional.png"
                alt="A feira que chega até você - Zé das Frutas"
                className="h-full w-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
