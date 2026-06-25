import type { Metadata } from "next"
import { MapPin, Target, Wrench, CheckCircle2 } from "lucide-react"
import { projects, site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"
import { ProjectGallery } from "@/components/site/project-gallery"

export const metadata: Metadata = {
  title: "Proyectos de fachadas en Barcelona",
  description:
    "Edificios donde hemos intervenido la fachada de aluminio y cristal en Barcelona y área metropolitana: WTC Cornellà, Edificio Ski (Meliá), Parc Vallsolana, Torre Tarragona y más.",
  alternates: { canonical: "/proyectos" },
}

export default function ProyectosPage() {
  return (
    <>
      <section className="border-b bg-cream">
        <div className="container-x py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Proyectos</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-ink md:text-4xl">
            Edificios donde hemos trabajado
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-warm">
            Más de 150 edificios y +300.000 m² de fachada de aluminio y cristal intervenida en {site.area}.
          </p>
        </div>
      </section>

      <div className="container-x space-y-16 py-16">
        {projects.map((p, idx) => (
          <article key={p.slug} className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <ProjectGallery images={p.images} title={p.title} />
            </div>
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-2xl font-bold text-ink">{p.title}</h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-warm">
                <MapPin className="h-4 w-4 text-burdeos" /> {p.location} · {p.type}
              </p>
              <dl className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                  <div><dt className="text-sm font-semibold text-ink">El reto</dt><dd className="text-sm text-warm">{p.reto}</dd></div>
                </div>
                <div className="flex gap-3">
                  <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                  <div><dt className="text-sm font-semibold text-ink">Qué hicimos</dt><dd className="text-sm text-warm">{p.solucion}</dd></div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                  <div><dt className="text-sm font-semibold text-ink">Resultado</dt><dd className="text-sm text-warm">{p.resultado}</dd></div>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <CtaBand title="¿Quieres que tu edificio sea el próximo?" />
    </>
  )
}
