import { BsInstagram } from "react-icons/bs" 

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Zé das Frutas Logo" className="h-12 w-12 drop-shadow-lg" />
              <span className="text-xl font-bold text-foreground">Zé das Frutas</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Levando saúde e frescor para sua mesa a mais de 10 anos
            </p>
            <a
              href="https://www.instagram.com/zedasfrutaseverduras/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <BsInstagram className="h-5 w-5" />
              <span>@zedasfrutaseverduras</span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Frutas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Verduras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Legumes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Orgânicos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Como Comprar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Entrega
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors cursor-pointer">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="font-medium text-foreground">Loja Física:</li>
              <li>Seg a Sex: 6h às 19h</li>
              <li>Sábado: 6h às 18h</li>
              <li>Domingo: 6h às 13h</li>
              <li className="pt-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=558388137672&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="hover:text-primary transition-colors cursor-pointer"
                  rel="noreferrer"
                >
                  (83) 98813-7672
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Zé das Frutas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
