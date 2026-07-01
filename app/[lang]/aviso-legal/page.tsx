import type { Metadata } from "next"
import Link from "next/link"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  return { title: l === "ca" ? "Avís legal" : "Aviso legal", robots: { index: false }, alternates: { canonical: localizedPath(l, "/aviso-legal") } }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const lp = (p: string) => localizedPath(l, p)

  if (l === "ca") {
    return (
      <LegalShell title="Avís legal" updated={site.legal.updated} lang="ca">
        <p>Aquest avís legal regula l&apos;accés, la navegació i l&apos;ús del lloc web {site.url} (en endavant, &laquo;el lloc web&raquo;), titularitat de {site.legal.razonSocial}. L&apos;accés al lloc implica l&apos;acceptació de les condicions recollides en aquest document.</p>
        <h2>1. Titular del lloc web</h2>
        <p>En compliment de l&apos;article 10 de la Llei 34/2002, d&apos;11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), es faciliten les dades del titular:
          <br /><strong>Denominació social:</strong> {site.legal.razonSocial}
          <br /><strong>NIF:</strong> {site.legal.nif}
          <br /><strong>Domicili:</strong> {site.address.full}
          <br /><strong>Telèfon:</strong> {site.legal.phoneDisplay}
          <br /><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
          <br /><strong>Lloc web:</strong> {site.url}
          <br /><strong>Dades registrals:</strong> {site.legal.registroMercantil}.
        </p>
        <h2>2. Objecte</h2>
        <p>Aquest lloc web té per finalitat informar sobre els serveis de manteniment, reparació, regeneració i rehabilitació de façanes d&apos;alumini i vidre (mur cortina, façanes acristallades i metàl·liques) que presta {site.name} a {site.area}, així com facilitar el contacte i la sol·licitud de pressupost per part dels usuaris. {site.name} es reserva el dret de modificar, en qualsevol moment i sense avís previ, la presentació, configuració i continguts del lloc.</p>
        <h2>3. Condicions d&apos;ús</h2>
        <p>L&apos;accés i la navegació pel lloc atribueixen la condició d&apos;usuari i impliquen l&apos;acceptació d&apos;aquest avís legal. L&apos;usuari es compromet a fer un ús diligent i conforme a la llei dels continguts del lloc i a no emprar-los per incórrer en activitats il·lícites, lesives de drets de tercers, o que puguin danyar, inutilitzar o sobrecarregar el lloc o impedir-ne la utilització normal.</p>
        <h2>4. Propietat intel·lectual i industrial</h2>
        <p>Tots els continguts del lloc web (textos, fotografies, gràfics, imatges, icones, logotips, marques, disseny, codi font i selecció i disposició dels continguts) són titularitat de {site.legal.razonSocial} o de tercers que n&apos;han autoritzat l&apos;ús, i estan protegits per la normativa de propietat intel·lectual i industrial. Queda prohibida la seva reproducció, distribució, comunicació pública, transformació o qualsevol altra forma d&apos;explotació, total o parcial, sense l&apos;autorització expressa i per escrit del titular. L&apos;accés al lloc no atorga a l&apos;usuari cap dret sobre aquests continguts.</p>
        <h2>5. Responsabilitat</h2>
        <p>{site.name} procura mantenir la informació del lloc actualitzada i lliure d&apos;errors, però no garanteix l&apos;exactitud, vigència o exhaustivitat dels continguts, que tenen caràcter merament informatiu i no vinculant. {site.name} no es responsabilitza de:</p>
        <ul>
          <li>Els danys o perjudicis derivats de l&apos;ús del lloc o de la impossibilitat d&apos;accedir-hi.</li>
          <li>La indisponibilitat temporal del lloc per causes tècniques, de manteniment o de força major.</li>
          <li>La presència de virus o altres elements lesius que puguin alterar els sistemes informàtics de l&apos;usuari.</li>
          <li>Els continguts de llocs de tercers als quals es pugui accedir mitjançant enllaços.</li>
        </ul>
        <h2>6. Enllaços a tercers</h2>
        <p>El lloc pot contenir enllaços a pàgines de tercers. {site.name} no assumeix cap responsabilitat sobre el contingut, la disponibilitat o les polítiques de privacitat d&apos;aquests llocs. La inclusió d&apos;aquests enllaços no implica relació, recomanació ni supervisió.</p>
        <h2>7. Protecció de dades i cookies</h2>
        <p>El tractament de les dades personals facilitades a través del lloc es regeix per la <Link href={lp("/privacidad")}>política de privacitat</Link>. L&apos;ús de cookies es descriu a la <Link href={lp("/cookies")}>política de cookies</Link>.</p>
        <h2>8. Nul·litat parcial</h2>
        <p>Si qualsevol clàusula d&apos;aquest avís legal fos declarada nul·la o ineficaç, aquesta clàusula es tindrà per no posada, sense que això afecti la validesa de la resta de disposicions.</p>
        <h2>9. Legislació aplicable i jurisdicció</h2>
        <p>Aquest avís legal es regeix per la legislació espanyola. Per a la resolució de qualsevol controvèrsia derivada de l&apos;accés o ús del lloc, les parts se sotmeten als jutjats i tribunals de Barcelona, llevat que la normativa aplicable de consumidors i usuaris disposi un altre fur.</p>
      </LegalShell>
    )
  }

  return (
    <LegalShell title="Aviso legal" updated={site.legal.updated} lang="es">
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
        <br /><strong>Datos registrales:</strong> {site.legal.registroMercantil}.
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
        <Link href={lp("/privacidad")}>política de privacidad</Link>. El uso de cookies se describe en la{" "}
        <Link href={lp("/cookies")}>política de cookies</Link>.
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
