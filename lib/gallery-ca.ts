// Traducción de los label/caption de las galerías (ExpandingGallery) a catalán.
// Nombres propios de edificios se mantienen (WTC Cornellà, Hotel Roselló, etc.).
export const GALLERY_CA: Record<string, string> = {
  "Camión grúa y cesta certificados": "Camió grua i cistella certificats",
  "Cristal en altura": "Vidre en alçada",
  "Edificio en Diagonal": "Edifici a Diagonal",
  "Edificio Ski (Meliá)": "Edifici Ski (Meliá)",
  "Edificio Ski": "Edifici Ski",
  "Fachada acristalada · Barcelona": "Façana acristallada · Barcelona",
  "Fachada de cristal · Barcelona": "Façana de vidre · Barcelona",
  "Grúa en muro cortina": "Grua en mur cortina",
  "Manipulación con grúa y ventosa": "Manipulació amb grua i ventosa",
  "Muro cortina · Barcelona": "Mur cortina · Barcelona",
  "Muro cortina · Cornellà": "Mur cortina · Cornellà",
  "Oficinas · Barcelona": "Oficines · Barcelona",
  "Oficinas · Cornellà de Llobregat": "Oficines · Cornellà de Llobregat",
  "Oficinas · Cornellà": "Oficines · Cornellà",
  "Oficinas · Sant Cugat del Vallès": "Oficines · Sant Cugat del Vallès",
  "Oficinas Barberà": "Oficines Barberà",
  "Regeneración · Barberà del Vallès": "Regeneració · Barberà del Vallès",
  "Rehabilitación · Barcelona": "Rehabilitació · Barcelona",
  "Reparación de fachada acristalada": "Reparació de façana acristallada",
  "Reposición con grúa": "Reposició amb grua",
  "Reposición de cristal en altura": "Reposició de vidre en alçada",
  "Reposición en fachada": "Reposició en façana",
  "Torre en Diagonal": "Torre a Diagonal",
  "Trabajo en altura": "Treball en alçada",
  "Vidrio de gran formato": "Vidre de gran format",
}

export function tGallery<T extends { label: string; caption?: string }>(items: T[] | undefined): T[] | undefined {
  if (!items) return items
  return items.map((g) => ({
    ...g,
    label: GALLERY_CA[g.label] ?? g.label,
    caption: g.caption ? (GALLERY_CA[g.caption] ?? g.caption) : g.caption,
  }))
}
