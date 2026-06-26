import { Sparkles } from "lucide-react"

/**
 * Respuesta directa y citable (answer-first), pensada para que buscadores e IA
 * extraigan una definición rotunda del servicio justo al inicio de la página.
 * Se renderiza bajo el H1.
 */
export function AnswerBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 max-w-2xl rounded-2xl border border-l-4 border-l-burdeos bg-white/95 p-5 text-ink shadow-sm">
      <p className="flex items-start gap-2.5 text-base leading-relaxed">
        <Sparkles className="mt-1 h-4 w-4 shrink-0 text-burdeos" />
        <span>{children}</span>
      </p>
    </div>
  )
}
