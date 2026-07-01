// Helpers de i18n SEGUROS para cliente y servidor (sin "server-only").
export const locales = ["es", "ca"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"

export function hasLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x)
}

/** Prefija con /ca cuando el idioma es catalán. ES va sin prefijo. */
export function localizedPath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`
  return locale === "es" ? p : `/${locale}${p}`
}

export const ogLocale: Record<Locale, string> = { es: "es_ES", ca: "ca_ES" }
