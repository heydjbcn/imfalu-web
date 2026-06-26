import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const DIR = path.join(process.cwd(), "content/blog")

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

function read(slug: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(DIR, `${slug}.md`), "utf8")
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

export function getAllPosts(): Post[] {
  return getAllSlugs()
    .map(read)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | null {
  return read(slug)
}

export function getClusters(): string[] {
  return [...new Set(getAllPosts().map((p) => p.cluster))]
}
