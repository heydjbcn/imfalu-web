"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"

export type PostCard = {
  slug: string
  title: string
  excerpt: string
  cluster: string
  cover: string
  date: string
  readingMin: number
}

function fmt(date: string) {
  if (!date) return ""
  const d = new Date(date)
  return d.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })
}

export function BlogList({ posts }: { posts: PostCard[] }) {
  const clusters = ["Todos", ...Array.from(new Set(posts.map((p) => p.cluster)))]
  const [active, setActive] = useState("Todos")
  const shown = active === "Todos" ? posts : posts.filter((p) => p.cluster === active)

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {clusters.map((c) => {
          const on = c === active
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on ? "border-burdeos bg-burdeos text-white" : "border-line bg-white text-ink hover:border-burdeos hover:text-burdeos"
              }`}
            >
              {c}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-[16/10] overflow-hidden bg-cream">
              <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 50vw, 33vw" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-burdeos backdrop-blur">{p.cluster}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-bold leading-snug text-ink group-hover:text-burdeos">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-warm">{p.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-warm">
                <span>{fmt(p.date)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.readingMin} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
