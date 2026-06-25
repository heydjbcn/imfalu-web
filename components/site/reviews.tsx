import { Star } from "lucide-react"
import { getReviews } from "@/lib/reviews"

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

export async function Reviews() {
  const data = await getReviews()
  if (!data) return null

  return (
    <section className="bg-cream py-20">
      <div className="container-x">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-burdeos">Opiniones</p>
            <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">Lo que dicen nuestros clientes</h2>
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.reviews.slice(0, 6).map((r, i) => (
            <figure key={i} className="flex flex-col rounded-2xl border bg-white p-6">
              <Stars rating={r.rating} className="h-4 w-4" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">
                {r.author}
                {r.when ? <span className="ml-2 font-normal text-warm">· {r.when}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
