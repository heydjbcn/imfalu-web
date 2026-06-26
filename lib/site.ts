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
  address: {
    street: "Carrer d'Antoni Alcalá Galiano, 3",
    postalCode: "08940",
    locality: "Cornellà de Llobregat",
    region: "Barcelona",
    full: "Carrer d'Antoni Alcalá Galiano, 3, 08940 Cornellà de Llobregat (Barcelona)",
    lat: 41.352068,
    lng: 2.0833613,
    placeId: "ChIJr133M5-ipBIR7he5QqpBNbY",
    directions: "https://www.google.com/maps/dir/?api=1&destination=41.352068,2.0833613&destination_place_id=ChIJr133M5-ipBIR7he5QqpBNbY",
  },
  hours: "L-V 8:00-18:00",
  // Señal de frescura para SEO/GEO. Bumpear al actualizar contenido relevante.
  lastUpdated: "2026-06-26", // ISO, para dateModified/datePublished en JSON-LD
  lastUpdatedLabel: "junio de 2026", // visible en la web ("Actualizado en …")
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

export interface NavItem {
  label: string
  href: string
  desc: string
  img: string
  sub?: { label: string; href: string }[]
}
export interface NavGroup {
  label: string
  featured: { title: string; text: string; img: string; href: string }
  children: NavItem[]
}

export const navMenu: NavGroup[] = [
  {
    label: "Servicios",
    featured: { title: "Urgencias 24 h", text: "Cristal roto o riesgo en fachada", img: "/galeria/reparacion-4.jpg", href: "/contacto" },
    children: [
      { label: "Mantenimiento", href: "/servicios/mantenimiento-fachadas", desc: "Contrato anual y urgencias 24 h", img: "/servicios/mantenimiento-fachadas.jpg", sub: [{ label: "Preventivo", href: "/servicios/mantenimiento-preventivo" }, { label: "Correctivo", href: "/servicios/mantenimiento-correctivo" }] },
      { label: "Reparación", href: "/servicios/reparacion", desc: "Cristales, sellados y perfilería", img: "/servicios/reparacion.jpg" },
      { label: "Regeneración", href: "/servicios/regeneracion", desc: "Recuperar sin sustituir", img: "/servicios/regeneracion.jpg" },
      { label: "Informes técnicos", href: "/servicios/informes-tecnicos", desc: "Diagnóstico y auditoría", img: "/servicios/informes-tecnicos.jpg" },
      { label: "Pruebas de estanqueidad", href: "/servicios/pruebas-estanqueidad", desc: "Localizar filtraciones", img: "/servicios/pruebas-estanqueidad.jpg" },
      { label: "Fotocatálisis", href: "/servicios/fotocatalisis", desc: "Tratamiento autolimpiante", img: "/servicios/fotocatalisis.jpg" },
    ],
  },
  {
    label: "Tipos de fachada",
    featured: { title: "Más de 150 edificios", text: "Oficinas, hoteles y singulares", img: "/proyectos/ski/1.jpg", href: "/proyectos" },
    children: [
      { label: "Muro cortina", href: "/fachadas/muro-cortina", desc: "Fachada ligera de aluminio y cristal", img: "/proyectos/ski/2.jpg", sub: [{ label: "De aluminio", href: "/fachadas/muro-cortina-aluminio" }, { label: "De cristal", href: "/fachadas/muro-cortina-cristal" }] },
      { label: "Fachada acristalada", href: "/fachadas/fachada-acristalada", desc: "Fachada de vidrio", img: "/proyectos/hotel/1.jpg" },
      { label: "Fachada de aluminio", href: "/fachadas/fachada-aluminio", desc: "Fachada metálica", img: "/proyectos/cornella/1.jpg" },
      { label: "Rehabilitación", href: "/fachadas/rehabilitacion", desc: "Recuperar el cerramiento", img: "/proyectos/barbera/1.jpg" },
    ],
  },
]

export const navLinks = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Empresa", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const

export interface GalleryItem {
  src: string // ruta en /public
  label: string // título (vertical cuando está recogida)
  caption?: string // subtítulo al abrir
}

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  icon: string // nombre de icono lucide
  image: string // cabecera
  seoTitle: string
  metaDescription: string
  keywords: string[]
  secondaryKeywords: string[]
  /** Respuesta directa y citable (answer-first) para IA/buscadores. 1-2 frases que definen el servicio y marcan el nicho. */
  answer: string
  intro: string // texto largo (con keyword principal)
  bullets: string[]
  when: string[] // señales / cuándo lo necesitas
  note?: { title: string; body: string[] } // nota aclaratoria (normativa, etc.)
  gallery?: GalleryItem[] // fotos reales de trabajos
}

export const services: Service[] = [
  {
    slug: "mantenimiento-fachadas",
    title: "Mantenimiento de fachadas",
    short: "Contrato anual y servicio de urgencias para fachadas metálicas y de cristal.",
    description:
      "Programa de mantenimiento preventivo y correctivo para fachadas de aluminio y cristal, con contrato anual y servicio de urgencias. Mantenemos la fachada de tu edificio en estado óptimo, evitando incidencias y alargando su vida útil.",
    icon: "ShieldCheck",
    image: "/servicios/mantenimiento-fachadas.jpg",
    seoTitle: "Mantenimiento de fachadas de aluminio y cristal en Barcelona",
    metaDescription:
      "Mantenimiento de fachadas de aluminio y cristal en Barcelona: contrato anual, revisiones y urgencias 24 h para muro cortina. Más de 30 años.",
    keywords: ["mantenimiento de fachadas de aluminio y cristal Barcelona", "mantenimiento de fachadas Barcelona", "contrato mantenimiento fachada"],
    secondaryKeywords: ["contrato de mantenimiento de fachada", "mantenimiento de muro cortina", "mantenimiento fachada acristalada", "conservación de fachada", "revisión de fachada"],
    answer:
      "El mantenimiento de fachadas de aluminio y cristal es la revisión y conservación periódica del cerramiento —sellados, juntas, anclajes, drenajes y vidrios— para prevenir filtraciones y desprendimientos antes de que obliguen a una reparación mayor. A diferencia del mantenimiento de obra (mortero, revocos, pintura), interviene sobre la fachada metálica y acristalada, incluido el muro cortina.",
    intro:
      "El mantenimiento de fachadas de aluminio y cristal evita que pequeños deterioros se conviertan en filtraciones, desprendimientos o reparaciones costosas. En IMFALÚ ofrecemos un programa de mantenimiento preventivo y correctivo para fachadas metálicas y acristaladas —incluido el muro cortina—, con contrato anual y servicio de urgencias 24 h. Más de 30 años cuidando la fachada de edificios en Barcelona y su área metropolitana.",
    bullets: ["Contrato anual de mantenimiento", "Servicio de urgencias 24 h", "Revisiones periódicas programadas", "Pequeñas reparaciones preventivas", "Informe del estado de la fachada", "Mantenimiento de muro cortina"],
    when: ["La fachada no se revisa desde hace más de un año", "Aparecen manchas, óxido o juntas y sellados deteriorados", "El edificio tiene muro cortina o gran superficie acristalada", "Quieres prevenir filtraciones y desprendimientos", "Buscas un único especialista con contrato de mantenimiento"],
    gallery: [
      { src: "/proyectos/cornella/1.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà de Llobregat" },
      { src: "/proyectos/vallsolana/1.jpg", label: "Parc Vallsolana", caption: "Oficinas · Sant Cugat del Vallès" },
      { src: "/proyectos/torre-tarragona/1.jpg", label: "Torre Tarragona", caption: "Oficinas · Barcelona" },
    ],
    note: {
      title: "Mantenimiento, ITE y el Libro del Edificio",
      body: [
        "El mantenimiento de la fachada debe realizarlo una empresa autorizada, que mantenga actualizados los libros de mantenimiento y la documentación que exige la normativa vigente, e informe de cualquier cambio que afecte a las instalaciones o de las modificaciones necesarias para seguir cumpliéndola.",
        "El Código Técnico de la Edificación (CTE) refuerza la exigibilidad del Libro del Edificio, la herramienta básica con la que propietarios y usuarios cumplen sus obligaciones de conservación. La LOE define su contenido —con desarrollo autonómico—: conservar el edificio mediante un uso y mantenimiento adecuados y custodiar la documentación, seguros y garantías de la obra.",
        "Como parte del servicio, documentamos nuestras actuaciones sobre la fachada para que el Libro del Edificio refleje su estado real y las intervenciones realizadas.",
      ],
    },
  },
  {
    slug: "mantenimiento-preventivo",
    title: "Mantenimiento preventivo",
    short: "Revisiones programadas para adelantarse a filtraciones y desprendimientos.",
    description:
      "Programa de revisiones periódicas y pequeñas actuaciones sobre el cerramiento para conservar la fachada en buen estado y alargar su vida útil, antes de que aparezcan los problemas.",
    icon: "ShieldCheck",
    image: "/servicios/mantenimiento-fachadas.jpg",
    seoTitle: "Mantenimiento preventivo de fachadas de aluminio y cristal en Barcelona",
    metaDescription:
      "Mantenimiento preventivo de fachadas de aluminio y cristal en Barcelona: revisiones programadas de sellados, juntas y anclajes para evitar filtraciones y desprendimientos.",
    keywords: ["mantenimiento preventivo de fachadas", "mantenimiento preventivo muro cortina", "revisión de fachada Barcelona"],
    secondaryKeywords: ["revisión de sellados", "inspección de fachada", "conservación de fachada", "contrato de mantenimiento"],
    answer:
      "El mantenimiento preventivo de fachadas de aluminio y cristal es el programa de revisiones periódicas y pequeñas actuaciones (sellados, juntas, anclajes, drenajes) que detecta y corrige el deterioro del cerramiento antes de que cause filtraciones o desprendimientos. Es la base del mantenimiento y casi siempre más barato que el correctivo.",
    intro:
      "El mantenimiento preventivo se adelanta al problema: revisa periódicamente el aluminio, los vidrios, las juntas y los sellados, y corrige los pequeños deterioros antes de que se conviertan en filtraciones o riesgos de desprendimiento. En edificios con muro cortina o gran superficie acristalada es la mejor inversión para la fachada.",
    bullets: ["Revisiones periódicas programadas", "Inspección de sellados, juntas y anclajes", "Comprobación de drenajes y estanqueidad", "Pequeñas reparaciones preventivas", "Informe del estado tras cada revisión", "Contrato anual adaptado al edificio"],
    when: ["La fachada no se revisa desde hace más de un año", "Quieres prevenir filtraciones y desprendimientos", "El edificio es de gran altura o muy expuesto", "Buscas un contrato anual con un único especialista", "Necesitas documentar el estado para el Libro del Edificio"],
    gallery: [
      { src: "/proyectos/cornella/1.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà de Llobregat" },
      { src: "/proyectos/vallsolana/1.jpg", label: "Parc Vallsolana", caption: "Oficinas · Sant Cugat del Vallès" },
      { src: "/proyectos/torre-tarragona/1.jpg", label: "Torre Tarragona", caption: "Oficinas · Barcelona" },
    ],
  },
  {
    slug: "mantenimiento-correctivo",
    title: "Mantenimiento correctivo",
    short: "Resolvemos las incidencias de la fachada cuando ya han aparecido.",
    description:
      "Reparación de las incidencias que ya se han producido en la fachada —cristales, sellados, perfilería— con reposición y acopio de materiales, y servicio de urgencias 24 h.",
    icon: "Wrench",
    image: "/servicios/reparacion.jpg",
    seoTitle: "Mantenimiento correctivo de fachadas de aluminio y cristal en Barcelona",
    metaDescription:
      "Mantenimiento correctivo de fachadas en Barcelona: resolvemos incidencias del cerramiento (cristales, sellados, perfilería) con reposición y urgencias 24 h.",
    keywords: ["mantenimiento correctivo de fachadas", "reparación de incidencias fachada", "urgencias fachada Barcelona"],
    secondaryKeywords: ["reposición de elementos", "reparación de sellados", "cristal roto fachada", "acopio de materiales"],
    answer:
      "El mantenimiento correctivo de fachadas de aluminio y cristal interviene cuando el daño ya se ha producido: repara incidencias del cerramiento (cristales, sellados, perfilería), repone elementos y atiende urgencias 24 h. Complementa al preventivo, que es el que evita llegar a este punto.",
    intro:
      "Cuando ya hay un cristal roto, una filtración o un elemento suelto, el mantenimiento correctivo lo resuelve: reparamos y reponemos los elementos afectados del cerramiento, con acopio de materiales y servicio de urgencias 24 h para riesgos en altura.",
    bullets: ["Reparación de incidencias ya producidas", "Reposición de cristales y elementos", "Reparación de sellados y perfilería", "Acopio de materiales de la fachada", "Servicio de urgencias 24 h", "Medios de elevación certificados"],
    when: ["Hay un cristal roto o un elemento suelto", "Aparece una filtración o humedad", "Riesgo de desprendimiento en la fachada", "Necesitas una reparación urgente en altura", "El preventivo ha detectado algo que reparar"],
    gallery: [
      { src: "/galeria/reparacion-1.jpg", label: "Grúa en muro cortina", caption: "Reposición de cristal en altura" },
      { src: "/galeria/reparacion-4.jpg", label: "Reposición en fachada", caption: "Camión grúa y cesta certificados" },
      { src: "/galeria/reparacion-3.jpg", label: "Trabajo en altura", caption: "Reparación de fachada acristalada" },
    ],
  },
  {
    slug: "reparacion",
    title: "Reparación y reposición",
    short: "Reparación de elementos dañados y reposición de cristales de cualquier medida y peso.",
    description:
      "Reparamos y reponemos los elementos constructivos dañados de la fachada y sustituimos cristales de cualquier medida y peso, con los medios de elevación y seguridad necesarios para trabajos en altura.",
    icon: "Wrench",
    image: "/servicios/reparacion.jpg",
    seoTitle: "Reparación de fachadas de aluminio y cristal en Barcelona",
    metaDescription:
      "Reparación de fachadas y reposición de cristales en Barcelona: cristal roto, muro cortina, juntas y aluminio. Urgencias 24 h. Pide presupuesto.",
    keywords: ["reparación de fachadas de aluminio y cristal Barcelona", "reparación de fachadas Barcelona", "reposición de cristales fachada"],
    secondaryKeywords: ["reposición de cristales de fachada", "reparar fachada de vidrio", "cristal de fachada roto", "reparación de muro cortina", "sustitución de cristales"],
    answer:
      "La reparación de fachadas de aluminio y cristal resuelve daños puntuales del cerramiento —cristales rotos, perfilería de aluminio, juntas y sellados— y repone vidrios de cualquier medida y peso con medios de elevación certificados para trabajo en altura. Es una intervención sobre la fachada acristalada y el muro cortina, no sobre la obra del edificio.",
    intro:
      "Reparamos y reponemos los elementos dañados de la fachada de aluminio y cristal: desde un cristal roto en altura hasta juntas, sellados y perfilería de muro cortina. Sustituimos vidrios de cualquier medida y peso con los medios de elevación y la seguridad necesarios, y disponemos de servicio de urgencias 24 h ante cualquier riesgo en la fachada.",
    bullets: ["Reposición de cristales de cualquier medida y peso", "Reparación de elementos de aluminio y perfilería", "Sustitución de juntas y sellados", "Reparación de muro cortina", "Servicio de urgencias 24 h", "Medios de elevación propios"],
    when: ["Hay un cristal roto o agrietado en la fachada", "Riesgo de desprendimiento de un elemento de fachada", "Juntas o sellados envejecidos que dejan pasar agua", "Perfilería de aluminio dañada o suelta", "Necesitas una reparación urgente en altura"],
    gallery: [
      { src: "/galeria/reparacion-1.jpg", label: "Grúa en muro cortina", caption: "Reposición de cristal en altura" },
      { src: "/galeria/reparacion-2.jpg", label: "Vidrio de gran formato", caption: "Manipulación con grúa y ventosa" },
      { src: "/galeria/reparacion-3.jpg", label: "Trabajo en altura", caption: "Reparación de fachada acristalada" },
      { src: "/galeria/reparacion-4.jpg", label: "Reposición en fachada", caption: "Camión grúa y cesta certificados" },
    ],
  },
  {
    slug: "regeneracion",
    title: "Regeneración de fachadas",
    short: "Restauración y recuperación del estado original de elementos metálicos y vidrios.",
    description:
      "Restauramos los elementos afectados de la fachada y recuperamos su estado original, tanto en elementos metálicos como en los vidrios. Una alternativa a la sustitución completa que devuelve a la fachada su aspecto y prestaciones.",
    icon: "RefreshCw",
    image: "/servicios/regeneracion.jpg",
    seoTitle: "Regeneración de fachadas de aluminio en Barcelona",
    metaDescription:
      "Regeneración y restauración de fachadas de aluminio y vidrio en Barcelona: recupera el estado original sin sustituir toda la fachada.",
    keywords: ["regeneración de fachadas de aluminio Barcelona", "regeneración de fachadas", "restauración fachada aluminio"],
    secondaryKeywords: ["restauración de fachada de aluminio", "recuperar lacado de aluminio", "rehabilitación de fachada metálica", "regeneración de vidrios"],
    answer:
      "La regeneración de fachadas restaura los lacados de aluminio y los vidrios deteriorados para recuperar el aspecto y las prestaciones originales del cerramiento, como alternativa más económica y sostenible a sustituir toda la fachada. Solo es posible cuando la estructura del cerramiento sigue en buen estado.",
    intro:
      "La regeneración recupera el estado y las prestaciones originales de una fachada de aluminio y cristal sin necesidad de sustituirla por completo. Restauramos los lacados y elementos metálicos y tratamos los vidrios afectados: una alternativa más económica y sostenible a la sustitución total, ideal cuando la estructura de la fachada sigue en buen estado.",
    bullets: ["Restauración de aluminio y lacados", "Recuperación de vidrios", "Tratamiento de oxidación y deterioro", "Alternativa a la sustitución total", "Recuperación del aspecto y prestaciones"],
    when: ["El aluminio o el lacado se ven envejecidos o con óxido", "La fachada ha perdido aspecto pero la estructura está bien", "Quieres una alternativa más barata que sustituir toda la fachada", "Hay vidrios deteriorados pero recuperables", "Buscas mejorar la imagen del edificio sin una gran obra"],
    gallery: [
      { src: "/proyectos/barbera/1.jpg", label: "Oficinas Barberà", caption: "Regeneración · Barberà del Vallès" },
      { src: "/proyectos/ski/2.jpg", label: "Edificio Ski", caption: "Rehabilitación · Barcelona" },
      { src: "/proyectos/cornella/2.jpg", label: "WTC Cornellà", caption: "Oficinas · Cornellà" },
    ],
  },
  {
    slug: "informes-tecnicos",
    title: "Informes técnicos y auditorías",
    short: "Diagnóstico del estado de la fachada con informes técnicos y auditorías.",
    description:
      "Elaboramos informes técnicos y auditorías del estado de la fachada: diagnóstico de patologías, evaluación de riesgos y plan de actuación. La base para decidir con criterio cualquier intervención.",
    icon: "ClipboardCheck",
    image: "/servicios/informes-tecnicos.jpg",
    seoTitle: "Informe técnico y auditoría de fachada en Barcelona",
    metaDescription:
      "Informe técnico y auditoría de fachadas de aluminio y cristal en Barcelona: diagnóstico de patologías, riesgos y plan de actuación priorizado.",
    keywords: ["informe técnico de fachada Barcelona", "auditoría de fachadas", "inspección técnica fachada Barcelona"],
    secondaryKeywords: ["auditoría de fachada", "inspección técnica de fachada", "diagnóstico de patologías", "informe de fachada"],
    answer:
      "Un informe técnico de fachada es el diagnóstico documentado del estado del cerramiento de aluminio y cristal —patologías, evaluación de riesgos y plan de actuación priorizado— que sirve de base para la Inspección Técnica del Edificio (ITE), para presupuestar una intervención o para la gestión del edificio.",
    intro:
      "Antes de intervenir una fachada conviene saber exactamente en qué estado está. Elaboramos informes técnicos y auditorías de fachadas de aluminio y cristal: diagnóstico de patologías, evaluación de riesgos y un plan de actuación priorizado, con la documentación que permite decidir cualquier obra con criterio y sin sorpresas.",
    bullets: ["Diagnóstico de patologías", "Evaluación de riesgos", "Plan de actuación priorizado", "Documentación técnica", "Apoyo a la gestión del edificio"],
    when: ["Vas a presupuestar o planificar una intervención en la fachada", "Necesitas documentar el estado de la fachada del edificio", "Hay patologías visibles y quieres conocer su alcance", "Como apoyo técnico para la gestión del edificio", "Quieres priorizar actuaciones con criterio profesional"],
    note: {
      title: "Informe de fachada, ITE y Certificat d'Aptitud",
      body: [
        "En Catalunya, los edificios de viviendas a partir de cierta antigüedad están obligados a pasar la Inspección Técnica del Edificio (ITE), que evalúa, entre otros elementos, el estado de las fachadas. De su resultado depende el Certificat d'Aptitud que emite la Administración.",
        "Nuestro informe técnico documenta el estado real del cerramiento de aluminio y cristal —patologías, evaluación de riesgos y plan de actuación priorizado— y sirve de base técnica para la ITE, para subsanar deficiencias o para presupuestar una intervención con criterio.",
        "Cuando es necesario, coordinamos con el arquitecto o el técnico responsable de la ITE para que la documentación de la fachada quede correctamente reflejada.",
      ],
    },
  },
  {
    slug: "pruebas-estanqueidad",
    title: "Pruebas de estanqueidad",
    short: "Localización de filtraciones y verificación de la estanqueidad de la fachada.",
    description:
      "Realizamos pruebas de estanqueidad para localizar filtraciones de agua y verificar el correcto comportamiento de la fachada frente a la lluvia y la humedad, antes y después de una intervención.",
    icon: "Droplets",
    image: "/servicios/pruebas-estanqueidad.jpg",
    seoTitle: "Pruebas de estanqueidad de fachada en Barcelona",
    metaDescription:
      "Pruebas de estanqueidad de fachada en Barcelona: localizamos filtraciones de agua en muro cortina, ventanas y cristales antes de reparar.",
    keywords: ["pruebas de estanqueidad de fachada Barcelona", "pruebas de estanqueidad fachada", "estanqueidad muro cortina"],
    secondaryKeywords: ["detección de filtraciones", "filtraciones en muro cortina", "prueba de agua en fachada", "humedades por fachada"],
    answer:
      "Una prueba de estanqueidad de fachada reproduce de forma controlada la acción de la lluvia y el viento para localizar el punto exacto por el que el agua penetra en una fachada de aluminio y cristal —muro cortina, ventanas, sellados y juntas— antes y después de repararla, siguiendo los criterios del CTE DB-HS y los documentos reconocidos de pruebas de estanquidad de fachadas.",
    intro:
      "Cuando hay humedades, lo primero es saber por dónde entra el agua. Realizamos pruebas de estanqueidad controladas que localizan el punto exacto de filtración en la fachada de aluminio y cristal —muro cortina, ventanas, sellados y juntas— antes y después de una reparación, para resolver el problema de raíz y sin obras innecesarias.",
    bullets: ["Localización del punto de filtración", "Pruebas de agua controladas", "Verificación de sellados y juntas", "Comprobación antes y después de reparar", "Informe de resultados"],
    when: ["Aparecen humedades o manchas de agua tras la fachada", "Sospechas de filtraciones en el muro cortina", "Quieres verificar la fachada tras una reparación", "Antes de comprar o recepcionar un edificio acristalado", "No localizas el origen de una filtración recurrente"],
    note: {
      title: "Normativa: CTE DB-HS y ensayo de estanquidad al agua",
      body: [
        "El Código Técnico de la Edificación (CTE), en su Documento Básico HS1 «Protección frente a la humedad», exige que las fachadas impidan la penetración del agua de lluvia. Cuando aparecen filtraciones, la prueba de estanquidad al agua es la forma objetiva de comprobar si la fachada sigue cumpliendo ese requisito.",
        "El ensayo reproduce de forma controlada la acción de la lluvia y el viento: se proyecta agua sobre la fachada —en muro cortina, con un peine de boquillas difusoras a una distancia y un caudal definidos— y se observa desde el interior si hay entrada de agua. Si la hay, el resultado es no satisfactorio y se localiza el punto exacto a reparar.",
        "Seguimos los criterios de los documentos reconocidos de pruebas de servicio de estanquidad de fachadas, tanto para diagnosticar una filtración existente como para validar la fachada después de una reparación.",
      ],
    },
  },
  {
    slug: "fotocatalisis",
    title: "Tratamientos por fotocatálisis",
    short: "Tratamiento autolimpiante y sostenible para la fachada y el medio ambiente.",
    description:
      "Aplicamos tratamientos por fotocatálisis: un recubrimiento que ayuda a autolimpiar la fachada y a reducir contaminantes del aire mediante la acción de la luz. Mejor aspecto, menos mantenimiento y beneficio medioambiental.",
    icon: "Leaf",
    image: "/servicios/fotocatalisis.jpg",
    seoTitle: "Fotocatálisis para fachadas en Barcelona",
    metaDescription:
      "Tratamiento por fotocatálisis para fachadas en Barcelona: efecto autolimpiante, menos mantenimiento y menos contaminantes. Pioneros en su aplicación.",
    keywords: ["fotocatálisis para fachadas Barcelona", "fotocatálisis fachada", "tratamiento autolimpiante fachada"],
    secondaryKeywords: ["tratamiento autolimpiante de fachada", "recubrimiento fotocatalítico", "fachada sostenible", "limpieza de fachada sin químicos"],
    answer:
      "La fotocatálisis es un recubrimiento con dióxido de titanio (TiO₂) que, activado por la luz, descompone la suciedad y contaminantes del aire como los óxidos de nitrógeno (NOx), dando a la fachada un efecto autolimpiante y reduciendo su mantenimiento. Se aplica sobre fachadas de aluminio y cristal, idealmente tras una rehabilitación.",
    intro:
      "La fotocatálisis es un recubrimiento que, con la acción de la luz, ayuda a autolimpiar la fachada y a reducir contaminantes del aire. El resultado: mejor aspecto durante más tiempo, menos necesidad de limpieza y un beneficio medioambiental. En IMFALÚ somos pioneros en aplicar tratamientos por fotocatálisis en fachadas de aluminio y cristal.",
    bullets: ["Efecto autolimpiante", "Reducción de contaminantes del aire", "Menor necesidad de limpieza", "Beneficio medioambiental", "Protege el resultado tras una rehabilitación"],
    when: ["Quieres reducir la frecuencia de limpieza de la fachada", "Buscas una opción más sostenible para el edificio", "La fachada se ensucia rápido por la contaminación", "Tras una rehabilitación, para proteger el resultado", "Quieres diferenciar tu edificio con una mejora verde"],
    note: {
      title: "Cómo funciona la fotocatálisis (TiO₂)",
      body: [
        "La fotocatálisis se basa en el dióxido de titanio (TiO₂), un semiconductor que, al recibir la luz —especialmente la radiación ultravioleta del sol—, activa una reacción que descompone la materia orgánica y la suciedad depositada sobre la fachada.",
        "Esa reacción produce dos efectos. Descompone contaminantes del aire como los óxidos de nitrógeno (NOx) que emiten el tráfico y la industria; y vuelve la superficie superhidrófila, de modo que el agua de lluvia resbala formando una lámina que arrastra la suciedad ya descompuesta (efecto autolimpiante).",
        "El resultado es una fachada con mejor aspecto durante más tiempo, menos necesidad de limpieza y un beneficio medioambiental. En IMFALÚ somos pioneros en aplicar tratamientos por fotocatálisis sobre fachadas de aluminio y cristal.",
      ],
    },
  },
]

export interface Project {
  slug: string
  title: string
  location: string
  type: string
  sector?: string // p.ej. "Oficinas", "Hotel", "Edificio singular"
  metric?: string // dato citable real (m², uds, plazo) — rellenar cuando se tenga
  image: string // portada (= images[0])
  images: string[]
  reto: string
  solucion: string
  resultado: string
}

export const projects: Project[] = [
  {
    slug: "wtc-cornella", title: "WTC Cornellà", location: "Cornellà de Llobregat",
    type: "Fachada de oficinas de aluminio y cristal", sector: "Oficinas",
    image: "/proyectos/cornella/1.jpg", images: ["/proyectos/cornella/1.jpg", "/proyectos/cornella/2.jpg", "/proyectos/cornella/3.jpg"],
    reto: "Complejo de oficinas singular con una gran superficie acristalada que necesitaba conservar su fachada en perfecto estado y de forma segura.",
    solucion: "Mantenimiento y reparación de los elementos de aluminio y vidrio con trabajo en altura certificado.",
    resultado: "Fachada segura y en buen estado, sin interrumpir la actividad de las oficinas.",
  },
  {
    slug: "edificio-ski-melia", title: "Edificio Ski (Meliá)", location: "Barcelona",
    type: "Rehabilitación de fachada", sector: "Edificio singular",
    image: "/proyectos/ski/1.jpg", images: ["/proyectos/ski/1.jpg", "/proyectos/ski/2.jpg", "/proyectos/ski/3.jpg", "/proyectos/ski/4.jpg"],
    reto: "Edificio emblemático con fachada metálica y acristalada muy expuesta que requería rehabilitación.",
    solucion: "Rehabilitación y regeneración de los elementos de la fachada, recuperando su estado original.",
    resultado: "Fachada recuperada estética y funcionalmente, devolviendo al edificio su imagen original.",
  },
  {
    slug: "parc-vallsolana", title: "Parc Vallsolana", location: "Sant Cugat del Vallès",
    type: "Fachada de oficinas", sector: "Oficinas",
    image: "/proyectos/vallsolana/1.jpg", images: ["/proyectos/vallsolana/1.jpg"],
    reto: "Parque empresarial con fachadas acristaladas de oficinas que requerían mantenimiento.",
    solucion: "Mantenimiento y reparación de la fachada de aluminio y cristal.",
    resultado: "Fachada en óptimo estado y con un mantenimiento previsible para el parque empresarial.",
  },
  {
    slug: "torre-tarragona", title: "Torre Tarragona", location: "Barcelona",
    type: "Edificio de oficinas", sector: "Oficinas",
    image: "/proyectos/torre-tarragona/1.jpg", images: ["/proyectos/torre-tarragona/1.jpg"],
    reto: "Edificio de oficinas en altura con fachada acristalada.",
    solucion: "Intervención en la fachada de aluminio y cristal con medios de elevación.",
    resultado: "Fachada conservada y segura, eliminando el riesgo de desprendimiento en altura.",
  },
  {
    slug: "hotel-rosello", title: "Hotel Roselló", location: "Barcelona",
    type: "Mantenimiento de fachada acristalada", sector: "Hotel",
    image: "/proyectos/hotel/1.jpg", images: ["/proyectos/hotel/1.jpg", "/proyectos/hotel/2.jpg"],
    reto: "Hotel con fachada acristalada que exigía mantenimiento sin afectar a los huéspedes.",
    solucion: "Mantenimiento y reposición de elementos de la fachada de cristal.",
    resultado: "Fachada en buen estado y con mínimas molestias para los huéspedes.",
  },
  {
    slug: "oficinas-barbera", title: "Edificio de oficinas", location: "Barberà del Vallès",
    type: "Regeneración de fachada", sector: "Oficinas",
    image: "/proyectos/barbera/1.jpg", images: ["/proyectos/barbera/1.jpg"],
    reto: "Edificio de oficinas con fachada metálica y de cristal deteriorada.",
    solucion: "Regeneración de la fachada de aluminio y vidrio.",
    resultado: "Aspecto y prestaciones de la fachada recuperados sin sustituirla por completo.",
  },
]

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
export const telLink = `tel:+34${site.phone}`
