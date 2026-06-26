"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, Hotel, Users, Landmark, Check, ArrowRight } from "lucide-react"

type Sector = {
  key: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  img: string
  desc: string
  points: string[]
  cta: { label: string; href: string }
}

const SECTORS: Sector[] = [
  {
    key: "oficinas",
    label: "Oficinas",
    icon: Building2,
    img: "/proyectos/cornella/1.jpg",
    desc: "Torres y edificios de oficinas con fachada acristalada y muro cortina. Mantenemos, reparamos y regeneramos sin interrumpir la actividad del edificio.",
    points: ["Muro cortina y fachada acristalada", "Trabajo en altura certificado", "Sin parar la actividad de las oficinas"],
    cta: { label: "Ver proyecto: WTC Cornellà", href: "/proyectos" },
  },
  {
    key: "hoteles",
    label: "Hoteles",
    icon: Hotel,
    img: "/proyectos/hotel/1.jpg",
    desc: "Fachadas acristaladas de hoteles con un mantenimiento cuidadoso que no afecta a los huéspedes ni a la imagen del establecimiento.",
    points: ["Intervención discreta y planificada", "Reposición de cristales y sellados", "Servicio de urgencias 24 h"],
    cta: { label: "Ver proyecto: Hotel Roselló", href: "/proyectos" },
  },
  {
    key: "comunidades",
    label: "Comunidades",
    icon: Users,
    img: "/proyectos/torre-tarragona/1.jpg",
    desc: "Comunidades de propietarios y edificios residenciales de aluminio y cristal: revisión, reparación de elementos dañados y prevención de filtraciones y desprendimientos.",
    points: ["Interlocución con administradores de fincas", "Presupuestos claros para la comunidad", "Prevención de riesgos en fachada"],
    cta: { label: "Pide presupuesto", href: "/contacto" },
  },
  {
    key: "singulares",
    label: "Edificios singulares",
    icon: Landmark,
    img: "/proyectos/ski/1.jpg",
    desc: "Edificios emblemáticos y de gran altura que exigen un especialista. Recuperamos y conservamos fachadas metálicas y acristaladas complejas.",
    points: ["Rehabilitación y regeneración de fachada", "Medios de elevación para gran altura", "Más de 150 edificios intervenidos"],
    cta: { label: "Ver proyecto: Edificio Ski (Meliá)", href: "/proyectos" },
  },
]

export function SectorsTabs() {
  const [active, setActive] = useState(0)
  const s = SECTORS[active]

  return (
    <div className="mt-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sectores">
        {SECTORS.map((sec, i) => {
          const on = i === active
          return (
            <button
              key={sec.key}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                on ? "border-burdeos bg-burdeos text-white" : "border-line bg-white text-ink hover:border-burdeos hover:text-burdeos"
              }`}
            >
              <sec.icon className="h-4 w-4" />
              {sec.label}
            </button>
          )
        })}
      </div>

      {/* Panel */}
      <div className="mt-6 grid items-stretch gap-6 overflow-hidden rounded-2xl border bg-white md:grid-cols-2">
        <div className="relative min-h-[240px] md:min-h-[360px]">
          <Image key={s.img} src={s.img} alt={`Fachada de ${s.label.toLowerCase()} en Barcelona`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-9">
          <div className="flex items-center gap-2.5">
            <s.icon className="h-6 w-6 text-burdeos" />
            <h3 className="text-xl font-bold text-ink md:text-2xl">{s.label}</h3>
          </div>
          <p className="mt-3 text-warm">{s.desc}</p>
          <ul className="mt-5 space-y-2.5">
            {s.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-ink">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
          <Link href={s.cta.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos hover:gap-2.5 transition-all">
            {s.cta.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
