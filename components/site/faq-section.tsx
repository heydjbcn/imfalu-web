import { ChevronRight } from "lucide-react"
import { JsonLd } from "@/components/site/json-ld"

/**
 * Sección de preguntas frecuentes reutilizable: renderiza el FAQ visible
 * (acordeón nativo) y emite el schema FAQPage para buscadores e IA.
 */
export function FaqSection({
  title = "Preguntas frecuentes",
  faqs,
  bg = "white",
}: {
  title?: string
  faqs: { q: string; a: string }[]
  bg?: "white" | "cream"
}) {
  if (!faqs.length) return null
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
  return (
    <section className={bg === "cream" ? "bg-cream py-16" : "py-16"}>
      <div className="container-x">
        <JsonLd data={jsonLd} />
        <h2 className="text-2xl font-bold text-ink md:text-3xl">{title}</h2>
        <div className="mt-6 max-w-3xl divide-y rounded-2xl border bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {f.q}
                <ChevronRight className="h-4 w-4 shrink-0 text-burdeos transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-warm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
