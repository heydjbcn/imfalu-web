import type { Metadata } from "next"
import { Landing, type LandingData } from "@/components/site/landing"

export const metadata: Metadata = {
  title: "Rehabilitación de fachadas en Barcelona",
  description:
    "Rehabilitación de fachadas de aluminio y cristal en Barcelona. Más de 30 años, +300.000 m² y +150 edificios. Diagnóstico, regeneración y reparación con trabajo en altura certificado.",
  keywords: ["rehabilitación de fachadas Barcelona", "rehabilitar fachada aluminio", "rehabilitación fachada cristal"],
  alternates: { canonical: "/rehabilitacion-de-fachadas-barcelona" },
}

const data: LandingData = {
  slug: "rehabilitacion-de-fachadas-barcelona",
  kicker: "Rehabilitación de fachadas · Barcelona",
  h1: "Rehabilitación de fachadas de aluminio y cristal en Barcelona",
  intro:
    "Especialistas en rehabilitar fachadas metálicas y acristaladas de edificios en Barcelona y área metropolitana. Más de 30 años de experiencia, +300.000 m² intervenidos y +150 edificios. Recuperamos el estado y las prestaciones de la fachada con trabajo en altura certificado.",
  bullets: [
    "Diagnóstico previo del estado de la fachada",
    "Regeneración de aluminio, lacados y vidrios",
    "Reparación y reposición de elementos dañados",
    "Pruebas de estanqueidad y control de filtraciones",
    "Alternativa a la sustitución completa",
    "Trabajo en altura certificado y seguro",
  ],
  relatedSlugs: ["regeneracion", "reparacion", "mantenimiento-fachadas", "informes-tecnicos"],
  faqs: [
    { q: "¿Qué incluye una rehabilitación de fachada?", a: "Un diagnóstico previo, la regeneración o sustitución de los elementos afectados (aluminio, lacados y vidrios), la reparación de daños y, si procede, pruebas de estanqueidad. Todo con medios de elevación y seguridad para trabajo en altura." },
    { q: "¿Cuándo hay que rehabilitar la fachada de un edificio?", a: "Cuando hay deterioro visible del aluminio o los lacados, filtraciones, vidrios en mal estado o riesgo de desprendimientos. Un diagnóstico previo confirma el alcance necesario." },
    { q: "¿Es mejor rehabilitar o sustituir toda la fachada?", a: "Si la estructura está en buen estado, rehabilitar suele ser más económico y rápido que sustituir. Lo valoramos con el diagnóstico." },
    { q: "¿Trabajáis para administradores de fincas y property managers?", a: "Sí, son la mayoría de nuestros clientes, junto con arquitectos y departamentos de mantenimiento de edificios en Barcelona." },
  ],
}

export default function Page() {
  return <Landing data={data} />
}
