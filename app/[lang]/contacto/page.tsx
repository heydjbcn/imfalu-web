import type { Metadata } from "next"
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, BadgeCheck, Award, Navigation, ArrowUpRight, Mail } from "lucide-react"
import { site, telLink, waLink } from "@/lib/site"
import { getSite } from "@/lib/content"
import { hasLocale, defaultLocale, type Locale } from "@/lib/i18n"
import { ContactForm } from "@/components/site/contact-form"

const TRUST_ICONS = [BadgeCheck, Clock, ShieldCheck, Award]

const T = {
  es: {
    metaTitle: "Contacto: presupuesto de fachadas en Barcelona",
    metaDesc: "Pide presupuesto sin compromiso para el mantenimiento, reparación o rehabilitación de tu fachada de aluminio y cristal en Barcelona. Tel y WhatsApp.",
    eyebrow: "Contacto",
    h1: "Presupuesto de fachadas de aluminio y cristal en Barcelona",
    leadStrong: "Hablemos de tu fachada.",
    leadRest: "Cuéntanos qué necesitas y te damos presupuesto sin compromiso. Si es urgente (un cristal roto, un riesgo en fachada), llámanos o escríbenos por WhatsApp.",
    formTitle: "Cuéntanos tu caso", formSub: "Rellena el formulario y te damos presupuesto sin compromiso.",
    directo: "Contacto directo", directoSub: "Estamos a una llamada. Urgencias 24 h.",
    rTel: "Teléfono", rWa: "WhatsApp", rWaVal: "Escríbenos ahora", rEmail: "Email", rZona: "Zona", rHorario: "Horario",
    llamar: "Llamar", waMsg: "Hola, quiero información sobre una fachada.",
    trust: [
      { t: "Presupuesto sin compromiso", d: "Te valoramos la fachada sin coste." },
      { t: "Respuesta en 24 h", d: "Y urgencias 24 h para riesgos." },
      { t: "Trabajo en altura certificado", d: "Personal y medios homologados." },
      { t: "+30 años · +150 edificios", d: "Especialistas en aluminio y cristal." },
    ],
    dondeEyebrow: "Dónde estamos", dondeTitle: "Nuestras oficinas en Cornellà",
    dondeText: "Trabajamos en toda el área metropolitana de Barcelona: Cornellà, L'Hospitalet, Sant Cugat, Barberà y alrededores.",
    direccion: "Dirección", comoLlegar: "Cómo llegar", urgencias: "Urgencias 24 h",
  },
  ca: {
    metaTitle: "Contacte: pressupost de façanes a Barcelona",
    metaDesc: "Demana pressupost sense compromís per al manteniment, reparació o rehabilitació de la teva façana d'alumini i vidre a Barcelona. Tel i WhatsApp.",
    eyebrow: "Contacte",
    h1: "Pressupost de façanes d'alumini i vidre a Barcelona",
    leadStrong: "Parlem de la teva façana.",
    leadRest: "Explica'ns què necessites i et donem pressupost sense compromís. Si és urgent (un vidre trencat, un risc en façana), truca'ns o escriu-nos per WhatsApp.",
    formTitle: "Explica'ns el teu cas", formSub: "Omple el formulari i et donem pressupost sense compromís.",
    directo: "Contacte directe", directoSub: "Som a una trucada. Urgències 24 h.",
    rTel: "Telèfon", rWa: "WhatsApp", rWaVal: "Escriu-nos ara", rEmail: "Email", rZona: "Zona", rHorario: "Horari",
    llamar: "Trucar", waMsg: "Hola, vull informació sobre una façana.",
    trust: [
      { t: "Pressupost sense compromís", d: "Et valorem la façana sense cost." },
      { t: "Resposta en 24 h", d: "I urgències 24 h per a riscos." },
      { t: "Treball en alçada certificat", d: "Personal i mitjans homologats." },
      { t: "+30 anys · +150 edificis", d: "Especialistes en alumini i vidre." },
    ],
    dondeEyebrow: "On som", dondeTitle: "Les nostres oficines a Cornellà",
    dondeText: "Treballem a tota l'àrea metropolitana de Barcelona: Cornellà, L'Hospitalet, Sant Cugat, Barberà i rodalies.",
    direccion: "Adreça", comoLlegar: "Com arribar-hi", urgencias: "Urgències 24 h",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: l === "es" ? "/contacto" : "/ca/contacto", languages: { es: "/contacto", ca: "/ca/contacto", "x-default": "/contacto" } },
    openGraph: { type: "website", url: `${site.url}${l === "es" ? "/contacto" : "/ca/contacto"}`, images: ["/og.jpg"] },
  }
}

export default async function ContactoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  const siteL = getSite(l)
  const rows = [
    { icon: Phone, label: t.rTel, value: site.phoneDisplay, href: telLink, ext: false },
    { icon: MessageCircle, label: t.rWa, value: t.rWaVal, href: waLink(t.waMsg), ext: true },
    { icon: Mail, label: t.rEmail, value: site.email, href: `mailto:${site.email}`, ext: false },
    { icon: MapPin, label: t.rZona, value: siteL.area, href: undefined, ext: false },
    { icon: Clock, label: t.rHorario, value: `${site.hours} · ${t.urgencias}`, href: undefined, ext: false },
  ]
  return (
    <>
      <section className="container-x py-14 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">{t.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">{t.h1}</h1>
          <p className="mt-4 text-lg text-warm">
            <strong className="text-ink">{t.leadStrong}</strong> {t.leadRest}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="rounded-2xl border bg-white shadow-sm">
            <div className="border-b px-6 py-5 md:px-8">
              <h2 className="text-lg font-bold text-ink">{t.formTitle}</h2>
              <p className="mt-1 text-sm text-warm">{t.formSub}</p>
            </div>
            <div className="p-6 md:p-8">
              <ContactForm lang={l} />
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white shadow-sm">
            <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: "radial-gradient(75% 60% at 100% 0%, rgba(155,35,53,0.5), transparent 60%)" }} />
            <div className="relative">
              <h2 className="text-lg font-bold">{t.directo}</h2>
              <p className="mt-1 text-sm text-white/55">{t.directoSub}</p>

              <div className="mt-5 divide-y divide-white/10">
                {rows.map((r) => {
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
                  <Phone className="h-4 w-4" /> {t.llamar}
                </a>
                <a href={waLink(t.waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-burdeos px-4 text-sm font-semibold text-white transition hover:bg-burdeos-dark">
                  <MessageCircle className="h-4 w-4" /> {t.rWa}
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.map((x, i) => {
            const Icon = TRUST_ICONS[i] ?? BadgeCheck
            return (
              <div key={x.t} className="bg-white p-5">
                <Icon className="h-5 w-5 text-burdeos" />
                <div className="mt-2.5 text-sm font-semibold text-ink">{x.t}</div>
                <div className="mt-0.5 text-xs text-warm">{x.d}</div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-x">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">{t.dondeEyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{t.dondeTitle}</h2>
          <p className="mt-4 max-w-2xl text-warm">{t.dondeText}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
            <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                <div>
                  <span className="block text-xs text-warm">{t.direccion}</span>
                  <span className="font-semibold text-ink">{site.address.street}</span>
                  <span className="block text-sm text-warm">{site.address.postalCode} {site.address.locality} ({site.address.region})</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                <div><span className="block text-xs text-warm">{t.rHorario}</span><span className="font-semibold text-ink">{site.hours}</span><span className="block text-sm text-warm">{t.urgencias}</span></div>
              </div>
              <div className="mt-1 flex flex-col gap-2.5">
                <a href={site.address.directions} target="_blank" rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-burdeos px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-burdeos-dark">
                  <Navigation className="h-4 w-4" /> {t.comoLlegar}
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
