export interface Product {
  id: string
  name: string
  category: "frutas" | "verduras" | "legumes" | "organicos"
  unit: string
  price: number
  image: string
}

export const products: Product[] = [
  // Frutas
  { id: "banana", name: "Banana Prata", category: "frutas", unit: "kg", price: 5.99, image: "/products/banana.jpg" },
  { id: "maca", name: "Maçã Fuji", category: "frutas", unit: "kg", price: 8.99, image: "/products/maca.jpg" },
  { id: "laranja", name: "Laranja Pera", category: "frutas", unit: "kg", price: 4.99, image: "/products/laranja.jpg" },
  { id: "morango", name: "Morango", category: "frutas", unit: "bandeja", price: 12.99, image: "/products/morango.jpg" },
  { id: "manga", name: "Manga Palmer", category: "frutas", unit: "kg", price: 7.99, image: "/products/manga.jpg" },
  { id: "melancia", name: "Melancia", category: "frutas", unit: "kg", price: 3.49, image: "/products/melancia.jpg" },
  
  // Verduras
  { id: "alface", name: "Alface Crespa", category: "verduras", unit: "unidade", price: 3.49, image: "/products/alface.jpg" },
  { id: "rucula", name: "Rúcula", category: "verduras", unit: "maço", price: 4.99, image: "/products/rucula.jpg" },
  { id: "couve", name: "Couve Manteiga", category: "verduras", unit: "maço", price: 3.99, image: "/products/couve.jpg" },
  { id: "espinafre", name: "Espinafre", category: "verduras", unit: "maço", price: 5.49, image: "/products/espinafre.jpg" },
  { id: "agriao", name: "Agrião", category: "verduras", unit: "maço", price: 4.49, image: "/products/agriao.jpg" },
  { id: "brocolis", name: "Brócolis", category: "verduras", unit: "unidade", price: 6.99, image: "/products/brocolis.jpg" },
  
  // Legumes
  { id: "tomate", name: "Tomate Italiano", category: "legumes", unit: "kg", price: 6.99, image: "/products/tomate.jpg" },
  { id: "cenoura", name: "Cenoura", category: "legumes", unit: "kg", price: 4.99, image: "/products/cenoura.jpg" },
  { id: "batata", name: "Batata Inglesa", category: "legumes", unit: "kg", price: 5.49, image: "/products/batata.jpg" },
  { id: "cebola", name: "Cebola", category: "legumes", unit: "kg", price: 4.49, image: "/products/cebola.jpg" },
  { id: "pimentao", name: "Pimentão Verde", category: "legumes", unit: "kg", price: 7.99, image: "/products/pimentao.jpg" },
  { id: "abobrinha", name: "Abobrinha", category: "legumes", unit: "kg", price: 5.99, image: "/products/abobrinha.jpg" },
  
  // Orgânicos
  { id: "tomate-org", name: "Tomate Orgânico", category: "organicos", unit: "kg", price: 12.99, image: "/products/tomate-org.jpg" },
  { id: "alface-org", name: "Alface Orgânica", category: "organicos", unit: "unidade", price: 5.99, image: "/products/alface-org.jpg" },
  { id: "cenoura-org", name: "Cenoura Orgânica", category: "organicos", unit: "kg", price: 8.99, image: "/products/cenoura-org.jpg" },
  { id: "banana-org", name: "Banana Orgânica", category: "organicos", unit: "kg", price: 9.99, image: "/products/banana-org.jpg" },
]

export const categoryLabels: Record<string, string> = {
  frutas: "Frutas",
  verduras: "Verduras", 
  legumes: "Legumes",
  organicos: "Orgânicos",
}

export const categoryImages: Record<string, string> = {
  frutas: "/fresh-colorful-fruits-strawberries-bananas-apples-.jpg",
  verduras: "/fresh-green-leafy-vegetables-lettuce-natural-clean.jpg",
  legumes: "/fresh-vegetables-tomatoes-carrots-broccoli-natural.jpg",
  organicos: "/fresh-organic-vegetables-natural-clean-white-baske.jpg",
}
