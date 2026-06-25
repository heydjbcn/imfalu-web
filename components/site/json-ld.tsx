import { site } from "@/lib/site"

// JSON-LD LocalBusiness global (entidad de la empresa) — clave para SEO local y GEO.
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: `${site.tagline} en ${site.area}. Más de 30 años de experiencia.`,
    url: site.url,
    telephone: `+34${site.phone}`,
    areaServed: site.area,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "Barcelona", addressCountry: "ES" },
    ...(site.social.linkedin || site.social.instagram
      ? { sameAs: [site.social.linkedin, site.social.instagram].filter(Boolean) }
      : {}),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
