// i18n: español (por defecto, sin prefijo de URL) + catalán (/ca).
import "server-only"

export const locales = ["es", "ca"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"

export function hasLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x)
}

/** Prefija la ruta con /ca cuando el idioma es catalán. ES va sin prefijo. */
export function localizedPath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`
  return locale === "es" ? p : `/${locale}${p}`
}

/** og:locale por idioma */
export const ogLocale: Record<Locale, string> = { es: "es_ES", ca: "ca_ES" }

const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  ca: () => import("@/dictionaries/ca.json").then((m) => m.default),
} as const

export type Dict = Awaited<ReturnType<(typeof dictionaries)["es"]>>

export const getDictionary = async (locale: Locale): Promise<Dict> =>
  dictionaries[hasLocale(locale) ? locale : defaultLocale]()
