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
  // Servicios · fotos recuperadas de la web antigua
  "Restauración del color": "Restauració del color",
  "Recuperación del lacado del aluminio": "Recuperació del lacat de l'alumini",
  "Sellado anti-adherencia": "Segellat antiadherència",
  "Protección hidrófuga OXYSTOP®": "Protecció hidròfuga OXYSTOP®",
  "Regeneración de cristal": "Regeneració de vidre",
  "Tratamiento del vidrio de fachada": "Tractament del vidre de façana",
  "Ciclo de la fotocatálisis": "Cicle de la fotocatàlisi",
  "Acción del TiO₂ activado por la luz": "Acció del TiO₂ activat per la llum",
  "Antes y después": "Abans i després",
  "Cristal tratado con fotocatálisis": "Vidre tractat amb fotocatàlisi",
  "Esquema del tratamiento": "Esquema del tractament",
  "Nanocapa de dióxido de titanio": "Nanocapa de diòxid de titani",
}

export function tGallery<T extends { label: string; caption?: string }>(items: T[] | undefined): T[] | undefined {
  if (!items) return items
  return items.map((g) => ({
    ...g,
    label: GALLERY_CA[g.label] ?? g.label,
    caption: g.caption ? (GALLERY_CA[g.caption] ?? g.caption) : g.caption,
  }))
}
