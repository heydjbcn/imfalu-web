import type { Metadata } from "next"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Política de privacidad", robots: { index: false }, alternates: { canonical: "/privacidad" } }

export default function Page() {
  return (
    <LegalShell title="Política de privacidad">
      <p>De acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD 3/2018, se informa sobre el tratamiento de los datos personales recogidos en este sitio web.</p>
      <h2>Responsable del tratamiento</h2>
      <p>{site.legalName} [completar razón social y CIF], {site.city}. Teléfono: {site.phoneDisplay}. Email: [completar].</p>
      <h2>Finalidad</h2>
      <p>Los datos que facilitas a través del formulario de contacto se utilizan únicamente para atender tu solicitud, elaborar presupuestos y mantener el contacto comercial derivado de tu consulta.</p>
      <h2>Legitimación</h2>
      <p>La base legal es el consentimiento del interesado al enviar el formulario y el interés legítimo en responder a las consultas recibidas.</p>
      <h2>Conservación</h2>
      <p>Los datos se conservan durante el tiempo necesario para atender tu solicitud y, en su caso, durante los plazos legales aplicables.</p>
      <h2>Destinatarios</h2>
      <p>No se ceden datos a terceros salvo obligación legal. Los correos del formulario se gestionan a través de un proveedor de envío de email que actúa como encargado del tratamiento.</p>
      <h2>Derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a [completar email]. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
    </LegalShell>
  )
}
