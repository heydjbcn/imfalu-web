// Tipo del diccionario, derivado del es.json. Importar SIEMPRE con `import type`
// para que no entre en el bundle de cliente.
import esDict from "@/dictionaries/es.json"
export type Dict = typeof esDict
