import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Clock, ChevronRight } from "lucide-react"
import { getAllPosts, getPost, tableOfContents, slugifyHeading } from "@/lib/blog"
import { site } from "@/lib/site"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ArticleAside } from "@/components/site/article-aside"

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

function toText(c: ReactNode): string {
  if (typeof c === "string") return c
  if (Array.isArray(c)) return c.map(toText).join("")
  if (c && typeof c === "object" && "props" in c) return toText((c as { props: { children?: ReactNode } }).props.children)
  return ""
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const toc = tableOfContents(post.body)
  const url = `${site.url}/blog/${post.slug}`
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
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Cabecera */}
      <section className="bg-cream">
        <div className="container-x max-w-4xl py-10 md:py-14">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-warm">
            <Link href="/" className="hover:text-burdeos">Inicio</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="hover:text-burdeos">Blog</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{post.cluster}</span>
          </nav>
          <span className="mt-5 inline-block rounded-full bg-burdeos/10 px-3 py-1 text-xs font-semibold text-burdeos">{post.cluster}</span>
          <h1 className="mt-4 text-3xl font-bold text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-warm">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm">
            <span>Por <strong className="font-semibold text-ink">{post.author}</strong></span>
            <span className="text-warm/50">·</span>
            <span>Actualizado el {fmt(post.updated || post.date)}</span>
            <span className="text-warm/50">·</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingMin} min de lectura</span>
          </div>
        </div>
      </section>

      {/* Portada */}
      <section className="container-x max-w-5xl py-8">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl bg-ink">
          <Image src={post.cover} alt={post.title} fill priority className="object-cover" sizes="(max-width:1024px) 100vw, 1024px" />
        </div>
      </section>

      {/* Contenido + aside */}
      <div className="container-x grid max-w-6xl gap-10 pb-16 lg:grid-cols-[1fr_300px] lg:gap-14">
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:scroll-mt-24 prose-h2:text-2xl prose-h3:scroll-mt-24 prose-p:text-warm prose-li:text-warm prose-a:font-medium prose-a:text-burdeos prose-a:no-underline hover:prose-a:underline prose-strong:text-ink">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => <h2 id={slugifyHeading(toText(children))}>{children}</h2>,
              h3: ({ children }) => <h3 id={slugifyHeading(toText(children))}>{children}</h3>,
            }}
          >
            {post.body}
          </ReactMarkdown>
        </article>

        <ArticleAside toc={toc} url={url} title={post.title} />
      </div>

      {/* Relacionados */}
      {related.length ? (
        <section className="bg-cream py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-ink">Sigue leyendo</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image src={r.cover} alt={r.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 50vw, 33vw" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-burdeos backdrop-blur">{r.cluster}</span>
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
