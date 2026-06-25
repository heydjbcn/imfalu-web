"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])
  const go = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + images.length) % images.length)),
    [images.length]
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close, go])

  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-cream ring-1 ring-line transition-opacity hover:opacity-90"
            aria-label={`Ver foto ${i + 1} de ${title}`}
          >
            <Image src={src} alt={`${title} — foto ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 33vw, 200px" />
          </button>
        ))}
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Cerrar">
            <X className="h-6 w-6" />
          </button>
          {images.length > 1 ? (
            <>
              <button onClick={(e) => { e.stopPropagation(); go(-1) }} className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Anterior">
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); go(1) }} className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Siguiente">
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          ) : null}
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[open]} alt={`${title} — foto ${open + 1}`} fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      ) : null}
    </>
  )
}
