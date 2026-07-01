import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { facades, getFacade } from "@/lib/facades"
import { Landing } from "@/components/site/landing"
import { site } from "@/lib/site"

export function generateStaticParams() {
  return facades.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const f = getFacade(slug)
  if (!f) return {}
  return {
    title: f.metaTitle,
    description: f.metaDescription,
    keywords: f.metaKeywords,
    alternates: { canonical: `/fachadas/${f.slug}` },
    openGraph: { type: "website", title: `${f.metaTitle} · ${site.name}`, description: f.metaDescription, url: `/fachadas/${f.slug}`, images: ["/og.jpg"] },
  }
}

export default async function FacadePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const f = getFacade(slug)
  if (!f) notFound()
  return <Landing data={{ ...f, slug: `fachadas/${f.slug}` }} />
}
