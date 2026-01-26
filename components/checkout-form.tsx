"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { X, Send, User, Phone, MapPin, CreditCard, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface CheckoutFormProps {
  isOpen: boolean
  onClose: () => void
}

const WHATSAPP_NUMBER = "8398893-0341"

export function CheckoutForm({ isOpen, onClose }: CheckoutFormProps) {
  const { items, totalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "pix",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate WhatsApp message
    const itemsList = items
      .map(
        (item) =>
          `- ${item.product.name}: ${item.quantity} ${item.product.unit}`
      )
      .join("\n")

    const paymentLabels: Record<string, string> = {
      pix: "PIX",
      dinheiro: "Dinheiro",
      cartao: "Cartão",
    }

    const message = `*Pedido - Zé das Frutas*

*Cliente:*
Nome: ${formData.name}
Telefone: ${formData.phone}
Endereço: ${formData.address}
Pagamento: ${paymentLabels[formData.payment]}

*Itens:*
${itemsList}

*Total estimado: R$ ${totalPrice.toFixed(2).replace(".", ",")}*`

    // Encode and open WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`

    window.open(whatsappUrl, "_blank")

    // Clear cart and close form
    clearCart()
    onClose()
    setIsSubmitting(false)
    setFormData({ name: "", phone: "", address: "", payment: "pix" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 cursor-pointer"
        onClick={onClose}
      />

      {/* Form Modal */}
      <Card className="relative w-full max-w-md max-h-[90vh] overflow-y-auto z-10">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              2
            </span>
            <h3 className="font-semibold text-lg">Seus Dados</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="cursor-pointer"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
              <User className="h-4 w-4 text-muted-foreground" />
              Nome completo
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
              className="h-11"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4 text-muted-foreground" />
              Telefone / WhatsApp
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              required
              className="h-11"
            />
          </div>

          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Endereço completo
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Rua, número, bairro"
              required
              className="h-11"
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              Forma de pagamento
            </Label>
            <RadioGroup
              value={formData.payment}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, payment: value }))
              }
              className="grid grid-cols-3 gap-2"
            >
              {[
                { value: "pix", label: "PIX" },
                { value: "dinheiro", label: "Dinheiro" },
                { value: "cartao", label: "Cartão" },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={option.value}
                  className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                    formData.payment === option.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Order Summary */}
          <div className="p-4 bg-secondary/30 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Itens no carrinho:</span>
              <span className="font-medium">{items.length} produtos</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total estimado:</span>
              <span className="text-lg font-bold text-primary">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 h-12 cursor-pointer bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-12 bg-[#25D366] hover:bg-[#20BD5A] cursor-pointer"
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar Pedido
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Ao enviar, seu pedido será aberto no WhatsApp
          </p>
        </form>
      </Card>
    </div>
  )
}
