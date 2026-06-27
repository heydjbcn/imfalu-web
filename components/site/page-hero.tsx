import Link from "next/link"
import type { ReactNode } from "react"
import { ChevronRight, ArrowRight } from "lucide-react"
import { waLink } from "@/lib/site"

export interface Crumb {
  label: string
  href?: string
}

/**
 * Cabecera de página centrada y cuidada: breadcrumb, "pill" de sección, H1
 * grande, subtítulo y CTAs. Tono claro (marca). Reutilizada en servicios,
 * fachadas, proyectos y empresa.
 */
export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  cta = true,
}: {
  breadcrumb?: Crumb[]
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  cta?: boolean
}) {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 opacity-70"
        style={{ background: "radial-gradient(55% 100% at 50% 0%, rgba(155,35,53,0.10), transparent 70%)" }}
      />
      <div className="container-x py-16 text-center md:py-24">
        {breadcrumb?.length ? (
          <nav className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-warm">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="h-3.5 w-3.5" /> : null}
                {b.href ? (
                  <Link href={b.href} className="hover:text-burdeos">{b.label}</Link>
                ) : (
                  <span className="text-ink">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-burdeos shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-burdeos" />
            {eyebrow}
          </span>
        ) : null}

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm">{subtitle}</p>
        ) : null}

        {cta ? (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark"
            >
              Pide presupuesto <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink("Hola, quiero información sobre una fachada.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
