import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  ShieldCheck, Wrench, Sparkles, ClipboardCheck, Droplets, Leaf,
  ArrowRight, Check, ChevronRight, AlertCircle, Award, Building2, FileText,
} from "lucide-react"
import { services, site } from "@/lib/site"
import { FAQ_BY_SLUG, PROCESS } from "@/lib/service-faqs"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ProjectGallery } from "@/components/site/project-gallery"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Wrench, Sparkles, ClipboardCheck, Droplets, Leaf,
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
    openGraph: { title: `${s.seoTitle} · ${site.name}`, description: s.metaDescription, url: `/servicios/${s.slug}`, images: [s.image] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()
  const faqs = FAQ_BY_SLUG[slug] ?? []
  const others = services.filter((x) => x.slug !== slug)
  const TERMS: Record<string, string> = {
    "mantenimiento-fachadas": "el mantenimiento de fachadas",
    reparacion: "la reparación de fachadas",
    regeneracion: "la regeneración de fachadas",
    "informes-tecnicos": "el informe técnico de fachada",
    "pruebas-estanqueidad": "las pruebas de estanqueidad",
    fotocatalisis: "la fotocatálisis",
  }
  const term = TERMS[slug] ?? "este servicio"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.seoTitle,
        serviceType: s.title,
        areaServed: site.area,
        provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: `+34${site.phone}` },
        description: s.intro,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${site.url}/#servicios` },
          { "@type": "ListItem", position: 3, name: s.title, item: `${site.url}/servicios/${s.slug}` },
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
      <section className="bg-cream">
        <div className="container-x py-12 md:py-16">
          <nav className="mb-5 flex items-center gap-1.5 text-sm text-warm">
            <Link href="/" className="hover:text-burdeos">Inicio</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#servicios" className="hover:text-burdeos">Servicios</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{s.title}</span>
          </nav>
          <h1 className="max-w-3xl text-3xl font-bold text-ink md:text-4xl">
            {s.seoTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-warm">{s.intro}</p>
        </div>
      </section>

      {/* Banda de imagen */}
      <section className="relative h-[240px] w-full overflow-hidden bg-ink md:h-[380px]">
        <Image src={s.image} alt={`${s.title} de fachadas de aluminio y cristal en ${site.city}`} fill priority className="object-cover" sizes="100vw" />
      </section>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          {/* Qué incluye */}
          <h2 className="text-2xl font-bold text-ink">Qué incluye {term}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-ink">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Cuándo lo necesitas */}
          <h2 className="mt-12 text-2xl font-bold text-ink">Cuándo necesitas {term}</h2>
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
          <h2 className="mt-12 text-2xl font-bold text-ink">Cómo trabajamos</h2>
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
          <h2 className="mt-12 text-2xl font-bold text-ink">Por qué elegir IMFALÚ para {term}</h2>
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
              <h2 className="mt-12 text-2xl font-bold text-ink">Algunos de nuestros trabajos</h2>
              <div className="mt-5">
                <ProjectGallery images={s.gallery} title={s.title} />
              </div>
            </>
          ) : null}

          {/* FAQ */}
          {faqs.length ? (
            <>
              <h2 className="mt-12 text-2xl font-bold text-ink">Preguntas frecuentes sobre {term}</h2>
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
        </aside>
      </div>

      <CtaBand />
    </>
  )
}
