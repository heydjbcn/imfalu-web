import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
  ArrowRight, ChevronRight, AlertCircle, Award, Building2, FileText,
} from "lucide-react"
import { services, site } from "@/lib/site"
import { getService, getServices, getServiceFaqs, getServiceSections, getProcess, getSite } from "@/lib/content"
import { getDictionary, hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ExpandingGallery } from "@/components/site/expanding-gallery"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { CheckList } from "@/components/site/check-list"
import { PageHero, type Crumb } from "@/components/site/page-hero"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const s = getService(l, slug)
  if (!s) return {}
  const path = `/servicios/${s.slug}`
  return {
    title: s.seoTitle,
    description: s.metaDescription,
    keywords: [...s.keywords, ...s.secondaryKeywords],
    alternates: { canonical: localizedPath(l, path), languages: { es: path, ca: `/ca${path}`, "x-default": path } },
    openGraph: { type: "website", title: `${s.seoTitle} · ${site.name}`, description: s.metaDescription, url: `${site.url}${localizedPath(l, path)}`, images: [s.image] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const s = getService(l, slug)
  if (!s) notFound()
  const dict = await getDictionary(l)
  const siteL = getSite(l)
  const faqs = getServiceFaqs(l, slug)
  const sections = getServiceSections(l, slug)
  const process = getProcess(l)
  const lp = (p: string) => localizedPath(l, p)
  const SUBS = ["mantenimiento-preventivo", "mantenimiento-correctivo"]
  const others = getServices(l).filter((x) => x.slug !== slug && !SUBS.includes(x.slug))
  const TIPOS_LINKS = [
    { label: dict.service.tipos.muroCortina, href: "/fachadas/muro-cortina" },
    { label: dict.service.tipos.acristalada, href: "/fachadas/fachada-acristalada" },
    { label: dict.service.tipos.aluminio, href: "/fachadas/fachada-aluminio" },
    { label: dict.service.tipos.rehabilitacion, href: "/fachadas/rehabilitacion" },
  ]
  const term = (dict.terms as Record<string, string>)[slug] ?? ""
  const isSubMantenimiento = slug === "mantenimiento-preventivo" || slug === "mantenimiento-correctivo"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: s.seoTitle,
        url: `${site.url}${lp(`/servicios/${s.slug}`)}`,
        datePublished: site.lastUpdated,
        dateModified: site.lastUpdated,
        inLanguage: l === "ca" ? "ca-ES" : "es-ES",
      },
      {
        "@type": "Service",
        name: s.seoTitle,
        serviceType: s.title,
        areaServed: siteL.area,
        provider: { "@id": `${site.url}/#org` },
        description: s.answer,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.common.inicio, item: `${site.url}${lp("/")}` },
          { "@type": "ListItem", position: 2, name: dict.nav.servicios, item: `${site.url}${lp("/#servicios")}` },
          ...(isSubMantenimiento ? [{ "@type": "ListItem", position: 3, name: dict.service.mantenimiento, item: `${site.url}${lp("/servicios/mantenimiento-fachadas")}` }] : []),
          { "@type": "ListItem", position: isSubMantenimiento ? 4 : 3, name: s.title, item: `${site.url}${lp(`/servicios/${s.slug}`)}` },
        ],
      },
      faqs.length
        ? { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
        : null,
    ].filter(Boolean),
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        lang={l}
        breadcrumb={[
          { label: dict.common.inicio, href: lp("/") },
          { label: dict.nav.servicios, href: lp("/#servicios") },
          ...(isSubMantenimiento ? [{ label: dict.service.mantenimiento, href: lp("/servicios/mantenimiento-fachadas") }] : []),
          { label: s.title },
        ] as Crumb[]}
        eyebrow={dict.service.eyebrow}
        title={s.seoTitle}
        subtitle={s.answer}
      />

      <section className="bg-cream py-6 sm:py-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink" minHeight={220} maxHeight={400}>
            <Image src={s.image} alt={`${s.title} · ${site.city}`} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-lg leading-relaxed text-warm">{s.intro}</p>

          {sections.map((sec) => (
            <section key={sec.h}>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{sec.h}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-warm">
                {sec.body.map((p) => (<p key={p}>{p}</p>))}
              </div>
            </section>
          ))}

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.queIncluye} {term}</h2>
          <CheckList items={s.bullets} className="mt-6" />

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.cuandoNecesitas} {term}</h2>
          <ul className="mt-5 space-y-3">
            {s.when.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-warm">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span>{w}</span>
              </li>
            ))}
          </ul>

          {s.note ? (
            <div className="mt-12 rounded-2xl border border-l-4 border-l-burdeos bg-cream p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-ink">
                <FileText className="h-5 w-5 shrink-0 text-burdeos" /> {s.note.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-warm">
                {s.note.body.map((p) => (<p key={p}>{p}</p>))}
              </div>
            </div>
          ) : null}

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.comoTrabajamos}</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {process.map((p, i) => (
              <li key={p.t} className="rounded-2xl border bg-white p-5">
                <span className="text-sm font-bold text-burdeos">0{i + 1}</span>
                <h3 className="mt-1 font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-sm text-warm">{p.d}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.porQueElegir} {term}</h2>
          <p className="mt-4 text-warm">{dict.service.porQueTexto} {siteL.area}.</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-[1fr_1.45fr_0.85fr_0.85fr]">
            {siteL.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border bg-cream px-5 py-4">
                <div className="whitespace-nowrap text-xl font-bold text-burdeos sm:text-2xl">{st.value}<span className="text-warm">{st.suffix}</span></div>
                <div className="mt-1 text-xs text-warm">{st.label}</div>
              </div>
            ))}
          </div>

          {s.gallery?.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.algunosTrabajos}</h2>
              <div className="mt-5"><ExpandingGallery items={s.gallery} /></div>
            </>
          ) : null}

          {faqs.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.preguntasSobre} {term}</h2>
              <div className="mt-5 divide-y rounded-2xl border bg-white">
                {faqs.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                      {f.q}
                      <ChevronRight className="h-4 w-4 text-burdeos transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-warm">{f.a}</p>
                  </details>
                ))}
              </div>
            </>
          ) : null}

          <p className="mt-10 text-xs text-warm">{dict.common.actualizado}: {site.lastUpdatedLabel}</p>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-cream p-6">
            <h3 className="font-semibold text-ink">{dict.service.hablamos}</h3>
            <p className="mt-2 text-sm text-warm">{dict.service.hablamosTexto} {site.city}.</p>
            <Link href={lp("/contacto")} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burdeos px-5 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
              {dict.cta.pedirPresupuesto} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:+34${site.phone}`} className="mt-2 block text-center text-sm font-semibold text-ink hover:text-burdeos">
              {dict.service.oLlamanos} {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-5 rounded-2xl border p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink"><Award className="h-4 w-4 text-burdeos" /> {dict.service.especialistas}</h3>
            <p className="mt-2 text-sm text-warm">{dict.service.especialistasTexto}</p>
          </div>

          {slug === "mantenimiento-fachadas" ? (
            <div className="mt-5 rounded-2xl border p-6">
              <h3 className="text-sm font-semibold text-ink">{dict.service.tipoMantenimiento}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href={lp("/servicios/mantenimiento-preventivo")} className="flex items-center gap-1.5 text-warm hover:text-burdeos"><ChevronRight className="h-3.5 w-3.5" /> {dict.service.preventivo}</Link></li>
                <li><Link href={lp("/servicios/mantenimiento-correctivo")} className="flex items-center gap-1.5 text-warm hover:text-burdeos"><ChevronRight className="h-3.5 w-3.5" /> {dict.service.correctivo}</Link></li>
              </ul>
            </div>
          ) : null}

          <div className="mt-5 rounded-2xl border p-6">
            <h3 className="text-sm font-semibold text-ink">{dict.service.otrosServicios}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={lp(`/servicios/${o.slug}`)} className="flex items-center gap-1.5 text-warm hover:text-burdeos">
                    <Building2 className="h-3.5 w-3.5" /> {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border p-6">
            <h3 className="text-sm font-semibold text-ink">{dict.service.tiposFachada}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {TIPOS_LINKS.map((t) => (
                <li key={t.href}>
                  <Link href={lp(t.href)} className="flex items-center gap-1.5 text-warm hover:text-burdeos">
                    <ChevronRight className="h-3.5 w-3.5" /> {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand lang={l} />
    </>
  )
}
