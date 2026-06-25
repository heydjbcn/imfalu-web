"use client"

import { useState } from "react"
import Image from "next/image"
import type { GalleryItem } from "@/lib/site"

// Galería de paneles expandibles (estilo desarrollowebbarcelona.es): la tarjeta activa
// se ensancha y muestra el texto; las demás quedan estrechas con el título vertical.
// En móvil se convierte en acordeón vertical.
export function ExpandingGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="flex flex-col gap-2.5 sm:h-[440px] sm:flex-row sm:gap-3">
      {items.map((it, i) => {
        const isOpen = i === open
        return (
          <div
            key={it.src}
            role="group"
            aria-label={it.label}
            tabIndex={0}
            onMouseEnter={() => setOpen(i)}
            onFocus={() => setOpen(i)}
            onClick={() => setOpen(i)}
            style={{ flexGrow: isOpen ? 5.5 : 1, flexBasis: 0 }}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-line outline-none transition-all duration-500 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:ring-2 focus-visible:ring-burdeos ${
              isOpen ? "h-72 sm:h-auto" : "h-20 sm:h-auto"
            }`}
          >
            <Image
              src={it.src}
              alt={it.label}
              fill
              sizes="(max-width:640px) 100vw, 60vw"
              className={`object-cover object-top transition duration-500 ${isOpen ? "" : "brightness-[.78] saturate-[1.05] sm:brightness-[.78]"}`}
            />
            {/* degradado */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-60"}`} />

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
          </div>
        )
      })}
    </div>
  )
}
