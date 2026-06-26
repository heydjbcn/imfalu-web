import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { BlogList } from "@/components/site/blog-list"

export const metadata: Metadata = {
  title: "Blog sobre fachadas de aluminio y cristal",
  description:
    "Guías y consejos sobre mantenimiento, reparación, rehabilitación y muro cortina de fachadas de aluminio y cristal en Barcelona.",
  alternates: { canonical: "/blog" },
}

export const revalidate = 1800

export default function BlogIndex() {
  const posts = getAllPosts().map(({ slug, title, excerpt, cluster, cover, date, readingMin }) => ({
    slug, title, excerpt, cluster, cover, date, readingMin,
  }))

  return (
    <section className="container-x py-14 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burdeos">Blog</p>
        <h1 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Blog sobre fachadas de aluminio y cristal</h1>
        <p className="mt-4 text-lg text-warm">
          Guías y consejos sobre mantenimiento, reparación, rehabilitación y muro cortina de fachadas de
          aluminio y cristal, para propietarios, administradores de fincas y gestores de edificios en Barcelona.
        </p>
      </div>

      <div className="mt-10">
        {posts.length ? <BlogList posts={posts} /> : <p className="text-warm">Próximamente.</p>}
      </div>
    </section>
  )
}
