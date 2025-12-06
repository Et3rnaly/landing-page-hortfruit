import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"

export function Location() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Visite Nossa Loja</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Venha conhecer nosso espaço e escolher pessoalmente os melhores produtos frescos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Store Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/store-location.png"
              alt="Fachada da loja Zé das Frutas"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-accent/30 rounded-2xl p-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Carneiro da Cunha, 466 - Torre
                    <br />
                    João Pessoa - PB, 58040-243
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 6h às 19h
                    <br />
                    Sábado: 6h às 18h
                    <br />
                    Domingo: 6h às 13h
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contato</h3>
                  <p className="text-muted-foreground">
                    (83) 98813-7672
                    <br />
                    Delivery disponível
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8064445936877!2d-34.9042!3d-7.1370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839e62b7897%3A0x0!2sAv.%20Carneiro%20da%20Cunha%2C%20466%20-%20Torre%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058040-243!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Carneiro+da+Cunha,+466+-+Torre,+João+Pessoa+-+PB,+58040-243"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all duration-300 hover:gap-3 hover:translate-x-1 cursor-pointer"
            >
              <MapPin className="w-5 h-5" />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
