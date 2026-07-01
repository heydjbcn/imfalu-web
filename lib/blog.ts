import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

type Lang = "es" | "ca"
const DIR = path.join(process.cwd(), "content/blog")
const dirFor = (lang: Lang) => (lang === "ca" ? path.join(DIR, "ca") : DIR)

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  cluster: string
  keywords: string[]
  cover: string
  excerpt: string
  author: string
  readingMin: number
  body: string
}

function readFrom(dir: string, slug: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8")
    const { data, content } = matter(raw)
    const words = content.split(/\s+/).filter(Boolean).length
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      updated: data.updated,
      cluster: data.cluster ?? "General",
      keywords: data.keywords ?? [],
      cover: data.cover ?? "/headers/home.jpg",
      excerpt: data.excerpt ?? data.description ?? "",
      author: data.author ?? "IMFALÚ",
      readingMin: Math.max(1, Math.round(words / 200)),
      body: content,
    }
  } catch {
    return null
  }
}

// Lee en el idioma pedido; si no existe la traducción CA, cae a ES (misma fecha/slug).
function read(slug: string, lang: Lang = "es"): Post | null {
  if (lang === "ca") {
    const ca = readFrom(dirFor("ca"), slug)
    if (ca) {
      if (!ca.date) {
        const es = readFrom(DIR, slug)
        if (es) ca.date = es.date
      }
      return ca
    }
  }
  return readFrom(DIR, slug)
}

export function getAllSlugs(): string[] {
  try {
    return fs
      .readdirSync(DIR)
      .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
      .map((f) => f.replace(/\.md$/, ""))
  } catch {
    return []
  }
}

export function isPublished(date: string): boolean {
  return new Date(date).getTime() <= Date.now()
}

export function getAllPosts(lang: Lang = "es"): Post[] {
  return getAllSlugs()
    .map((s) => read(s, lang))
    .filter((p): p is Post => p !== null && isPublished(p.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string, lang: Lang = "es"): Post | null {
  return read(slug, lang)
}

export function getClusters(lang: Lang = "es"): string[] {
  return [...new Set(getAllPosts(lang).map((p) => p.cluster))]
}

export function slugifyHeading(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function tableOfContents(body: string): { id: string; text: string }[] {
  return body
    .split("\n")
    .filter((l) => /^##\s+/.test(l) && !/^###/.test(l))
    .map((l) => {
      const text = l.replace(/^##\s+/, "").replace(/\*\*/g, "").trim()
      return { id: slugifyHeading(text), text }
    })
}
