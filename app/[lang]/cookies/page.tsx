import type { Metadata } from "next"
import Link from "next/link"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = { title: "Política de cookies", robots: { index: false }, alternates: { canonical: "/cookies" } }

export default function Page() {
  return (
    <LegalShell title="Política de cookies" updated={site.legal.updated}>
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
        En la página de <Link href="/contacto">contacto</Link> incrustamos un mapa de <strong>Google Maps</strong>.
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
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </LegalShell>
  )
}
