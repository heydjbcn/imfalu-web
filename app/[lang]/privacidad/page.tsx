import type { Metadata } from "next"
import Link from "next/link"
import { LegalShell } from "@/components/site/legal-shell"
import { site } from "@/lib/site"
import { hasLocale, defaultLocale, localizedPath, type Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  return { title: l === "ca" ? "Política de privacitat" : "Política de privacidad", robots: { index: false }, alternates: { canonical: localizedPath(l, "/privacidad") } }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const l: Locale = hasLocale(lang) ? lang : defaultLocale
  const lp = (p: string) => localizedPath(l, p)

  if (l === "ca") {
    return (
      <LegalShell title="Política de privacitat" updated={site.legal.updated} lang="ca">
        <p>Aquesta política de privacitat descriu com {site.legal.razonSocial} tracta les dades personals de les persones que utilitzen aquest lloc web, de conformitat amb el Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals (LOPDGDD).</p>
        <h2>1. Responsable del tractament</h2>
        <p><strong>{site.legal.razonSocial}</strong>
          <br /><strong>NIF:</strong> {site.legal.nif}
          <br /><strong>Domicili:</strong> {site.address.full}
          <br /><strong>Telèfon:</strong> {site.legal.phoneDisplay}
          <br /><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <h2>2. Quines dades tractem</h2>
        <p>A través del formulari de contacte del lloc tractem les dades que ens facilites: <strong>nom</strong>, <strong>correu electrònic</strong>, <strong>telèfon</strong> i el contingut del <strong>missatge</strong> o consulta. No recollim categories especials de dades. També es generen dades tècniques de navegació de forma agregada i anònima (vegeu l&apos;apartat d&apos;analítica).</p>
        <h2>3. Finalitats</h2>
        <ul>
          <li>Atendre la teva consulta o sol·licitud d&apos;informació.</li>
          <li>Elaborar i enviar-te un pressupost sense compromís.</li>
          <li>Mantenir el contacte comercial derivat de la teva petició.</li>
        </ul>
        <p>No es prenen decisions automatitzades ni s&apos;elabora perfilació amb les teves dades.</p>
        <h2>4. Base jurídica</h2>
        <p>La base legal del tractament és el <strong>consentiment</strong> que prestes en enviar el formulari (art. 6.1.a RGPD) i l&apos;<strong>interès legítim</strong> a respondre les consultes rebudes i gestionar la relació precontractual (art. 6.1.f RGPD).</p>
        <h2>5. Conservació</h2>
        <p>Conservem les teves dades durant el temps necessari per atendre la teva sol·licitud i, si escau, durant el termini de prescripció de les obligacions legals aplicables. Quan deixin de ser necessàries, se suprimeixen o s&apos;anonimitzen.</p>
        <h2>6. Destinataris i encarregats del tractament</h2>
        <p>No cedim les teves dades a tercers, llevat d&apos;obligació legal. Per prestar el servei ens recolzem en proveïdors que actuen com a encarregats del tractament:</p>
        <ul>
          <li><strong>Hetzner Online GmbH</strong> — allotjament del lloc i servidors (Unió Europea).</li>
          <li><strong>Resend</strong> — enviament del correu electrònic generat pel formulari de contacte.</li>
          <li><strong>Ahrefs</strong> — analítica web sense cookies i de forma agregada (no identifica usuaris individuals).</li>
          <li><strong>Google (Google Maps)</strong> — mapa incrustat a la pàgina de contacte.</li>
        </ul>
        <h2>7. Transferències internacionals</h2>
        <p>Alguns d&apos;aquests proveïdors poden tractar dades fora de l&apos;Espai Econòmic Europeu. En aquests casos, les transferències es fan amb les garanties previstes al RGPD (clàusules contractuals tipus de la Comissió Europea o altres mecanismes adequats).</p>
        <h2>8. Els teus drets</h2>
        <p>Pots exercir els drets d&apos;<strong>accés, rectificació, supressió, oposició, limitació del tractament i portabilitat</strong>, així com retirar el consentiment prestat, escrivint a <a href={`mailto:${site.email}`}>{site.email}</a>, indicant el dret que vols exercir. Si consideres que el tractament no s&apos;ajusta a la normativa, tens dret a presentar una reclamació davant l&apos;Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
        <h2>9. Seguretat</h2>
        <p>Apliquem mesures tècniques i organitzatives adequades per protegir les teves dades, inclòs el xifratge de les comunicacions (HTTPS) i el control d&apos;accés a la informació.</p>
        <h2>10. Menors</h2>
        <p>El lloc s&apos;adreça a persones majors d&apos;edat. No recollim de manera conscient dades de menors.</p>
        <h2>11. Canvis en aquesta política</h2>
        <p>Podem actualitzar aquesta política per adaptar-la a canvis normatius o dels nostres serveis. La versió vigent és la publicada en aquesta pàgina. Consulta també l&apos;<Link href={lp("/aviso-legal")}>avís legal</Link> i la <Link href={lp("/cookies")}>política de cookies</Link>.</p>
      </LegalShell>
    )
  }

  return (
    <LegalShell title="Política de privacidad" updated={site.legal.updated} lang="es">
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
        <li><strong>Resend</strong> — envío del correo electrónico generado por el formulario de contacto.</li>
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
        vigente es la publicada en esta página. Consulta también el <Link href={lp("/aviso-legal")}>aviso legal</Link> y la{" "}
        <Link href={lp("/cookies")}>política de cookies</Link>.
      </p>
    </LegalShell>
  )
}
