"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import type { GalleryItem } from "@/lib/site"

// Galería de paneles expandibles (estilo desarrollowebbarcelona.es): la tarjeta activa
// se ensancha y muestra el texto; las demás quedan estrechas con el título vertical.
// En móvil se convierte en acordeón vertical. Al hacer clic, abre la foto en lightbox.
export function ExpandingGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(0) // panel expandido
  const [box, setBox] = useState<number | null>(null) // índice en lightbox

  const close = useCallback(() => setBox(null), [])
  const go = useCallback(
    (d: number) => setBox((i) => (i === null ? null : (i + d + items.length) % items.length)),
    [items.length]
  )

  useEffect(() => {
    if (box === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [box, close, go])

  return (
    <>
      <div className="flex flex-col gap-2.5 sm:h-[440px] sm:flex-row sm:gap-3">
        {items.map((it, i) => {
          const isOpen = i === open
          return (
            <button
              key={it.src}
              type="button"
              aria-label={`Ampliar foto: ${it.label}`}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={() => setBox(i)}
              style={{ flexGrow: isOpen ? 5.5 : 1, flexBasis: 0 }}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl border border-line text-left outline-none transition-all duration-500 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:ring-2 focus-visible:ring-burdeos ${
                isOpen ? "h-72 sm:h-auto" : "h-20 sm:h-auto"
              }`}
            >
              <Image
                src={it.src}
                alt={it.label}
                fill
                sizes="(max-width:640px) 100vw, 60vw"
                className={`object-cover object-top transition duration-500 ${isOpen ? "" : "brightness-[.78] saturate-[1.05]"}`}
              />
              {/* degradado */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-60"}`} />

              {/* icono ampliar (solo en la abierta) */}
              <span className={`absolute right-4 top-4 z-[2] rounded-full bg-white/15 p-2 text-white backdrop-blur transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                <Maximize2 className="h-4 w-4" />
              </span>

              {/* título vertical (cuando está recogida) */}
              <span
                className={`absolute left-5 top-1/2 z-[2] -translate-y-1/2 whitespace-nowrap text-lg font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.6)] transition-opacity duration-300 sm:bottom-5 sm:left-1/2 sm:top-auto sm:translate-y-0 sm:-translate-x-1/2 sm:rotate-180 sm:text-base sm:[writing-mode:vertical-rl] ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                {it.label}
              </span>

              {/* cuerpo (cuando está abierta) */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-[2] p-6 transition-all duration-500 sm:w-[520px] sm:max-w-[90%] ${
                  isOpen ? "translate-y-0 opacity-100 delay-150" : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <div className="text-2xl font-black leading-tight text-white">{it.label}</div>
                {it.caption ? <div className="mt-1 text-sm text-white/80">{it.caption}</div> : null}
              </div>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {box !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Cerrar">
            <X className="h-6 w-6" />
          </button>
          {items.length > 1 ? (
            <>
              <button onClick={(e) => { e.stopPropagation(); go(-1) }} className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Anterior">
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); go(1) }} className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Siguiente">
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          ) : null}
          <figure className="relative flex h-[82vh] w-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full flex-1">
              <Image src={items[box].src} alt={items[box].label} fill className="object-contain" sizes="90vw" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/80">
              <span className="font-semibold text-white">{items[box].label}</span>
              {items[box].caption ? ` · ${items[box].caption}` : ""}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
