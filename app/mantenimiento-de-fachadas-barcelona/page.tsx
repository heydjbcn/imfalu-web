import type { Metadata } from "next"
import { Landing, type LandingData } from "@/components/site/landing"

export const metadata: Metadata = {
  title: "Mantenimiento de fachadas en Barcelona",
  description:
    "Mantenimiento de fachadas de aluminio y cristal en Barcelona con contrato anual y urgencias 24 h. Evita filtraciones y desprendimientos. +30 años.",
  keywords: ["mantenimiento de fachadas Barcelona", "contrato mantenimiento fachada", "mantenimiento fachada cristal", "mantenimiento muro cortina", "mantenimiento fachada acristalada", "mantenimiento fachada aluminio"],
  alternates: { canonical: "/mantenimiento-de-fachadas-barcelona" },
}

const data: LandingData = {
  slug: "mantenimiento-de-fachadas-barcelona",
  term: "el mantenimiento de fachadas de aluminio y cristal",
  gallery: [
    { src: "/proyectos/cornella/1.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà" },
    { src: "/proyectos/vallsolana/1.jpg", label: "Parc Vallsolana", caption: "Oficinas · Sant Cugat" },
    { src: "/proyectos/torre-tarragona/1.jpg", label: "Torre Tarragona", caption: "Oficinas · Barcelona" },
  ],
  kicker: "Mantenimiento de fachadas · Barcelona",
  h1: "Mantenimiento de fachadas de aluminio y cristal en Barcelona",
  intro:
    "Programas de mantenimiento preventivo y correctivo para fachadas de edificios en Barcelona, con contrato anual y servicio de urgencias 24 h. Mantenemos la fachada en estado óptimo, evitando incidencias, filtraciones y desprendimientos.",
  answer:
    "El mantenimiento de fachadas de aluminio y cristal es la revisión y conservación periódica del cerramiento —sellados, juntas, anclajes, drenajes y vidrios— para prevenir filtraciones y desprendimientos antes de que obliguen a una reparación mayor. Se contrata de forma anual e incluye revisiones programadas y servicio de urgencias, a diferencia del mantenimiento de obra que actúa sobre mortero y revocos.",
  bullets: [
    "Contrato anual de mantenimiento a medida",
    "Servicio de urgencias 24 h",
    "Revisiones periódicas programadas",
    "Pequeñas reparaciones preventivas",
    "Informe del estado de la fachada",
    "Trabajo en altura certificado",
  ],
  relatedSlugs: ["mantenimiento-fachadas", "reparacion", "pruebas-estanqueidad"],
  faqs: [
    { q: "¿Qué incluye un contrato de mantenimiento de fachada?", a: "Revisiones periódicas, pequeñas reparaciones preventivas y servicio de urgencias 24 h, adaptado a cada edificio." },
    { q: "¿Cada cuánto se mantiene una fachada de aluminio y cristal?", a: "Al menos una revisión anual; dos en edificios de altura o con mucha exposición. El mantenimiento evita reparaciones mayores." },
    { q: "¿Atendéis urgencias por cristales rotos o riesgos?", a: "Sí, disponemos de servicio de urgencias 24 h en Barcelona y área metropolitana." },
  ],
}

export default function Page() {
  return <Landing data={data} />
}
