import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/components/site/topbar"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { WhatsAppFab } from "@/components/site/whatsapp-fab"
import { LocalBusinessJsonLd } from "@/components/site/json-ld"
import { site } from "@/lib/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline} en ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Empresa especialista en mantenimiento, reparación y rehabilitación de fachadas de aluminio y cristal en Barcelona. Más de 30 años de experiencia. Pide presupuesto.",
  keywords: [
    "rehabilitación de fachadas de aluminio y cristal Barcelona",
    "mantenimiento de fachadas de aluminio y cristal",
    "reparación de fachadas de aluminio y cristal",
    "fachadas de aluminio y cristal Barcelona",
    "muro cortina Barcelona",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title: `${site.name} · ${site.tagline} en ${site.city}`,
    description:
      "Mantenimiento, reparación y rehabilitación de fachadas de aluminio y cristal en Barcelona. Más de 30 años de experiencia.",
    url: site.url,
  },
  alternates: { canonical: "/" },
  ...(process.env.SITE_NOINDEX === "1" ? { robots: { index: false, follow: false } } : {}),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ink" suppressHydrationWarning>
        <TopBar />
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
        <WhatsAppFab />
        <LocalBusinessJsonLd />
      </body>
    </html>
  )
}
