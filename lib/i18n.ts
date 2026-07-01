// Carga de diccionarios (server-only). Los helpers puros están en lib/paths.ts.
import "server-only"
import { locales, defaultLocale, hasLocale, type Locale } from "@/lib/paths"
import type { Dict } from "@/lib/dict"

export { locales, defaultLocale, hasLocale, localizedPath, ogLocale, type Locale } from "@/lib/paths"
export type { Dict } from "@/lib/dict"

const dictionaries = {
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
  ca: () => import("@/dictionaries/ca.json").then((m) => m.default),
} as const

export const getDictionary = async (locale: Locale): Promise<Dict> =>
  dictionaries[hasLocale(locale) ? locale : defaultLocale]()
