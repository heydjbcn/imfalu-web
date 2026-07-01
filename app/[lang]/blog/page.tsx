import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogList } from "@/components/site/blog-list"
import { PageHero } from "@/components/site/page-hero"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"

const T = {
  es: {
    metaTitle: "Blog sobre fachadas de aluminio y cristal",
    metaDesc: "Guías y consejos sobre mantenimiento, reparación, rehabilitación y muro cortina de fachadas de aluminio y cristal en Barcelona.",
    inicio: "Inicio", blog: "Blog", eyebrow: "Blog",
    h1: "Historias, guías y consejos sobre fachadas",
    subtitle: "Mantenimiento, reparación, rehabilitación y muro cortina de fachadas de aluminio y cristal, para propietarios, administradores de fincas y gestores de edificios en Barcelona.",
    proximamente: "Próximamente.",
  },
  ca: {
    metaTitle: "Blog sobre façanes d'alumini i vidre",
    metaDesc: "Guies i consells sobre manteniment, reparació, rehabilitació i mur cortina de façanes d'alumini i vidre a Barcelona.",
    inicio: "Inici", blog: "Blog", eyebrow: "Blog",
    h1: "Històries, guies i consells sobre façanes",
    subtitle: "Manteniment, reparació, rehabilitació i mur cortina de façanes d'alumini i vidre, per a propietaris, administradors de finques i gestors d'edificis a Barcelona.",
    proximamente: "Properament.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: { canonical: localizedPath(l, "/blog"), languages: { es: "/blog", ca: "/ca/blog", "x-default": "/blog" } },
    openGraph: { type: "website", url: `https://imfalu.com${localizedPath(l, "/blog")}`, images: ["/og.jpg"] },
  }
}

export const revalidate = 1800

export default async function BlogIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  const posts = getAllPosts(l).map(({ slug, title, excerpt, cluster, cover, date, readingMin }) => ({
    slug, title, excerpt, cluster, cover, date, readingMin,
  }))

  return (
    <>
      <PageHero
        lang={l}
        breadcrumb={[{ label: t.inicio, href: localizedPath(l, "/") }, { label: t.blog }]}
        eyebrow={t.eyebrow}
        title={t.h1}
        subtitle={t.subtitle}
        cta={false}
      />
      <section className="container-x py-14 md:py-20">
        {posts.length ? <BlogList posts={posts} lang={l} /> : <p className="text-warm">{t.proximamente}</p>}
      </section>
    </>
  )
}
