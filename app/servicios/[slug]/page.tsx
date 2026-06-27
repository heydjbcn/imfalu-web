import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
  ArrowRight, Check, ChevronRight, AlertCircle, Award, Building2, FileText,
} from "lucide-react"
import { services, site } from "@/lib/site"
import { FAQ_BY_SLUG, PROCESS } from "@/lib/service-faqs"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ExpandingGallery } from "@/components/site/expanding-gallery"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { PageHero, type Crumb } from "@/components/site/page-hero"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: s.seoTitle,
    description: s.metaDescription,
    keywords: [...s.keywords, ...s.secondaryKeywords],
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { type: "website", title: `${s.seoTitle} · ${site.name}`, description: s.metaDescription, url: `/servicios/${s.slug}`, images: [s.image] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()
  const faqs = FAQ_BY_SLUG[slug] ?? []
  const SUBS = ["mantenimiento-preventivo", "mantenimiento-correctivo"]
  const others = services.filter((x) => x.slug !== slug && !SUBS.includes(x.slug))
  const TIPOS_LINKS = [
    { label: "Muro cortina", href: "/fachadas/muro-cortina" },
    { label: "Fachada acristalada", href: "/fachadas/fachada-acristalada" },
    { label: "Fachada de aluminio", href: "/fachadas/fachada-aluminio" },
    { label: "Rehabilitación de fachadas", href: "/fachadas/rehabilitacion" },
  ]
  const TERMS: Record<string, string> = {
    "mantenimiento-fachadas": "el mantenimiento de fachadas",
    "mantenimiento-preventivo": "el mantenimiento preventivo",
    "mantenimiento-correctivo": "el mantenimiento correctivo",
    reparacion: "la reparación de fachadas",
    regeneracion: "la regeneración de fachadas",
    "informes-tecnicos": "el informe técnico de fachada",
    "pruebas-estanqueidad": "las pruebas de estanqueidad",
    fotocatalisis: "la fotocatálisis",
  }
  const term = TERMS[slug] ?? "este servicio"
  const isSubMantenimiento = slug === "mantenimiento-preventivo" || slug === "mantenimiento-correctivo"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: s.seoTitle,
        url: `${site.url}/servicios/${s.slug}`,
        datePublished: site.lastUpdated,
        dateModified: site.lastUpdated,
        inLanguage: "es-ES",
      },
      {
        "@type": "Service",
        name: s.seoTitle,
        serviceType: s.title,
        areaServed: site.area,
        provider: { "@id": `${site.url}/#org` },
        description: s.answer,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/#servicios` },
          ...(isSubMantenimiento ? [{ "@type": "ListItem", position: 3, name: "Mantenimiento", item: `${site.url}/servicios/mantenimiento-fachadas` }] : []),
          { "@type": "ListItem", position: isSubMantenimiento ? 4 : 3, name: s.title, item: `${site.url}/servicios/${s.slug}` },
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

      {/* Cabecera */}
      <PageHero
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/#servicios" },
          ...(isSubMantenimiento ? [{ label: "Mantenimiento", href: "/servicios/mantenimiento-fachadas" }] : []),
          { label: s.title },
        ] as Crumb[]}
        eyebrow="Servicio"
        title={s.seoTitle}
        subtitle={s.answer}
      />

      {/* Banda de imagen (se ensancha al hacer scroll) */}
      <section className="bg-cream py-6 sm:py-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink" minHeight={220} maxHeight={400}>
            <Image src={s.image} alt={`${s.title} de fachadas de aluminio y cristal en ${site.city}`} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-lg leading-relaxed text-warm">{s.intro}</p>
          {/* Qué incluye */}
          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Qué incluye {term}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-ink">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Cuándo lo necesitas */}
          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Cuándo necesitas {term}</h2>
          <ul className="mt-5 space-y-3">
            {s.when.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-warm">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span>{w}</span>
              </li>
            ))}
          </ul>

          {/* Nota aclaratoria (normativa) */}
          {s.note ? (
            <div className="mt-12 rounded-2xl border border-l-4 border-l-burdeos bg-cream p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-ink">
                <FileText className="h-5 w-5 shrink-0 text-burdeos" /> {s.note.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-warm">
                {s.note.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ) : null}

          {/* Cómo trabajamos */}
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

          {/* Por qué IMFALÚ */}
          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Por qué elegir IMFALÚ para {term}</h2>
          <p className="mt-4 text-warm">
            No somos una empresa de obra ni un multiservicio: somos especialistas en fachadas de
            aluminio y cristal, y es lo único que hacemos. Más de 30 años de experiencia, trabajo en
            altura certificado y servicio de urgencias para administradores de fincas, property managers
            y departamentos de mantenimiento en {site.area}.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-[1fr_1.45fr_0.85fr_0.85fr]">
            {site.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border bg-cream px-5 py-4">
                <div className="whitespace-nowrap text-xl font-bold text-burdeos sm:text-2xl">{st.value}<span className="text-warm">{st.suffix}</span></div>
                <div className="mt-1 text-xs text-warm">{st.label}</div>
              </div>
            ))}
          </div>

          {/* Galería de trabajos */}
          {s.gallery?.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Algunos de nuestros trabajos</h2>
              <div className="mt-5">
                <ExpandingGallery items={s.gallery} />
              </div>
            </>
          ) : null}

          {/* FAQ */}
          {faqs.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">Preguntas frecuentes sobre {term}</h2>
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

          <p className="mt-10 text-xs text-warm">Última actualización: {site.lastUpdatedLabel}</p>
        </div>

        {/* Aside */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-cream p-6">
            <h3 className="font-semibold text-ink">¿Hablamos de tu fachada?</h3>
            <p className="mt-2 text-sm text-warm">Te damos presupuesto sin compromiso. Más de 30 años en {site.city}.</p>
            <Link href="/contacto" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burdeos px-5 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
              Pedir presupuesto <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:+34${site.phone}`} className="mt-2 block text-center text-sm font-semibold text-ink hover:text-burdeos">
              o llámanos: {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-5 rounded-2xl border p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-ink"><Award className="h-4 w-4 text-burdeos" /> Especialistas en fachadas</h3>
            <p className="mt-2 text-sm text-warm">Aluminio y cristal, muro cortina y fachada acristalada. +150 edificios en Barcelona y área metropolitana.</p>
          </div>

          {slug === "mantenimiento-fachadas" ? (
            <div className="mt-5 rounded-2xl border p-6">
              <h3 className="text-sm font-semibold text-ink">Tipo de mantenimiento</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/servicios/mantenimiento-preventivo" className="flex items-center gap-1.5 text-warm hover:text-burdeos"><ChevronRight className="h-3.5 w-3.5" /> Mantenimiento preventivo</Link></li>
                <li><Link href="/servicios/mantenimiento-correctivo" className="flex items-center gap-1.5 text-warm hover:text-burdeos"><ChevronRight className="h-3.5 w-3.5" /> Mantenimiento correctivo</Link></li>
              </ul>
            </div>
          ) : null}

          <div className="mt-5 rounded-2xl border p-6">
            <h3 className="text-sm font-semibold text-ink">Otros servicios</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/servicios/${o.slug}`} className="flex items-center gap-1.5 text-warm hover:text-burdeos">
                    <Building2 className="h-3.5 w-3.5" /> {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border p-6">
            <h3 className="text-sm font-semibold text-ink">Tipos de fachada</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {TIPOS_LINKS.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="flex items-center gap-1.5 text-warm hover:text-burdeos">
                    <ChevronRight className="h-3.5 w-3.5" /> {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand />
    </>
  )
}
