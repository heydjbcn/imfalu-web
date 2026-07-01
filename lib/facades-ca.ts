// Traducción al catalán de facades.ts. Keyed por slug; el resolutor fusiona sobre ES.
type FacadeCa = {
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  term: string
  answer: string
  intro: string
  bullets: string[]
  faqs: { q: string; a: string }[]
  crumbLast: string
  crumbMuroCortina?: string
}

export const facadesCaText: Record<string, FacadeCa> = {
  "muro-cortina": {
    metaTitle: "Mur cortina a Barcelona: manteniment i reparació",
    metaDescription: "Manteniment, reparació i rehabilitació de mur cortina d'alumini i vidre a Barcelona. Segellats, vidres, estanqueïtat i treball en alçada.",
    kicker: "Tipus de façana · Mur cortina",
    h1: "Mur cortina d'alumini i vidre a Barcelona",
    term: "el mur cortina",
    answer: "El mur cortina és una façana lleugera d'alumini i vidre, autoportant i ancorada a l'estructura de l'edifici, que només suporta el seu propi pes. El seu manteniment i reparació —segellats, juntes, ancoratges, reposició de vidres i proves d'estanqueïtat— exigeix un especialista en façana acristallada, no una empresa d'obra. A IMFALÚ conservem i recuperem el mur cortina ja instal·lat; no fabriquem façana nova.",
    intro: "Especialistes en mur cortina (façana lleugera d'alumini i vidre) per a edificis d'oficines, hotels i singulars a Barcelona. Mantenim, reparem i rehabilitem el tancament existent: segellats, vidres, perfileria i estanqueïtat, amb treball en alçada certificat.",
    bullets: [
      "Manteniment preventiu i correctiu de mur cortina",
      "Reparació i reposició de vidres i perfileria",
      "Proves d'estanqueïtat i resegellat de juntes",
      "Regeneració d'alumini i lacats",
      "Diagnòstic i informes tècnics",
      "Treball en alçada certificat",
    ],
    faqs: [
      { q: "Què és un mur cortina?", a: "Una façana lleugera d'alumini i vidre penjada per davant de l'estructura de l'edifici, a la qual només transmet el seu propi pes. Els seus elements són la perfileria d'alumini, els vidres (normalment amb cambra), les juntes i segellats i els ancoratges." },
      { q: "Quins tipus de mur cortina hi ha?", a: "Principalment per muntatge (stick, muntat peça a peça a l'obra, o modular/unititzat, per panells prefabricats) i per material o fixació del vidre (alumini vist, vidre estructural o abotonat). Nosaltres treballem el mur cortina d'alumini i de vidre." },
      { q: "Repareu filtracions en mur cortina?", a: "Sí. Localitzem el punt d'entrada d'aigua amb proves d'estanqueïtat i reparem segellats i vidres afectats, sense substituir tota la façana." },
      { q: "Cada quant s'ha de revisar un mur cortina?", a: "Almenys una revisió anual de segellats, juntes, ancoratges i drenatges, i dues a l'any en edificis de gran alçada o molt exposats." },
    ],
    crumbLast: "Mur cortina",
  },
  "muro-cortina-aluminio": {
    metaTitle: "Mur cortina d'alumini a Barcelona: manteniment",
    metaDescription: "Mur cortina d'alumini a Barcelona: manteniment, reparació de perfileria i regeneració del lacat, amb treball en alçada certificat.",
    kicker: "Tipus de façana · Mur cortina d'alumini",
    h1: "Mur cortina d'alumini a Barcelona",
    term: "el mur cortina d'alumini",
    answer: "El mur cortina d'alumini és la façana lleugera la retícula de muntants i travessers de la qual és de perfileria d'alumini, el material més usat per la seva lleugeresa, durabilitat i resistència a la corrosió. A IMFALÚ mantenim, reparem i regenerem l'alumini i el seu lacat, sense substituir la façana.",
    intro: "L'alumini és el material estrella del mur cortina per la seva lleugeresa, durabilitat i baix manteniment. Amb els anys, el lacat s'apaga i les juntes envelleixen: el regenerem i reparem per recuperar l'aspecte i les prestacions de la façana sense substituir-la.",
    bullets: [
      "Avantatges de l'alumini: lleuger, durador, no es corroeix",
      "Reparació de perfileria i elements d'alumini",
      "Regeneració i recuperació del lacat",
      "Reposició de juntes i segellats",
      "Manteniment preventiu del tancament",
      "Treball en alçada amb mitjans certificats",
    ],
    faqs: [
      { q: "Per què es fa servir tant l'alumini en mur cortina?", a: "Per la seva lleugeresa (ideal per a una façana penjada), la seva durabilitat, la seva resistència a la corrosió i el seu baix manteniment. Permet perfileries esveltes amb grans superfícies de vidre." },
      { q: "Es pot recuperar el lacat de l'alumini sense canviar-lo?", a: "Sí. Mitjançant regeneració recuperem el color i la protecció del lacat, una alternativa més econòmica i ràpida que substituir la perfileria." },
      { q: "Repareu perfileria d'alumini danyada o solta?", a: "Sí, reparem i fixem els elements d'alumini afectats i reposem juntes i segellats, eliminant el risc de despreniment." },
    ],
    crumbLast: "D'alumini",
    crumbMuroCortina: "Mur cortina",
  },
  "muro-cortina-cristal": {
    metaTitle: "Mur cortina de vidre a Barcelona: vidres i reposició",
    metaDescription: "Mur cortina de vidre a Barcelona: tipus de vidre (trempat, laminar, control solar, cambra), reposició de vidres i estanqueïtat. Urgències 24 h.",
    kicker: "Tipus de façana · Mur cortina de vidre",
    h1: "Mur cortina de vidre a Barcelona",
    term: "el mur cortina de vidre",
    answer: "El mur cortina de vidre és la façana lleugera la superfície de la qual és majoritàriament vidre —amb cambra, control solar, trempat o laminar de seguretat— sobre perfileria d'alumini. A IMFALÚ reposem vidres de qualsevol mida i pes, reparem segellats i verifiquem l'estanqueïtat, sense substituir tota la façana.",
    intro: "El vidre defineix la imatge i el confort d'un edifici acristallat. En el mur cortina de vidre reposem vidres trencats o amb la cambra perduda, igualant prestacions (control solar, seguretat, aïllament), i resolem filtracions amb proves d'estanqueïtat.",
    bullets: [
      "Reposició de vidres de qualsevol mida i pes",
      "Tipus de vidre: trempat, laminar, control solar, cambra",
      "Substitució d'unitats amb cambra perduda (baf)",
      "Proves d'estanqueïtat i resegellat",
      "Servei d'urgències 24 h per vidre trencat",
      "Mitjans d'elevació per a treball en alçada",
    ],
    faqs: [
      { q: "Reposeu vidres de mur cortina de qualsevol mida?", a: "Sí, de qualsevol mida i pes, amb els mitjans d'elevació necessaris. Fabriquem el vidre a mida igualant les prestacions de l'original (control solar, seguretat, aïllament)." },
      { q: "El meu vidre té baf per dins, s'arregla?", a: "Aquest baf indica que la cambra del doble envidrament ha perdut estanqueïtat. La solució és reposar la unitat de vidre; no es pot recuperar la cambra." },
      { q: "Quin vidre porta un mur cortina?", a: "Normalment doble envidrament amb cambra i, segons el cas, control solar, vidre trempat o laminar de seguretat. En reposar igualem aquestes prestacions." },
    ],
    crumbLast: "De vidre",
    crumbMuroCortina: "Mur cortina",
  },
  "fachada-acristalada": {
    metaTitle: "Façana acristallada a Barcelona: manteniment i reparació",
    metaDescription: "Façana acristallada i de vidre a Barcelona: què és, tipus de sistema i manteniment. Reparació, reposició de vidres i estanqueïtat per especialistes.",
    kicker: "Tipus de façana · Façana acristallada",
    h1: "Façana acristallada i de vidre a Barcelona",
    term: "la façana acristallada",
    answer: "Una façana acristallada és el tancament d'un edifici resolt majoritàriament amb vidre sobre estructura d'alumini, ja sigui mur cortina, vidre estructural o envidrament sobre fusteria. A IMFALÚ mantenim, reparem i rehabilitem la façana acristallada existent —no fem obra nova—.",
    intro: "La façana acristallada dona llum i imatge a l'edifici, però exigeix un manteniment especialitzat de vidres, juntes i segellats. Conservem i reparem façanes de vidre d'oficines, hotels i edificis singulars a Barcelona, resolent filtracions i reposant vidres.",
    bullets: [
      "Manteniment de la façana de vidre",
      "Reposició de vidres i unitats amb cambra",
      "Reparació de segellats i juntes",
      "Proves d'estanqueïtat i filtracions",
      "Regeneració d'elements d'alumini",
      "Treball en alçada certificat",
    ],
    faqs: [
      { q: "Quina diferència hi ha entre façana acristallada i mur cortina?", a: "El mur cortina és un tipus de façana acristallada: una façana lleugera autoportant d'alumini i vidre. Hi ha altres solucions acristallades (vidre estructural, envidrament sobre fusteria). Treballem totes en alumini i vidre." },
      { q: "Feu façanes acristallades noves?", a: "No. Ens especialitzem a mantenir, reparar, regenerar i rehabilitar la façana acristallada ja instal·lada, no en obra nova ni muntatge." },
      { q: "Resoleu filtracions en façanes de vidre?", a: "Sí. Amb proves d'estanqueïtat localitzem l'entrada d'aigua i reparem els segellats o vidres afectats." },
    ],
    crumbLast: "Façana acristallada",
  },
  "fachada-aluminio": {
    metaTitle: "Façana d'alumini a Barcelona: manteniment",
    metaDescription: "Façana d'alumini a Barcelona: avantatges de l'alumini, panells, regeneració del lacat i manteniment. Recuperem la façana sense substituir-la.",
    kicker: "Tipus de façana · Façana d'alumini",
    h1: "Façana d'alumini a Barcelona",
    term: "la façana d'alumini",
    answer: "Una façana d'alumini és el tancament metàl·lic lleuger —perfileria i, si escau, panells o composite d'alumini— que envolta l'edifici. A IMFALÚ mantenim, reparem i regenerem la façana d'alumini existent, recuperant el lacat i les prestacions sense substituir-la per complet.",
    intro: "L'alumini és lleuger, durador i resistent a la corrosió, però el seu lacat s'apaga amb el temps i els ancoratges i juntes es fatiguen. Regenerem i reparem la façana d'alumini d'edificis a Barcelona per tornar-li el seu aspecte i seguretat.",
    bullets: [
      "Avantatges de l'alumini en façana",
      "Reparació de perfileria i panells",
      "Regeneració i recuperació del lacat",
      "Substitució de juntes, segellats i fixacions",
      "Manteniment preventiu del tancament",
      "Treball en alçada certificat",
    ],
    faqs: [
      { q: "Es pot recuperar una façana d'alumini vella sense canviar-la?", a: "Sí. Amb la regeneració recuperem el lacat i reparem els elements afectats, una alternativa més econòmica i ràpida que substituir la façana." },
      { q: "Quins avantatges té l'alumini en façana?", a: "És lleuger, molt durador, resistent a la corrosió i de baix manteniment, cosa que el fa ideal per a façanes lleugeres i mur cortina." },
      { q: "Treballeu panells d'alumini (composite)?", a: "Sí, mantenim i reparem panells i composite d'alumini de la façana existent, juntament amb la perfileria i els segellats." },
    ],
    crumbLast: "Façana d'alumini",
  },
  rehabilitacion: {
    metaTitle: "Rehabilitació de façanes a Barcelona",
    metaDescription: "Rehabilitació de façanes d'alumini i vidre a Barcelona. +30 anys, +300.000 m² i +150 edificis. Diagnòstic, regeneració i reparació.",
    kicker: "Tipus de façana · Rehabilitació",
    h1: "Rehabilitació de façanes d'alumini i vidre a Barcelona",
    term: "la rehabilitació de façanes d'alumini i vidre",
    answer: "La rehabilitació de façanes d'alumini i vidre és el conjunt de treballs —diagnòstic, regeneració de lacats i vidres, reparació d'elements i proves d'estanqueïtat— que recuperen l'estat i les prestacions d'una façana metàl·lica o acristallada sense substituir-la per complet. A diferència de la rehabilitació d'obra (morter, SATE, arrebossats), intervé sobre l'alumini i el vidre del tancament, inclòs el mur cortina.",
    intro: "Especialistes a rehabilitar façanes metàl·liques i acristallades d'edificis a Barcelona i àrea metropolitana. Més de 30 anys d'experiència, +300.000 m² intervinguts i +150 edificis. Recuperem l'estat i les prestacions de la façana amb treball en alçada certificat.",
    bullets: [
      "Diagnòstic previ de l'estat de la façana",
      "Regeneració d'alumini, lacats i vidres",
      "Reparació i reposició d'elements danyats",
      "Proves d'estanqueïtat i control de filtracions",
      "Alternativa a la substitució completa",
      "Treball en alçada certificat i segur",
    ],
    faqs: [
      { q: "Què inclou una rehabilitació de façana?", a: "Un diagnòstic previ, la regeneració o substitució dels elements afectats (alumini, lacats i vidres), la reparació de danys i, si escau, proves d'estanqueïtat. Tot amb mitjans d'elevació i seguretat per a treball en alçada." },
      { q: "És millor rehabilitar o substituir tota la façana?", a: "Si l'estructura està en bon estat, rehabilitar sol ser més econòmic i ràpid que substituir. Ho valorem amb el diagnòstic." },
      { q: "Treballeu per a administradors de finques i property managers?", a: "Sí, són la majoria dels nostres clients, juntament amb arquitectes i departaments de manteniment d'edificis a Barcelona." },
    ],
    crumbLast: "Rehabilitació",
  },
}
