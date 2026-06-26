import Link from "next/link"
import Image from "next/image"
import {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
  ArrowRight, Phone, Building2, Clock, Award, MapPin,
  BadgeCheck, ChevronRight,
} from "lucide-react"
import { SectorsTabs } from "@/components/site/sectors-tabs"
import { services, projects, site, waLink, telLink } from "@/lib/site"
import { Reviews } from "@/components/site/reviews"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Wrench, RefreshCw, ClipboardCheck, Droplets, Leaf,
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="container-x grid gap-10 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">
              Mantenimiento · Reparación · Rehabilitación
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-bold text-ink md:text-4xl">
              Fachadas de aluminio y cristal en Barcelona
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warm">
              <strong className="text-ink">Cuidamos la piel de tu edificio.</strong> Mantenemos,
              reparamos y rehabilitamos fachadas metálicas, acristaladas y muro cortina. Más de 30 años,
              trabajo en altura certificado y servicio de urgencias 24 h.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark">
                Pide presupuesto <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink("Hola, quiero información sobre una fachada.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/5">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BANDA DE IMAGEN */}
      <section className="relative h-[280px] w-full overflow-hidden bg-ink md:h-[440px]">
        <Image src="/headers/home.jpg" alt="Fachada de aluminio y cristal de un edificio de oficinas en Barcelona" fill priority className="object-cover" sizes="100vw" />
      </section>

      {/* STATS */}
      <section className="border-b bg-white">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4 md:divide-x md:gap-y-0">
          {site.stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "md:pl-8" : ""}>
              <div className="whitespace-nowrap text-2xl font-bold text-burdeos sm:text-3xl md:text-4xl">
                {s.value}<span className="text-warm">{s.suffix}</span>
              </div>
              <div className="mt-1 text-sm text-warm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS (lista numerada) */}
      <section id="servicios" className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">Servicios</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Todo para la fachada, de principio a fin</h2>
          <p className="mt-4 text-lg text-warm">
            Del diagnóstico al mantenimiento continuo, cubrimos el ciclo completo de la fachada
            de aluminio y cristal.
          </p>
        </div>
        <div className="mt-10 border-y divide-y">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? ShieldCheck
            return (
              <Link key={s.slug} href={`/servicios/${s.slug}`}
                className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-5 md:gap-8 md:py-6">
                <span className="font-mono text-sm font-bold text-burdeos md:text-base">{String(i + 1).padStart(2, "0")}</span>
                <div className="grid gap-1 md:grid-cols-[280px_1fr] md:items-baseline md:gap-8">
                  <h3 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
                    <Icon className="h-5 w-5 shrink-0 text-burdeos" /> {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm">{s.short}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-warm transition-all group-hover:translate-x-1 group-hover:text-burdeos" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* POR QUÉ IMFALÚ */}
      <section className="bg-cream py-20">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Por qué IMFALÚ</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">
              30 años cuidando fachadas en Barcelona
            </h2>
            <p className="mt-4 text-lg text-warm">
              Somos una empresa de referencia en mantenimiento y rehabilitación de fachada de aluminio
              y cristal en Barcelona, con más de 300.000 m² intervenidos y pioneros en tratamientos por
              fotocatálisis. Damos servicio a propietarios, administradores de fincas y departamentos de
              mantenimiento que necesitan un especialista de confianza.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Award, t: "Especialistas", d: "Solo fachadas de aluminio y cristal. Es lo único que hacemos." },
              { icon: Clock, t: "Urgencias 24 h", d: "Respuesta rápida ante cristales rotos o filtraciones." },
              { icon: ShieldCheck, t: "Trabajo en altura", d: "Personal y medios certificados para trabajo vertical seguro." },
              { icon: Building2, t: "Para edificios", d: "Oficinas, hoteles y comunidades. Tratamos con quien gestiona." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border bg-white p-6">
                <f.icon className="h-6 w-6 text-burdeos" />
                <h3 className="mt-3 font-semibold text-ink">{f.t}</h3>
                <p className="mt-1.5 text-sm text-warm">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Proyectos</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Edificios donde hemos trabajado</h2>
          </div>
          <Link href="/proyectos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos">
            Ver proyectos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image src={p.image} alt={`${p.type} — ${p.title}, ${p.location}`} fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-warm">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
                <p className="mt-1 text-sm text-warm">{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTORES */}
      <section className="bg-cream py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Sectores</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Edificios que cuidamos</h2>
            <p className="mt-4 text-lg text-warm">Trabajamos para administradores de fincas, property managers, arquitectos y departamentos de mantenimiento.</p>
          </div>
          <SectorsTabs />
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="container-x py-14">
        <div className="grid gap-4 rounded-2xl border bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Trabajo en altura certificado", d: "Personal y medios homologados." },
            { icon: BadgeCheck, t: "Garantía de los trabajos", d: "Respondemos por lo que hacemos." },
            { icon: Clock, t: "Urgencias 24 h", d: "Cristales rotos, riesgos en fachada." },
            { icon: Award, t: "+30 años · +150 edificios", d: "Experiencia que avala." },
          ].map((c) => (
            <div key={c.t} className="flex gap-3">
              <c.icon className="mt-0.5 h-6 w-6 shrink-0 text-burdeos" />
              <div>
                <h3 className="text-sm font-semibold text-ink">{c.t}</h3>
                <p className="text-sm text-warm">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEÑAS (oculto si no hay datos de Places API) */}
      <Reviews />

      {/* CTA */}
      <section className="bg-burdeos">
        <div className="container-x flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="max-w-2xl text-3xl font-bold text-white md:text-4xl">
            ¿Necesitas intervenir una fachada? Te damos presupuesto sin compromiso
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-burdeos transition-colors hover:bg-white/90">
              Pedir presupuesto <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={telLink} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
