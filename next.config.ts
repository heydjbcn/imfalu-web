import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 días
  },
  // 301 del WordPress viejo (imfalu.com) a las URLs de la web nueva.
  async redirects() {
    return [
      { source: "/rehabilitacion", destination: "/fachadas/rehabilitacion", permanent: true },
      { source: "/rehabilitacion/:slug*", destination: "/proyectos", permanent: true },
      { source: "/mantenimiento", destination: "/servicios/mantenimiento-fachadas", permanent: true },
      { source: "/regeneracion-fachadas", destination: "/servicios/regeneracion", permanent: true },
      { source: "/regeneracion-fachadas-cristal", destination: "/servicios/regeneracion", permanent: true },
      { source: "/reparacion-reposicion", destination: "/servicios/reparacion", permanent: true },
      { source: "/informes-tecnicos", destination: "/servicios/informes-tecnicos", permanent: true },
      { source: "/tratamientos-del-cristal-por-fotocalasis", destination: "/servicios/fotocatalisis", permanent: true },
      // Contenido recuperado del WP viejo → artículos de blog nuevos
      { source: "/ventanas-de-madera-aluminio", destination: "/blog/ventanas-madera-aluminio", permanent: true },
      { source: "/participacion-de-imfalu-en-la-iv-edicion-de-los-premios-nacionales-facility-ms", destination: "/blog/premios-facility-ms-2018", permanent: true },
      { source: "/5-aniversario", destination: "/blog/imfalu-5-aniversario", permanent: true },
      { source: "/noticias", destination: "/blog", permanent: true },
      // Reestructuración silo (tipos de fachada)
      { source: "/muro-cortina-barcelona", destination: "/fachadas/muro-cortina", permanent: true },
      { source: "/rehabilitacion-de-fachadas-barcelona", destination: "/fachadas/rehabilitacion", permanent: true },
      { source: "/mantenimiento-de-fachadas-barcelona", destination: "/servicios/mantenimiento-fachadas", permanent: true },
    ];
  },
};

export default nextConfig;
