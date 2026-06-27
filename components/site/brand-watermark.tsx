/**
 * Marca de agua: el wordmark "IMFALÚ" gigante en blanco, anclado abajo y
 * recortado por el contenedor (estilo letaido/ahrefs). Da textura a las
 * secciones de fondo "sand". Decorativo (aria-hidden); el contenido debe ir
 * por encima con `relative z-10`, y la sección con `relative isolate overflow-hidden`.
 */
export function BrandWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden leading-[0.78] ${className}`}
    >
      <span className="block translate-y-[30%] text-center text-[26vw] font-extrabold tracking-tighter text-white md:text-[20vw]">
        IMFALÚ
      </span>
    </span>
  )
}
