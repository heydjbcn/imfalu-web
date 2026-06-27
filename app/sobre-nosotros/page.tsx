import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Award, Building2, Ruler, TrendingUp, ShieldCheck, Leaf, Clock,
  Hotel, Users, Landmark, ArrowRight, ChevronRight,
} from "lucide-react"
import { services, site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"
import { Reviews } from "@/components/site/reviews"
import { FaqSection } from "@/components/site/faq-section"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { BrandWatermark } from "@/components/site/brand-watermark"
import { PageHero } from "@/components/site/page-hero"

const FAQS = [
  { q: "¿Cuántos años de experiencia tiene IMFALÚ?", a: "Más de 30 años especializados en fachadas de aluminio y cristal, con más de 300.000 m² intervenidos y más de 150 edificios en Barcelona y su área metropolitana." },
  { q: "¿Qué diferencia a IMFALÚ de una empresa de rehabilitación general?", a: "Nos dedicamos en exclusiva a la fachada de aluminio y cristal —muro cortina, acristaladas y metálicas—, no a la obra de albañilería (mortero, SATE, revocos). Esa especialización, junto al trabajo en altura certificado, es nuestra mayor garantía." },
  { q: "¿Sois pioneros en algo?", a: "Sí, somos pioneros en Barcelona en aplicar tratamientos por fotocatálisis en fachadas: un recubrimiento autolimpiante que además reduce contaminantes del aire." },
  { q: "¿Estáis certificados para trabajo en altura?", a: "Sí. Todo nuestro personal y nuestros medios están homologados para trabajo vertical y en altura, con prevención de riesgos en cada obra." },
]

export const metadata: Metadata = {
  title: "Sobre nosotros: 30 años en fachadas de aluminio y cristal",
  description:
    "Más de 30 años, +300.000 m² y +150 edificios de fachada de aluminio y cristal en Barcelona. Empresa de referencia en mantenimiento y rehabilitación.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: { type: "website", url: "/sobre-nosotros", images: ["/og.jpg"] },
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
      <PageHero
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Empresa" }]}
        eyebrow="La empresa"
        title="Empresa de fachadas de aluminio y cristal en Barcelona"
        subtitle={
          <>
            <strong className="text-ink">Cuidamos la piel de los edificios.</strong> Los profesionales que
            formamos IMFALÚ acumulamos una amplia experiencia en mantenimiento y rehabilitación de fachadas
            de aluminio y cristal, con más de 300.000 m² intervenidos en Barcelona y su área metropolitana.
          </>
        }
      />

      {/* Banda de imagen (se ensancha al hacer scroll) */}
      <section className="bg-cream pb-6 sm:pb-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink" minHeight={240} maxHeight={440}>
            <Image src="/headers/empresa.webp" alt={`Equipo de IMFALÚ trabajando en una fachada de aluminio y cristal en ${site.city}`} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      {/* Hitos */}
      <section className="border-b bg-white">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 text-center md:grid-cols-[1fr_1.15fr_1.15fr_0.75fr] md:items-start md:gap-y-0 md:divide-x md:divide-line">
          {HITOS.map((h) => (
            <div key={h.v} className="px-3 md:px-5">
              <h.icon className="mx-auto h-6 w-6 text-burdeos" />
              <div className="mt-3 whitespace-nowrap text-2xl font-bold text-ink md:text-2xl lg:text-3xl">{h.v}</div>
              <div className="mx-auto mt-1 max-w-[170px] text-sm text-warm">{h.d}</div>
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
            Nos dedicamos a las fachadas de aluminio y cristal, y esa concentración nos ha convertido en
            una <strong className="text-ink">empresa de referencia</strong> en mantenimiento y rehabilitación
            de fachada de aluminio y cristal en Barcelona, además de pioneros en tratamientos por fotocatálisis.
          </p>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="relative isolate overflow-hidden bg-sand py-20">
        <BrandWatermark />
        <div className="container-x relative z-10">
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

      <Reviews />

      <FaqSection title="Preguntas frecuentes sobre IMFALÚ" faqs={FAQS} />

      <CtaBand title={`¿Tu edificio necesita un especialista en fachadas en ${site.city}?`} />
    </>
  )
}
