import type { Metadata } from "next"
import { Landing, type LandingData } from "@/components/site/landing"

export const metadata: Metadata = {
  title: "Muro cortina en Barcelona: mantenimiento y reparación",
  description:
    "Mantenimiento, reparación y rehabilitación de muro cortina de aluminio y cristal en Barcelona para arquitectos, constructoras y property managers.",
  keywords: ["muro cortina Barcelona", "mantenimiento muro cortina", "reparación muro cortina", "fachada ligera Barcelona", "estanqueidad muro cortina", "cristal muro cortina", "filtraciones muro cortina"],
  alternates: { canonical: "/muro-cortina-barcelona" },
}

const data: LandingData = {
  slug: "muro-cortina-barcelona",
  term: "el muro cortina de aluminio y cristal",
  gallery: [
    { src: "/proyectos/ski/2.jpg", label: "Edificio Ski", caption: "Muro cortina · Barcelona" },
    { src: "/proyectos/cornella/2.jpg", label: "WTC Cornellà", caption: "Muro cortina · Cornellà" },
    { src: "/proyectos/hotel/2.jpg", label: "Hotel Roselló", caption: "Fachada acristalada · Barcelona" },
  ],
  kicker: "Muro cortina · Barcelona",
  h1: "Muro cortina en Barcelona: mantenimiento, reparación y rehabilitación",
  intro:
    "Especialistas en fachadas ligeras de aluminio y cristal (muro cortina) para edificios de oficinas, hoteles y singulares en Barcelona. Trabajamos con arquitectos, constructoras y property managers en mantenimiento, reparación, estanqueidad y regeneración de muro cortina.",
  answer:
    "El muro cortina es una fachada ligera de aluminio y vidrio, autoportante y anclada a la estructura del edificio. Su mantenimiento y reparación —sellados, juntas, anclajes, reposición de vidrios y pruebas de estanqueidad— exige un especialista en fachada acristalada, no una empresa de obra. En IMFALÚ conservamos y recuperamos el muro cortina ya instalado; no fabricamos fachada nueva.",
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
    { q: "¿Trabajáis con arquitectos y constructoras?", a: "Sí, colaboramos con estudios de arquitectura, constructoras y property managers en el mantenimiento, la reparación y la rehabilitación de muro cortina de aluminio y cristal ya instalado. No fabricamos fachada nueva: nos especializamos en conservar y recuperar la que ya existe." },
    { q: "¿Qué diferencia hay entre muro cortina y fachada ventilada?", a: "El muro cortina es una fachada ligera de aluminio y vidrio autoportante, colgada por delante de la estructura, a la que solo transmite su propio peso. La fachada ventilada es un revestimiento sobre la hoja del edificio con una cámara de aire intermedia. Nosotros nos especializamos en el mantenimiento, la reparación y la rehabilitación del muro cortina de aluminio y cristal." },
    { q: "¿Cada cuánto hay que revisar un muro cortina?", a: "Al menos una revisión anual de sellados, juntas, anclajes y drenajes, y dos al año en edificios de gran altura o muy expuestos. Es la mejor forma de prevenir filtraciones y desprendimientos de vidrio en altura." },
  ],
}

export default function Page() {
  return <Landing data={data} />
}
