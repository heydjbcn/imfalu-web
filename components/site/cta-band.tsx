import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { site, telLink } from "@/lib/site"

export function CtaBand({ title }: { title?: string }) {
  return (
    <section className="bg-burdeos">
      <div className="container-x flex flex-col items-center gap-6 py-16 text-center">
        <h2 className="max-w-2xl text-2xl font-bold text-white md:text-3xl">
          {title ?? "¿Necesitas intervenir una fachada? Te damos presupuesto sin compromiso"}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-burdeos transition-colors hover:bg-white/90">
            Pedir presupuesto <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={telLink} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
