import type { MetadataRoute } from "next"
import { services, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const staticRoutes = ["", "/sobre-nosotros", "/contacto", "/proyectos"]
  const landings = [
    "/rehabilitacion-de-fachadas-barcelona",
    "/mantenimiento-de-fachadas-barcelona",
    "/muro-cortina-barcelona",
  ]
  // Las páginas legales son noindex: NO se incluyen en el sitemap.

  const urls = [
    ...staticRoutes.map((p) => ({ path: p, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ path: `/servicios/${s.slug}`, priority: 0.8 })),
    ...landings.map((p) => ({ path: p, priority: 0.9 })),
  ]

  return urls.map((u) => ({
    url: `${base}${u.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: u.priority,
  }))
}
