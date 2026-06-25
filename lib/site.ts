// Fuente única de verdad del sitio: datos de empresa, navegación, servicios y proyectos.

export const site = {
  name: "IMFALÚ",
  legalName: "IMFALÚ",
  tagline: "Mantenimiento y rehabilitación de fachadas de aluminio y cristal",
  // Dominio final (se ajusta al apuntar imfalu.com)
  url: "https://imfalu.com",
  phone: "697158466",
  phoneDisplay: "697 15 84 66",
  whatsapp: "34697158466",
  email: "", // pendiente de confirmar email oficial
  city: "Barcelona",
  area: "Barcelona y área metropolitana",
  social: {
    linkedin: "", // rellenar con la URL real
    instagram: "",
  },
  stats: [
    { value: "30", suffix: " años", label: "de experiencia en el sector" },
    { value: "+300.000", suffix: " m²", label: "de fachada intervenida" },
    { value: "24 h", suffix: "", label: "servicio de urgencias" },
    { value: "100%", suffix: "", label: "trabajo en altura certificado" },
  ],
} as const

export const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Empresa", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  icon: string // nombre de icono lucide
  bullets: string[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: "mantenimiento-fachadas",
    title: "Mantenimiento de fachadas",
    short: "Contrato anual y servicio de urgencias para fachadas metálicas y de cristal.",
    description:
      "Programa de mantenimiento preventivo y correctivo para fachadas de aluminio y cristal, con contrato anual y servicio de urgencias. Mantenemos la fachada de tu edificio en estado óptimo, evitando incidencias y alargando su vida útil.",
    icon: "ShieldCheck",
    bullets: ["Contrato anual de mantenimiento", "Servicio de urgencias 24 h", "Revisiones periódicas programadas", "Informe del estado de la fachada"],
    keywords: ["mantenimiento de fachadas Barcelona", "mantenimiento fachadas aluminio", "contrato mantenimiento fachada"],
  },
  {
    slug: "reparacion",
    title: "Reparación y reposición",
    short: "Reparación de elementos constructivos dañados y reposición de cristales de cualquier medida y peso.",
    description:
      "Reparamos y reponemos los elementos constructivos dañados de la fachada y sustituimos cristales de cualquier medida y peso, con los medios de elevación y seguridad necesarios para trabajos en altura.",
    icon: "Wrench",
    bullets: ["Reposición de cristales de cualquier medida", "Reparación de elementos de aluminio", "Sustitución de juntas y sellados", "Medios de elevación propios"],
    keywords: ["reparación de fachadas Barcelona", "reposición de cristales fachada", "reparación fachada aluminio"],
  },
  {
    slug: "regeneracion",
    title: "Regeneración de fachadas",
    short: "Restauración y recuperación del estado original de elementos metálicos y vidrios.",
    description:
      "Restauramos los elementos afectados de la fachada y recuperamos su estado original, tanto en elementos metálicos como en los vidrios. Una alternativa a la sustitución completa que devuelve a la fachada su aspecto y prestaciones.",
    icon: "Sparkles",
    bullets: ["Restauración de aluminio y lacados", "Recuperación de vidrios", "Tratamiento de oxidación y deterioro", "Alternativa a la sustitución total"],
    keywords: ["regeneración de fachadas", "rehabilitación de fachadas Barcelona", "restauración fachada aluminio"],
  },
  {
    slug: "informes-tecnicos",
    title: "Informes técnicos y auditorías",
    short: "Diagnóstico del estado de la fachada con informes técnicos y auditorías.",
    description:
      "Elaboramos informes técnicos y auditorías del estado de la fachada: diagnóstico de patologías, evaluación de riesgos y plan de actuación. La base para decidir con criterio cualquier intervención.",
    icon: "ClipboardCheck",
    bullets: ["Diagnóstico de patologías", "Evaluación de riesgos", "Plan de actuación priorizado", "Documentación técnica"],
    keywords: ["informe técnico fachada", "auditoría de fachadas", "inspección técnica fachada Barcelona"],
  },
  {
    slug: "pruebas-estanqueidad",
    title: "Pruebas de estanqueidad",
    short: "Detección de filtraciones y verificación de la estanqueidad de la fachada.",
    description:
      "Realizamos pruebas de estanqueidad para localizar filtraciones de agua y verificar el correcto comportamiento de la fachada frente a la lluvia y la humedad, antes y después de una intervención.",
    icon: "Droplets",
    bullets: ["Localización de filtraciones", "Pruebas de agua controladas", "Verificación de sellados", "Informe de resultados"],
    keywords: ["pruebas de estanqueidad fachada", "filtraciones fachada Barcelona", "estanqueidad muro cortina"],
  },
  {
    slug: "fotocatalisis",
    title: "Tratamientos por fotocatálisis",
    short: "Tratamiento innovador para la fachada y el medio ambiente.",
    description:
      "Aplicamos tratamientos por fotocatálisis: un recubrimiento que ayuda a autolimpiar la fachada y a reducir contaminantes del aire mediante la acción de la luz. Mejor aspecto, menos mantenimiento y beneficio medioambiental.",
    icon: "Leaf",
    bullets: ["Efecto autolimpiante", "Reducción de contaminantes", "Menor mantenimiento", "Beneficio medioambiental"],
    keywords: ["fotocatálisis fachada", "tratamiento autolimpiante fachada", "fachada sostenible Barcelona"],
  },
]

export interface Project {
  title: string
  location: string
  type: string
  image: string
}

export const projects: Project[] = [
  { title: "Edificio Ski (Meliá)", location: "Barcelona", type: "Rehabilitación de fachada", image: "/proyectos/edificio-ski.jpg" },
  { title: "Hotel Roselló", location: "Barcelona", type: "Mantenimiento de fachada acristalada", image: "/proyectos/hotel-rosello.jpg" },
  { title: "Torre Tarragona", location: "Tarragona", type: "Edificio de oficinas", image: "/proyectos/torre-tarragona.jpg" },
  { title: "Edificio de oficinas", location: "Barberà del Vallès", type: "Regeneración de fachada", image: "/proyectos/oficinas-barbera.jpg" },
]

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
export const telLink = `tel:+34${site.phone}`
