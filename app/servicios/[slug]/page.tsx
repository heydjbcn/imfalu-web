import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  ShieldCheck, Wrench, Sparkles, ClipboardCheck, Droplets, Leaf,
  ArrowRight, Check, ChevronRight,
} from "lucide-react"
import { services, site } from "@/lib/site"
import { FAQ_BY_SLUG, PROCESS } from "@/lib/service-faqs"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"

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
  const title = `${s.title} de aluminio y cristal en ${site.city}`
  return {
    title,
    description: s.description.slice(0, 155),
    keywords: s.keywords,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: `${title} · ${site.name}`, description: s.short, url: `/servicios/${s.slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()
  const Icon = ICONS[s.icon] ?? ShieldCheck
  const faqs = FAQ_BY_SLUG[slug] ?? []
  const others = services.filter((x) => x.slug !== slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${s.title} de fachadas de aluminio y cristal en ${site.city}`,
        serviceType: s.title,
        areaServed: site.area,
        provider: { "@type": "HomeAndConstructionBusiness", name: site.name, telephone: `+34${site.phone}` },
        description: s.description,
      },
      faqs.length
        ? {
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }
        : null,
    ].filter(Boolean),
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Cabecera */}
      <section className="border-b bg-cream">
        <div className="container-x py-12 md:py-16">
          <nav className="mb-5 flex items-center gap-1.5 text-sm text-warm">
            <Link href="/" className="hover:text-burdeos">Inicio</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#servicios" className="hover:text-burdeos">Servicios</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{s.title}</span>
          </nav>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-burdeos/10 text-burdeos">
            <Icon className="h-6 w-6" />
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold text-ink md:text-4xl">
            {s.title} de aluminio y cristal en {site.city}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-warm">{s.description}</p>
        </div>
      </section>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          {/* Qué incluye */}
          <h2 className="text-2xl font-bold text-ink">Qué incluye</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-ink">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

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

          {/* FAQ */}
          {faqs.length ? (
            <>
              <h2 className="mt-12 text-2xl font-bold text-ink">Preguntas frecuentes</h2>
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
            <h3 className="text-sm font-semibold text-ink">Otros servicios</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/servicios/${o.slug}`} className="text-warm hover:text-burdeos">{o.title}</Link>
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
