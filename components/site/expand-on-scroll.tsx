"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * Banda que empieza al ANCHO DEL CONTENEDOR padre (alineada con el contenido)
 * y se ensancha hasta ocupar todo el viewport (full-bleed) a medida que se hace
 * scroll (estilo letaido.com). Debe ir dentro de un `container-x` (o del
 * contenedor de la sección); mide los bordes del padre y aplica márgenes
 * negativos proporcionales al progreso 0→1.
 */
export function ExpandOnScroll({
  children,
  className = "",
  minHeight = 260,
  maxHeight = 460,
  maxRadius = 28,
}: {
  children: ReactNode
  className?: string
  minHeight?: number
  maxHeight?: number
  maxRadius?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)
  const [gap, setGap] = useState({ left: 0, right: 0 })

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1)
      return
    }
    let raf = 0
    const compute = () => {
      raf = 0
      const el = ref.current
      const parent = el?.parentElement
      if (!el || !parent) return
      // hueco entre el contenido del contenedor y los bordes del viewport
      const pr = parent.getBoundingClientRect()
      const cs = getComputedStyle(parent)
      const padL = parseFloat(cs.paddingLeft) || 0
      const padR = parseFloat(cs.paddingRight) || 0
      setGap({ left: pr.left + padL, right: window.innerWidth - (pr.right - padR) })
      // progreso por posición en el viewport
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

  const radius = maxRadius * (1 - p)
  const height = minHeight + (maxHeight - minHeight) * p

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        marginLeft: `${-gap.left * p}px`,
        marginRight: `${-gap.right * p}px`,
        borderRadius: `${radius}px`,
        height: `${height}px`,
        willChange: "margin, border-radius, height",
      }}
    >
      {children}
    </div>
  )
}
