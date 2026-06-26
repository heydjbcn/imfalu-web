import type { Metadata } from "next"
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, BadgeCheck, Award, Navigation } from "lucide-react"
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

      {/* Dirección + mapa */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Dónde estamos</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Nuestras oficinas en Cornellà</h2>
          <p className="mt-4 max-w-2xl text-warm">
            Trabajamos en toda el área metropolitana de Barcelona: Cornellà, L&apos;Hospitalet, Sant Cugat,
            Barberà y alrededores.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
            <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                <div>
                  <span className="block text-xs text-warm">Dirección</span>
                  <span className="font-semibold text-ink">{site.address.street}</span>
                  <span className="block text-sm text-warm">{site.address.postalCode} {site.address.locality} ({site.address.region})</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                <div><span className="block text-xs text-warm">Horario</span><span className="font-semibold text-ink">L-V 8:00-17:00</span><span className="block text-sm text-warm">Urgencias 24 h</span></div>
              </div>
              <div className="mt-1 flex flex-col gap-2.5">
                <a href={site.address.directions} target="_blank" rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-burdeos px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-burdeos-dark">
                  <Navigation className="h-4 w-4" /> Cómo llegar
                </a>
                <a href={telLink}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 text-sm font-semibold text-ink transition hover:border-burdeos hover:text-burdeos">
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border shadow-sm">
              <iframe
                title={`IMFALÚ — ${site.address.full}`}
                src={`https://www.google.com/maps?q=${site.address.lat},${site.address.lng}&z=16&output=embed`}
                className="h-[320px] w-full lg:h-full lg:min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
