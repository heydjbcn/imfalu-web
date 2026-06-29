import type { Metadata } from "next"
import Link from "next/link"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Política de privacidad", robots: { index: false }, alternates: { canonical: "/privacidad" } }

export default function Page() {
  return (
    <LegalShell title="Política de privacidad" updated={site.legal.updated}>
      <p>
        Esta política de privacidad describe cómo {site.legal.razonSocial} trata los datos personales de las
        personas que utilizan este sitio web, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley
        Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos
        digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>{site.legal.razonSocial}</strong>
        <br /><strong>NIF:</strong> {site.legal.nif}
        <br /><strong>Domicilio:</strong> {site.address.full}
        <br /><strong>Teléfono:</strong> {site.legal.phoneDisplay}
        <br /><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. Qué datos tratamos</h2>
      <p>
        A través del formulario de contacto del sitio tratamos los datos que nos facilitas: <strong>nombre</strong>,{" "}
        <strong>correo electrónico</strong>, <strong>teléfono</strong> y el contenido del <strong>mensaje</strong>{" "}
        o consulta. No recogemos categorías especiales de datos. También se generan datos técnicos de
        navegación de forma agregada y anónima (ver apartado de analítica).
      </p>

      <h2>3. Finalidades</h2>
      <ul>
        <li>Atender tu consulta o solicitud de información.</li>
        <li>Elaborar y enviarte un presupuesto sin compromiso.</li>
        <li>Mantener el contacto comercial derivado de tu petición.</li>
      </ul>
      <p>No se toman decisiones automatizadas ni se elabora perfilado con tus datos.</p>

      <h2>4. Base jurídica</h2>
      <p>
        La base legal del tratamiento es el <strong>consentimiento</strong> que prestas al enviar el formulario
        (art. 6.1.a RGPD) y el <strong>interés legítimo</strong> en responder a las consultas recibidas y
        gestionar la relación precontractual (art. 6.1.f RGPD).
      </p>

      <h2>5. Conservación</h2>
      <p>
        Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, en su caso, durante el
        plazo de prescripción de las obligaciones legales que resulten aplicables. Cuando dejen de ser
        necesarios, se suprimen o se anonimizan.
      </p>

      <h2>6. Destinatarios y encargados del tratamiento</h2>
      <p>No cedemos tus datos a terceros, salvo obligación legal. Para prestar el servicio nos apoyamos en proveedores que actúan como encargados del tratamiento:</p>
      <ul>
        <li><strong>Hetzner Online GmbH</strong> — alojamiento del sitio y servidores (Unión Europea).</li>
        <li><strong>Resend</strong> — envío del correo electrónico generado por el formulario de contacto, cuando esté activo.</li>
        <li><strong>Ahrefs</strong> — analítica web sin cookies y de forma agregada (no identifica a usuarios individuales).</li>
        <li><strong>Google (Google Maps)</strong> — mapa incrustado en la página de contacto.</li>
      </ul>

      <h2>7. Transferencias internacionales</h2>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, las
        transferencias se realizan con las garantías previstas en el RGPD (cláusulas contractuales tipo de la
        Comisión Europea u otros mecanismos adecuados).
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de <strong>acceso, rectificación, supresión, oposición, limitación del
        tratamiento y portabilidad</strong>, así como retirar el consentimiento prestado, escribiendo a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>, indicando el derecho que deseas ejercer. Si
        consideras que el tratamiento no se ajusta a la normativa, tienes derecho a presentar una reclamación
        ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos, incluido el cifrado de las
        comunicaciones (HTTPS) y el control de acceso a la información.
      </p>

      <h2>10. Menores</h2>
      <p>El sitio se dirige a personas mayores de edad. No recabamos de forma consciente datos de menores.</p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para adaptarla a cambios normativos o de nuestros servicios. La versión
        vigente es la publicada en esta página. Consulta también el <Link href="/aviso-legal">aviso legal</Link> y la{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>
    </LegalShell>
  )
}
