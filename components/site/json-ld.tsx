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
    description: `${site.tagline} en ${site.area}. Más de 30 años de experiencia.`,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: `+34${site.phone}`,
    areaServed: site.area,
    address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: "Barcelona", addressCountry: "ES" },
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
