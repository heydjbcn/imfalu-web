// FAQs por servicio (capturan long-tail y alimentan a los buscadores con IA — GEO).
export const FAQ_BY_SLUG: Record<string, { q: string; a: string }[]> = {
  "mantenimiento-fachadas": [
    { q: "¿Qué incluye un contrato de mantenimiento de fachada?", a: "Revisiones periódicas programadas del estado de la fachada (aluminio, cristal, juntas y sellados), pequeñas reparaciones preventivas y servicio de urgencias 24 h. Cada contrato se adapta al edificio." },
    { q: "¿Cada cuánto hay que mantener una fachada de aluminio y cristal?", a: "Lo habitual es al menos una revisión anual, y dos en edificios con mucha exposición o altura. El mantenimiento preventivo evita reparaciones mayores y filtraciones." },
    { q: "¿Trabajáis con comunidades y administradores de fincas?", a: "Sí. La mayoría de nuestros clientes son administradores de fincas, property managers y departamentos de mantenimiento de edificios de oficinas y hoteles en Barcelona." },
    { q: "¿Cuánto cuesta el mantenimiento de una fachada de aluminio y cristal?", a: "Depende de la superficie, la altura y el estado de la fachada. Tras una visita te damos un presupuesto cerrado para el contrato de mantenimiento, sin compromiso." },
    { q: "¿Hacéis mantenimiento de muro cortina?", a: "Sí, el muro cortina es una de nuestras especialidades: revisamos vidrios, perfilería, juntas y sellados, y resolvemos incidencias en altura con medios certificados." },
  ],
  "mantenimiento-preventivo": [
    { q: "¿Qué diferencia hay entre mantenimiento preventivo y correctivo?", a: "El preventivo se adelanta: revisa y corrige el deterioro antes de que cause daños. El correctivo actúa una vez que el problema ya ha ocurrido (un cristal roto, una filtración). Lo ideal es el preventivo como base." },
    { q: "¿Qué se revisa en un mantenimiento preventivo?", a: "El estado del aluminio y los vidrios, las juntas y sellados, las fijaciones con riesgo de desprendimiento y los drenajes. Tras cada revisión entregamos un informe del estado de la fachada." },
    { q: "¿Cada cuánto se hace?", a: "Al menos una revisión anual, y dos al año en edificios de gran altura o muy expuestos al viento, la contaminación o el mar." },
    { q: "¿Compensa el mantenimiento preventivo?", a: "Sí: una junta resellada a tiempo cuesta una fracción de lo que cuesta resolver una filtración que ya ha dañado el interior, y reduce el riesgo de desprendimientos." },
  ],
  "mantenimiento-correctivo": [
    { q: "¿Qué incluye el mantenimiento correctivo?", a: "La reparación de las incidencias ya producidas en la fachada: reposición de cristales, reparación de sellados y perfilería, acopio de materiales y servicio de urgencias 24 h." },
    { q: "¿Tenéis servicio de urgencias?", a: "Sí, 24 h para cristales rotos, riesgo de desprendimiento o filtraciones en fachada en Barcelona y área metropolitana." },
    { q: "¿Es mejor el correctivo o el preventivo?", a: "Se complementan: el preventivo evita llegar a la incidencia; el correctivo la resuelve cuando aparece. Con un buen preventivo, el correctivo es mucho menos frecuente." },
    { q: "¿Reparáis sin sustituir toda la fachada?", a: "Sí. Intervenimos solo sobre los elementos afectados, sin necesidad de sustituir la fachada completa." },
  ],
  reparacion: [
    { q: "¿Cómo se repara una fachada de vidrio o cristal?", a: "Según el daño: reposición del vidrio afectado (de cualquier medida y peso), sustitución de juntas y sellados, o reparación de la perfilería de aluminio. Empezamos con un diagnóstico y resolvemos en altura con medios certificados, sin sustituir toda la fachada." },
    { q: "¿Reponéis cristales rotos de fachada de cualquier tamaño?", a: "Sí. Reponemos y sustituimos cristales de cualquier medida y peso, con los medios de elevación y seguridad necesarios para trabajo en altura." },
    { q: "¿Tenéis servicio de urgencias por un cristal roto?", a: "Sí, disponemos de servicio de urgencias 24 h para cristales rotos, desprendimientos o riesgos en fachada en Barcelona y área metropolitana." },
    { q: "¿Reparáis elementos de aluminio dañados sin cambiar toda la fachada?", a: "Sí. Reparamos y reponemos los elementos constructivos dañados puntualmente, sin necesidad de sustituir la fachada completa." },
    { q: "¿Cuánto cuesta reponer un cristal de fachada?", a: "Depende del tamaño y peso del vidrio, la altura y la accesibilidad. Tras valorarlo te damos un presupuesto cerrado; en casos urgentes priorizamos la seguridad de inmediato." },
  ],
  regeneracion: [
    { q: "¿Qué es la regeneración de una fachada?", a: "Es restaurar los elementos afectados (aluminio, lacados y vidrios) para recuperar su estado y prestaciones originales, como alternativa más económica y sostenible a sustituir toda la fachada." },
    { q: "¿La regeneración es más barata que sustituir la fachada?", a: "En muchos casos sí. Cuando la estructura está en buen estado, regenerar evita el coste y las molestias de una sustitución completa." },
    { q: "¿Sobre qué materiales se puede aplicar?", a: "Sobre fachadas metálicas (aluminio y sus lacados) y sobre los vidrios. Hacemos un diagnóstico previo para confirmar la viabilidad." },
    { q: "¿Cómo se recupera el lacado del aluminio?", a: "Con un proceso de limpieza, tratamiento y restauración del lacado que devuelve color y protección al aluminio, evitando la sustitución de los perfiles." },
    { q: "¿Cuánto cuesta regenerar una fachada?", a: "Siempre menos que sustituirla por completo cuando la estructura está sana. El coste depende de la superficie y el estado; lo cerramos tras el diagnóstico." },
  ],
  "informes-tecnicos": [
    { q: "¿Qué incluye un informe técnico de fachada?", a: "Diagnóstico de patologías, evaluación de riesgos y un plan de actuación priorizado, con la documentación técnica que permite decidir cualquier intervención con criterio." },
    { q: "¿Sirve para la inspección técnica del edificio (ITE/IEE)?", a: "El informe documenta el estado de la fachada y las actuaciones recomendadas, útil como base técnica para la gestión del edificio. Coordinamos con el técnico responsable cuando es necesario." },
    { q: "¿Hacéis auditoría antes de presupuestar una obra?", a: "Sí. Recomendamos el diagnóstico previo para dimensionar bien la intervención y evitar sorpresas durante la obra." },
    { q: "¿En cuánto tiempo entregáis el informe técnico?", a: "Tras la inspección, normalmente en pocos días, según la complejidad de la fachada. Te avanzamos los hallazgos urgentes de inmediato." },
    { q: "¿El informe incluye un plan de actuación con prioridades?", a: "Sí. No solo diagnosticamos: priorizamos qué actuar primero y proponemos cómo, para que decidas con criterio y por fases si hace falta." },
  ],
  "pruebas-estanqueidad": [
    { q: "¿Cómo se detecta una filtración de agua en fachada?", a: "Con pruebas de estanqueidad controladas (aplicación de agua y verificación de sellados) que localizan el punto exacto de entrada de agua antes de reparar." },
    { q: "¿Hacéis pruebas antes y después de una reparación?", a: "Sí. Las pruebas antes localizan el origen y, después, verifican que la intervención ha resuelto la filtración." },
    { q: "Tengo humedades en un edificio, ¿es la fachada?", a: "A menudo el origen está en juntas, sellados o vidrios de la fachada. La prueba de estanqueidad lo confirma sin obras innecesarias." },
    { q: "¿Detectáis filtraciones en muro cortina?", a: "Sí. El muro cortina es donde más se solicitan estas pruebas: localizamos por dónde entra el agua en vidrios, juntas y anclajes antes de reparar." },
    { q: "¿Cuánto cuestan las pruebas de estanqueidad?", a: "Dependen de la superficie a comprobar y la accesibilidad. Te damos presupuesto cerrado tras valorar el caso; suele salir muy a cuenta frente a reparar a ciegas." },
  ],
  fotocatalisis: [
    { q: "¿Qué es el tratamiento por fotocatálisis en una fachada?", a: "Un recubrimiento que, con la acción de la luz, ayuda a autolimpiar la fachada y a reducir contaminantes del aire. Mejora el aspecto y reduce el mantenimiento." },
    { q: "¿Qué beneficios tiene la fotocatálisis?", a: "Efecto autolimpiante, menor necesidad de limpieza, reducción de contaminantes y un beneficio medioambiental. Somos pioneros en aplicarla en fachadas." },
    { q: "¿Sobre qué fachadas se puede aplicar?", a: "Principalmente sobre superficies de fachada expuestas; valoramos cada caso con un diagnóstico previo." },
    { q: "¿Cuánto dura el efecto de la fotocatálisis?", a: "Es un tratamiento de larga duración que actúa de forma continua con la luz. La durabilidad depende de la exposición de la fachada; lo valoramos en cada caso." },
    { q: "¿La fotocatálisis sustituye al mantenimiento?", a: "No, lo complementa: reduce la suciedad y la frecuencia de limpieza, pero la fachada sigue beneficiándose de revisiones de mantenimiento." },
  ],
}

// Cómo trabajamos (proceso común, refuerza confianza y estructura SEO).
export const PROCESS = [
  { t: "Diagnóstico", d: "Visitamos la fachada y evaluamos su estado real." },
  { t: "Propuesta", d: "Presupuesto claro con alcance, plazos y medios de elevación." },
  { t: "Ejecución", d: "Trabajo en altura certificado, con seguridad y mínimas molestias." },
  { t: "Garantía", d: "Verificación final y, si quieres, contrato de mantenimiento." },
]
