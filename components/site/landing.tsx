import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, MapPin } from "lucide-react"
import { projects, services, site, telLink, type GalleryItem } from "@/lib/site"
import { PROCESS } from "@/lib/service-faqs"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ExpandingGallery } from "@/components/site/expanding-gallery"
import { AnswerBlock } from "@/components/site/answer-block"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"

export interface LandingData {
  slug: string
  kicker: string
  h1: string
  intro: string
  bullets: string[]
  relatedSlugs: string[]
  faqs: { q: string; a: string }[]
  /** Respuesta directa y citable (answer-first), se muestra bajo el H1. */
  answer?: string
  /** Término para enriquecer los H2 con keyword secundaria, p.ej. "el muro cortina" */
  term?: string
  /** Fotos reales de trabajos */
  gallery?: GalleryItem[]
  /** Miga de pan (silo). Último item sin href = página actual. */
  breadcrumb?: { label: string; href?: string }[]
}

export function Landing({ data }: { data: LandingData }) {
  const related = services.filter((s) => data.relatedSlugs.includes(s.slug))
  const term = data.term ?? "fachadas de aluminio y cristal"
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: data.h1,
        url: `${site.url}/${data.slug}`,
        datePublished: site.lastUpdated,
        dateModified: site.lastUpdated,
        inLanguage: "es-ES",
      },
      {
        "@type": "Service",
        name: data.h1,
        areaServed: site.area,
        provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: `+34${site.phone}` },
        description: data.answer ?? data.intro,
      },
      data.breadcrumb?.length
        ? { "@type": "BreadcrumbList", itemListElement: data.breadcrumb.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.label, ...(b.href ? { item: `${site.url}${b.href}` } : {}) })) }
        : null,
      data.faqs.length
        ? { "@type": "FAQPage", mainEntity: data.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
        : null,
    ].filter(Boolean),
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(60% 80% at 80% 0%, rgba(155,35,53,0.5), transparent 60%)" }} />
        <div className="container-x relative py-16 md:py-20">
          {data.breadcrumb?.length ? (
            <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              {data.breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight className="h-3.5 w-3.5" /> : null}
                  {b.href ? <Link href={b.href} className="hover:text-white">{b.label}</Link> : <span className="text-white/90">{b.label}</span>}
                </span>
              ))}
            </nav>
          ) : null}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-warm-light">{data.kicker}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">{data.h1}</h1>
          {data.answer ? <AnswerBlock>{data.answer}</AnswerBlock> : null}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{data.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
              Pide presupuesto <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={telLink} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Banda de imagen (se ensancha al hacer scroll) */}
      <section className="bg-cream py-6 sm:py-8">
        <ExpandOnScroll className="bg-ink" minHeight={220} maxHeight={400}>
          <Image src={`/${data.slug}.webp`} alt={`${data.h1} en ${site.city}`} fill priority className="object-cover" sizes="100vw" />
        </ExpandOnScroll>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Qué hacemos en {term}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {data.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-ink">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span>{b}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Cómo trabajamos</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {PROCESS.map((p, i) => (
              <li key={p.t} className="rounded-2xl border bg-white p-5">
                <span className="text-sm font-bold text-burdeos">0{i + 1}</span>
                <h3 className="mt-1 font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-sm text-warm">{p.d}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Por qué elegir IMFALÚ para {term}</h2>
          <p className="mt-4 text-warm">
            No somos una empresa de obra ni un multiservicio: somos especialistas en fachadas de
            aluminio y cristal, y es lo único que hacemos. Esa concentración —más de 30 años, trabajo
            en altura certificado y servicio de urgencias 24 h— es la mayor garantía para
            administradores de fincas, property managers y departamentos de mantenimiento de {site.area}.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-[1fr_1.45fr_0.85fr_0.85fr]">
            {site.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border bg-cream px-5 py-4">
                <div className="whitespace-nowrap text-xl font-bold text-burdeos sm:text-2xl">{st.value}<span className="text-warm">{st.suffix}</span></div>
                <div className="mt-1 text-xs text-warm">{st.label}</div>
              </div>
            ))}
          </div>

          {data.gallery?.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Algunos de nuestros trabajos</h2>
              <div className="mt-5">
                <ExpandingGallery items={data.gallery} />
              </div>
            </>
          ) : null}

          {data.faqs.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Preguntas frecuentes sobre {term}</h2>
              <div className="mt-5 divide-y rounded-2xl border bg-white">
                {data.faqs.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                      {f.q} <ChevronRight className="h-4 w-4 text-burdeos transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-warm">{f.a}</p>
                  </details>
                ))}
              </div>
            </>
          ) : null}

          <p className="mt-10 text-xs text-warm">Última actualización: {site.lastUpdatedLabel}</p>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-cream p-6">
            <h3 className="font-semibold text-ink">Presupuesto sin compromiso</h3>
            <p className="mt-2 text-sm text-warm">Más de 30 años y +300.000 m² de fachada en {site.city}.</p>
            <Link href="/contacto" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burdeos px-5 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
              Pedir presupuesto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {related.length ? (
            <div className="rounded-2xl border p-6">
              <h3 className="text-sm font-semibold text-ink">Servicios relacionados</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((s) => (
                  <li key={s.slug}><Link href={`/servicios/${s.slug}`} className="text-warm hover:text-burdeos">{s.title}</Link></li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="rounded-2xl border p-6">
            <h3 className="text-sm font-semibold text-ink">Otros tipos de fachada</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "Muro cortina", href: "/fachadas/muro-cortina" },
                { label: "Fachada acristalada", href: "/fachadas/fachada-acristalada" },
                { label: "Fachada de aluminio", href: "/fachadas/fachada-aluminio" },
                { label: "Rehabilitación", href: "/fachadas/rehabilitacion" },
              ].filter((t) => t.href !== `/${data.slug}`).map((t) => (
                <li key={t.href}><Link href={t.href} className="text-warm hover:text-burdeos">{t.label}</Link></li>
              ))}
            </ul>
          </div>
          <Link href="/proyectos" className="block overflow-hidden rounded-2xl border">
            <div className="relative aspect-[4/3] bg-cream">
              <Image src={projects[0].image} alt="Proyecto de fachada en Barcelona" fill className="object-cover" sizes="320px" />
            </div>
            <div className="flex items-center gap-1.5 p-4 text-sm font-semibold text-burdeos">
              <MapPin className="h-4 w-4" /> Ver proyectos
            </div>
          </Link>
        </aside>
      </section>

      <CtaBand />
    </>
  )
}
