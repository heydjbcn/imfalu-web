"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Link2, Share2, MessageCircle, Check, ArrowRight } from "lucide-react"

type Toc = { id: string; text: string }

export function ArticleAside({ toc, url, title }: { toc: Toc[]; url: string; title: string }) {
  const [active, setActive] = useState<string>(toc[0]?.id ?? "")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!toc.length) return
    const els = toc.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [toc])

  function copy() {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {toc.length ? (
        <nav className="rounded-2xl border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warm">Contenido</p>
          <ul className="mt-3 space-y-1.5 border-l border-line">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className={`-ml-px block border-l-2 py-1 pl-3 text-sm transition-colors ${
                    active === t.id ? "border-burdeos font-medium text-burdeos" : "border-transparent text-warm hover:text-ink"
                  }`}
                >
                  {t.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className="rounded-2xl border p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warm">Compartir</p>
        <div className="mt-3 flex gap-2">
          <button onClick={copy} aria-label="Copiar enlace" className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-ink transition-colors hover:border-burdeos hover:text-burdeos">
            {copied ? <Check className="h-4 w-4 text-burdeos" /> : <Link2 className="h-4 w-4" />}
          </button>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-ink transition-colors hover:border-burdeos hover:text-burdeos">
            <Share2 className="h-4 w-4" />
          </a>
          <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp" className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-ink transition-colors hover:border-burdeos hover:text-burdeos">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="rounded-2xl border bg-cream p-6">
        <h3 className="font-semibold text-ink">¿Hablamos de tu fachada?</h3>
        <p className="mt-2 text-sm text-warm">Te damos presupuesto sin compromiso. Más de 30 años en Barcelona.</p>
        <Link href="/contacto" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burdeos px-5 py-3 text-sm font-semibold text-white hover:bg-burdeos-dark">
          Pedir presupuesto <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  )
}
