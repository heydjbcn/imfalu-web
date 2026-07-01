"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { site, telLink, type NavGroup } from "@/lib/site"
import { localizedPath, type Locale } from "@/lib/paths"
import type { Dict } from "@/lib/dict"
import { fmtDate } from "@/lib/format"
import { LanguageSwitcher } from "@/components/site/language-switcher"

type BlogPost = { slug: string; title: string; cover: string; date: string; cluster: string }
type NavLink = { label: string; href: string }

const pill =
  "flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-ink/80 transition-colors group-hover:bg-ink/[0.05] group-hover:text-burdeos"

export function Header({
  lang,
  dict,
  navMenu,
  navLinks,
  blogPosts = [],
  blogClusters = [],
}: {
  lang: Locale
  dict: Dict
  navMenu: NavGroup[]
  navLinks: NavLink[]
  blogPosts?: BlogPost[]
  blogClusters?: string[]
}) {
  const [open, setOpen] = useState(false)
  const lp = (p: string) => localizedPath(lang, p)
  return (
    <header className="sticky top-0 z-50">
      <div className="container-x">
        <div className="mt-3 flex h-16 items-center justify-between gap-2 rounded-2xl bg-gradient-to-b from-white/15 to-white/[0.03] pl-4 pr-2 backdrop-blur-[48px] backdrop-saturate-[2.5] backdrop-brightness-110">
          <Link href={lp("/")} className="flex shrink-0 items-center" aria-label={site.name}>
            <Image src="/brand/logo.png" alt={site.name} width={150} height={51} priority className="h-8 w-auto" />
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {navMenu.map((g) => (
              <div key={g.label} className="group relative">
                <button className="flex h-16 items-center">
                  <span className={pill}>
                    {g.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </span>
                </button>
                <div className="invisible absolute left-0 top-full -translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex gap-2 rounded-2xl border bg-white p-3 shadow-xl">
                    <div className={`grid gap-1 ${g.children.length > 4 ? "w-[560px] grid-cols-2" : "w-[440px] grid-cols-2"}`}>
                      {g.children.map((c) => (
                        <Link key={c.href} href={lp(c.href)} className="group/i flex items-start gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-cream">
                          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-cream ring-1 ring-line">
                            <Image src={c.img} alt={c.label} fill className="object-cover" sizes="40px" />
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
                    <Link href={lp(g.featured.href)} className="group/f relative w-[220px] shrink-0 overflow-hidden rounded-xl">
                      <Image src={g.featured.img} alt={g.featured.title} fill className="object-cover transition-transform duration-500 group-hover/f:scale-105" sizes="220px" />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                      <span className="absolute inset-x-0 bottom-0 p-4">
                        <span className="block text-[15px] font-semibold leading-tight text-white">{g.featured.title}</span>
                        <span className="mt-1 block text-[11px] leading-snug text-white/75">{g.featured.text}</span>
                        <span className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-white">
                          {g.featured.cta}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/f:translate-x-0.5" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {navLinks.map((n) =>
              n.href === "/blog" && blogPosts.length ? (
                <div key={n.href} className="group relative">
                  <Link href={lp("/blog")} className="flex h-16 items-center">
                    <span className={pill}>
                      {n.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </span>
                  </Link>
                  <div className="invisible absolute right-0 top-full -translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex gap-2 rounded-2xl border bg-white p-3 shadow-xl">
                      <div className="grid w-[460px] grid-cols-2 gap-1">
                        {blogPosts.map((p) => (
                          <Link key={p.slug} href={lp(`/blog/${p.slug}`)} className="group/i flex gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-cream">
                            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cream ring-1 ring-line">
                              <Image src={p.cover} alt={p.title} fill className="object-cover" sizes="48px" />
                            </span>
                            <span className="min-w-0">
                              <span className="line-clamp-2 text-[13px] font-semibold leading-tight text-ink group-hover/i:text-burdeos">{p.title}</span>
                              <span className="mt-0.5 block text-[11px] text-warm">{fmtDate(p.date, "short", lang)}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="w-[180px] shrink-0 rounded-xl bg-cream p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-warm">{dict.nav.categorias}</p>
                        <div className="mt-3 flex flex-col gap-2">
                          {blogClusters.map((c) => (
                            <Link key={c} href={lp(`/blog#cat=${encodeURIComponent(c)}`)} className="text-sm leading-tight text-ink transition-colors hover:text-burdeos">{c}</Link>
                          ))}
                        </div>
                        <Link href={lp("/blog")} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-burdeos">
                          {dict.nav.verTodoBlog} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={n.href} href={lp(n.href)} className="whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/[0.05] hover:text-burdeos">
                  {n.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            <LanguageSwitcher lang={lang} />
            <a href={telLink} className="flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/[0.05]">
              <Phone className="h-4 w-4 text-burdeos" />
              {site.phoneDisplay}
            </a>
            <Link href={lp("/contacto")} className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-burdeos px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-burdeos-dark hover:shadow-md">
              {dict.cta.presupuesto}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher lang={lang} />
            <button className="rounded-full p-2 text-ink transition-colors hover:bg-ink/[0.05]" onClick={() => setOpen((v) => !v)} aria-label="Menú">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {open ? (
        <div className="container-x md:hidden">
          <div className="mt-2 max-h-[80vh] overflow-y-auto rounded-2xl border border-line/70 bg-white shadow-xl">
            <nav className="flex flex-col px-4 py-3">
              {navMenu.map((g) => (
                <details key={g.label} className="group border-b py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 text-base font-semibold text-ink">
                    {g.label}
                    <ChevronDown className="h-4 w-4 text-burdeos transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pb-2">
                    {g.children.map((c) => (
                      <div key={c.href} className="py-1.5">
                        <Link href={lp(c.href)} onClick={() => setOpen(false)} className="flex items-center gap-3 text-sm font-medium text-ink">
                          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-cream">
                            <Image src={c.img} alt={c.label} fill className="object-cover" sizes="36px" />
                          </span>
                          {c.label}
                        </Link>
                        {c.sub ? (
                          <span className="ml-12 flex gap-3 pt-1">
                            {c.sub.map((s) => (
                              <Link key={s.href} href={lp(s.href)} onClick={() => setOpen(false)} className="text-xs font-medium text-burdeos">{s.label}</Link>
                            ))}
                          </span>
                        ) : null}
                      </div>
                    ))}
                    <Link href={lp(g.featured.href)} onClick={() => setOpen(false)} className="mt-1 flex items-center justify-between gap-2 rounded-xl bg-cream px-3 py-2.5">
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink">{g.featured.title}</span>
                        <span className="block text-[11px] text-warm">{g.featured.text}</span>
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-burdeos">
                        {g.featured.cta} <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </details>
              ))}
              {navLinks.map((n) => (
                <Link key={n.href} href={lp(n.href)} onClick={() => setOpen(false)} className="border-b py-3 text-base font-medium text-ink">
                  {n.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a href={telLink} className="flex items-center gap-2 py-1 font-semibold text-ink">
                  <Phone className="h-4 w-4 text-burdeos" /> {site.phoneDisplay}
                </a>
                <Link href={lp("/contacto")} onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-burdeos px-5 py-2.5 text-center text-sm font-semibold text-white">
                  {dict.cta.presupuesto} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}
