"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, Hotel, Users, Landmark, Check, ArrowRight } from "lucide-react"
import { localizedPath, type Locale } from "@/lib/paths"

type L = { es: string; ca: string }
type Sector = {
  key: string
  label: L
  icon: React.ComponentType<{ className?: string }>
  img: string
  desc: L
  points: L[]
  cta: { label: L; href: string }
}

const SECTORS: Sector[] = [
  {
    key: "oficinas",
    label: { es: "Oficinas", ca: "Oficines" },
    icon: Building2,
    img: "/proyectos/cornella/1.jpg",
    desc: {
      es: "Torres y edificios de oficinas con fachada acristalada y muro cortina. Mantenemos, reparamos y regeneramos sin interrumpir la actividad del edificio.",
      ca: "Torres i edificis d'oficines amb façana acristallada i mur cortina. Mantenim, reparem i regenerem sense interrompre l'activitat de l'edifici.",
    },
    points: [
      { es: "Muro cortina y fachada acristalada", ca: "Mur cortina i façana acristallada" },
      { es: "Trabajo en altura certificado", ca: "Treball en alçada certificat" },
      { es: "Sin parar la actividad de las oficinas", ca: "Sense aturar l'activitat de les oficines" },
    ],
    cta: { label: { es: "Ver proyecto: WTC Cornellà", ca: "Veure projecte: WTC Cornellà" }, href: "/proyectos" },
  },
  {
    key: "hoteles",
    label: { es: "Hoteles", ca: "Hotels" },
    icon: Hotel,
    img: "/proyectos/hotel/1.jpg",
    desc: {
      es: "Fachadas acristaladas de hoteles con un mantenimiento cuidadoso que no afecta a los huéspedes ni a la imagen del establecimiento.",
      ca: "Façanes acristallades d'hotels amb un manteniment acurat que no afecta els hostes ni la imatge de l'establiment.",
    },
    points: [
      { es: "Intervención discreta y planificada", ca: "Intervenció discreta i planificada" },
      { es: "Reposición de cristales y sellados", ca: "Reposició de vidres i segellats" },
      { es: "Servicio de urgencias 24 h", ca: "Servei d'urgències 24 h" },
    ],
    cta: { label: { es: "Ver proyecto: Hotel Roselló", ca: "Veure projecte: Hotel Roselló" }, href: "/proyectos" },
  },
  {
    key: "comunidades",
    label: { es: "Comunidades", ca: "Comunitats" },
    icon: Users,
    img: "/proyectos/torre-tarragona/1.jpg",
    desc: {
      es: "Comunidades de propietarios y edificios residenciales de aluminio y cristal: revisión, reparación de elementos dañados y prevención de filtraciones y desprendimientos.",
      ca: "Comunitats de propietaris i edificis residencials d'alumini i vidre: revisió, reparació d'elements danyats i prevenció de filtracions i despreniments.",
    },
    points: [
      { es: "Interlocución con administradores de fincas", ca: "Interlocució amb administradors de finques" },
      { es: "Presupuestos claros para la comunidad", ca: "Pressupostos clars per a la comunitat" },
      { es: "Prevención de riesgos en fachada", ca: "Prevenció de riscos en façana" },
    ],
    cta: { label: { es: "Pide presupuesto", ca: "Demana pressupost" }, href: "/contacto" },
  },
  {
    key: "singulares",
    label: { es: "Edificios singulares", ca: "Edificis singulars" },
    icon: Landmark,
    img: "/proyectos/ski/1.jpg",
    desc: {
      es: "Edificios emblemáticos y de gran altura que exigen un especialista. Recuperamos y conservamos fachadas metálicas y acristaladas complejas.",
      ca: "Edificis emblemàtics i de gran alçada que exigeixen un especialista. Recuperem i conservem façanes metàl·liques i acristallades complexes.",
    },
    points: [
      { es: "Rehabilitación y regeneración de fachada", ca: "Rehabilitació i regeneració de façana" },
      { es: "Medios de elevación para gran altura", ca: "Mitjans d'elevació per a gran alçada" },
      { es: "Más de 150 edificios intervenidos", ca: "Més de 150 edificis intervinguts" },
    ],
    cta: { label: { es: "Ver proyecto: Edificio Ski (Meliá)", ca: "Veure projecte: Edifici Ski (Meliá)" }, href: "/proyectos" },
  },
]

export function SectorsTabs({ lang = "es" }: { lang?: Locale }) {
  const [active, setActive] = useState(0)
  const s = SECTORS[active]
  const tx = (l: L) => l[lang]

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sectors">
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
              {tx(sec.label)}
            </button>
          )
        })}
      </div>

      <div className="mt-6 grid items-stretch gap-6 overflow-hidden rounded-2xl border bg-white md:grid-cols-2">
        <div className="relative min-h-[240px] md:min-h-[360px]">
          <Image key={s.img} src={s.img} alt={`${tx(s.label)} · Barcelona`} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-9">
          <div className="flex items-center gap-2.5">
            <s.icon className="h-6 w-6 text-burdeos" />
            <h3 className="text-xl font-bold text-ink md:text-2xl">{tx(s.label)}</h3>
          </div>
          <p className="mt-3 text-warm">{tx(s.desc)}</p>
          <ul className="mt-5 space-y-2.5">
            {s.points.map((p) => (
              <li key={p.es} className="flex items-start gap-2.5 text-ink">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" /> <span className="text-sm">{tx(p)}</span>
              </li>
            ))}
          </ul>
          <Link href={localizedPath(lang, s.cta.href)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos hover:gap-2.5 transition-all">
            {tx(s.cta.label)} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
