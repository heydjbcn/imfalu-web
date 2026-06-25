// Reseñas de Google vía Places API (New), cacheadas (revalidate diario).
// La key vive SOLO en server. Si falta env o la API falla -> null (sin romper build).

export interface Review {
  author: string
  rating: number
  text: string
  when: string // fecha relativa, p.ej. "hace 2 meses"
}

export interface ReviewsData {
  rating: number // nota media (1-5)
  total: number // nº total de reseñas
  mapsUri: string // enlace a la ficha de Google
  reviews: Review[] // hasta 5 (las más relevantes que devuelve Places)
}

interface PlacesResponse {
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews?: {
    rating?: number
    text?: { text?: string }
    originalText?: { text?: string }
    authorAttribution?: { displayName?: string }
    relativePublishTimeDescription?: string
  }[]
}

export async function getReviews(): Promise<ReviewsData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.IMFALU_PLACE_ID
  if (!key || !placeId) return null

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=es&regionCode=ES`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: 86400 }, // 1 vez al día
    })
    if (!res.ok) return null
    const data = (await res.json()) as PlacesResponse

    const reviews: Review[] = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName?.trim() || "Cliente de Google",
        rating: r.rating ?? 0,
        text: (r.text?.text || r.originalText?.text || "").trim(),
        when: r.relativePublishTimeDescription || "",
      }))
      .filter((r) => r.text.length > 0)

    if (!data.rating || !data.userRatingCount) return null

    return {
      rating: data.rating,
      total: data.userRatingCount,
      mapsUri: data.googleMapsUri || "",
      reviews,
    }
  } catch {
    return null
  }
}
