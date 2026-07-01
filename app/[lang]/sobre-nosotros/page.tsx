import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Award, Building2, Ruler, TrendingUp, ShieldCheck, Leaf, Clock,
  Hotel, Users, Landmark, ArrowRight, ChevronRight,
} from "lucide-react"
import { site } from "@/lib/site"
import { getServices } from "@/lib/content"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"
import { CtaBand } from "@/components/site/cta-band"
import { Reviews } from "@/components/site/reviews"
import { FaqSection } from "@/components/site/faq-section"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { BrandWatermark } from "@/components/site/brand-watermark"
import { PageHero } from "@/components/site/page-hero"

const HITO_ICONS = [Award, Ruler, Building2, TrendingUp]
const COMP_ICONS = [ShieldCheck, Award, Clock, Leaf]
const SECTOR_ICONS = [Building2, Hotel, Users, Landmark]

const T = {
  es: {
    metaTitle: "Sobre nosotros: 30 años en fachadas de aluminio y cristal",
    metaDesc: "Más de 30 años, +300.000 m² y +150 edificios de fachada de aluminio y cristal en Barcelona. Empresa de referencia en mantenimiento y rehabilitación.",
    inicio: "Inicio", empresa: "Empresa", eyebrow: "La empresa",
    h1: "Empresa de fachadas de aluminio y cristal en Barcelona",
    heroStrong: "Cuidamos la piel de los edificios.",
    heroRest: "Los profesionales que formamos IMFALÚ acumulamos una amplia experiencia en mantenimiento y rehabilitación de fachadas de aluminio y cristal, con más de 300.000 m² intervenidos en Barcelona y su área metropolitana.",
    heroAlt: "Equipo de IMFALÚ trabajando en una fachada de aluminio y cristal en",
    hitos: [
      { v: "30 años", d: "de experiencia en el sector" },
      { v: "+300.000 m²", d: "de fachada intervenida" },
      { v: "+150 edificios", d: "en Barcelona y área metropolitana" },
      { v: "~20%", d: "de crecimiento anual" },
    ],
    trayectoriaEyebrow: "Trayectoria",
    trayectoriaTitle: "Especialistas, desde el primer día",
    trayectoria: [
      "IMFALÚ nació para dar respuesta a una necesidad concreta: el mantenimiento y la rehabilitación de fachadas de aluminio y cristal, un trabajo especializado que exige conocimiento técnico y medios para intervenir en altura con seguridad.",
      "Más de tres décadas después, hemos intervenido más de 300.000 m² de fachada en más de 150 edificios —oficinas, hoteles, comunidades y edificios singulares—, con un crecimiento sostenido año tras año.",
      "Seguimos siendo lo que fuimos desde el principio: especialistas. Nos dedicamos a las fachadas de aluminio y cristal, y esa concentración nos ha convertido en una empresa de referencia en mantenimiento y rehabilitación de fachada de aluminio y cristal en Barcelona, además de pioneros en tratamientos por fotocatálisis.",
    ],
    queHacemosEyebrow: "Qué hacemos", queHacemosTitle: "Todo el ciclo de la fachada",
    compromisoEyebrow: "Nuestro compromiso", compromisoTitle: "Cómo trabajamos",
    compromiso: [
      { t: "Seguridad", d: "Trabajo en altura certificado y prevención de riesgos en cada obra. Personal y medios homologados." },
      { t: "Especialización", d: "Centrados en fachadas de aluminio y cristal: muro cortina, acristaladas y metálicas. Es lo que mejor sabemos hacer." },
      { t: "Calidad y respuesta", d: "Respondemos por nuestro trabajo y disponemos de servicio de urgencias 24 h ante cualquier incidencia." },
      { t: "Sostenibilidad", d: "Pioneros en tratamientos por fotocatálisis, que reducen el uso de químicos y cuidan el entorno." },
    ],
    premioTitle: "Reconocidos en el sector",
    premioText: "Presentamos candidatura a los Premios Nacionales Facility Management & Services por nuestro trabajo en mantenimiento y regeneración de fachadas, destacando los +300.000 m² intervenidos, los más de 150 edificios y ser pioneros en aplicar tratamientos por fotocatálisis.",
    sectoresTitle: "Sectores en los que trabajamos",
    sectoresText: "Para administradores de fincas, property managers, arquitectos y departamentos de mantenimiento.",
    sectores: ["Oficinas", "Hoteles", "Comunidades", "Edificios singulares"],
    verProyectos: "Ver proyectos",
    faqTitle: "Preguntas frecuentes sobre IMFALÚ",
    ctaTitle: (city: string) => `¿Tu edificio necesita un especialista en fachadas en ${city}?`,
    faqs: [
      { q: "¿Cuántos años de experiencia tiene IMFALÚ?", a: "Más de 30 años especializados en fachadas de aluminio y cristal, con más de 300.000 m² intervenidos y más de 150 edificios en Barcelona y su área metropolitana." },
      { q: "¿Qué diferencia a IMFALÚ de una empresa de rehabilitación general?", a: "Nos dedicamos en exclusiva a la fachada de aluminio y cristal —muro cortina, acristaladas y metálicas—, no a la obra de albañilería (mortero, SATE, revocos). Esa especialización, junto al trabajo en altura certificado, es nuestra mayor garantía." },
      { q: "¿Sois pioneros en algo?", a: "Sí, somos pioneros en Barcelona en aplicar tratamientos por fotocatálisis en fachadas: un recubrimiento autolimpiante que además reduce contaminantes del aire." },
      { q: "¿Estáis certificados para trabajo en altura?", a: "Sí. Todo nuestro personal y nuestros medios están homologados para trabajo vertical y en altura, con prevención de riesgos en cada obra." },
    ],
  },
  ca: {
    metaTitle: "Sobre nosaltres: 30 anys en façanes d'alumini i vidre",
    metaDesc: "Més de 30 anys, +300.000 m² i +150 edificis de façana d'alumini i vidre a Barcelona. Empresa de referència en manteniment i rehabilitació.",
    inicio: "Inici", empresa: "Empresa", eyebrow: "L'empresa",
    h1: "Empresa de façanes d'alumini i vidre a Barcelona",
    heroStrong: "Cuidem la pell dels edificis.",
    heroRest: "Els professionals que formem IMFALÚ acumulem una àmplia experiència en manteniment i rehabilitació de façanes d'alumini i vidre, amb més de 300.000 m² intervinguts a Barcelona i la seva àrea metropolitana.",
    heroAlt: "Equip d'IMFALÚ treballant en una façana d'alumini i vidre a",
    hitos: [
      { v: "30 anys", d: "d'experiència al sector" },
      { v: "+300.000 m²", d: "de façana intervinguda" },
      { v: "+150 edificis", d: "a Barcelona i àrea metropolitana" },
      { v: "~20%", d: "de creixement anual" },
    ],
    trayectoriaEyebrow: "Trajectòria",
    trayectoriaTitle: "Especialistes, des del primer dia",
    trayectoria: [
      "IMFALÚ va néixer per donar resposta a una necessitat concreta: el manteniment i la rehabilitació de façanes d'alumini i vidre, un treball especialitzat que exigeix coneixement tècnic i mitjans per intervenir en alçada amb seguretat.",
      "Més de tres dècades després, hem intervingut més de 300.000 m² de façana en més de 150 edificis —oficines, hotels, comunitats i edificis singulars—, amb un creixement sostingut any rere any.",
      "Continuem sent el que vam ser des del principi: especialistes. Ens dediquem a les façanes d'alumini i vidre, i aquesta concentració ens ha convertit en una empresa de referència en manteniment i rehabilitació de façana d'alumini i vidre a Barcelona, a més de pioners en tractaments per fotocatàlisi.",
    ],
    queHacemosEyebrow: "Què fem", queHacemosTitle: "Tot el cicle de la façana",
    compromisoEyebrow: "El nostre compromís", compromisoTitle: "Com treballem",
    compromiso: [
      { t: "Seguretat", d: "Treball en alçada certificat i prevenció de riscos en cada obra. Personal i mitjans homologats." },
      { t: "Especialització", d: "Centrats en façanes d'alumini i vidre: mur cortina, acristallades i metàl·liques. És el que millor sabem fer." },
      { t: "Qualitat i resposta", d: "Responem pel nostre treball i disposem de servei d'urgències 24 h davant de qualsevol incidència." },
      { t: "Sostenibilitat", d: "Pioners en tractaments per fotocatàlisi, que redueixen l'ús de químics i cuiden l'entorn." },
    ],
    premioTitle: "Reconeguts al sector",
    premioText: "Vam presentar candidatura als Premis Nacionals Facility Management & Services pel nostre treball en manteniment i regeneració de façanes, destacant els +300.000 m² intervinguts, els més de 150 edificis i ser pioners a aplicar tractaments per fotocatàlisi.",
    sectoresTitle: "Sectors en què treballem",
    sectoresText: "Per a administradors de finques, property managers, arquitectes i departaments de manteniment.",
    sectores: ["Oficines", "Hotels", "Comunitats", "Edificis singulars"],
    verProyectos: "Veure projectes",
    faqTitle: "Preguntes freqüents sobre IMFALÚ",
    ctaTitle: (city: string) => `El teu edifici necessita un especialista en façanes a ${city}?`,
    faqs: [
      { q: "Quants anys d'experiència té IMFALÚ?", a: "Més de 30 anys especialitzats en façanes d'alumini i vidre, amb més de 300.000 m² intervinguts i més de 150 edificis a Barcelona i la seva àrea metropolitana." },
      { q: "Què diferencia IMFALÚ d'una empresa de rehabilitació general?", a: "Ens dediquem en exclusiva a la façana d'alumini i vidre —mur cortina, acristallades i metàl·liques—, no a l'obra de paleta (morter, SATE, arrebossats). Aquesta especialització, juntament amb el treball en alçada certificat, és la nostra major garantia." },
      { q: "Sou pioners en alguna cosa?", a: "Sí, som pioners a Barcelona a aplicar tractaments per fotocatàlisi en façanes: un recobriment autonetejant que a més redueix contaminants de l'aire." },
      { q: "Esteu certificats per a treball en alçada?", a: "Sí. Tot el nostre personal i els nostres mitjans estan homologats per a treball vertical i en alçada, amb prevenció de riscos en cada obra." },
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
    alternates: { canonical: localizedPath(l, "/sobre-nosotros"), languages: { es: "/sobre-nosotros", ca: "/ca/sobre-nosotros", "x-default": "/sobre-nosotros" } },
    openGraph: { type: "website", url: `${site.url}${localizedPath(l, "/sobre-nosotros")}`, images: ["/og.jpg"] },
  }
}

export default async function SobreNosotrosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  const services = getServices(l)
  const lp = (p: string) => localizedPath(l, p)
  return (
    <>
      <PageHero
        lang={l}
        breadcrumb={[{ label: t.inicio, href: lp("/") }, { label: t.empresa }]}
        eyebrow={t.eyebrow}
        title={t.h1}
        subtitle={<><strong className="text-ink">{t.heroStrong}</strong> {t.heroRest}</>}
      />

      <section className="bg-cream pb-6 sm:pb-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink" minHeight={240} maxHeight={440}>
            <Image src="/headers/empresa.webp" alt={`${t.heroAlt} ${site.city}`} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 text-center md:grid-cols-[1fr_1.15fr_1.15fr_0.75fr] md:items-start md:gap-y-0 md:divide-x md:divide-line">
          {t.hitos.map((hh, i) => {
            const Icon = HITO_ICONS[i] ?? Award
            return (
              <div key={hh.v} className="px-3 md:px-5">
                <Icon className="mx-auto h-6 w-6 text-burdeos" />
                <div className="mt-3 whitespace-nowrap text-2xl font-bold text-ink md:text-2xl lg:text-3xl">{hh.v}</div>
                <div className="mx-auto mt-1 max-w-[170px] text-sm text-warm">{hh.d}</div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container-x grid gap-10 py-20 md:grid-cols-[280px_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">{t.trayectoriaEyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{t.trayectoriaTitle}</h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-warm">
          {t.trayectoria.map((p) => (<p key={p.slice(0, 20)}>{p}</p>))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-sand py-20">
        <BrandWatermark />
        <div className="container-x relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">{t.queHacemosEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{t.queHacemosTitle}</h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={lp(`/servicios/${s.slug}`)}
                className="group flex items-center justify-between gap-3 rounded-xl border bg-white px-5 py-4 hover:border-burdeos">
                <span className="font-medium text-ink">{s.title}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-burdeos transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">{t.compromisoEyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">{t.compromisoTitle}</h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.compromiso.map((c, i) => {
            const Icon = COMP_ICONS[i] ?? ShieldCheck
            return (
              <div key={c.t} className="rounded-2xl border bg-white p-6">
                <Icon className="h-7 w-7 text-burdeos" />
                <h3 className="mt-3 font-semibold text-ink">{c.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-warm">{c.d}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-7">
            <Award className="h-8 w-8 text-burdeos" />
            <h2 className="mt-4 text-xl font-bold text-ink">{t.premioTitle}</h2>
            <p className="mt-3 text-warm">{t.premioText}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">{t.sectoresTitle}</h2>
            <p className="mt-2 text-warm">{t.sectoresText}</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {t.sectores.map((sname, i) => {
                const Icon = SECTOR_ICONS[i] ?? Building2
                return (
                  <div key={sname} className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3">
                    <Icon className="h-5 w-5 shrink-0 text-burdeos" />
                    <span className="font-medium text-ink">{sname}</span>
                  </div>
                )
              })}
            </div>
            <Link href={lp("/proyectos")} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos">
              {t.verProyectos} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Reviews />

      <FaqSection title={t.faqTitle} faqs={t.faqs} />

      <CtaBand lang={l} title={t.ctaTitle(site.city)} />
    </>
  )
}
