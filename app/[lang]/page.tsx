import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
  ArrowRight, Building2, Clock, Award, MapPin, BadgeCheck, ChevronRight,
} from "lucide-react"
import { SectorsTabs } from "@/components/site/sectors-tabs"
import { site, waLink } from "@/lib/site"
import { getServices, getProjects, getSite } from "@/lib/content"
import { getDictionary, hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"
import { Reviews } from "@/components/site/reviews"
import { FaqSection } from "@/components/site/faq-section"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { BrandWatermark } from "@/components/site/brand-watermark"
import { CtaBand } from "@/components/site/cta-band"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
}
const FEATURE_ICONS = [Award, Clock, ShieldCheck, Building2]
const CONFIANZA_ICONS = [ShieldCheck, BadgeCheck, Clock, Award]

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  return { alternates: { canonical: l === "es" ? "/" : "/ca", languages: { es: "/", ca: "/ca", "x-default": "/" } } }
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const dict = await getDictionary(l)
  const h = dict.home
  const siteL = getSite(l)
  const services = getServices(l)
  const projects = getProjects(l)
  const lp = (p: string) => localizedPath(l, p)
  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="container-x grid gap-10 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">{h.heroEyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold text-ink md:text-4xl">{h.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warm">
              <strong className="text-ink">{h.heroLeadStrong}</strong> {h.heroLeadRest}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={lp("/contacto")}
                className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark">
                {dict.cta.presupuesto} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink(dict.whatsapp.msg)} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5">
                {dict.cta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BANDA DE IMAGEN */}
      <section className="bg-cream py-6 sm:py-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink">
            <Image src="/headers/home.webp" alt={h.heroImgAlt} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b bg-white">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 text-center md:grid-cols-[1fr_1.15fr_1.15fr_0.75fr] md:items-center md:gap-y-0 md:divide-x md:divide-line">
          {siteL.stats.map((s) => (
            <div key={s.label} className="px-3 md:px-5">
              <div className="whitespace-nowrap text-2xl font-bold text-burdeos md:text-2xl lg:text-4xl">
                {s.value}<span className="text-warm">{s.suffix}</span>
              </div>
              <div className="mx-auto mt-1 max-w-[170px] text-sm text-warm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">{h.serviciosEyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{h.serviciosTitle}</h2>
          <p className="mt-4 text-lg text-warm">{h.serviciosText}</p>
        </div>
        <div className="mt-10 border-y divide-y">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? ShieldCheck
            return (
              <Link key={s.slug} href={lp(`/servicios/${s.slug}`)}
                className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-5 md:gap-8 md:py-6">
                <span className="font-mono text-sm font-bold text-burdeos md:text-base">{String(i + 1).padStart(2, "0")}</span>
                <div className="grid gap-1 md:grid-cols-[280px_1fr] md:items-baseline md:gap-8">
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
                    <Icon className="h-5 w-5 shrink-0 text-burdeos" /> {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm">{s.short}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-warm transition-all group-hover:translate-x-1 group-hover:text-burdeos" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* POR QUÉ IMFALÚ */}
      <section className="relative isolate overflow-hidden bg-sand py-20">
        <BrandWatermark />
        <div className="container-x relative z-10 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">{h.porQueEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{h.porQueTitle}</h2>
            <p className="mt-4 text-lg text-warm">{h.porQueText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {h.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i] ?? Award
              return (
                <div key={f.t} className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-burdeos/40 hover:shadow-[0_14px_40px_-14px_rgba(155,35,53,0.3)]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-burdeos/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-burdeos/10 text-burdeos transition-colors duration-300 group-hover:bg-burdeos group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 font-semibold text-ink">{f.t}</h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-warm">{f.d}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">{h.proyectosEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{h.proyectosTitle}</h2>
          </div>
          <Link href={lp("/proyectos")} className="inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos">
            {h.verProyectos} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image src={p.image} alt={`${p.type} — ${p.title}, ${p.location}`} fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-warm">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
                <p className="mt-1 text-sm text-warm">{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTORES */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">{h.sectoresEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{h.sectoresTitle}</h2>
            <p className="mt-4 text-lg text-warm">{h.sectoresText}</p>
          </div>
          <SectorsTabs lang={l} />
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="container-x py-14">
        <div className="grid gap-4 rounded-2xl border bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.confianza.map((c, i) => {
            const Icon = CONFIANZA_ICONS[i] ?? ShieldCheck
            return (
              <div key={c.t} className="flex gap-3">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-burdeos" />
                <div>
                  <h3 className="text-sm font-semibold text-ink">{c.t}</h3>
                  <p className="text-sm text-warm">{c.d}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Reviews />

      <FaqSection title={h.faqTitle} faqs={h.faqs} bg="cream" />

      <CtaBand lang={l} />
    </>
  )
}
