/**
 * Marca de agua: el logotipo de IMFALÚ en blanco, gigante y centrado, como
 * textura de fondo de una sección "sand". Decorativo (aria-hidden); el
 * contenido debe ir por encima con `relative z-10` y la sección con
 * `relative isolate overflow-hidden`.
 */
export function BrandWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-watermark.webp"
        alt="IMFALÚ"
        width={1400}
        height={541}
        className="h-auto w-[185%] max-w-none opacity-90 md:w-[112%]"
      />
    </span>
  )
}
