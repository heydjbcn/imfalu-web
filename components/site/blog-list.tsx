"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import { fmtDate } from "@/lib/format"
import { localizedPath, type Locale } from "@/lib/paths"

export type PostCard = {
  slug: string
  title: string
  excerpt: string
  cluster: string
  cover: string
  date: string
  readingMin: number
}

const T = {
  es: { destacados: "Artículos destacados", todosArticulos: "Todos los artículos", todos: "Todos", none: "No hay artículos en esta categoría todavía.", min: "min" },
  ca: { destacados: "Articles destacats", todosArticulos: "Tots els articles", todos: "Tots", none: "Encara no hi ha articles en aquesta categoria.", min: "min" },
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-warm">
      {children}
    </span>
  )
}

function Meta({ p, min, lang }: { p: PostCard; min: string; lang: Locale }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-warm">
      <span>{fmtDate(p.date, "short", lang)}</span>
      <span className="text-warm/40">·</span>
      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readingMin} {min}</span>
    </div>
  )
}

export function BlogList({ posts, lang = "es" }: { posts: PostCard[]; lang?: Locale }) {
  const t = T[lang]
  const ALL = t.todos
  const clusters = [ALL, ...Array.from(new Set(posts.map((p) => p.cluster)))]
  const [active, setActive] = useState(ALL)
  const lp = (p: string) => localizedPath(lang, p)

  useEffect(() => {
    const apply = () => {
      if (!window.location.hash.startsWith("#cat=")) return
      const c = decodeURIComponent(window.location.hash.slice(5))
      if (clusters.includes(c)) {
        setActive(c)
        document.getElementById("todos-articulos")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    apply()
    window.addEventListener("hashchange", apply)
    return () => window.removeEventListener("hashchange", apply)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const featured = posts[0]
  const side = posts.slice(1, 4)
  const grid = active === ALL ? posts : posts.filter((p) => p.cluster === active)

  return (
    <>
      {featured ? (
        <section>
          <h2 className="text-xl font-bold text-ink md:text-2xl">{t.destacados}</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <Link href={lp(`/blog/${featured.slug}`)} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream">
                <Image src={featured.cover} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              <div className="mt-5">
                <Meta p={featured} min={t.min} lang={lang} />
                <h3 className="mt-2 flex items-start justify-between gap-3 text-2xl font-bold leading-snug text-ink transition-colors group-hover:text-burdeos">
                  <span>{featured.title}</span>
                  <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-warm transition-colors group-hover:text-burdeos" />
                </h3>
                <p className="mt-2 line-clamp-2 leading-relaxed text-warm">{featured.excerpt}</p>
                <div className="mt-4"><Chip>{featured.cluster}</Chip></div>
              </div>
            </Link>

            <div className="flex flex-col divide-y divide-line">
              {side.map((p) => (
                <Link key={p.slug} href={lp(`/blog/${p.slug}`)} className="group grid grid-cols-[120px_1fr] gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[160px_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-cream">
                    <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="160px" />
                  </div>
                  <div className="min-w-0">
                    <Meta p={p} min={t.min} lang={lang} />
                    <h3 className="mt-1.5 line-clamp-2 font-bold leading-snug text-ink transition-colors group-hover:text-burdeos">{p.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-warm">{p.excerpt}</p>
                    <div className="mt-2"><Chip>{p.cluster}</Chip></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {posts.length > 1 ? (
        <section id="todos-articulos" className="mt-16 scroll-mt-24 border-t border-line pt-12">
          <h2 className="text-xl font-bold text-ink md:text-2xl">{t.todosArticulos}</h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {clusters.map((c) => {
              const on = c === active
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    on ? "border-burdeos bg-burdeos text-white" : "border-line bg-white text-ink hover:border-burdeos hover:text-burdeos"
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>

          {grid.length ? (
            <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((p) => (
                <Link key={p.slug} href={lp(`/blog/${p.slug}`)} className="group flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream">
                    <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 50vw, 33vw" />
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <Meta p={p} min={t.min} lang={lang} />
                    <h3 className="mt-2 flex items-start justify-between gap-3 text-lg font-bold leading-snug text-ink transition-colors group-hover:text-burdeos">
                      <span>{p.title}</span>
                      <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-warm transition-colors group-hover:text-burdeos" />
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-warm">{p.excerpt}</p>
                    <div className="mt-4"><Chip>{p.cluster}</Chip></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-warm">{t.none}</p>
          )}
        </section>
      ) : null}
    </>
  )
}
