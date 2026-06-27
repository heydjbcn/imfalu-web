import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogList } from "@/components/site/blog-list"
import { PageHero } from "@/components/site/page-hero"

export const metadata: Metadata = {
  title: "Blog sobre fachadas de aluminio y cristal",
  description:
    "Guías y consejos sobre mantenimiento, reparación, rehabilitación y muro cortina de fachadas de aluminio y cristal en Barcelona.",
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: "/blog" },
}

export const revalidate = 1800

export default function BlogIndex() {
  const posts = getAllPosts().map(({ slug, title, excerpt, cluster, cover, date, readingMin }) => ({
    slug, title, excerpt, cluster, cover, date, readingMin,
  }))

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Blog" }]}
        eyebrow="Blog"
        title="Historias, guías y consejos sobre fachadas"
        subtitle="Mantenimiento, reparación, rehabilitación y muro cortina de fachadas de aluminio y cristal, para propietarios, administradores de fincas y gestores de edificios en Barcelona."
        cta={false}
      />
      <section className="container-x py-14 md:py-20">
        {posts.length ? <BlogList posts={posts} /> : <p className="text-warm">Próximamente.</p>}
      </section>
    </>
  )
}
