import type { Metadata } from "next"
import Link from "next/link"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  return { title: l === "ca" ? "Política de cookies" : "Política de cookies", robots: { index: false }, alternates: { canonical: localizedPath(l, "/cookies") } }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const lp = (p: string) => localizedPath(l, p)

  if (l === "ca") {
    return (
      <LegalShell title="Política de cookies" updated={site.legal.updated} lang="ca">
        <p>Una cookie és un petit arxiu que un lloc web desa al teu dispositiu. Aquest lloc de {site.name} està dissenyat per funcionar amb el mínim de cookies. A continuació t&apos;expliquem quines s&apos;utilitzen.</p>
        <h2>1. Cookies pròpies (tècniques)</h2>
        <p>Utilitzem únicament cookies tècniques necessàries per al funcionament bàsic del lloc (per exemple, per recordar les teves preferències de navegació). Aquestes cookies estan exemptes del deure de consentiment.</p>
        <h2>2. Analítica sense cookies</h2>
        <p>Per mesurar l&apos;ús del lloc emprem <strong>Ahrefs Web Analytics</strong>, una eina d&apos;analítica que <strong>no utilitza cookies</strong> ni rastreja usuaris de forma individual: les dades es recullen de manera agregada i anònima.</p>
        <h2>3. Cookies de tercers</h2>
        <p>A la pàgina de <Link href={lp("/contacto")}>contacte</Link> incrustem un mapa de <strong>Google Maps</strong>. En carregar-se, Google pot instal·lar cookies pròpies al teu dispositiu, subjectes a la política de privacitat de Google. Si no vols aquestes cookies, pots evitar carregar el mapa o bloquejar-les des del teu navegador.</p>
        <table>
          <thead>
            <tr><th>Cookie / proveïdor</th><th>Finalitat</th><th>Tipus</th></tr>
          </thead>
          <tbody>
            <tr><td>Pròpies del lloc</td><td>Funcionament bàsic i preferències</td><td>Tècnica</td></tr>
            <tr><td>Ahrefs Analytics</td><td>Mesura d&apos;ús (sense cookies, anònima)</td><td>Analítica sense cookies</td></tr>
            <tr><td>Google Maps (només a /contacto)</td><td>Mostrar el mapa d&apos;ubicació</td><td>Tercers</td></tr>
          </tbody>
        </table>
        <h2>4. Com gestionar les cookies</h2>
        <p>Pots permetre, bloquejar o eliminar les cookies instal·lades configurant les opcions del teu navegador. Consulta l&apos;ajuda del teu navegador per a més detalls: Google Chrome, Mozilla Firefox, Safari o Microsoft Edge.</p>
        <h2>5. Canvis en aquesta política</h2>
        <p>Si en el futur incorporem noves eines que utilitzin cookies, actualitzarem aquesta política i, quan escaigui, sol·licitarem el teu consentiment. Consulta també la <Link href={lp("/privacidad")}>política de privacitat</Link>.</p>
      </LegalShell>
    )
  }

  return (
    <LegalShell title="Política de cookies" updated={site.legal.updated} lang="es">
      <p>
        Una cookie es un pequeño archivo que un sitio web guarda en tu dispositivo. Este sitio de {site.name}{" "}
        está diseñado para funcionar con el mínimo de cookies. A continuación te explicamos cuáles se utilizan.
      </p>
      <h2>1. Cookies propias (técnicas)</h2>
      <p>
        Utilizamos únicamente cookies técnicas necesarias para el funcionamiento básico del sitio (por ejemplo,
        para recordar tus preferencias de navegación). Estas cookies están exentas del deber de consentimiento.
      </p>
      <h2>2. Analítica sin cookies</h2>
      <p>
        Para medir el uso del sitio empleamos <strong>Ahrefs Web Analytics</strong>, una herramienta de
        analítica que <strong>no utiliza cookies</strong> ni rastrea a usuarios de forma individual: los datos
        se recogen de manera agregada y anónima.
      </p>
      <h2>3. Cookies de terceros</h2>
      <p>
        En la página de <Link href={lp("/contacto")}>contacto</Link> incrustamos un mapa de <strong>Google Maps</strong>.
        Al cargarse, Google puede instalar cookies propias en tu dispositivo, sujetas a la política de privacidad
        de Google. Si no deseas estas cookies, puedes evitar cargar el mapa o bloquearlas desde tu navegador.
      </p>
      <table>
        <thead>
          <tr><th>Cookie / proveedor</th><th>Finalidad</th><th>Tipo</th></tr>
        </thead>
        <tbody>
          <tr><td>Propias del sitio</td><td>Funcionamiento básico y preferencias</td><td>Técnica</td></tr>
          <tr><td>Ahrefs Analytics</td><td>Medición de uso (sin cookies, anónima)</td><td>Analítica sin cookies</td></tr>
          <tr><td>Google Maps (solo en /contacto)</td><td>Mostrar el mapa de ubicación</td><td>Terceros</td></tr>
        </tbody>
      </table>
      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas configurando las opciones de tu navegador.
        Consulta la ayuda de tu navegador para más detalles: Google Chrome, Mozilla Firefox, Safari o Microsoft Edge.
      </p>
      <h2>5. Cambios en esta política</h2>
      <p>
        Si en el futuro incorporamos nuevas herramientas que utilicen cookies, actualizaremos esta política y,
        cuando proceda, solicitaremos tu consentimiento. Consulta también la{" "}
        <Link href={lp("/privacidad")}>política de privacidad</Link>.
      </p>
    </LegalShell>
  )
}
