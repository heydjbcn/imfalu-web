import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Target, Wrench, CheckCircle2 } from "lucide-react"
import { site } from "@/lib/site"
import { getProjects, getSite } from "@/lib/content"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"
import { CtaBand } from "@/components/site/cta-band"
import { ProjectGallery } from "@/components/site/project-gallery"
import { FaqSection } from "@/components/site/faq-section"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { PageHero } from "@/components/site/page-hero"

const T = {
  es: {
    metaTitle: "Proyectos de fachadas en Barcelona",
    metaDesc: "Edificios donde hemos intervenido la fachada de aluminio y cristal en Barcelona: WTC Cornellà, Edificio Ski (Meliá), Parc Vallsolana, Torre Tarragona.",
    inicio: "Inicio", proyectos: "Proyectos",
    eyebrow: "Proyectos",
    h1: "Proyectos de fachadas de aluminio y cristal en Barcelona",
    heroAlt: "Proyectos de fachadas de aluminio y cristal en",
    reto: "El reto", queHicimos: "Qué hicimos", resultado: "Resultado",
    faqTitle: "Preguntas frecuentes sobre nuestros proyectos",
    ctaTitle: "¿Quieres que tu edificio sea el próximo?",
    subtitle: (area: string) => `Edificios donde hemos trabajado: más de 150 edificios y +300.000 m² de fachada de aluminio y cristal intervenida en ${area}.`,
    faqs: [
      { q: "¿En qué tipo de edificios trabajáis?", a: "En oficinas, hoteles, comunidades y edificios singulares con fachada de aluminio y cristal o muro cortina. Algunos ejemplos: WTC Cornellà, Edificio Ski (Meliá), Parc Vallsolana, Torre Tarragona y Hotel Roselló." },
      { q: "¿Podéis intervenir sin parar la actividad del edificio?", a: "Sí. Trabajamos con medios de elevación y en altura para mantener y reparar la fachada minimizando las molestias a oficinas, huéspedes o vecinos." },
      { q: "¿Trabajáis fuera de Barcelona ciudad?", a: "Sí, en toda el área metropolitana de Barcelona: Cornellà de Llobregat, Sant Cugat del Vallès, Barberà del Vallès y alrededores." },
      { q: "¿Cómo empieza un proyecto de fachada?", a: "Con un diagnóstico previo del estado del cerramiento y un informe técnico. A partir de ahí proponemos la intervención —mantenimiento, reparación, regeneración o rehabilitación— y un presupuesto sin compromiso." },
    ],
  },
  ca: {
    metaTitle: "Projectes de façanes a Barcelona",
    metaDesc: "Edificis on hem intervingut la façana d'alumini i vidre a Barcelona: WTC Cornellà, Edifici Ski (Meliá), Parc Vallsolana, Torre Tarragona.",
    inicio: "Inici", proyectos: "Projectes",
    eyebrow: "Projectes",
    h1: "Projectes de façanes d'alumini i vidre a Barcelona",
    heroAlt: "Projectes de façanes d'alumini i vidre a",
    reto: "El repte", queHicimos: "Què vam fer", resultado: "Resultat",
    faqTitle: "Preguntes freqüents sobre els nostres projectes",
    ctaTitle: "Vols que el teu edifici sigui el proper?",
    subtitle: (area: string) => `Edificis on hem treballat: més de 150 edificis i +300.000 m² de façana d'alumini i vidre intervinguda a ${area}.`,
    faqs: [
      { q: "En quin tipus d'edificis treballeu?", a: "En oficines, hotels, comunitats i edificis singulars amb façana d'alumini i vidre o mur cortina. Alguns exemples: WTC Cornellà, Edifici Ski (Meliá), Parc Vallsolana, Torre Tarragona i Hotel Roselló." },
      { q: "Podeu intervenir sense aturar l'activitat de l'edifici?", a: "Sí. Treballem amb mitjans d'elevació i en alçada per mantenir i reparar la façana minimitzant les molèsties a oficines, hostes o veïns." },
      { q: "Treballeu fora de Barcelona ciutat?", a: "Sí, a tota l'àrea metropolitana de Barcelona: Cornellà de Llobregat, Sant Cugat del Vallès, Barberà del Vallès i rodalies." },
      { q: "Com comença un projecte de façana?", a: "Amb un diagnòstic previ de l'estat del tancament i un informe tècnic. A partir d'aquí proposem la intervenció —manteniment, reparació, regeneració o rehabilitació— i un pressupost sense compromís." },
    ],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: localizedPath(l, "/proyectos"), languages: { es: "/proyectos", ca: "/ca/proyectos", "x-default": "/proyectos" } },
    openGraph: { type: "website", url: `${site.url}${localizedPath(l, "/proyectos")}`, images: ["/og.jpg"] },
  }
}

export default async function ProyectosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  const siteL = getSite(l)
  const projects = getProjects(l)
  return (
    <>
      <PageHero
        lang={l}
        breadcrumb={[{ label: t.inicio, href: localizedPath(l, "/") }, { label: t.proyectos }]}
        eyebrow={t.eyebrow}
        title={t.h1}
        subtitle={t.subtitle(siteL.area)}
      />

      <section className="bg-cream pb-6 sm:pb-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink" minHeight={240} maxHeight={440}>
            <Image src="/headers/proyectos.webp" alt={`${t.heroAlt} ${site.city}`} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      <div className="container-x space-y-16 py-16">
        {projects.map((p, idx) => (
          <article key={p.slug} className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <ProjectGallery images={p.images} title={p.title} />
            </div>
            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">{p.title}</h2>
                {p.sector ? <span className="rounded-full bg-cream px-3 py-0.5 text-xs font-semibold text-burdeos">{p.sector}</span> : null}
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-warm">
                <MapPin className="h-4 w-4 text-burdeos" /> {p.location} · {p.type}
              </p>
              {p.metric ? (
                <p className="mt-3 inline-flex rounded-lg bg-burdeos/10 px-3 py-1.5 text-sm font-semibold text-burdeos">{p.metric}</p>
              ) : null}
              <dl className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                  <div><dt className="text-sm font-semibold text-ink">{t.reto}</dt><dd className="text-sm text-warm">{p.reto}</dd></div>
                </div>
                <div className="flex gap-3">
                  <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                  <div><dt className="text-sm font-semibold text-ink">{t.queHicimos}</dt><dd className="text-sm text-warm">{p.solucion}</dd></div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-burdeos" />
                  <div><dt className="text-sm font-semibold text-ink">{t.resultado}</dt><dd className="text-sm text-warm">{p.resultado}</dd></div>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <FaqSection title={t.faqTitle} faqs={t.faqs} bg="cream" />

      <CtaBand lang={l} title={t.ctaTitle} />
    </>
  )
}
