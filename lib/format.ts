// Formateo de fechas DETERMINISTA (sin Date/locale/zona horaria) para que el
// resultado sea idéntico en servidor y cliente y no rompa la hidratación (#418).
const MESES = {
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  ca: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
}
const MESES_ABBR = {
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  ca: ["gen", "febr", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
}

export function fmtDate(iso: string, style: "short" | "long" = "short", lang: "es" | "ca" = "es"): string {
  if (!iso) return ""
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number)
  if (!y || !m || !d) return ""
  return style === "long" ? `${d} de ${MESES[lang][m - 1]} de ${y}` : `${d} ${MESES_ABBR[lang][m - 1]} ${y}`
}
