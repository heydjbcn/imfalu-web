import type { Metadata } from "next"
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, BadgeCheck, Award, Navigation, ArrowUpRight } from "lucide-react"
import { site, telLink, waLink } from "@/lib/site"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contacto: presupuesto de fachadas en Barcelona",
  description:
    "Pide presupuesto sin compromiso para el mantenimiento, reparación o rehabilitación de tu fachada de aluminio y cristal en Barcelona. Tel y WhatsApp.",
  alternates: { canonical: "/contacto" },
  openGraph: { type: "website", url: "/contacto", images: ["/og.jpg"] },
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Formulario */}
          <div className="rounded-2xl border bg-white shadow-sm">
            <div className="border-b px-6 py-5 md:px-8">
              <h2 className="text-lg font-bold text-ink">Cuéntanos tu caso</h2>
              <p className="mt-1 text-sm text-warm">Rellena el formulario y te damos presupuesto sin compromiso.</p>
            </div>
            <div className="p-6 md:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Panel de contacto (oscuro, moderno) */}
          <aside className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white shadow-sm">
            <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: "radial-gradient(75% 60% at 100% 0%, rgba(155,35,53,0.5), transparent 60%)" }} />
            <div className="relative">
              <h2 className="text-lg font-bold">Contacto directo</h2>
              <p className="mt-1 text-sm text-white/55">Estamos a una llamada. Urgencias 24 h.</p>

              <div className="mt-5 divide-y divide-white/10">
                {[
                  { icon: Phone, label: "Teléfono", value: site.phoneDisplay, href: telLink, ext: false },
                  { icon: MessageCircle, label: "WhatsApp", value: "Escríbenos ahora", href: waLink("Hola, quiero información sobre una fachada."), ext: true },
                  { icon: MapPin, label: "Zona", value: site.area },
                  { icon: Clock, label: "Horario", value: `${site.hours} · Urgencias 24 h` },
                ].map((r) => {
                  const Row = r.href ? "a" : "div"
                  return (
                    <Row
                      key={r.label}
                      {...(r.href ? { href: r.href, ...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
                      className={`group flex items-center gap-3.5 py-3.5 ${r.href ? "cursor-pointer" : ""}`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-colors group-hover:bg-white/15">
                        <r.icon className="h-5 w-5 text-white" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-white/55">{r.label}</span>
                        <span className="block truncate font-semibold">{r.value}</span>
                      </span>
                      {r.href ? <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/35 transition-colors group-hover:text-white" /> : null}
                    </Row>
                  )
                })}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a href={telLink} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-ink transition hover:bg-white/90">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
                <a href={waLink("Hola, quiero información sobre una fachada.")} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-burdeos px-4 text-sm font-semibold text-white transition hover:bg-burdeos-dark">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Tira de confianza */}
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border bg-line sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((x) => (
            <div key={x.t} className="bg-white p-5">
              <x.icon className="h-5 w-5 text-burdeos" />
              <div className="mt-2.5 text-sm font-semibold text-ink">{x.t}</div>
              <div className="mt-0.5 text-xs text-warm">{x.d}</div>
            </div>
          ))}
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
                <div><span className="block text-xs text-warm">Horario</span><span className="font-semibold text-ink">{site.hours}</span><span className="block text-sm text-warm">Urgencias 24 h</span></div>
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
