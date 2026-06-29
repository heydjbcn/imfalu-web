// Formateo de fechas DETERMINISTA (sin Date/locale/zona horaria) para que el
// resultado sea idéntico en servidor y cliente y no rompa la hidratación (#418).
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const MESES_ABBR = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]

export function fmtDate(iso: string, style: "short" | "long" = "short"): string {
  if (!iso) return ""
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number)
  if (!y || !m || !d) return ""
  return style === "long" ? `${d} de ${MESES[m - 1]} de ${y}` : `${d} ${MESES_ABBR[m - 1]} ${y}`
}
