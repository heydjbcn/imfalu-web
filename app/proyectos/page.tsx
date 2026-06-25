import type { Metadata } from "next"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { projects, site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Proyectos de fachadas en Barcelona",
  description:
    "Algunos de los edificios donde hemos intervenido la fachada de aluminio y cristal en Barcelona y área metropolitana: rehabilitación, mantenimiento y regeneración.",
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
            Más de 150 edificios y +300.000 m² de fachada intervenida en {site.area}. Una muestra de
            nuestro trabajo en fachadas de aluminio y cristal.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image src={p.image} alt={`${p.type} — ${p.title}, ${p.location}`} fill className="object-cover" sizes="(max-width:1024px) 50vw, 33vw" />
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-ink">{p.title}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-warm">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
                <p className="mt-1 text-sm text-warm">{p.type}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-warm">
          ¿Tienes un edificio en {site.city}? Podemos visitarlo y darte un diagnóstico de la fachada.
        </p>
      </section>

      <CtaBand title="¿Quieres que tu edificio sea el próximo?" />
    </>
  )
}
