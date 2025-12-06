"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica de cadastro
    console.log("Email cadastrado:", email)
    setEmail("")
  }

  return (
    <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Receba Ofertas Exclusivas</h2>
          <p className="text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Cadastre-se e receba promoções, dicas de receitas e novidades sobre produtos frescos direto no seu e-mail
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground text-foreground border-0 rounded-full px-6 py-6 text-base"
                required
              />
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="sm:w-auto rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
