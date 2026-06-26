"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { JsonLd } from "@/components/site/json-ld"

/**
 * Sección de preguntas frecuentes reutilizable: acordeón animado (una abierta
 * a la vez) + schema FAQPage para buscadores e IA.
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
  const [open, setOpen] = useState<number | null>(0)
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
        <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">{title}</h2>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = i === open
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                  isOpen ? "border-burdeos/40 shadow-sm" : "hover:border-burdeos/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink"
                >
                  <span>{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-burdeos text-white" : "bg-burdeos/10 text-burdeos"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-warm">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
