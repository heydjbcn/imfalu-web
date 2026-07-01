import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Clock, ChevronRight, ArrowRight } from "lucide-react"
import { getAllPosts, getPost, tableOfContents, slugifyHeading, isPublished } from "@/lib/blog"
import { ExpandOnScroll } from "@/components/site/expand-on-scroll"
import { fmtDate } from "@/lib/format"
import { site } from "@/lib/site"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"
import { CtaBand } from "@/components/site/cta-band"
import { JsonLd } from "@/components/site/json-ld"
import { ArticleAside } from "@/components/site/article-aside"

export const revalidate = 1800

const T = {
  es: { inicio: "Inicio", blog: "Blog", por: "Por", actualizado: "Actualizado el", minLectura: "min de lectura", sigueLeyendo: "Sigue leyendo", leerMas: "Leer más" },
  ca: { inicio: "Inici", blog: "Blog", por: "Per", actualizado: "Actualitzat el", minLectura: "min de lectura", sigueLeyendo: "Continua llegint", leerMas: "Llegir més" },
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const p = getPost(slug, l)
  if (!p) return {}
  const path = `/blog/${p.slug}`
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: localizedPath(l, path), languages: { es: path, ca: `/ca${path}`, "x-default": path } },
    openGraph: { type: "article", title: `${p.title} · ${site.name}`, description: p.description, url: `${site.url}${localizedPath(l, path)}`, images: [p.cover] },
  }
}

const fmt = (d: string) => fmtDate(d, "long")

function toText(c: ReactNode): string {
  if (typeof c === "string") return c
  if (Array.isArray(c)) return c.map(toText).join("")
  if (c && typeof c === "object" && "props" in c) return toText((c as { props: { children?: ReactNode } }).props.children)
  return ""
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const t = T[l]
  const post = getPost(slug, l)
  if (!post || !isPublished(post.date)) notFound()
  const lp = (p: string) => localizedPath(l, p)
  const toc = tableOfContents(post.body)
  const url = `${site.url}${lp(`/blog/${post.slug}`)}`
  const allPub = getAllPosts(l)
  const publishedSlugs = new Set(allPub.map((p) => p.slug))
  const others = allPub.filter((p) => p.slug !== post.slug)
  const sameCluster = others.filter((p) => p.cluster === post.cluster)
  const rest = others.filter((p) => p.cluster !== post.cluster)
  const related = [...sameCluster, ...rest].slice(0, 3)

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
        inLanguage: l === "ca" ? "ca-ES" : "es-ES",
        author: { "@type": "Organization", name: site.name },
        publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/brand/logo.png` } },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.inicio, item: `${site.url}${lp("/")}` },
          { "@type": "ListItem", position: 2, name: t.blog, item: `${site.url}${lp("/blog")}` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-cream">
        <div className="container-x max-w-4xl py-10 md:py-14">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-warm">
            <Link href={lp("/")} className="hover:text-burdeos">{t.inicio}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={lp("/blog")} className="hover:text-burdeos">{t.blog}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{post.cluster}</span>
          </nav>
          <span className="mt-5 inline-block rounded-full bg-burdeos/10 px-3 py-1 text-xs font-semibold text-burdeos">{post.cluster}</span>
          <h1 className="mt-4 text-3xl font-bold text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-warm">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm">
            <span>{t.por} <strong className="font-semibold text-ink">{post.author}</strong></span>
            <span className="text-warm/50">·</span>
            <span>{t.actualizado} {fmtDate(post.updated || post.date, "long", l)}</span>
            <span className="text-warm/50">·</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingMin} {t.minLectura}</span>
          </div>
        </div>
      </section>

      <section className="container-x max-w-5xl py-8">
        <ExpandOnScroll className="bg-ink" minHeight={260} maxHeight={460}>
          <Image src={post.cover} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        </ExpandOnScroll>
      </section>

      <div className="container-x grid max-w-6xl gap-10 pb-16 lg:grid-cols-[1fr_300px] lg:gap-14">
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-ink prose-h2:mt-10 prose-h2:scroll-mt-24 prose-h2:text-2xl prose-h3:scroll-mt-24 prose-p:text-warm prose-li:text-warm prose-a:font-medium prose-a:text-burdeos prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-img:w-full prose-img:rounded-2xl prose-img:border prose-img:my-9">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => <h2 id={slugifyHeading(toText(children))}>{children}</h2>,
              h3: ({ children }) => <h3 id={slugifyHeading(toText(children))}>{children}</h3>,
              a: ({ href, children }) => {
                const m = typeof href === "string" ? href.match(/^\/(?:ca\/)?blog\/([a-z0-9-]+)\/?$/) : null
                if (m && !publishedSlugs.has(m[1])) return <span className="font-medium text-ink">{children}</span>
                const h = typeof href === "string" && href.startsWith("/") ? lp(href) : href
                return <a href={h}>{children}</a>
              },
            }}
          >
            {post.body}
          </ReactMarkdown>
        </article>

        <ArticleAside toc={toc} url={url} title={post.title} lang={l} />
      </div>

      {related.length ? (
        <section className="bg-cream py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-ink">{t.sigueLeyendo}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={lp(`/blog/${r.slug}`)} className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={r.cover} alt={r.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 50vw, 33vw" />
                    <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">{r.cluster}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-burdeos">{r.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-warm">{r.excerpt}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-burdeos transition-colors group-hover:border-burdeos group-hover:bg-burdeos group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-ink">{t.leerMas}</span>
                      <span className="h-px flex-1 bg-line" />
                      <span className="shrink-0 text-xs text-warm">{fmtDate(r.date, "short", l)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand lang={l} />
    </>
  )
}
