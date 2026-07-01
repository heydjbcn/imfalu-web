import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail } from "lucide-react"
import { site, telLink } from "@/lib/site"
import { getServices, getSite } from "@/lib/content"
import { localizedPath, type Locale } from "@/lib/paths"
import type { Dict } from "@/lib/dict"

const TIPOS: { es: string; ca: string; href: string }[] = [
  { es: "Muro cortina", ca: "Mur cortina", href: "/fachadas/muro-cortina" },
  { es: "Muro cortina de aluminio", ca: "Mur cortina d'alumini", href: "/fachadas/muro-cortina-aluminio" },
  { es: "Muro cortina de cristal", ca: "Mur cortina de vidre", href: "/fachadas/muro-cortina-cristal" },
  { es: "Fachada acristalada", ca: "Façana de vidre", href: "/fachadas/fachada-acristalada" },
  { es: "Fachada de aluminio", ca: "Façana d'alumini", href: "/fachadas/fachada-aluminio" },
  { es: "Rehabilitación", ca: "Rehabilitació", href: "/fachadas/rehabilitacion" },
]

export function Footer({ lang, dict }: { lang: Locale; dict: Dict }) {
  const s = getSite(lang)
  const lp = (p: string) => localizedPath(lang, p)
  const servicios = getServices(lang).filter((x) => !["mantenimiento-preventivo", "mantenimiento-correctivo"].includes(x.slug))
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src="/brand/logo-dark.png" alt={site.name} width={160} height={54} className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {s.tagline}. {dict.footer.taglineDesc} {s.area}.
          </p>
          <a href={telLink} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-burdeos">
            <Phone className="h-4 w-4 text-burdeos" /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 text-sm text-white/60 hover:text-white">
            <Mail className="h-4 w-4 text-burdeos" /> {site.email}
          </a>
          <p className="mt-2 flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-burdeos" /> {site.address.full}
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-white">{dict.footer.servicios}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {servicios.map((x) => (
              <li key={x.slug}>
                <Link href={lp(`/servicios/${x.slug}`)} className="text-white/60 transition-colors hover:text-white">{x.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-white">{dict.footer.tiposFachada}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {TIPOS.map((t) => (
              <li key={t.href}>
                <Link href={lp(t.href)} className="text-white/60 transition-colors hover:text-white">{lang === "ca" ? t.ca : t.es}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-white">{dict.footer.empresa}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href={lp("/proyectos")} className="text-white/60 hover:text-white">{dict.footer.proyectos}</Link></li>
            <li><Link href={lp("/sobre-nosotros")} className="text-white/60 hover:text-white">{dict.footer.sobreNosotros}</Link></li>
            <li><Link href={lp("/blog")} className="text-white/60 hover:text-white">{dict.footer.blog}</Link></li>
            <li><Link href={lp("/contacto")} className="text-white/60 hover:text-white">{dict.footer.contacto}</Link></li>
            <li><Link href={lp("/contacto")} className="font-medium text-white hover:text-burdeos">{dict.footer.pedirPresupuesto}</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container-x flex flex-col items-center justify-between gap-3 pb-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. {dict.footer.derechos}. · {dict.footer.desarrolladoPor} <a href="https://desarrollowebbarcelona.es/" target="_blank" rel="noopener" className="text-white/90 underline underline-offset-2 hover:text-white">desarrollowebbarcelona.es</a></p>
          <div className="flex gap-5">
            <Link href={lp("/aviso-legal")} className="hover:text-white/70">{dict.footer.avisoLegal}</Link>
            <Link href={lp("/privacidad")} className="hover:text-white/70">{dict.footer.privacidad}</Link>
            <Link href={lp("/cookies")} className="hover:text-white/70">{dict.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
