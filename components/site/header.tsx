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
              <div className="invisible absolute left-0 top-full w-64 -translate-y-1 rounded-2xl border bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {g.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`block rounded-lg px-3 py-2 text-sm text-ink hover:bg-cream hover:text-burdeos ${"sub" in c && c.sub ? "pl-7 text-warm" : "font-medium"}`}
                  >
                    {c.label}
                  </Link>
                ))}
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
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2 text-sm text-ink ${"sub" in c && c.sub ? "pl-4 text-warm" : ""}`}
                    >
                      {c.label}
                    </Link>
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
