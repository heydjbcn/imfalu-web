import type { Metadata } from "next"
import { Award, Building2, Ruler, TrendingUp, ShieldCheck, Leaf } from "lucide-react"
import { site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Sobre nosotros — 30 años en fachadas de aluminio y cristal",
  description:
    "IMFALÚ: más de 30 años y +300.000 m² de fachada intervenida en Barcelona. Especialistas en mantenimiento, reparación y rehabilitación de fachadas de aluminio y cristal.",
  alternates: { canonical: "/sobre-nosotros" },
}

const HITOS = [
  { icon: Award, v: "30 años", d: "de experiencia en el sector" },
  { icon: Ruler, v: "+300.000 m²", d: "de fachada intervenida" },
  { icon: Building2, v: "+150 edificios", d: "en Barcelona y área metropolitana" },
  { icon: TrendingUp, v: "~20%", d: "de crecimiento anual" },
]

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="border-b bg-cream">
        <div className="container-x py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">La empresa</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-ink md:text-5xl">
            30 años especializados en fachadas de aluminio y cristal
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-warm">
            Los profesionales que formamos IMFALÚ acumulamos una amplia experiencia en construcción y
            rehabilitación de fachadas, con más de 300.000 m² intervenidos. Nacimos para dar respuesta a
            la creciente demanda de mantenimiento, reparación y rehabilitación de fachadas de aluminio y
            cristal de propietarios, administradores de fincas y departamentos de mantenimiento.
          </p>
        </div>
      </section>

      {/* Hitos */}
      <section className="container-x py-14">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {HITOS.map((h) => (
            <div key={h.v} className="rounded-2xl border bg-white p-6">
              <h.icon className="h-7 w-7 text-burdeos" />
              <div className="mt-3 text-2xl font-bold text-ink">{h.v}</div>
              <div className="mt-1 text-sm text-warm">{h.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Premio + valores */}
      <section className="bg-cream py-16">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7">
            <Award className="h-8 w-8 text-burdeos" />
            <h2 className="mt-4 text-xl font-bold text-ink">Reconocidos en el sector</h2>
            <p className="mt-3 text-warm">
              Presentamos candidatura a los <strong className="text-ink">Premios Nacionales Facility
              Management &amp; Services</strong> por nuestro trabajo en mantenimiento y regeneración de
              fachadas, destacando los +300.000 m² intervenidos, los más de 150 edificios y ser
              pioneros en aplicar tratamientos por fotocatálisis.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-1">
            {[
              { icon: ShieldCheck, t: "Trabajo en altura certificado", d: "Personal y medios homologados para trabajo vertical seguro." },
              { icon: Building2, t: "Especialistas, no generalistas", d: "Solo fachadas de aluminio y cristal. Es lo único que hacemos." },
              { icon: Leaf, t: "Pioneros en fotocatálisis", d: "Tratamientos que reducen químicos y cuidan el medio ambiente." },
            ].map((v) => (
              <div key={v.t} className="flex gap-4 rounded-2xl border bg-white p-5">
                <v.icon className="h-6 w-6 shrink-0 text-burdeos" />
                <div>
                  <h3 className="font-semibold text-ink">{v.t}</h3>
                  <p className="mt-1 text-sm text-warm">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`¿Tu edificio necesita un especialista en fachadas en ${site.city}?`} />
    </>
  )
}
