import { NextResponse, type NextRequest } from "next/server"

// ES (por defecto) se sirve en la raíz SIN prefijo; internamente se reescribe a /es.
// CA se sirve bajo /ca. El segmento [lang] recibe el idioma en ambos casos.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Evitar /es en la URL pública: redirigir /es/... -> /... (sin duplicados)
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/es/, "") || "/"
    return NextResponse.redirect(url, 308)
  }

  // Catalán: la URL ya lleva /ca -> mapea a [lang]=ca sin tocar nada
  if (pathname === "/ca" || pathname.startsWith("/ca/")) {
    return NextResponse.next()
  }

  // Resto (español): reescribir internamente a /es + ruta, URL pública intacta
  const url = request.nextUrl.clone()
  url.pathname = `/es${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Excluir assets internos, sitemap/robots y cualquier fichero con extensión
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
