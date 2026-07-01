// Traducciones al catalán del contenido de site.ts. Solo campos de texto,
// keyed por slug/estructura; el resolutor (lib/content.ts) las fusiona sobre la base ES.

export const siteCaText = {
  tagline: "Manteniment i rehabilitació de façanes d'alumini i vidre",
  area: "Barcelona i àrea metropolitana",
  stats: [
    { suffix: " anys", label: "d'experiència al sector" },
    { suffix: " edificis", label: "intervinguts a Barcelona" },
    { suffix: " m²", label: "de façana intervinguda" },
    { suffix: "", label: "servei d'urgències" },
  ],
}

// Nav (mismo orden que navMenu en site.ts)
export const navMenuCa = [
  {
    label: "Serveis",
    featured: { title: "Urgències 24 h", text: "Vidre trencat o risc a la façana", cta: "Explica'ns el teu cas" },
    children: [
      { label: "Manteniment", desc: "Contracte anual i urgències 24 h", sub: [{ label: "Preventiu" }, { label: "Correctiu" }] },
      { label: "Reparació", desc: "Vidres, segellats i perfileria" },
      { label: "Regeneració", desc: "Recuperar sense substituir" },
      { label: "Informes tècnics", desc: "Diagnòstic i auditoria" },
      { label: "Proves d'estanqueïtat", desc: "Localitzar filtracions" },
      { label: "Fotocatàlisi", desc: "Tractament autonetejant" },
    ],
  },
  {
    label: "Tipus de façana",
    featured: { title: "Més de 150 edificis", text: "Oficines, hotels i singulars", cta: "Veure projectes" },
    children: [
      { label: "Mur cortina", desc: "Façana lleugera d'alumini i vidre", sub: [{ label: "D'alumini" }, { label: "De vidre" }] },
      { label: "Façana de vidre", desc: "Façana acristallada" },
      { label: "Façana d'alumini", desc: "Façana metàl·lica" },
      { label: "Rehabilitació", desc: "Recuperar el tancament" },
    ],
  },
]

export const navLinksCa = ["Projectes", "Empresa", "Blog", "Contacte"]

// Servicios: texto traducido keyed por slug
export const servicesCaText: Record<string, {
  title: string; short: string; description: string; seoTitle: string; metaDescription: string;
  answer: string; intro: string; bullets: string[]; when: string[]; note?: { title: string; body: string[] }
}> = {
  "mantenimiento-fachadas": {
    title: "Manteniment de façanes",
    short: "Contracte anual i servei d'urgències per a façanes metàl·liques i de vidre.",
    description: "Programa de manteniment preventiu i correctiu per a façanes d'alumini i vidre, amb contracte anual i servei d'urgències. Mantenim la façana del teu edifici en estat òptim, evitant incidències i allargant la seva vida útil.",
    seoTitle: "Manteniment de façanes d'alumini i vidre a Barcelona",
    metaDescription: "Manteniment de façanes d'alumini i vidre a Barcelona: contracte anual, revisions i urgències 24 h per a mur cortina. Més de 30 anys.",
    answer: "El manteniment de façanes d'alumini i vidre és la revisió i conservació periòdica del tancament —segellats, juntes, ancoratges, drenatges i vidres— per prevenir filtracions i despreniments abans que obliguin a una reparació més gran. A diferència del manteniment d'obra (morter, arrebossats, pintura), intervé sobre la façana metàl·lica i acristallada, inclòs el mur cortina.",
    intro: "El manteniment de façanes d'alumini i vidre evita que petits deterioraments es converteixin en filtracions, despreniments o reparacions costoses. A IMFALÚ oferim un programa de manteniment preventiu i correctiu per a façanes metàl·liques i acristallades —inclòs el mur cortina—, amb contracte anual i servei d'urgències 24 h. Més de 30 anys cuidant la façana d'edificis a Barcelona i la seva àrea metropolitana.",
    bullets: ["Contracte anual de manteniment", "Servei d'urgències 24 h", "Revisions periòdiques programades", "Petites reparacions preventives", "Informe de l'estat de la façana", "Manteniment de mur cortina"],
    when: ["La façana no es revisa des de fa més d'un any", "Apareixen taques, òxid o juntes i segellats deteriorats", "L'edifici té mur cortina o gran superfície acristallada", "Vols prevenir filtracions i despreniments", "Busques un únic especialista amb contracte de manteniment"],
    note: {
      title: "Manteniment, ITE i el Llibre de l'Edifici",
      body: [
        "El manteniment de la façana l'ha de dur a terme una empresa autoritzada, que mantingui actualitzats els llibres de manteniment i la documentació que exigeix la normativa vigent, i informi de qualsevol canvi que afecti les instal·lacions o de les modificacions necessàries per continuar complint-la.",
        "El Codi Tècnic de l'Edificació (CTE) reforça l'exigibilitat del Llibre de l'Edifici, l'eina bàsica amb què propietaris i usuaris compleixen les seves obligacions de conservació. La LOE en defineix el contingut —amb desplegament autonòmic—: conservar l'edifici mitjançant un ús i manteniment adequats i custodiar la documentació, assegurances i garanties de l'obra.",
        "Com a part del servei, documentem les nostres actuacions sobre la façana perquè el Llibre de l'Edifici reflecteixi el seu estat real i les intervencions realitzades.",
      ],
    },
  },
  "mantenimiento-preventivo": {
    title: "Manteniment preventiu",
    short: "Revisions programades per avançar-se a filtracions i despreniments.",
    description: "Programa de revisions periòdiques i petites actuacions sobre el tancament per conservar la façana en bon estat i allargar-ne la vida útil, abans que apareguin els problemes.",
    seoTitle: "Manteniment preventiu de façanes a Barcelona",
    metaDescription: "Manteniment preventiu de façanes d'alumini i vidre a Barcelona: revisions programades per evitar filtracions i despreniments.",
    answer: "El manteniment preventiu de façanes d'alumini i vidre és el programa de revisions periòdiques i petites actuacions (segellats, juntes, ancoratges, drenatges) que detecta i corregeix el deteriorament del tancament abans que causi filtracions o despreniments. És la base del manteniment i gairebé sempre més barat que el correctiu.",
    intro: "El manteniment preventiu s'avança al problema: revisa periòdicament l'alumini, els vidres, les juntes i els segellats, i corregeix els petits deterioraments abans que es converteixin en filtracions o riscos de despreniment. En edificis amb mur cortina o gran superfície acristallada és la millor inversió per a la façana.",
    bullets: ["Revisions periòdiques programades", "Inspecció de segellats, juntes i ancoratges", "Comprovació de drenatges i estanqueïtat", "Petites reparacions preventives", "Informe de l'estat després de cada revisió", "Contracte anual adaptat a l'edifici"],
    when: ["La façana no es revisa des de fa més d'un any", "Vols prevenir filtracions i despreniments", "L'edifici és de gran alçada o molt exposat", "Busques un contracte anual amb un únic especialista", "Necessites documentar l'estat per al Llibre de l'Edifici"],
  },
  "mantenimiento-correctivo": {
    title: "Manteniment correctiu",
    short: "Resolem les incidències de la façana quan ja han aparegut.",
    description: "Reparació de les incidències que ja s'han produït a la façana —vidres, segellats, perfileria— amb reposició i aplec de materials, i servei d'urgències 24 h.",
    seoTitle: "Manteniment correctiu de façanes a Barcelona",
    metaDescription: "Manteniment correctiu de façanes a Barcelona: resolem incidències del tancament amb reposició de vidres i urgències 24 h.",
    answer: "El manteniment correctiu de façanes d'alumini i vidre intervé quan el dany ja s'ha produït: repara incidències del tancament (vidres, segellats, perfileria), reposa elements i atén urgències 24 h. Complementa el preventiu, que és el que evita arribar a aquest punt.",
    intro: "Quan ja hi ha un vidre trencat, una filtració o un element solt, el manteniment correctiu ho resol: reparem i reposem els elements afectats del tancament, amb aplec de materials i servei d'urgències 24 h per a riscos en alçada.",
    bullets: ["Reparació d'incidències ja produïdes", "Reposició de vidres i elements", "Reparació de segellats i perfileria", "Aplec de materials de la façana", "Servei d'urgències 24 h", "Mitjans d'elevació certificats"],
    when: ["Hi ha un vidre trencat o un element solt", "Apareix una filtració o humitat", "Risc de despreniment a la façana", "Necessites una reparació urgent en alçada", "El preventiu ha detectat alguna cosa a reparar"],
  },
  reparacion: {
    title: "Reparació i reposició",
    short: "Reparació d'elements danyats i reposició de vidres de qualsevol mida i pes.",
    description: "Reparem i reposem els elements constructius danyats de la façana i substituïm vidres de qualsevol mida i pes, amb els mitjans d'elevació i seguretat necessaris per a treballs en alçada.",
    seoTitle: "Reparació de façanes d'alumini i vidre a Barcelona",
    metaDescription: "Reparació de façanes i reposició de vidres a Barcelona: vidre trencat, mur cortina, juntes i alumini. Urgències 24 h. Demana pressupost.",
    answer: "La reparació de façanes d'alumini i vidre resol danys puntuals del tancament —vidres trencats, perfileria d'alumini, juntes i segellats— i reposa vidres de qualsevol mida i pes amb mitjans d'elevació certificats per a treball en alçada. És una intervenció sobre la façana acristallada i el mur cortina, no sobre l'obra de l'edifici.",
    intro: "Reparem i reposem els elements danyats de la façana d'alumini i vidre: des d'un vidre trencat en alçada fins a juntes, segellats i perfileria de mur cortina. Substituïm vidres de qualsevol mida i pes amb els mitjans d'elevació i la seguretat necessaris, i disposem de servei d'urgències 24 h davant de qualsevol risc a la façana.",
    bullets: ["Reposició de vidres de qualsevol mida i pes", "Reparació d'elements d'alumini i perfileria", "Substitució de juntes i segellats", "Reparació de mur cortina", "Servei d'urgències 24 h", "Mitjans d'elevació propis"],
    when: ["Hi ha un vidre trencat o esquerdat a la façana", "Risc de despreniment d'un element de façana", "Juntes o segellats envellits que deixen passar aigua", "Perfileria d'alumini danyada o solta", "Necessites una reparació urgent en alçada"],
  },
  regeneracion: {
    title: "Regeneració de façanes",
    short: "Restauració i recuperació de l'estat original d'elements metàl·lics i vidres.",
    description: "Restaurem els elements afectats de la façana i recuperem el seu estat original, tant en elements metàl·lics com en els vidres. Una alternativa a la substitució completa que torna a la façana el seu aspecte i prestacions.",
    seoTitle: "Regeneració de façanes d'alumini a Barcelona",
    metaDescription: "Regeneració i restauració de façanes d'alumini i vidre a Barcelona: recupera l'estat original sense substituir tota la façana.",
    answer: "La regeneració de façanes restaura els lacats d'alumini i els vidres deteriorats per recuperar l'aspecte i les prestacions originals del tancament, com a alternativa més econòmica i sostenible a substituir tota la façana. Només és possible quan l'estructura del tancament continua en bon estat.",
    intro: "La regeneració recupera l'estat i les prestacions originals d'una façana d'alumini i vidre sense necessitat de substituir-la per complet. Restaurem els lacats i elements metàl·lics i tractem els vidres afectats: una alternativa més econòmica i sostenible a la substitució total, ideal quan l'estructura de la façana continua en bon estat.",
    bullets: ["Restauració d'alumini i lacats", "Recuperació de vidres", "Tractament d'oxidació i deteriorament", "Alternativa a la substitució total", "Recuperació de l'aspecte i prestacions"],
    when: ["L'alumini o el lacat es veuen envellits o amb òxid", "La façana ha perdut aspecte però l'estructura està bé", "Vols una alternativa més barata que substituir tota la façana", "Hi ha vidres deteriorats però recuperables", "Busques millorar la imatge de l'edifici sense una gran obra"],
  },
  "informes-tecnicos": {
    title: "Informes tècnics i auditories",
    short: "Diagnòstic de l'estat de la façana amb informes tècnics i auditories.",
    description: "Elaborem informes tècnics i auditories de l'estat de la façana: diagnòstic de patologies, avaluació de riscos i pla d'actuació. La base per decidir amb criteri qualsevol intervenció.",
    seoTitle: "Informe tècnic i auditoria de façana a Barcelona",
    metaDescription: "Informe tècnic i auditoria de façanes d'alumini i vidre a Barcelona: diagnòstic de patologies, riscos i pla d'actuació prioritzat.",
    answer: "Un informe tècnic de façana és el diagnòstic documentat de l'estat del tancament d'alumini i vidre —patologies, avaluació de riscos i pla d'actuació prioritzat— que serveix de base per a la Inspecció Tècnica de l'Edifici (ITE), per pressupostar una intervenció o per a la gestió de l'edifici.",
    intro: "Abans d'intervenir una façana convé saber exactament en quin estat està. Elaborem informes tècnics i auditories de façanes d'alumini i vidre: diagnòstic de patologies, avaluació de riscos i un pla d'actuació prioritzat, amb la documentació que permet decidir qualsevol obra amb criteri i sense sorpreses.",
    bullets: ["Diagnòstic de patologies", "Avaluació de riscos", "Pla d'actuació prioritzat", "Documentació tècnica", "Suport a la gestió de l'edifici"],
    when: ["Has de pressupostar o planificar una intervenció a la façana", "Necessites documentar l'estat de la façana de l'edifici", "Hi ha patologies visibles i en vols conèixer l'abast", "Com a suport tècnic per a la gestió de l'edifici", "Vols prioritzar actuacions amb criteri professional"],
    note: {
      title: "Informe de façana, ITE i Certificat d'Aptitud",
      body: [
        "A Catalunya, els edificis d'habitatges a partir d'una certa antiguitat estan obligats a passar la Inspecció Tècnica de l'Edifici (ITE), que avalua, entre altres elements, l'estat de les façanes. Del seu resultat depèn el Certificat d'Aptitud que emet l'Administració.",
        "El nostre informe tècnic documenta l'estat real del tancament d'alumini i vidre —patologies, avaluació de riscos i pla d'actuació prioritzat— i serveix de base tècnica per a la ITE, per esmenar deficiències o per pressupostar una intervenció amb criteri.",
        "Quan cal, coordinem amb l'arquitecte o el tècnic responsable de la ITE perquè la documentació de la façana quedi correctament reflectida.",
      ],
    },
  },
  "pruebas-estanqueidad": {
    title: "Proves d'estanqueïtat",
    short: "Localització de filtracions i verificació de l'estanqueïtat de la façana.",
    description: "Fem proves d'estanqueïtat per localitzar filtracions d'aigua i verificar el correcte comportament de la façana davant la pluja i la humitat, abans i després d'una intervenció.",
    seoTitle: "Proves d'estanqueïtat de façana a Barcelona",
    metaDescription: "Proves d'estanqueïtat de façana a Barcelona: localitzem filtracions d'aigua en mur cortina, finestres i vidres abans de reparar.",
    answer: "Una prova d'estanqueïtat de façana reprodueix de forma controlada l'acció de la pluja i el vent per localitzar el punt exacte per on l'aigua penetra en una façana d'alumini i vidre —mur cortina, finestres, segellats i juntes— abans i després de reparar-la, seguint els criteris del CTE DB-HS i els documents reconeguts de proves d'estanqueïtat de façanes.",
    intro: "Quan hi ha humitats, el primer és saber per on entra l'aigua. Fem proves d'estanqueïtat controlades que localitzen el punt exacte de filtració a la façana d'alumini i vidre —mur cortina, finestres, segellats i juntes— abans i després d'una reparació, per resoldre el problema d'arrel i sense obres innecessàries.",
    bullets: ["Localització del punt de filtració", "Proves d'aigua controlades", "Verificació de segellats i juntes", "Comprovació abans i després de reparar", "Informe de resultats"],
    when: ["Apareixen humitats o taques d'aigua rere la façana", "Sospites de filtracions al mur cortina", "Vols verificar la façana després d'una reparació", "Abans de comprar o recepcionar un edifici acristallat", "No localitzes l'origen d'una filtració recurrent"],
    note: {
      title: "Normativa: CTE DB-HS i assaig d'estanqueïtat a l'aigua",
      body: [
        "El Codi Tècnic de l'Edificació (CTE), en el seu Document Bàsic HS1 «Protecció davant la humitat», exigeix que les façanes impedeixin la penetració de l'aigua de pluja. Quan apareixen filtracions, la prova d'estanqueïtat a l'aigua és la manera objectiva de comprovar si la façana continua complint aquest requisit.",
        "L'assaig reprodueix de forma controlada l'acció de la pluja i el vent: es projecta aigua sobre la façana —en mur cortina, amb una pinta de broquets difusors a una distància i un cabal definits— i s'observa des de l'interior si hi ha entrada d'aigua. Si n'hi ha, el resultat és no satisfactori i es localitza el punt exacte a reparar.",
        "Seguim els criteris dels documents reconeguts de proves de servei d'estanqueïtat de façanes, tant per diagnosticar una filtració existent com per validar la façana després d'una reparació.",
      ],
    },
  },
  fotocatalisis: {
    title: "Tractaments per fotocatàlisi",
    short: "Tractament autonetejant i sostenible per a la façana i el medi ambient.",
    description: "Apliquem tractaments per fotocatàlisi: un recobriment que ajuda a autonetejar la façana i a reduir contaminants de l'aire mitjançant l'acció de la llum. Millor aspecte, menys manteniment i benefici mediambiental.",
    seoTitle: "Fotocatàlisi per a façanes a Barcelona",
    metaDescription: "Tractament per fotocatàlisi per a façanes a Barcelona: efecte autonetejant, menys manteniment i menys contaminants. Pioners en la seva aplicació.",
    answer: "La fotocatàlisi és un recobriment amb diòxid de titani (TiO₂) que, activat per la llum, descompon la brutícia i els contaminants de l'aire com els òxids de nitrogen (NOx), donant a la façana un efecte autonetejant i reduint-ne el manteniment. S'aplica sobre façanes d'alumini i vidre, idealment després d'una rehabilitació.",
    intro: "La fotocatàlisi és un recobriment que, amb l'acció de la llum, ajuda a autonetejar la façana i a reduir contaminants de l'aire. El resultat: millor aspecte durant més temps, menys necessitat de neteja i un benefici mediambiental. A IMFALÚ som pioners a aplicar tractaments per fotocatàlisi en façanes d'alumini i vidre.",
    bullets: ["Efecte autonetejant", "Reducció de contaminants de l'aire", "Menor necessitat de neteja", "Benefici mediambiental", "Protegeix el resultat després d'una rehabilitació"],
    when: ["Vols reduir la freqüència de neteja de la façana", "Busques una opció més sostenible per a l'edifici", "La façana s'embruta ràpid per la contaminació", "Després d'una rehabilitació, per protegir el resultat", "Vols diferenciar el teu edifici amb una millora verda"],
    note: {
      title: "Com funciona la fotocatàlisi (TiO₂)",
      body: [
        "La fotocatàlisi es basa en el diòxid de titani (TiO₂), un semiconductor que, en rebre la llum —especialment la radiació ultraviolada del sol—, activa una reacció que descompon la matèria orgànica i la brutícia dipositada sobre la façana.",
        "Aquesta reacció produeix dos efectes. Descompon contaminants de l'aire com els òxids de nitrogen (NOx) que emeten el trànsit i la indústria; i torna la superfície superhidròfila, de manera que l'aigua de pluja rellisca formant una làmina que arrossega la brutícia ja descomposta (efecte autonetejant).",
        "El resultat és una façana amb millor aspecte durant més temps, menys necessitat de neteja i un benefici mediambiental. A IMFALÚ som pioners a aplicar tractaments per fotocatàlisi sobre façanes d'alumini i vidre.",
      ],
    },
  },
}

// Proyectos: texto traducido keyed por slug (nombres propios y ubicaciones se mantienen)
export const projectsCaText: Record<string, { type: string; sector?: string; reto: string; solucion: string; resultado: string }> = {
  "wtc-cornella": {
    type: "Façana d'oficines d'alumini i vidre", sector: "Oficines",
    reto: "El World Trade Center de Cornellà és un complex d'oficines amb una gran superfície de mur cortina que s'havia de conservar en perfecte estat i de forma segura sense interrompre l'activitat de les empreses.",
    solucion: "Manteniment integral del mur cortina: revisió i resegellat de juntes, reposició de vidres, comprovació d'ancoratges i fixacions i neteja tècnica, tot amb treball en alçada certificat.",
    resultado: "Façana estanca, segura i amb bona imatge, amb un pla de manteniment preventiu que evita filtracions i despreniments.",
  },
  "edificio-ski-melia": {
    type: "Rehabilitació de façana", sector: "Edifici singular",
    reto: "Edifici emblemàtic (hotel Meliá) amb una façana metàl·lica i acristallada molt exposada al sol i al vent, amb el lacat i els segellats envellits.",
    solucion: "Rehabilitació i regeneració de la façana: recuperació del lacat de l'alumini, substitució de vidres i segellats deteriorats i reforç de l'estanqueïtat, sense substituir tot el tancament.",
    resultado: "Façana recuperada estèticament i funcionalment, tornant a l'edifici la seva imatge original i allargant-ne la vida útil.",
  },
  "parc-vallsolana": {
    type: "Façana d'oficines", sector: "Oficines",
    reto: "Parc empresarial de Sant Cugat amb àmplies façanes acristallades d'oficines que requerien un manteniment continuat i previsible.",
    solucion: "Programa de manteniment i reparació de la façana d'alumini i vidre: revisió de juntes i segellats, reposició de vidres i control de filtracions.",
    resultado: "Façanes en estat òptim i un manteniment planificat per a tot el parc empresarial.",
  },
  "torre-tarragona": {
    type: "Edifici d'oficines", sector: "Oficines",
    reto: "Edifici d'oficines en alçada amb façana acristallada, amb risc de despreniment si no es conservaven vidres i fixacions.",
    solucion: "Intervenció en alçada amb mitjans d'elevació: revisió i reparació de la perfileria d'alumini, vidres i segellats, i comprovació de la subjecció dels panys.",
    resultado: "Façana conservada i segura, eliminant el risc de despreniment en alçada.",
  },
  "hotel-rosello": {
    type: "Manteniment de façana acristallada", sector: "Hotel",
    reto: "Hotel en funcionament amb façana acristallada que exigia manteniment sense afectar els hostes ni l'operativa.",
    solucion: "Manteniment i reposició d'elements de la façana de vidre (vidres, juntes i segellats), planificant els treballs per minimitzar molèsties.",
    resultado: "Façana en bon estat i estanca, amb mínimes molèsties per als hostes.",
  },
  "oficinas-barbera": {
    type: "Regeneració de façana", sector: "Oficines",
    reto: "Edifici d'oficines a Barberà del Vallès amb façana metàl·lica i de vidre deteriorada pel pas del temps.",
    solucion: "Regeneració de la façana d'alumini i vidre: recuperació del lacat, tractament de la perfileria i reposició de vidres on calia.",
    resultado: "Aspecte i prestacions de la façana recuperats sense substituir-la per complet, amb un cost molt inferior al d'una façana nova.",
  },
}
