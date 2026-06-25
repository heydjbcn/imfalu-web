export function LegalShell({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <section className="container-x max-w-3xl py-14 md:py-20">
      <h1 className="text-3xl font-bold text-ink md:text-4xl">{title}</h1>
      {updated ? <p className="mt-2 text-sm text-warm">Última actualización: {updated}</p> : null}
      <div className="legal mt-8 space-y-4 text-warm leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_a]:text-burdeos [&_strong]:text-ink">
        {children}
      </div>
    </section>
  )
}
