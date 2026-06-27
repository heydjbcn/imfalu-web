import { Check } from "lucide-react"

/**
 * Lista de prestaciones con check en círculo, en tarjetas (2 columnas).
 * Usada en "Qué hacemos / Qué incluye" de servicios y fachadas.
 */
export function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {items.map((b) => (
        <li
          key={b}
          className="group flex items-start gap-3 rounded-xl border border-line bg-cream/40 p-4 transition-colors hover:border-burdeos/40 hover:bg-cream"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-burdeos/10 transition-colors group-hover:bg-burdeos">
            <Check className="h-3.5 w-3.5 text-burdeos transition-colors group-hover:text-white" strokeWidth={3} />
          </span>
          <span className="text-sm font-medium leading-snug text-ink">{b}</span>
        </li>
      ))}
    </ul>
  )
}
