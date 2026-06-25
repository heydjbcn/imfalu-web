import type { Metadata } from "next"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { site, telLink, waLink } from "@/lib/site"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contacto — Presupuesto de fachadas en Barcelona",
  description:
    "Pide presupuesto sin compromiso para el mantenimiento, reparación o rehabilitación de tu fachada de aluminio y cristal en Barcelona. Teléfono, WhatsApp y formulario.",
  alternates: { canonical: "/contacto" },
}

export default function ContactoPage() {
  return (
    <section className="container-x py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Contacto</p>
        <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Presupuesto de fachadas de aluminio y cristal en Barcelona</h1>
        <p className="mt-4 text-lg text-warm">
          <strong className="text-ink">Hablemos de tu fachada.</strong> Cuéntanos qué necesitas y te damos
          presupuesto sin compromiso. Si es urgente (un cristal roto, un riesgo en fachada), llámanos o
          escríbenos por WhatsApp.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="rounded-2xl border bg-white p-6 md:p-8">
          <ContactForm />
        </div>

        <aside className="space-y-4">
          <a href={telLink} className="flex items-center gap-3 rounded-2xl border bg-white p-5 hover:border-burdeos">
            <Phone className="h-5 w-5 text-burdeos" />
            <span><span className="block text-xs text-warm">Teléfono</span><span className="font-semibold text-ink">{site.phoneDisplay}</span></span>
          </a>
          <a href={waLink("Hola, quiero información sobre una fachada.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border bg-white p-5 hover:border-burdeos">
            <MessageCircle className="h-5 w-5 text-burdeos" />
            <span><span className="block text-xs text-warm">WhatsApp</span><span className="font-semibold text-ink">Escríbenos</span></span>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border bg-white p-5">
            <MapPin className="h-5 w-5 text-burdeos" />
            <span><span className="block text-xs text-warm">Zona</span><span className="font-semibold text-ink">{site.area}</span></span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border bg-white p-5">
            <Clock className="h-5 w-5 text-burdeos" />
            <span><span className="block text-xs text-warm">Urgencias</span><span className="font-semibold text-ink">Servicio 24 h</span></span>
          </div>
        </aside>
      </div>
    </section>
  )
}
