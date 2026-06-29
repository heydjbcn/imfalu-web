import type { Metadata } from "next"
import Link from "next/link"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Aviso legal", robots: { index: false }, alternates: { canonical: "/aviso-legal" } }

export default function Page() {
  return (
    <LegalShell title="Aviso legal" updated={site.legal.updated}>
      <p>
        El presente aviso legal regula el acceso, la navegación y el uso del sitio web {site.url} (en
        adelante, &laquo;el sitio web&raquo;), titularidad de {site.legal.razonSocial}. El acceso al sitio
        implica la aceptación de las condiciones recogidas en este documento.
      </p>

      <h2>1. Titular del sitio web</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se facilitan los datos del titular:
        <br /><strong>Denominación social:</strong> {site.legal.razonSocial}
        <br /><strong>NIF:</strong> {site.legal.nif}
        <br /><strong>Domicilio:</strong> {site.address.full}
        <br /><strong>Teléfono:</strong> {site.legal.phoneDisplay}
        <br /><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
        <br /><strong>Sitio web:</strong> {site.url}
      </p>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene por finalidad informar sobre los servicios de mantenimiento, reparación,
        regeneración y rehabilitación de fachadas de aluminio y cristal (muro cortina, fachadas acristaladas
        y metálicas) que presta {site.name} en {site.area}, así como facilitar el contacto y la solicitud de
        presupuesto por parte de los usuarios. {site.name} se reserva el derecho a modificar, en cualquier
        momento y sin previo aviso, la presentación, configuración y contenidos del sitio.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y la navegación por el sitio atribuyen la condición de usuario e implican la aceptación de
        este aviso legal. El usuario se compromete a hacer un uso diligente y conforme a la ley de los
        contenidos del sitio y a no emplearlos para incurrir en actividades ilícitas, lesivas de derechos de
        terceros, o que puedan dañar, inutilizar o sobrecargar el sitio o impedir su normal utilización.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, logotipos,
        marcas, diseño, código fuente y selección y disposición de los contenidos) son titularidad de{" "}
        {site.legal.razonSocial} o de terceros que han autorizado su uso, y están protegidos por la normativa
        de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación
        pública, transformación o cualquier otra forma de explotación, total o parcial, sin la autorización
        expresa y por escrito del titular. El acceso al sitio no otorga al usuario ningún derecho sobre dichos
        contenidos.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        {site.name} procura mantener la información del sitio actualizada y libre de errores, pero no garantiza
        la exactitud, vigencia o exhaustividad de los contenidos, que tienen carácter meramente informativo y
        no vinculante. {site.name} no se responsabiliza de:
      </p>
      <ul>
        <li>Los daños o perjuicios derivados del uso del sitio o de la imposibilidad de acceder al mismo.</li>
        <li>La indisponibilidad temporal del sitio por causas técnicas, de mantenimiento o de fuerza mayor.</li>
        <li>La presencia de virus u otros elementos lesivos que pudieran alterar los sistemas informáticos del usuario.</li>
        <li>Los contenidos de sitios de terceros a los que se pueda acceder mediante enlaces.</li>
      </ul>

      <h2>6. Enlaces a terceros</h2>
      <p>
        El sitio puede contener enlaces a páginas de terceros. {site.name} no asume responsabilidad alguna
        sobre el contenido, la disponibilidad o las políticas de privacidad de dichos sitios. La inclusión de
        estos enlaces no implica relación, recomendación ni supervisión de los mismos.
      </p>

      <h2>7. Protección de datos y cookies</h2>
      <p>
        El tratamiento de los datos personales facilitados a través del sitio se rige por la{" "}
        <Link href="/privacidad">política de privacidad</Link>. El uso de cookies se describe en la{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>

      <h2>8. Nulidad parcial</h2>
      <p>
        Si cualquier cláusula de este aviso legal fuese declarada nula o ineficaz, dicha cláusula se tendrá por
        no puesta, sin que ello afecte a la validez del resto de disposiciones.
      </p>

      <h2>9. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia
        derivada del acceso o uso del sitio, las partes se someten a los juzgados y tribunales de Barcelona,
        salvo que la normativa aplicable de consumidores y usuarios disponga otro fuero.
      </p>
    </LegalShell>
  )
}
