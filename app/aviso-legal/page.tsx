import type { Metadata } from "next"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Aviso legal", robots: { index: false }, alternates: { canonical: "/aviso-legal" } }

export default function Page() {
  return (
    <LegalShell title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa de los datos del titular de este sitio:
        <br /><strong>Denominación:</strong> {site.legalName} [completar razón social]
        <br /><strong>NIF/CIF:</strong> [completar]
        <br /><strong>Domicilio:</strong> [completar], {site.city}
        <br /><strong>Teléfono:</strong> {site.phoneDisplay}
        <br /><strong>Email:</strong> [completar]
        <br /><strong>Sitio web:</strong> {site.url}
      </p>
      <h2>Objeto</h2>
      <p>Este sitio web tiene por objeto informar sobre los servicios de mantenimiento, reparación y rehabilitación de fachadas de aluminio y cristal que presta {site.name} y facilitar el contacto con la empresa.</p>
      <h2>Condiciones de uso</h2>
      <p>El acceso y uso de este sitio atribuye la condición de usuario y supone la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los contenidos de este sitio (textos, imágenes, logotipos y diseño) son titularidad de {site.name} o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción sin autorización.</p>
      <h2>Responsabilidad</h2>
      <p>{site.name} no se responsabiliza de los daños derivados del uso del sitio ni de la indisponibilidad temporal del mismo por causas técnicas.</p>
      <h2>Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de {site.city}.</p>
    </LegalShell>
  )
}
