export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { site } from "@/lib/site"

// Envía el lead por email vía Resend. Si no hay RESEND_API_KEY configurada,
// responde OK igualmente (no rompe el formulario) y deja aviso en el log;
// se activa poniendo RESEND_API_KEY y CONTACT_TO en el entorno (Dokku).
export async function POST(request: NextRequest) {
  try {
    const b = await request.json().catch(() => ({}))
    if (b.website) return NextResponse.json({ ok: true }) // honeypot
    const nombre = String(b.nombre || "").trim()
    const email = String(b.email || "").trim()
    const mensaje = String(b.mensaje || "").trim()
    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    const to = process.env.CONTACT_TO
    const key = process.env.RESEND_API_KEY
    const from = process.env.CONTACT_FROM || "IMFALU web <onboarding@resend.dev>"

    if (!key || !to) {
      console.warn("[contact] RESEND_API_KEY/CONTACT_TO no configurados — lead NO enviado:", { nombre, email })
      return NextResponse.json({ ok: true, delivered: false })
    }

    const html = `
      <h2>Nuevo contacto desde ${site.url}</h2>
      <p><b>Nombre:</b> ${esc(nombre)}</p>
      <p><b>Empresa/comunidad:</b> ${esc(String(b.empresa || "-"))}</p>
      <p><b>Email:</b> ${esc(email)}</p>
      <p><b>Teléfono:</b> ${esc(String(b.telefono || "-"))}</p>
      <p><b>Asunto:</b> ${esc(String(b.asunto || "-"))}</p>
      <p><b>Mensaje:</b><br>${esc(mensaje).replace(/\n/g, "<br>")}</p>`

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Web IMFALU — ${nombre}`, html }),
    })
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text().catch(() => ""))
      return NextResponse.json({ error: "No se pudo enviar el email" }, { status: 502 })
    }
    return NextResponse.json({ ok: true, delivered: true })
  } catch (e) {
    console.error("[contact] error", (e as Error).message)
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 })
  }
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
