"use client"

import { useState } from "react"
import { Check, Send } from "lucide-react"
import { waLink } from "@/lib/site"
import type { Locale } from "@/lib/paths"

const T = {
  es: {
    tipos: ["Mantenimiento de fachada", "Reparación / cristal roto", "Rehabilitación / regeneración", "Informe técnico / estanqueidad", "Otro"],
    errGeneric: "No se pudo enviar",
    doneTitle: "¡Gracias! Hemos recibido tu mensaje",
    doneText: "Te responderemos lo antes posible. Si es urgente, escríbenos por WhatsApp.",
    abrirWa: "Abrir WhatsApp",
    nombre: "Nombre *", empresa: "Empresa / comunidad", email: "Email *", telefono: "Teléfono",
    queNecesitas: "¿Qué necesitas?", mensaje: "Mensaje *", mensajePh: "Cuéntanos del edificio y la fachada…",
    enviando: "Enviando…", enviar: "Enviar mensaje", waMsg: "Hola, quiero información sobre una fachada.",
    privacidad: "Respondemos en menos de 24 h. Al enviar aceptas nuestra política de privacidad.",
  },
  ca: {
    tipos: ["Manteniment de façana", "Reparació / vidre trencat", "Rehabilitació / regeneració", "Informe tècnic / estanqueïtat", "Altre"],
    errGeneric: "No s'ha pogut enviar",
    doneTitle: "Gràcies! Hem rebut el teu missatge",
    doneText: "Et respondrem al més aviat possible. Si és urgent, escriu-nos per WhatsApp.",
    abrirWa: "Obrir WhatsApp",
    nombre: "Nom *", empresa: "Empresa / comunitat", email: "Email *", telefono: "Telèfon",
    queNecesitas: "Què necessites?", mensaje: "Missatge *", mensajePh: "Explica'ns de l'edifici i la façana…",
    enviando: "Enviant…", enviar: "Enviar missatge", waMsg: "Hola, vull informació sobre una façana.",
    privacidad: "Responem en menys de 24 h. En enviar acceptes la nostra política de privacitat.",
  },
}

export function ContactForm({ lang = "es" }: { lang?: Locale }) {
  const t = T[lang]
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
        throw new Error(j.error || t.errGeneric)
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
        <h3 className="mt-4 text-lg font-semibold text-ink">{t.doneTitle}</h3>
        <p className="mt-2 text-sm text-warm">{t.doneText}</p>
        <a href={waLink(t.waMsg)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold text-ink hover:border-burdeos hover:text-burdeos">
          {t.abrirWa}
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
          <label className={labelCls}>{t.nombre}</label>
          <input name="nombre" required className={field} />
        </div>
        <div>
          <label className={labelCls}>{t.empresa}</label>
          <input name="empresa" className={field} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>{t.email}</label>
          <input type="email" name="email" required className={field} />
        </div>
        <div>
          <label className={labelCls}>{t.telefono}</label>
          <input name="telefono" className={field} />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">{t.queNecesitas}</label>
        <input type="hidden" name="asunto" value={tipo} />
        <div className="flex flex-wrap gap-2">
          {t.tipos.map((opt) => {
            const on = tipo === opt
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setTipo(on ? "" : opt)}
                className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                  on ? "border-burdeos bg-burdeos text-white" : "border-line bg-white text-ink hover:border-burdeos hover:text-burdeos"
                }`}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>
      <div>
        <label className={labelCls}>{t.mensaje}</label>
        <textarea name="mensaje" required rows={4} placeholder={t.mensajePh}
          className="min-h-28 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-warm-light focus-visible:border-burdeos focus-visible:ring-2 focus-visible:ring-burdeos/20" />
      </div>
      {error ? <p className="text-sm text-burdeos">{error}</p> : null}
      <button type="submit" disabled={sending} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-burdeos px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-burdeos-dark disabled:opacity-60 sm:w-auto">
        {sending ? t.enviando : <>{t.enviar} <Send className="h-4 w-4" /></>}
      </button>
      <p className="text-xs text-warm">{t.privacidad}</p>
    </form>
  )
}
