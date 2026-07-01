"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Cambia entre ES (raíz) y CA (/ca) manteniendo la ruta actual.
export function LanguageSwitcher({ lang }: { lang: "es" | "ca" }) {
  const pathname = usePathname() || "/"
  const bare = pathname.replace(/^\/ca(?=\/|$)/, "") || "/"
  const esHref = bare
  const caHref = bare === "/" ? "/ca" : `/ca${bare}`
  const base = "px-2 py-1 text-xs font-semibold rounded-md transition-colors"
  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-ink/[0.05] p-0.5" aria-label="Idioma / Idioma">
      <Link href={esHref} hrefLang="es" aria-current={lang === "es" ? "true" : undefined}
        className={`${base} ${lang === "es" ? "bg-white text-ink shadow-sm" : "text-warm hover:text-ink"}`}>ES</Link>
      <Link href={caHref} hrefLang="ca" aria-current={lang === "ca" ? "true" : undefined}
        className={`${base} ${lang === "ca" ? "bg-white text-ink shadow-sm" : "text-warm hover:text-ink"}`}>CA</Link>
    </div>
  )
}
