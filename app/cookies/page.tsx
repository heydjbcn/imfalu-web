import type { Metadata } from "next"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Política de cookies", robots: { index: false }, alternates: { canonical: "/cookies" } }

export default function Page() {
  return (
    <LegalShell title="Política de cookies">
      <p>Este sitio web de {site.name} está diseñado para funcionar con el mínimo de cookies.</p>
      <h2>¿Qué cookies usamos?</h2>
      <p>Actualmente solo utilizamos cookies técnicas necesarias para el funcionamiento básico del sitio. No utilizamos cookies de publicidad ni de seguimiento de terceros. Si en el futuro se incorporan herramientas de analítica, se actualizará esta política y se solicitará tu consentimiento.</p>
      <h2>Gestión de cookies</h2>
      <p>Puedes configurar o eliminar las cookies desde los ajustes de tu navegador. Consulta la ayuda de tu navegador (Chrome, Firefox, Safari o Edge) para más detalles.</p>
    </LegalShell>
  )
}
