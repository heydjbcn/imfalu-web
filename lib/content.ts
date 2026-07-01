// Resolutor de contenido por idioma: fusiona las traducciones CA (site-ca.ts)
// sobre la base ES (site.ts). Los consumidores llaman getX(lang).
import { site, services, projects, navMenu, navLinks, type Service, type Project, type NavGroup } from "@/lib/site"
import { facades, type Facade } from "@/lib/facades"
import { siteCaText, servicesCaText, projectsCaText, navMenuCa, navLinksCa } from "@/lib/site-ca"
import { facadesCaText } from "@/lib/facades-ca"
import { tGallery } from "@/lib/gallery-ca"
import { FAQ_BY_SLUG, PROCESS } from "@/lib/service-faqs"
import { SECTIONS_BY_SLUG } from "@/lib/service-content"
import { FAQ_BY_SLUG_CA, PROCESS_CA } from "@/lib/service-faqs-ca"
import { SECTIONS_BY_SLUG_CA } from "@/lib/service-content-ca"
import type { Locale } from "@/lib/i18n"

export function getSite(lang: Locale) {
  if (lang === "es") return site
  return {
    ...site,
    tagline: siteCaText.tagline,
    area: siteCaText.area,
    stats: site.stats.map((s, i) => ({ ...s, suffix: siteCaText.stats[i]?.suffix ?? s.suffix, label: siteCaText.stats[i]?.label ?? s.label })),
  }
}

export function getServices(lang: Locale): Service[] {
  if (lang === "es") return services
  return services.map((s) => {
    const t = servicesCaText[s.slug]
    if (!t) return s
    return { ...s, title: t.title, short: t.short, description: t.description, seoTitle: t.seoTitle, metaDescription: t.metaDescription, answer: t.answer, intro: t.intro, bullets: t.bullets, when: t.when, note: t.note ?? s.note, gallery: tGallery(s.gallery) }
  })
}

export function getService(lang: Locale, slug: string): Service | undefined {
  return getServices(lang).find((s) => s.slug === slug)
}

export function getProjects(lang: Locale): Project[] {
  if (lang === "es") return projects
  return projects.map((p) => {
    const t = projectsCaText[p.slug]
    if (!t) return p
    return { ...p, type: t.type, sector: t.sector ?? p.sector, reto: t.reto, solucion: t.solucion, resultado: t.resultado }
  })
}

export function getNavMenu(lang: Locale): NavGroup[] {
  if (lang === "es") return navMenu
  return navMenu.map((g, gi) => {
    const cg = navMenuCa[gi]
    if (!cg) return g
    return {
      ...g,
      label: cg.label,
      featured: { ...g.featured, title: cg.featured.title, text: cg.featured.text, cta: cg.featured.cta },
      children: g.children.map((c, ci) => {
        const cc = cg.children[ci]
        if (!cc) return c
        return {
          ...c,
          label: cc.label,
          desc: cc.desc,
          sub: c.sub?.map((s, si) => ({ ...s, label: cc.sub?.[si]?.label ?? s.label })),
        }
      }),
    }
  })
}

export function getNavLinks(lang: Locale): { label: string; href: string }[] {
  if (lang === "es") return navLinks.map((n) => ({ ...n }))
  return navLinks.map((n, i) => ({ href: n.href, label: navLinksCa[i] ?? n.label }))
}

export function getServiceFaqs(lang: Locale, slug: string): { q: string; a: string }[] {
  return (lang === "ca" ? FAQ_BY_SLUG_CA[slug] : FAQ_BY_SLUG[slug]) ?? []
}

export function getServiceSections(lang: Locale, slug: string): { h: string; body: string[] }[] {
  return (lang === "ca" ? SECTIONS_BY_SLUG_CA[slug] : SECTIONS_BY_SLUG[slug]) ?? []
}

export function getProcess(lang: Locale) {
  return lang === "ca" ? PROCESS_CA : PROCESS
}

export function getFacades(lang: Locale): Facade[] {
  if (lang === "es") return facades
  return facades.map((f) => {
    const t = facadesCaText[f.slug]
    if (!t) return f
    const breadcrumb = f.breadcrumb?.map((b, i) => {
      if (i === 0) return { ...b, label: "Inici" }
      if (b.href === "/fachadas/muro-cortina") return { ...b, label: t.crumbMuroCortina ?? b.label }
      if (i === (f.breadcrumb!.length - 1)) return { ...b, label: t.crumbLast }
      return b
    })
    return { ...f, metaTitle: t.metaTitle, metaDescription: t.metaDescription, kicker: t.kicker, h1: t.h1, term: t.term, answer: t.answer, intro: t.intro, bullets: t.bullets, faqs: t.faqs, breadcrumb, gallery: tGallery(f.gallery) }
  })
}

export function getFacade(lang: Locale, slug: string): Facade | undefined {
  return getFacades(lang).find((f) => f.slug === slug)
}
