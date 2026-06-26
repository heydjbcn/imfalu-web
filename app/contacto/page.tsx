import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, BadgeCheck, Award, ArrowRight } from "lucide-react"
import { site, telLink, waLink } from "@/lib/site"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contacto: presupuesto de fachadas en Barcelona",
  description:
    "Pide presupuesto sin compromiso para el mantenimiento, reparación o rehabilitación de tu fachada de aluminio y cristal en Barcelona. Tel y WhatsApp.",
  alternates: { canonical: "/contacto" },
}

const TRUST = [
  { icon: BadgeCheck, t: "Presupuesto sin compromiso", d: "Te valoramos la fachada sin coste." },
  { icon: Clock, t: "Respuesta en 24 h", d: "Y urgencias 24 h para riesgos." },
  { icon: ShieldCheck, t: "Trabajo en altura certificado", d: "Personal y medios homologados." },
  { icon: Award, t: "+30 años · +150 edificios", d: "Especialistas en aluminio y cristal." },
]

export default function ContactoPage() {
  return (
    <>
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border bg-white p-6 md:p-8">
            <ContactForm />
          </div>

          <aside className="space-y-4">
            <a href={telLink} className="flex items-center gap-3 rounded-2xl border bg-white p-5 transition-colors hover:border-burdeos">
              <Phone className="h-5 w-5 shrink-0 text-burdeos" />
              <span><span className="block text-xs text-warm">Teléfono</span><span className="font-semibold text-ink">{site.phoneDisplay}</span></span>
            </a>
            <a href={waLink("Hola, quiero información sobre una fachada.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border bg-white p-5 transition-colors hover:border-burdeos">
              <MessageCircle className="h-5 w-5 shrink-0 text-burdeos" />
              <span><span className="block text-xs text-warm">WhatsApp</span><span className="font-semibold text-ink">Escríbenos ahora</span></span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border bg-white p-5">
              <MapPin className="h-5 w-5 shrink-0 text-burdeos" />
              <span><span className="block text-xs text-warm">Zona</span><span className="font-semibold text-ink">{site.area}</span></span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border bg-white p-5">
              <Clock className="h-5 w-5 shrink-0 text-burdeos" />
              <span><span className="block text-xs text-warm">Urgencias</span><span className="font-semibold text-ink">Servicio 24 h</span></span>
            </div>

            {/* Trust */}
            <div className="rounded-2xl border bg-cream p-5">
              <ul className="space-y-3.5">
                {TRUST.map((x) => (
                  <li key={x.t} className="flex gap-3">
                    <x.icon className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                    <span>
                      <span className="block text-sm font-semibold text-ink">{x.t}</span>
                      <span className="block text-xs text-warm">{x.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Mapa / zona de trabajo */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Dónde trabajamos</p>
              <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Barcelona y área metropolitana</h2>
              <p className="mt-4 text-warm">
                Intervenimos fachadas de aluminio y cristal en toda el área metropolitana de Barcelona:
                Cornellà, L&apos;Hospitalet, Sant Cugat, Barberà y alrededores.
              </p>
            </div>
            <Link href={telLink} className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border">
            <iframe
              title="Zona de trabajo de IMFALÚ — Barcelona y área metropolitana"
              src="https://www.google.com/maps?q=Cornell%C3%A0%20de%20Llobregat%2C%20Barcelona&z=11&output=embed"
              className="h-[360px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
