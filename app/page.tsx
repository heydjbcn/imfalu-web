import Link from "next/link"
import Image from "next/image"
import {
  ShieldCheck, Wrench, Sparkles, ClipboardCheck, Droplets, Leaf,
  ArrowRight, Phone, Building2, Clock, Award, MapPin, CheckCircle2,
} from "lucide-react"
import { services, projects, site, waLink, telLink } from "@/lib/site"

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck, Wrench, Sparkles, ClipboardCheck, Droplets, Leaf,
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(60% 80% at 80% 0%, rgba(155,35,53,0.55), transparent 60%)" }} />
        <div className="container-x relative grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-warm-light">
              Fachadas de aluminio y cristal · {site.city}
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Mantenemos, reparamos y rehabilitamos tu fachada de aluminio y cristal
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Especialistas <strong className="font-semibold text-white">solo</strong> en fachadas de
              aluminio y cristal —metálicas, acristaladas y muro cortina—. No hacemos obra ni SATE:
              cuidamos la fachada que tu edificio ya tiene. Más de 30 años, trabajo en altura
              certificado y urgencias 24 h.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-burdeos px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark">
                Pide presupuesto <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={waLink("Hola, quiero información sobre una fachada.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b bg-cream">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-burdeos md:text-4xl">
                {s.value}<span className="text-warm">{s.suffix}</span>
              </div>
              <div className="mt-1 text-sm text-warm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Servicios</p>
          <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Todo para la fachada, de principio a fin</h2>
          <p className="mt-4 text-lg text-warm">
            Del diagnóstico al mantenimiento continuo, cubrimos el ciclo completo de la fachada
            de aluminio y cristal.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = ICONS[s.icon] ?? ShieldCheck
            return (
              <Link key={s.slug} href={`/servicios/${s.slug}`}
                className="group rounded-2xl border bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-black/5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-burdeos/10 text-burdeos">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos">
                  Ver más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
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
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
              30 años cuidando fachadas en Barcelona
            </h2>
            <p className="mt-4 text-lg text-warm">
              Acumulamos una amplia experiencia en construcción y rehabilitación de fachadas,
              con más de 300.000 m² intervenidos. Damos servicio a propietarios, administradores
              de fincas y departamentos de mantenimiento que necesitan un especialista de confianza.
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
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Edificios donde hemos trabajado</h2>
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

      {/* A QUIÉN SERVIMOS */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-ink">Trabajamos para</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Administradores de fincas", "Property managers", "Comunidades de propietarios", "Arquitectos", "Departamentos de mantenimiento", "Hoteles y oficinas"].map((a) => (
              <span key={a} className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-medium text-ink">
                <CheckCircle2 className="h-4 w-4 text-burdeos" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

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
