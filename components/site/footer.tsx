import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { services, site, telLink } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/brand/logo-dark.png" alt={site.name} width={160} height={54} className="h-9 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.tagline}. Más de 30 años manteniendo, reparando y rehabilitando
            fachadas de aluminio y cristal en {site.area}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Servicios</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="text-white/60 transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telLink} className="flex items-center gap-2 text-white/60 hover:text-white">
                <Phone className="h-4 w-4 text-burdeos" /> {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/60">
              <MapPin className="h-4 w-4 text-burdeos" /> {site.area}
            </li>
            <li>
              <Link href="/contacto" className="text-white/60 hover:text-white">Pedir presupuesto</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container-x flex flex-col items-center justify-between gap-3 pb-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
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
