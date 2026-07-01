import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { facades } from "@/lib/facades"
import { getFacade } from "@/lib/content"
import { Landing } from "@/components/site/landing"
import { site } from "@/lib/site"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"

export function generateStaticParams() {
  return facades.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const f = getFacade(l, slug)
  if (!f) return {}
  const path = `/fachadas/${f.slug}`
  return {
    title: f.metaTitle,
    description: f.metaDescription,
    keywords: f.metaKeywords,
    alternates: { canonical: localizedPath(l, path), languages: { es: path, ca: `/ca${path}`, "x-default": path } },
    openGraph: { type: "website", title: `${f.metaTitle} · ${site.name}`, description: f.metaDescription, url: `${site.url}${localizedPath(l, path)}`, images: ["/og.jpg"] },
  }
}

export default async function FacadePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const f = getFacade(l, slug)
  if (!f) notFound()
  return <Landing data={{ ...f, slug: `fachadas/${f.slug}` }} lang={l} />
}
