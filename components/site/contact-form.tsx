"use client"

import { useState } from "react"
import { Check, Send } from "lucide-react"
import { waLink } from "@/lib/site"

const TIPOS = [
  "Mantenimiento de fachada",
  "Reparación / cristal roto",
  "Rehabilitación / regeneración",
  "Informe técnico / estanqueidad",
  "Otro",
]

export function ContactForm() {
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState("")
  const [tipo, setTipo] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data.website) return // honeypot
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || "No se pudo enviar")
      }
      setDone(true)
      form.reset()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setSending(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border bg-cream p-8 text-center">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-burdeos/10 text-burdeos">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-ink">¡Gracias! Hemos recibido tu mensaje</h3>
        <p className="mt-2 text-sm text-warm">Te responderemos lo antes posible. Si es urgente, escríbenos por WhatsApp.</p>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold text-ink hover:border-burdeos hover:text-burdeos">
          Abrir WhatsApp
        </a>
      </div>
    )
  }

  const field = "flex h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-warm-light focus-visible:border-burdeos focus-visible:ring-2 focus-visible:ring-burdeos/20"
  const labelCls = "mb-1.5 block text-sm font-medium text-ink"

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Nombre *</label>
          <input name="nombre" required className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Empresa / comunidad</label>
          <input name="empresa" className={field} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Email *</label>
          <input type="email" name="email" required className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Teléfono</label>
          <input name="telefono" className={field} />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">¿Qué necesitas?</label>
        <input type="hidden" name="asunto" value={tipo} />
        <div className="flex flex-wrap gap-2">
          {TIPOS.map((t) => {
            const on = tipo === t
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTipo(on ? "" : t)}
                className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                  on ? "border-burdeos bg-burdeos text-white" : "border-line bg-white text-ink hover:border-burdeos hover:text-burdeos"
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>
      <div>
        <label className={labelCls}>Mensaje *</label>
        <textarea name="mensaje" required rows={4} placeholder="Cuéntanos del edificio y la fachada…"
          className="min-h-28 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-warm-light focus-visible:border-burdeos focus-visible:ring-2 focus-visible:ring-burdeos/20" />
      </div>
      {error ? <p className="text-sm text-burdeos">{error}</p> : null}
      <button type="submit" disabled={sending} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-burdeos px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-burdeos-dark disabled:opacity-60 sm:w-auto">
        {sending ? "Enviando…" : <>Enviar mensaje <Send className="h-4 w-4" /></>}
      </button>
      <p className="text-xs text-warm">Respondemos en menos de 24 h. Al enviar aceptas nuestra política de privacidad.</p>
    </form>
  )
}
