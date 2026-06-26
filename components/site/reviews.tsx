import { Star, Quote } from "lucide-react"
import { getReviews, type Review } from "@/lib/reviews"

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <span className="inline-flex" aria-label={`${rating} de 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${className} ${n <= Math.round(rating) ? "fill-burdeos text-burdeos" : "fill-ink/10 text-ink/10"}`}
        />
      ))}
    </span>
  )
}

function Card({ r }: { r: Review }) {
  return (
    <article className="mx-3 flex w-[340px] shrink-0 flex-col whitespace-normal rounded-2xl border bg-white p-6">
      <div className="flex items-center justify-between">
        <Stars rating={r.rating} />
        <Quote className="h-6 w-6 fill-burdeos/15 text-burdeos" aria-hidden />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">“{r.text}”</p>
      <div className="mt-4">
        <p className="font-semibold text-ink">{r.author}</p>
        {r.when ? <p className="text-xs text-warm">{r.when}</p> : null}
      </div>
    </article>
  )
}

export async function Reviews() {
  const data = await getReviews()
  if (!data || data.reviews.length === 0) return null

  // Cada mitad se repite para que el bucle sea continuo aun con pocas reseñas.
  const half = [...data.reviews, ...data.reviews]

  return (
    <section className="bg-cream py-20">
      <div className="container-x flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Opiniones</p>
          <h2 className="mt-3 text-2xl font-bold text-ink md:text-3xl">Lo que dicen nuestros clientes</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-ink">{data.rating.toFixed(1)}</span>
          <div>
            <Stars rating={data.rating} className="h-4 w-4" />
            {data.mapsUri ? (
              <a href={data.mapsUri} target="_blank" rel="noopener noreferrer" className="mt-0.5 block text-sm text-warm hover:text-burdeos">
                {data.total} reseñas en Google
              </a>
            ) : (
              <span className="mt-0.5 block text-sm text-warm">{data.total} reseñas en Google</span>
            )}
          </div>
        </div>
      </div>

      <div className="marquee-row mt-12 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex">
              {half.map((r, i) => (
                <Card key={`${dup}-${i}`} r={r} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
