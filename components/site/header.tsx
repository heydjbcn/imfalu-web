"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { navMenu, navLinks, site, telLink } from "@/lib/site"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image src="/brand/logo.png" alt={site.name} width={150} height={51} priority className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navMenu.map((g) => (
            <div key={g.label} className="group relative">
              <button className="flex items-center gap-1 py-5 text-sm font-medium text-ink/80 transition-colors group-hover:text-burdeos">
                {g.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              {/* Mega-panel (más ancho que alto, rejilla de tarjetas) */}
              <div className="invisible absolute left-0 top-full -translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className={`grid gap-1 rounded-2xl border bg-white p-3 shadow-xl ${g.children.length > 4 ? "w-[680px] grid-cols-3" : "w-[460px] grid-cols-2"}`}>
                  {g.children.map((c) => (
                    <Link key={c.href} href={c.href} className="group/i flex items-start gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-cream">
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-cream ring-1 ring-line">
                        <Image src={c.img} alt="" fill className="object-cover" sizes="40px" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-tight text-ink group-hover/i:text-burdeos">{c.label}</span>
                        <span className="mt-0.5 block text-[11px] leading-snug text-warm">{c.desc}</span>
                        {c.sub ? (
                          <span className="mt-0.5 block text-[11px] font-medium text-burdeos/80">{c.sub.map((s) => s.label).join(" · ")}</span>
                        ) : null}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {navLinks.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-ink/80 transition-colors hover:text-burdeos">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={telLink} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-burdeos">
            <Phone className="h-4 w-4 text-burdeos" />
            {site.phoneDisplay}
          </a>
          <Link href="/contacto" className="rounded-full bg-burdeos px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark">
            Pide presupuesto
          </Link>
        </div>

        <button className="md:hidden -mr-2 p-2 text-ink" onClick={() => setOpen((v) => !v)} aria-label="Menú">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile */}
      {open ? (
        <div className="max-h-[80vh] overflow-y-auto border-t bg-white md:hidden">
          <nav className="container-x flex flex-col py-3">
            {navMenu.map((g) => (
              <details key={g.label} className="group border-b py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-base font-semibold text-ink">
                  {g.label}
                  <ChevronDown className="h-4 w-4 text-burdeos transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-2">
                  {g.children.map((c) => (
                    <div key={c.href} className="py-1.5">
                      <Link href={c.href} onClick={() => setOpen(false)} className="flex items-center gap-3 text-sm font-medium text-ink">
                        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-cream">
                          <Image src={c.img} alt="" fill className="object-cover" sizes="36px" />
                        </span>
                        {c.label}
                      </Link>
                      {c.sub ? (
                        <span className="ml-12 flex gap-3 pt-1">
                          {c.sub.map((s) => (
                            <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="text-xs font-medium text-burdeos">{s.label}</Link>
                          ))}
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </details>
            ))}
            {navLinks.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b py-3 text-base font-medium text-ink">
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href={telLink} className="flex items-center gap-2 py-1 font-semibold text-ink">
                <Phone className="h-4 w-4 text-burdeos" /> {site.phoneDisplay}
              </a>
              <Link href="/contacto" onClick={() => setOpen(false)} className="rounded-full bg-burdeos px-5 py-2.5 text-center text-sm font-semibold text-white">
                Pide presupuesto
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
