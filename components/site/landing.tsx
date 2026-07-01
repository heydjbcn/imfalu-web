import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, MapPin } from "lucide-react"
import { site, type GalleryItem } from "@/lib/site"
import { getServices, getProjects, getProcess, getSite } from "@/lib/content"
import { getDictionary, localizedPath, type Locale } from "@/lib/i18n"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ExpandingGallery } from "@/components/site/expanding-gallery"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { CheckList } from "@/components/site/check-list"
import { PageHero } from "@/components/site/page-hero"

export interface LandingData {
  slug: string
  kicker: string
  h1: string
  intro: string
  bullets: string[]
  relatedSlugs: string[]
  faqs: { q: string; a: string }[]
  answer?: string
  term?: string
  gallery?: GalleryItem[]
  breadcrumb?: { label: string; href?: string }[]
}

export async function Landing({ data, lang = "es" }: { data: LandingData; lang?: Locale }) {
  const dict = await getDictionary(lang)
  const siteL = getSite(lang)
  const projects = getProjects(lang)
  const related = getServices(lang).filter((s) => data.relatedSlugs.includes(s.slug))
  const process = getProcess(lang)
  const term = data.term ?? (lang === "ca" ? "façanes d'alumini i vidre" : "fachadas de aluminio y cristal")
  const lp = (p: string) => localizedPath(lang, p)
  const crumbs = data.breadcrumb?.map((b) => ({ ...b, href: b.href ? lp(b.href) : undefined }))
  const otros = [
    { label: dict.landing.tipos.muroCortina, href: "/fachadas/muro-cortina" },
    { label: dict.landing.tipos.acristalada, href: "/fachadas/fachada-acristalada" },
    { label: dict.landing.tipos.aluminio, href: "/fachadas/fachada-aluminio" },
    { label: dict.landing.tipos.rehabilitacion, href: "/fachadas/rehabilitacion" },
  ].filter((t) => t.href !== `/${data.slug}`)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: data.h1,
        url: `${site.url}${lp(`/${data.slug}`)}`,
        datePublished: site.lastUpdated,
        dateModified: site.lastUpdated,
        inLanguage: lang === "ca" ? "ca-ES" : "es-ES",
      },
      {
        "@type": "Service",
        name: data.h1,
        areaServed: siteL.area,
        provider: { "@id": `${site.url}/#org` },
        description: data.answer ?? data.intro,
      },
      data.breadcrumb?.length
        ? { "@type": "BreadcrumbList", itemListElement: data.breadcrumb.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.label, ...(b.href ? { item: `${site.url}${lp(b.href)}` } : {}) })) }
        : null,
      data.faqs.length
        ? { "@type": "FAQPage", mainEntity: data.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
        : null,
    ].filter(Boolean),
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero lang={lang} breadcrumb={crumbs} eyebrow={data.kicker} title={data.h1} subtitle={data.answer ?? data.intro} />

      <section className="bg-cream py-6 sm:py-8">
        <div className="container-x">
          <ExpandOnScroll className="bg-ink" minHeight={220} maxHeight={400}>
            <Image src={`/${data.slug}.webp`} alt={`${data.h1} · ${site.city}`} fill priority className="object-cover" sizes="100vw" />
          </ExpandOnScroll>
        </div>
      </section>

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          {data.answer ? <p className="text-lg leading-relaxed text-warm">{data.intro}</p> : null}
          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.landing.queHacemos} {term}</h2>
          <CheckList items={data.bullets} className="mt-6" />

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.comoTrabajamos}</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {process.map((p, i) => (
              <li key={p.t} className="rounded-2xl border bg-white p-5">
                <span className="text-sm font-bold text-burdeos">0{i + 1}</span>
                <h3 className="mt-1 font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-sm text-warm">{p.d}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.porQueElegir} {term}</h2>
          <p className="mt-4 text-warm">{dict.landing.porQueTexto} {siteL.area}.</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-[1fr_1.45fr_0.85fr_0.85fr]">
            {siteL.stats.map((st) => (
              <div key={st.label} className="rounded-2xl border bg-cream px-5 py-4">
                <div className="whitespace-nowrap text-xl font-bold text-burdeos sm:text-2xl">{st.value}<span className="text-warm">{st.suffix}</span></div>
                <div className="mt-1 text-xs text-warm">{st.label}</div>
              </div>
            ))}
          </div>

          {data.gallery?.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.algunosTrabajos}</h2>
              <div className="mt-5"><ExpandingGallery items={data.gallery} /></div>
            </>
          ) : null}

          {data.faqs.length ? (
            <>
              <h2 className="mt-12 text-2xl md:text-3xl font-bold text-ink">{dict.service.preguntasSobre} {term}</h2>
              <div className="mt-5 divide-y rounded-2xl border bg-white">
                {data.faqs.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                      {f.q} <ChevronRight className="h-4 w-4 text-burdeos transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-warm">{f.a}</p>
                  </details>
                ))}
              </div>
            </>
          ) : null}

          <p className="mt-10 text-xs text-warm">{dict.common.actualizado}: {site.lastUpdatedLabel}</p>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-cream p-6">
            <h3 className="font-semibold text-ink">{dict.landing.presupuestoTitulo}</h3>
            <p className="mt-2 text-sm text-warm">{dict.landing.presupuestoTexto} {site.city}.</p>
            <Link href={lp("/contacto")} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burdeos px-5 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
              {dict.cta.pedirPresupuesto} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {related.length ? (
            <div className="rounded-2xl border p-6">
              <h3 className="text-sm font-semibold text-ink">{dict.landing.serviciosRelacionados}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {related.map((s) => (
                  <li key={s.slug}><Link href={lp(`/servicios/${s.slug}`)} className="text-warm hover:text-burdeos">{s.title}</Link></li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="rounded-2xl border p-6">
            <h3 className="text-sm font-semibold text-ink">{dict.landing.otrosTipos}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {otros.map((t) => (
                <li key={t.href}><Link href={lp(t.href)} className="text-warm hover:text-burdeos">{t.label}</Link></li>
              ))}
            </ul>
          </div>
          <Link href={lp("/proyectos")} className="block overflow-hidden rounded-2xl border">
            <div className="relative aspect-[4/3] bg-cream">
              <Image src={projects[0].image} alt={`${dict.landing.verProyectos} · Barcelona`} fill className="object-cover" sizes="320px" />
            </div>
            <div className="flex items-center gap-1.5 p-4 text-sm font-semibold text-burdeos">
              <MapPin className="h-4 w-4" /> {dict.landing.verProyectos}
            </div>
          </Link>
        </aside>
      </section>

      <CtaBand lang={lang} />
    </>
  )
}
