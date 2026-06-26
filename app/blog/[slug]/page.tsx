import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Clock, ChevronRight } from "lucide-react"
import { getAllPosts, getPost } from "@/lib/blog"
import { site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = getPost(slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: `${p.title} · ${site.name}`, description: p.description, url: `/blog/${p.slug}`, images: [p.cover] },
  }
}

function fmt(d: string) {
  return d ? new Date(d).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" }) : ""
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const related = getAllPosts().filter((p) => p.slug !== post.slug && p.cluster === post.cluster).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: `${site.url}${post.cover}`,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        inLanguage: "es-ES",
        author: { "@type": "Organization", name: site.name },
        publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/brand/logo.png` } },
        mainEntityOfPage: `${site.url}/blog/${post.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-cream">
        <div className="container-x py-10 md:py-14">
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-warm">
            <Link href="/" className="hover:text-burdeos">Inicio</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-burdeos">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{post.cluster}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-burdeos">
            <span>{post.cluster}</span>
            <span className="text-warm/60">·</span>
            <span className="font-medium normal-case tracking-normal text-warm">{fmt(post.date)}</span>
            <span className="inline-flex items-center gap-1 font-medium normal-case tracking-normal text-warm"><Clock className="h-3.5 w-3.5" /> {post.readingMin} min</span>
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-warm">{post.excerpt}</p>
        </div>
      </section>

      <section className="relative h-[260px] w-full overflow-hidden bg-ink md:h-[400px]">
        <Image src={post.cover} alt={post.title} fill priority className="object-cover" sizes="100vw" />
      </section>

      <article className="container-x py-12 md:py-16">
        <div className="prose prose-lg mx-auto max-w-3xl prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:text-2xl prose-p:text-warm prose-li:text-warm prose-a:font-medium prose-a:text-burdeos prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </article>

      {related.length ? (
        <section className="bg-cream py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-ink">Sigue leyendo</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image src={r.cover} alt={r.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 50vw, 33vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold leading-snug text-ink group-hover:text-burdeos">{r.title}</h3>
                    <p className="mt-2 text-sm text-warm">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  )
}
