"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { nav, site, telLink } from "@/lib/site"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image src="/brand/logo.png" alt={site.name} width={150} height={51} priority className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-ink/80 transition-colors hover:text-burdeos">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={telLink} className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-burdeos">
            <Phone className="h-4 w-4 text-burdeos" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contacto"
            className="rounded-full bg-burdeos px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-burdeos-dark"
          >
            Pide presupuesto
          </Link>
        </div>

        <button
          className="md:hidden -mr-2 p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t bg-white md:hidden">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-ink"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t pt-3">
              <a href={telLink} className="flex items-center gap-2 py-1 font-semibold text-ink">
                <Phone className="h-4 w-4 text-burdeos" /> {site.phoneDisplay}
              </a>
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="rounded-full bg-burdeos px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Pide presupuesto
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
