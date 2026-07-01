import { Phone, MapPin } from "lucide-react"
import { site, telLink } from "@/lib/site"
import { getSite } from "@/lib/content"
import type { Locale, Dict } from "@/lib/i18n"

export function TopBar({ lang, dict }: { lang: Locale; dict: Dict }) {
  const s = getSite(lang)
  return (
    <div className="hidden bg-ink text-white/70 md:block">
      <div className="container-x flex h-9 items-center justify-between text-xs">
        <p className="font-medium uppercase tracking-[0.18em] text-white/60">
          {dict.topbar.specialists} · {s.area}
        </p>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-burdeos" /> {site.city}
          </span>
          <a href={telLink} className="flex items-center gap-1.5 font-semibold text-white hover:text-burdeos">
            <Phone className="h-3.5 w-3.5 text-burdeos" /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}
