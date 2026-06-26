import type { Metadata } from "next"
import { MapPin, Target, Wrench, CheckCircle2 } from "lucide-react"
import { projects, site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"
import { ProjectGallery } from "@/components/site/project-gallery"
import { FaqSection } from "@/components/site/faq-section"

const FAQS = [
  { q: "¿En qué tipo de edificios trabajáis?", a: "En oficinas, hoteles, comunidades y edificios singulares con fachada de aluminio y cristal o muro cortina. Algunos ejemplos: WTC Cornellà, Edificio Ski (Meliá), Parc Vallsolana, Torre Tarragona y Hotel Roselló." },
  { q: "¿Podéis intervenir sin parar la actividad del edificio?", a: "Sí. Trabajamos con medios de elevación y en altura para mantener y reparar la fachada minimizando las molestias a oficinas, huéspedes o vecinos." },
  { q: "¿Trabajáis fuera de Barcelona ciudad?", a: "Sí, en toda el área metropolitana de Barcelona: Cornellà de Llobregat, Sant Cugat del Vallès, Barberà del Vallès y alrededores." },
  { q: "¿Cómo empieza un proyecto de fachada?", a: "Con un diagnóstico previo del estado del cerramiento y un informe técnico. A partir de ahí proponemos la intervención —mantenimiento, reparación, regeneración o rehabilitación— y un presupuesto sin compromiso." },
]

export const metadata: Metadata = {
  title: "Proyectos de fachadas en Barcelona",
  description:
    "Edificios donde hemos intervenido la fachada de aluminio y cristal en Barcelona: WTC Cornellà, Edificio Ski (Meliá), Parc Vallsolana, Torre Tarragona.",
  alternates: { canonical: "/proyectos" },
}

export default function ProyectosPage() {
  return (
    <>
      <section className="border-b bg-cream">
        <div className="container-x py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Proyectos</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-ink md:text-4xl">
            Proyectos de fachadas de aluminio y cristal en Barcelona
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-warm">
            Edificios donde hemos trabajado: más de 150 edificios y +300.000 m² de fachada de aluminio
            y cristal intervenida en {site.area}.
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
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">{p.title}</h2>
                {p.sector ? <span className="rounded-full bg-cream px-3 py-0.5 text-xs font-semibold text-burdeos">{p.sector}</span> : null}
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-warm">
                <MapPin className="h-4 w-4 text-burdeos" /> {p.location} · {p.type}
              </p>
              {p.metric ? (
                <p className="mt-3 inline-flex rounded-lg bg-burdeos/10 px-3 py-1.5 text-sm font-semibold text-burdeos">{p.metric}</p>
              ) : null}
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

      <FaqSection title="Preguntas frecuentes sobre nuestros proyectos" faqs={FAQS} bg="cream" />

      <CtaBand title="¿Quieres que tu edificio sea el próximo?" />
    </>
  )
}
