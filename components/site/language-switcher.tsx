"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

// Cambia entre ES (raíz) y CA (/ca) manteniendo la ruta actual.
export function LanguageSwitcher({ lang }: { lang: "es" | "ca" }) {
  const pathname = usePathname() || "/"
  const bare = pathname.replace(/^\/ca(?=\/|$)/, "") || "/"
  const esHref = bare
  const caHref = bare === "/" ? "/ca" : `/ca${bare}`
  const pill = "rounded-full px-2 py-1 text-xs font-bold leading-none transition-colors"
  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-white/70 py-1 pl-2 pr-1" aria-label="Idioma / Idioma">
      <Globe className="h-3.5 w-3.5 text-warm" aria-hidden />
      <Link
        href={esHref}
        hrefLang="es"
        aria-current={lang === "es" ? "true" : undefined}
        className={`${pill} ${lang === "es" ? "bg-burdeos text-white" : "text-warm hover:text-burdeos"}`}
      >
        ES
      </Link>
      <Link
        href={caHref}
        hrefLang="ca"
        aria-current={lang === "ca" ? "true" : undefined}
        className={`${pill} ${lang === "ca" ? "bg-burdeos text-white" : "text-warm hover:text-burdeos"}`}
      >
        CA
      </Link>
    </div>
  )
}
