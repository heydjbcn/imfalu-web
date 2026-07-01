import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import { services, site } from "@/lib/site"

export default function NotFound() {
  const principales = services.filter(
    (s) => !["mantenimiento-preventivo", "mantenimiento-correctivo"].includes(s.slug),
  )
  return (
    <section className="bg-cream">
      <div className="container-x flex flex-col items-center py-24 text-center md:py-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-burdeos">Error 404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Página no encontrada</h1>
        <p className="mt-4 max-w-xl text-warm">
          La página que buscas no existe o se ha movido. Puede que el enlace esté mal escrito.
          Te dejamos por dónde seguir.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark"
          >
            <Home className="h-4 w-4" /> Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
          >
            Contactar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 w-full max-w-2xl rounded-2xl border bg-white p-6 text-left">
          <h2 className="text-sm font-semibold text-ink">Nuestros servicios</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {principales.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-warm transition-colors hover:text-burdeos"
                >
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-burdeos" /> {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-sm text-warm">
          ¿Necesitas ayuda con una fachada? Llámanos al{" "}
          <a href={`tel:+34${site.phone}`} className="font-semibold text-ink hover:text-burdeos">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  )
}
