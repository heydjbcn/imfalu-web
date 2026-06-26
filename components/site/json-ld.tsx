import { site } from "@/lib/site"
import { getReviews } from "@/lib/reviews"

// JSON-LD LocalBusiness global (entidad de la empresa) — clave para SEO local y GEO.
// Si hay reseñas de Google (Places API), añade aggregateRating + review.
export async function LocalBusinessJsonLd() {
  const reviews = await getReviews()
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: `${site.tagline} en ${site.area}. Más de 30 años de experiencia, +150 edificios y +300.000 m² de fachada intervenida.`,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: `+34${site.phone}`,
    areaServed: site.area,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: "ES",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.address.lat, longitude: site.address.lng },
    hasMap: site.address.directions,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    ...(site.social.linkedin || site.social.instagram
      ? { sameAs: [site.social.linkedin, site.social.instagram].filter(Boolean) }
      : {}),
    ...(reviews
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews.rating.toFixed(1),
            reviewCount: reviews.total,
          },
          review: reviews.reviews.slice(0, 5).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            reviewBody: r.text,
          })),
        }
      : {}),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// WebSite + Organization a nivel de sitio (entidad global, ayuda a la knowledge graph).
export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#org`,
        name: site.name,
        url: site.url,
        telephone: `+34${site.phone}`,
        logo: `${site.url}/brand/logo.png`,
        image: `${site.url}/og.jpg`,
        areaServed: site.area,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "es-ES",
        publisher: { "@id": `${site.url}/#org` },
      },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
