import type { MetadataRoute } from "next"
import { services, site } from "@/lib/site"
import { facades } from "@/lib/facades"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const staticRoutes = ["", "/sobre-nosotros", "/contacto", "/proyectos"]
  // Las páginas legales son noindex: NO se incluyen en el sitemap.

  const urls = [
    ...staticRoutes.map((p) => ({ path: p, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ path: `/servicios/${s.slug}`, priority: 0.8 })),
    ...facades.map((f) => ({ path: `/fachadas/${f.slug}`, priority: 0.8 })),
  ]

  return urls.map((u) => ({
    url: `${base}${u.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: u.priority,
  }))
}
