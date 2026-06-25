import type { Metadata } from "next"
import { Landing, type LandingData } from "@/components/site/landing"

export const metadata: Metadata = {
  title: "Muro cortina en Barcelona — mantenimiento y reparación",
  description:
    "Mantenimiento, reparación y rehabilitación de muro cortina en Barcelona. Especialistas en fachadas ligeras de aluminio y cristal para arquitectos, constructoras y property managers.",
  keywords: ["muro cortina Barcelona", "mantenimiento muro cortina", "reparación muro cortina", "fachada ligera Barcelona"],
  alternates: { canonical: "/muro-cortina-barcelona" },
}

const data: LandingData = {
  slug: "muro-cortina-barcelona",
  kicker: "Muro cortina · Barcelona",
  h1: "Muro cortina en Barcelona: mantenimiento, reparación y rehabilitación",
  intro:
    "Especialistas en fachadas ligeras de aluminio y cristal (muro cortina) para edificios de oficinas, hoteles y singulares en Barcelona. Trabajamos con arquitectos, constructoras y property managers en mantenimiento, reparación, estanqueidad y regeneración de muro cortina.",
  bullets: [
    "Mantenimiento de muro cortina",
    "Reparación y reposición de vidrios y perfilería",
    "Pruebas de estanqueidad y sellados",
    "Regeneración de aluminio y lacados",
    "Diagnóstico e informes técnicos",
    "Trabajo en altura certificado",
  ],
  relatedSlugs: ["mantenimiento-fachadas", "reparacion", "pruebas-estanqueidad", "regeneracion"],
  faqs: [
    { q: "¿Hacéis mantenimiento de muro cortina en Barcelona?", a: "Sí, mantenemos fachadas ligeras de aluminio y cristal en edificios de oficinas, hoteles y singulares, con contrato y urgencias." },
    { q: "¿Reparáis filtraciones en muro cortina?", a: "Sí. Localizamos el punto de entrada de agua con pruebas de estanqueidad y reparamos sellados y vidrios afectados." },
    { q: "¿Trabajáis con arquitectos y constructoras?", a: "Sí, colaboramos con estudios de arquitectura y constructoras tanto en obra nueva como en rehabilitación de muro cortina." },
  ],
}

export default function Page() {
  return <Landing data={data} />
}
