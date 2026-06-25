import { waLink } from "@/lib/site"

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hola, me gustaría información sobre el mantenimiento/rehabilitación de una fachada.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.04 4C9.96 4 5 8.95 5 15.02c0 2.4.77 4.62 2.08 6.43L5.5 27l5.72-1.5a11.02 11.02 0 0 0 4.82 1.1h.01c6.08 0 11.03-4.95 11.03-11.02C27.08 8.95 22.12 4 16.04 4zm6.45 15.61c-.27.76-1.58 1.46-2.18 1.5-.56.05-1.27.24-4.27-.9-3.6-1.42-5.9-5.1-6.08-5.34-.18-.24-1.46-1.94-1.46-3.7s.92-2.62 1.25-2.98c.33-.36.72-.45.96-.45.24 0 .48 0 .69.01.22.01.52-.08.81.62.3.71 1.01 2.46 1.1 2.64.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.18 1.63z"/>
      </svg>
    </a>
  )
}
