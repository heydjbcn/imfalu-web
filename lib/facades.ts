import type { LandingData } from "@/components/site/landing"

// Tipos de fachada (/fachadas/<slug>) — eje "soluciones" del silo. Render con <Landing>.
export interface Facade extends LandingData {
  metaTitle: string
  metaDescription: string
  metaKeywords: string[]
}

const TIPOS = { label: "Tipos de fachada", href: "/fachadas/muro-cortina" }

export const facades: Facade[] = [
  {
    slug: "muro-cortina",
    metaTitle: "Muro cortina en Barcelona: mantenimiento y reparación",
    metaDescription:
      "Mantenimiento, reparación y rehabilitación de muro cortina de aluminio y cristal en Barcelona. Sellados, vidrios, estanqueidad y trabajo en altura.",
    metaKeywords: ["muro cortina Barcelona", "mantenimiento muro cortina", "reparación muro cortina", "fachada ligera Barcelona", "estanqueidad muro cortina"],
    breadcrumb: [{ label: "Inicio", href: "/" }, { label: "Muro cortina" }],
    kicker: "Tipos de fachada · Muro cortina",
    h1: "Muro cortina de aluminio y cristal en Barcelona",
    term: "el muro cortina",
    answer:
      "El muro cortina es una fachada ligera de aluminio y vidrio, autoportante y anclada a la estructura del edificio, que solo soporta su propio peso. Su mantenimiento y reparación —sellados, juntas, anclajes, reposición de vidrios y pruebas de estanqueidad— exige un especialista en fachada acristalada, no una empresa de obra. En IMFALÚ conservamos y recuperamos el muro cortina ya instalado; no fabricamos fachada nueva.",
    intro:
      "Especialistas en muro cortina (fachada ligera de aluminio y cristal) para edificios de oficinas, hoteles y singulares en Barcelona. Mantenemos, reparamos y rehabilitamos el cerramiento existente: sellados, vidrios, perfilería y estanqueidad, con trabajo en altura certificado.",
    bullets: [
      "Mantenimiento preventivo y correctivo de muro cortina",
      "Reparación y reposición de vidrios y perfilería",
      "Pruebas de estanqueidad y resellado de juntas",
      "Regeneración de aluminio y lacados",
      "Diagnóstico e informes técnicos",
      "Trabajo en altura certificado",
    ],
    gallery: [
      { src: "/proyectos/ski/2.jpg", label: "Edificio Ski", caption: "Muro cortina · Barcelona" },
      { src: "/proyectos/cornella/2.jpg", label: "WTC Cornellà", caption: "Muro cortina · Cornellà" },
      { src: "/proyectos/hotel/2.jpg", label: "Hotel Roselló", caption: "Fachada acristalada · Barcelona" },
    ],
    relatedSlugs: ["mantenimiento-fachadas", "reparacion", "pruebas-estanqueidad", "regeneracion"],
    faqs: [
      { q: "¿Qué es un muro cortina?", a: "Una fachada ligera de aluminio y vidrio colgada por delante de la estructura del edificio, a la que solo transmite su propio peso. Sus elementos son la perfilería de aluminio, los vidrios (normalmente con cámara), las juntas y sellados y los anclajes." },
      { q: "¿Qué tipos de muro cortina hay?", a: "Principalmente por montaje (stick, montado pieza a pieza en obra, o modular/unitizado, por paneles prefabricados) y por material o fijación del vidrio (aluminio visto, vidrio estructural o abotonado). Nosotros trabajamos el muro cortina de aluminio y de cristal." },
      { q: "¿Reparáis filtraciones en muro cortina?", a: "Sí. Localizamos el punto de entrada de agua con pruebas de estanqueidad y reparamos sellados y vidrios afectados, sin sustituir toda la fachada." },
      { q: "¿Cada cuánto hay que revisar un muro cortina?", a: "Al menos una revisión anual de sellados, juntas, anclajes y drenajes, y dos al año en edificios de gran altura o muy expuestos." },
    ],
  },
  {
    slug: "muro-cortina-aluminio",
    metaTitle: "Muro cortina de aluminio en Barcelona: mantenimiento",
    metaDescription:
      "Muro cortina de aluminio en Barcelona: ventajas del aluminio, mantenimiento, reparación de perfilería y regeneración del lacado. Trabajo en altura certificado.",
    metaKeywords: ["muro cortina de aluminio", "perfilería de aluminio fachada", "lacado aluminio fachada", "mantenimiento muro cortina aluminio"],
    breadcrumb: [{ label: "Inicio", href: "/" }, { label: "Muro cortina", href: "/fachadas/muro-cortina" }, { label: "De aluminio" }],
    kicker: "Tipos de fachada · Muro cortina de aluminio",
    h1: "Muro cortina de aluminio en Barcelona",
    term: "el muro cortina de aluminio",
    answer:
      "El muro cortina de aluminio es la fachada ligera cuya retícula de montantes y travesaños es de perfilería de aluminio, el material más usado por su ligereza, durabilidad y resistencia a la corrosión. En IMFALÚ mantenemos, reparamos y regeneramos el aluminio y su lacado, sin sustituir la fachada.",
    intro:
      "El aluminio es el material estrella del muro cortina por su ligereza, durabilidad y bajo mantenimiento. Con los años, el lacado se apaga y las juntas envejecen: lo regeneramos y reparamos para recuperar el aspecto y las prestaciones de la fachada sin sustituirla.",
    bullets: [
      "Ventajas del aluminio: ligero, duradero, no se corroe",
      "Reparación de perfilería y elementos de aluminio",
      "Regeneración y recuperación del lacado",
      "Reposición de juntas y sellados",
      "Mantenimiento preventivo del cerramiento",
      "Trabajo en altura con medios certificados",
    ],
    gallery: [
      { src: "/proyectos/cornella/1.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà" },
      { src: "/proyectos/torre-tarragona/1.jpg", label: "Torre Tarragona", caption: "Oficinas · Barcelona" },
      { src: "/galeria/diagonal-1.jpg", label: "Torre en Diagonal", caption: "Oficinas · Barcelona" },
    ],
    relatedSlugs: ["mantenimiento-fachadas", "reparacion", "regeneracion"],
    faqs: [
      { q: "¿Por qué se usa tanto el aluminio en muro cortina?", a: "Por su ligereza (ideal para una fachada colgada), su durabilidad, su resistencia a la corrosión y su bajo mantenimiento. Permite perfilerías esbeltas con grandes superficies de vidrio." },
      { q: "¿Se puede recuperar el lacado del aluminio sin cambiarlo?", a: "Sí. Mediante regeneración recuperamos el color y la protección del lacado, una alternativa más económica y rápida que sustituir la perfilería." },
      { q: "¿Reparáis perfilería de aluminio dañada o suelta?", a: "Sí, reparamos y fijamos los elementos de aluminio afectados y reponemos juntas y sellados, eliminando el riesgo de desprendimiento." },
    ],
  },
  {
    slug: "muro-cortina-cristal",
    metaTitle: "Muro cortina de cristal en Barcelona: vidrios y reposición",
    metaDescription:
      "Muro cortina de cristal en Barcelona: tipos de vidrio (templado, laminar, control solar, cámara), reposición de vidrios y estanqueidad. Urgencias 24 h.",
    metaKeywords: ["muro cortina de cristal", "muro cortina de vidrio", "reposición de vidrios fachada", "vidrio control solar fachada"],
    breadcrumb: [{ label: "Inicio", href: "/" }, { label: "Muro cortina", href: "/fachadas/muro-cortina" }, { label: "De cristal" }],
    kicker: "Tipos de fachada · Muro cortina de cristal",
    h1: "Muro cortina de cristal y vidrio en Barcelona",
    term: "el muro cortina de cristal",
    answer:
      "El muro cortina de cristal es la fachada ligera cuya superficie es mayoritariamente vidrio —con cámara, control solar, templado o laminar de seguridad— sobre perfilería de aluminio. En IMFALÚ reponemos vidrios de cualquier medida y peso, reparamos sellados y verificamos la estanqueidad, sin sustituir toda la fachada.",
    intro:
      "El vidrio define la imagen y el confort de un edificio acristalado. En el muro cortina de cristal reponemos vidrios rotos o con la cámara perdida, igualando prestaciones (control solar, seguridad, aislamiento), y resolvemos filtraciones con pruebas de estanqueidad.",
    bullets: [
      "Reposición de vidrios de cualquier medida y peso",
      "Tipos de vidrio: templado, laminar, control solar, cámara",
      "Sustitución de unidades con cámara perdida (vaho)",
      "Pruebas de estanqueidad y resellado",
      "Servicio de urgencias 24 h por cristal roto",
      "Medios de elevación para trabajo en altura",
    ],
    gallery: [
      { src: "/proyectos/ski/1.jpg", label: "Edificio Ski (Meliá)", caption: "Fachada acristalada · Barcelona" },
      { src: "/proyectos/hotel/1.jpg", label: "Hotel Roselló", caption: "Fachada de cristal · Barcelona" },
      { src: "/galeria/reparacion-1.jpg", label: "Reposición con grúa", caption: "Cristal en altura" },
    ],
    relatedSlugs: ["reparacion", "pruebas-estanqueidad", "mantenimiento-fachadas"],
    faqs: [
      { q: "¿Reponéis cristales de muro cortina de cualquier tamaño?", a: "Sí, de cualquier medida y peso, con los medios de elevación necesarios. Fabricamos el vidrio a medida igualando las prestaciones del original (control solar, seguridad, aislamiento)." },
      { q: "Mi vidrio tiene vaho por dentro, ¿se arregla?", a: "Ese vaho indica que la cámara del doble acristalamiento ha perdido estanqueidad. La solución es reponer la unidad de vidrio; no se puede recuperar la cámara." },
      { q: "¿Qué vidrio lleva un muro cortina?", a: "Normalmente doble acristalamiento con cámara y, según el caso, control solar, vidrio templado o laminar de seguridad. Al reponer igualamos esas prestaciones." },
    ],
  },
  {
    slug: "fachada-acristalada",
    metaTitle: "Fachada acristalada en Barcelona: mantenimiento y reparación",
    metaDescription:
      "Fachada acristalada y de vidrio en Barcelona: qué es, tipos de sistema y mantenimiento. Reparación, reposición de vidrios y estanqueidad por especialistas.",
    metaKeywords: ["fachada acristalada Barcelona", "fachada de vidrio", "fachada de cristal", "mantenimiento fachada acristalada"],
    breadcrumb: [{ label: "Inicio", href: "/" }, { label: "Fachada acristalada" }],
    kicker: "Tipos de fachada · Fachada acristalada",
    h1: "Fachada acristalada y de vidrio en Barcelona",
    term: "la fachada acristalada",
    answer:
      "Una fachada acristalada es el cerramiento de un edificio resuelto mayoritariamente con vidrio sobre estructura de aluminio, ya sea muro cortina, vidrio estructural o acristalamiento sobre carpintería. En IMFALÚ mantenemos, reparamos y rehabilitamos la fachada acristalada existente —no hacemos obra nueva—.",
    intro:
      "La fachada acristalada da luz e imagen al edificio, pero exige un mantenimiento especializado de vidrios, juntas y sellados. Conservamos y reparamos fachadas de cristal de oficinas, hoteles y edificios singulares en Barcelona, resolviendo filtraciones y reponiendo vidrios.",
    bullets: [
      "Mantenimiento de la fachada de vidrio",
      "Reposición de cristales y unidades con cámara",
      "Reparación de sellados y juntas",
      "Pruebas de estanqueidad y filtraciones",
      "Regeneración de elementos de aluminio",
      "Trabajo en altura certificado",
    ],
    gallery: [
      { src: "/proyectos/hotel/1.jpg", label: "Hotel Roselló", caption: "Fachada acristalada · Barcelona" },
      { src: "/proyectos/ski/3.jpg", label: "Edificio Ski (Meliá)", caption: "Barcelona" },
      { src: "/proyectos/cornella/3.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà" },
    ],
    relatedSlugs: ["mantenimiento-fachadas", "reparacion", "pruebas-estanqueidad"],
    faqs: [
      { q: "¿Qué diferencia hay entre fachada acristalada y muro cortina?", a: "El muro cortina es un tipo de fachada acristalada: una fachada ligera autoportante de aluminio y vidrio. Hay otras soluciones acristaladas (vidrio estructural, acristalamiento sobre carpintería). Trabajamos todas en aluminio y cristal." },
      { q: "¿Hacéis fachadas acristaladas nuevas?", a: "No. Nos especializamos en mantener, reparar, regenerar y rehabilitar la fachada acristalada ya instalada, no en obra nueva ni montaje." },
      { q: "¿Resolvéis filtraciones en fachadas de cristal?", a: "Sí. Con pruebas de estanqueidad localizamos la entrada de agua y reparamos los sellados o vidrios afectados." },
    ],
  },
  {
    slug: "fachada-aluminio",
    metaTitle: "Fachada de aluminio en Barcelona: mantenimiento y regeneración",
    metaDescription:
      "Fachada de aluminio en Barcelona: ventajas del aluminio, paneles, regeneración del lacado y mantenimiento. Recuperamos la fachada sin sustituirla.",
    metaKeywords: ["fachada de aluminio Barcelona", "fachada metálica", "regeneración lacado aluminio", "paneles de aluminio fachada"],
    breadcrumb: [{ label: "Inicio", href: "/" }, { label: "Fachada de aluminio" }],
    kicker: "Tipos de fachada · Fachada de aluminio",
    h1: "Fachada de aluminio en Barcelona",
    term: "la fachada de aluminio",
    answer:
      "Una fachada de aluminio es el cerramiento metálico ligero —perfilería y, en su caso, paneles o composite de aluminio— que envuelve el edificio. En IMFALÚ mantenemos, reparamos y regeneramos la fachada de aluminio existente, recuperando el lacado y las prestaciones sin sustituirla por completo.",
    intro:
      "El aluminio es ligero, duradero y resistente a la corrosión, pero su lacado se apaga con el tiempo y los anclajes y juntas se fatigan. Regeneramos y reparamos la fachada de aluminio de edificios en Barcelona para devolverle su aspecto y seguridad.",
    bullets: [
      "Ventajas del aluminio en fachada",
      "Reparación de perfilería y paneles",
      "Regeneración y recuperación del lacado",
      "Sustitución de juntas, sellados y fijaciones",
      "Mantenimiento preventivo del cerramiento",
      "Trabajo en altura certificado",
    ],
    gallery: [
      { src: "/proyectos/cornella/1.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà" },
      { src: "/proyectos/barbera/1.jpg", label: "Oficinas Barberà", caption: "Regeneración · Barberà del Vallès" },
      { src: "/proyectos/torre-tarragona/1.jpg", label: "Torre Tarragona", caption: "Oficinas · Barcelona" },
    ],
    relatedSlugs: ["regeneracion", "mantenimiento-fachadas", "reparacion"],
    faqs: [
      { q: "¿Se puede recuperar una fachada de aluminio vieja sin cambiarla?", a: "Sí. Con la regeneración recuperamos el lacado y reparamos los elementos afectados, una alternativa más económica y rápida que sustituir la fachada." },
      { q: "¿Qué ventajas tiene el aluminio en fachada?", a: "Es ligero, muy duradero, resistente a la corrosión y de bajo mantenimiento, lo que lo hace ideal para fachadas ligeras y muro cortina." },
      { q: "¿Trabajáis paneles de aluminio (composite)?", a: "Sí, mantenemos y reparamos paneles y composite de aluminio de la fachada existente, junto con la perfilería y los sellados." },
    ],
  },
  {
    slug: "rehabilitacion",
    metaTitle: "Rehabilitación de fachadas de aluminio y cristal en Barcelona",
    metaDescription:
      "Rehabilitación de fachadas de aluminio y cristal en Barcelona. +30 años, +300.000 m² y +150 edificios. Diagnóstico, regeneración y reparación.",
    metaKeywords: ["rehabilitación de fachadas Barcelona", "rehabilitar fachada aluminio", "rehabilitación fachada cristal", "rehabilitación fachada acristalada"],
    breadcrumb: [{ label: "Inicio", href: "/" }, { label: "Rehabilitación" }],
    kicker: "Tipos de fachada · Rehabilitación",
    h1: "Rehabilitación de fachadas de aluminio y cristal en Barcelona",
    term: "la rehabilitación de fachadas de aluminio y cristal",
    answer:
      "La rehabilitación de fachadas de aluminio y cristal es el conjunto de trabajos —diagnóstico, regeneración de lacados y vidrios, reparación de elementos y pruebas de estanqueidad— que recuperan el estado y las prestaciones de una fachada metálica o acristalada sin sustituirla por completo. A diferencia de la rehabilitación de obra (mortero, SATE, revocos), interviene sobre el aluminio y el vidrio del cerramiento, incluido el muro cortina.",
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
    gallery: [
      { src: "/proyectos/ski/1.jpg", label: "Edificio Ski (Meliá)", caption: "Rehabilitación · Barcelona" },
      { src: "/galeria/diagonal-1.jpg", label: "Torre en Diagonal", caption: "Oficinas · Barcelona" },
      { src: "/galeria/diagonal-2.jpg", label: "Edificio en Diagonal", caption: "Oficinas · Barcelona" },
      { src: "/proyectos/hotel/1.jpg", label: "Hotel Roselló", caption: "Fachada acristalada · Barcelona" },
      { src: "/proyectos/cornella/1.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà" },
    ],
    relatedSlugs: ["regeneracion", "reparacion", "mantenimiento-fachadas", "informes-tecnicos"],
    faqs: [
      { q: "¿Qué incluye una rehabilitación de fachada?", a: "Un diagnóstico previo, la regeneración o sustitución de los elementos afectados (aluminio, lacados y vidrios), la reparación de daños y, si procede, pruebas de estanqueidad. Todo con medios de elevación y seguridad para trabajo en altura." },
      { q: "¿Es mejor rehabilitar o sustituir toda la fachada?", a: "Si la estructura está en buen estado, rehabilitar suele ser más económico y rápido que sustituir. Lo valoramos con el diagnóstico." },
      { q: "¿Trabajáis para administradores de fincas y property managers?", a: "Sí, son la mayoría de nuestros clientes, junto con arquitectos y departamentos de mantenimiento de edificios en Barcelona." },
    ],
  },
]

export function getFacade(slug: string): Facade | undefined {
  return facades.find((f) => f.slug === slug)
}
export { TIPOS }
