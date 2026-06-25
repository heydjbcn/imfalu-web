import type { Metadata } from "next"
import Link from "next/link"
import {
  Award, Building2, Ruler, TrendingUp, ShieldCheck, Leaf, Clock,
  Hotel, Users, Landmark, ArrowRight, ChevronRight,
} from "lucide-react"
import { services, site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Sobre nosotros — 30 años en fachadas de aluminio y cristal",
  description:
    "IMFALÚ: más de 30 años, +300.000 m² y +150 edificios de fachada de aluminio y cristal intervenida en Barcelona. Especialistas en mantenimiento, reparación y rehabilitación.",
  alternates: { canonical: "/sobre-nosotros" },
}

const HITOS = [
  { icon: Award, v: "30 años", d: "de experiencia en el sector" },
  { icon: Ruler, v: "+300.000 m²", d: "de fachada intervenida" },
  { icon: Building2, v: "+150 edificios", d: "en Barcelona y área metropolitana" },
  { icon: TrendingUp, v: "~20%", d: "de crecimiento anual" },
]

const COMPROMISO = [
  { icon: ShieldCheck, t: "Seguridad", d: "Trabajo en altura certificado y prevención de riesgos en cada obra. Personal y medios homologados." },
  { icon: Award, t: "Especialización", d: "Centrados en fachadas de aluminio y cristal: muro cortina, acristaladas y metálicas. Es lo que mejor sabemos hacer." },
  { icon: Clock, t: "Calidad y respuesta", d: "Respondemos por nuestro trabajo y disponemos de servicio de urgencias 24 h ante cualquier incidencia." },
  { icon: Leaf, t: "Sostenibilidad", d: "Pioneros en tratamientos por fotocatálisis, que reducen el uso de químicos y cuidan el entorno." },
]

const SECTORES = [
  { icon: Building2, t: "Oficinas" },
  { icon: Hotel, t: "Hoteles" },
  { icon: Users, t: "Comunidades" },
  { icon: Landmark, t: "Edificios singulares" },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-cream">
        <div className="container-x py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">La empresa</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-ink md:text-5xl">
            30 años especializados en fachadas de aluminio y cristal
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-warm">
            <strong className="text-ink">Cuidamos la piel de los edificios.</strong> Los profesionales que
            formamos IMFALÚ acumulamos una amplia experiencia en mantenimiento y rehabilitación de
            fachadas, con más de 300.000 m² intervenidos en Barcelona y su área metropolitana.
          </p>
        </div>
      </section>

      {/* Hitos */}
      <section className="border-b bg-white">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4 md:divide-x md:gap-y-0">
          {HITOS.map((h, i) => (
            <div key={h.v} className={i > 0 ? "md:pl-8" : ""}>
              <h.icon className="h-6 w-6 text-burdeos" />
              <div className="mt-3 text-3xl font-bold text-ink">{h.v}</div>
              <div className="mt-1 text-sm text-warm">{h.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trayectoria */}
      <section className="container-x grid gap-10 py-20 md:grid-cols-[280px_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">Trayectoria</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Especialistas, desde el primer día</h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-warm">
          <p>
            IMFALÚ nació para dar respuesta a una necesidad concreta: el mantenimiento y la
            rehabilitación de fachadas de aluminio y cristal, un trabajo especializado que exige
            conocimiento técnico y medios para intervenir en altura con seguridad.
          </p>
          <p>
            Más de tres décadas después, hemos intervenido más de 300.000 m² de fachada en más de
            150 edificios —oficinas, hoteles, comunidades y edificios singulares—, con un crecimiento
            sostenido año tras año.
          </p>
          <p>
            Seguimos siendo lo que fuimos desde el principio: <strong className="text-ink">especialistas</strong>.
            Nos dedicamos a las fachadas de aluminio y cristal, y esa concentración es nuestra mayor
            garantía para quien gestiona un edificio.
          </p>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">Qué hacemos</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Todo el ciclo de la fachada</h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicios/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border bg-white px-5 py-4 hover:border-burdeos">
                <span className="font-medium text-ink">{s.title}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-burdeos transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">Nuestro compromiso</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Cómo trabajamos</h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMPROMISO.map((c) => (
            <div key={c.t} className="rounded-2xl border bg-white p-6">
              <c.icon className="h-7 w-7 text-burdeos" />
              <h3 className="mt-3 font-semibold text-ink">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-warm">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectores + Premio */}
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
          <div>
            <h2 className="text-xl font-bold text-ink">Sectores en los que trabajamos</h2>
            <p className="mt-2 text-warm">Para administradores de fincas, property managers, arquitectos y departamentos de mantenimiento.</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {SECTORES.map((s) => (
                <div key={s.t} className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3">
                  <s.icon className="h-5 w-5 shrink-0 text-burdeos" />
                  <span className="font-medium text-ink">{s.t}</span>
                </div>
              ))}
            </div>
            <Link href="/proyectos" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos">
              Ver proyectos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={`¿Tu edificio necesita un especialista en fachadas en ${site.city}?`} />
    </>
  )
}
