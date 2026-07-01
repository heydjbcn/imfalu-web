export function LegalShell({ title, updated, lang = "es", children }: { title: string; updated?: string; lang?: "es" | "ca"; children: React.ReactNode }) {
  const updatedLabel = lang === "ca" ? "Última actualització" : "Última actualización"
  return (
    <section className="container-x max-w-3xl py-14 md:py-20">
      <h1 className="text-3xl font-bold text-ink md:text-4xl">{title}</h1>
      {updated ? <p className="mt-2 text-sm text-warm">{updatedLabel}: {updated}</p> : null}
      <div className="legal mt-8 space-y-4 leading-relaxed text-warm [&_a]:text-burdeos hover:[&_a]:underline [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_li]:marker:text-burdeos [&_strong]:text-ink [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_td]:border [&_td]:border-line [&_td]:p-2 [&_td]:align-top [&_th]:border [&_th]:border-line [&_th]:bg-cream [&_th]:p-2 [&_th]:text-left [&_th]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}
