"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * Banda que empieza "dentro de un contenedor" (más estrecha, con esquinas
 * redondeadas) y se ensancha hasta ocupar todo el ancho a medida que se hace
 * scroll (estilo letaido.com). Progreso 0→1 según la posición en el viewport.
 * El margen inicial es proporcional al ancho (con tope) para que en móvil no
 * quede demasiado estrecha.
 */
export function ExpandOnScroll({
  children,
  className = "",
  minHeight = 260,
  maxHeight = 460,
  insetRatio = 0.07,
  maxInset = 130,
  maxRadius = 32,
}: {
  children: ReactNode
  className?: string
  minHeight?: number
  maxHeight?: number
  insetRatio?: number
  maxInset?: number
  maxRadius?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)
  const [w, setW] = useState(1280)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1)
      return
    }
    let raf = 0
    const compute = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      setW(window.innerWidth)
      const top = el.getBoundingClientRect().top
      const vh = window.innerHeight
      const start = vh * 0.85 // contraído cuando el borde superior está abajo
      const end = vh * 0.1 // expandido cuando llega arriba
      const raw = (start - top) / (start - end)
      setP(Math.min(1, Math.max(0, raw)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const startInset = Math.min(maxInset, w * insetRatio)
  const inset = startInset * (1 - p)
  const radius = maxRadius * (1 - p)
  const height = minHeight + (maxHeight - minHeight) * p

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        marginInline: `${inset}px`,
        borderRadius: `${radius}px`,
        height: `${height}px`,
        willChange: "margin, border-radius, height",
      }}
    >
      {children}
    </div>
  )
}
