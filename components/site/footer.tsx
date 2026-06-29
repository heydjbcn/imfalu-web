import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Mail } from "lucide-react"
import { services, site, telLink } from "@/lib/site"

const TIPOS = [
  { label: "Muro cortina", href: "/fachadas/muro-cortina" },
  { label: "Muro cortina de aluminio", href: "/fachadas/muro-cortina-aluminio" },
  { label: "Muro cortina de cristal", href: "/fachadas/muro-cortina-cristal" },
  { label: "Fachada acristalada", href: "/fachadas/fachada-acristalada" },
  { label: "Fachada de aluminio", href: "/fachadas/fachada-aluminio" },
  { label: "Rehabilitación", href: "/fachadas/rehabilitacion" },
]

export function Footer() {
  const servicios = services.filter((s) => !["mantenimiento-preventivo", "mantenimiento-correctivo"].includes(s.slug))
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image src="/brand/logo-dark.png" alt={site.name} width={160} height={54} className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.tagline}. Más de 30 años manteniendo, reparando y rehabilitando fachadas de aluminio y cristal en {site.area}.
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
          <h3 className="text-sm font-semibold text-white">Servicios</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="text-white/60 transition-colors hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold text-white">Tipos de fachada</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {TIPOS.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-white/60 transition-colors hover:text-white">{t.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold text-white">Empresa</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/proyectos" className="text-white/60 hover:text-white">Proyectos</Link></li>
            <li><Link href="/sobre-nosotros" className="text-white/60 hover:text-white">Sobre nosotros</Link></li>
            <li><Link href="/blog" className="text-white/60 hover:text-white">Blog</Link></li>
            <li><Link href="/contacto" className="text-white/60 hover:text-white">Contacto</Link></li>
            <li><Link href="/contacto" className="font-medium text-white hover:text-burdeos">Pedir presupuesto</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container-x flex flex-col items-center justify-between gap-3 pb-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados. · Desarrollado por <a href="https://desarrollowebbarcelona.es/" target="_blank" rel="noopener" className="text-white/70 hover:text-white">desarrollowebbarcelona.es</a></p>
          <div className="flex gap-5">
            <Link href="/aviso-legal" className="hover:text-white/70">Aviso legal</Link>
            <Link href="/privacidad" className="hover:text-white/70">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white/70">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
