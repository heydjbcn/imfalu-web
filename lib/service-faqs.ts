// FAQs por servicio (capturan long-tail y alimentan a los buscadores con IA — GEO).
export const FAQ_BY_SLUG: Record<string, { q: string; a: string }[]> = {
  "mantenimiento-fachadas": [
    { q: "¿Qué incluye un contrato de mantenimiento de fachada?", a: "Revisiones periódicas programadas del estado de la fachada (aluminio, cristal, juntas y sellados), pequeñas reparaciones preventivas y servicio de urgencias 24 h. Cada contrato se adapta al edificio." },
    { q: "¿Cada cuánto hay que mantener una fachada de aluminio y cristal?", a: "Lo habitual es al menos una revisión anual, y dos en edificios con mucha exposición o altura. El mantenimiento preventivo evita reparaciones mayores y filtraciones." },
    { q: "¿Trabajáis con comunidades y administradores de fincas?", a: "Sí. La mayoría de nuestros clientes son administradores de fincas, property managers y departamentos de mantenimiento de edificios de oficinas y hoteles en Barcelona." },
  ],
  reparacion: [
    { q: "¿Cómo se repara una fachada de vidrio o cristal?", a: "Según el daño: reposición del vidrio afectado (de cualquier medida y peso), sustitución de juntas y sellados, o reparación de la perfilería de aluminio. Empezamos con un diagnóstico y resolvemos en altura con medios certificados, sin sustituir toda la fachada." },
    { q: "¿Reponéis cristales rotos de fachada de cualquier tamaño?", a: "Sí. Reponemos y sustituimos cristales de cualquier medida y peso, con los medios de elevación y seguridad necesarios para trabajo en altura." },
    { q: "¿Tenéis servicio de urgencias por un cristal roto?", a: "Sí, disponemos de servicio de urgencias 24 h para cristales rotos, desprendimientos o riesgos en fachada en Barcelona y área metropolitana." },
    { q: "¿Reparáis elementos de aluminio dañados sin cambiar toda la fachada?", a: "Sí. Reparamos y reponemos los elementos constructivos dañados puntualmente, sin necesidad de sustituir la fachada completa." },
  ],
  regeneracion: [
    { q: "¿Qué es la regeneración de una fachada?", a: "Es restaurar los elementos afectados (aluminio, lacados y vidrios) para recuperar su estado y prestaciones originales, como alternativa más económica y sostenible a sustituir toda la fachada." },
    { q: "¿La regeneración es más barata que sustituir la fachada?", a: "En muchos casos sí. Cuando la estructura está en buen estado, regenerar evita el coste y las molestias de una sustitución completa." },
    { q: "¿Sobre qué materiales se puede aplicar?", a: "Sobre fachadas metálicas (aluminio y sus lacados) y sobre los vidrios. Hacemos un diagnóstico previo para confirmar la viabilidad." },
  ],
  "informes-tecnicos": [
    { q: "¿Qué incluye un informe técnico de fachada?", a: "Diagnóstico de patologías, evaluación de riesgos y un plan de actuación priorizado, con la documentación técnica que permite decidir cualquier intervención con criterio." },
    { q: "¿Sirve para la inspección técnica del edificio (ITE/IEE)?", a: "El informe documenta el estado de la fachada y las actuaciones recomendadas, útil como base técnica para la gestión del edificio. Coordinamos con el técnico responsable cuando es necesario." },
    { q: "¿Hacéis auditoría antes de presupuestar una obra?", a: "Sí. Recomendamos el diagnóstico previo para dimensionar bien la intervención y evitar sorpresas durante la obra." },
  ],
  "pruebas-estanqueidad": [
    { q: "¿Cómo se detecta una filtración de agua en fachada?", a: "Con pruebas de estanqueidad controladas (aplicación de agua y verificación de sellados) que localizan el punto exacto de entrada de agua antes de reparar." },
    { q: "¿Hacéis pruebas antes y después de una reparación?", a: "Sí. Las pruebas antes localizan el origen y, después, verifican que la intervención ha resuelto la filtración." },
    { q: "Tengo humedades en un edificio, ¿es la fachada?", a: "A menudo el origen está en juntas, sellados o vidrios de la fachada. La prueba de estanqueidad lo confirma sin obras innecesarias." },
  ],
  fotocatalisis: [
    { q: "¿Qué es el tratamiento por fotocatálisis en una fachada?", a: "Un recubrimiento que, con la acción de la luz, ayuda a autolimpiar la fachada y a reducir contaminantes del aire. Mejora el aspecto y reduce el mantenimiento." },
    { q: "¿Qué beneficios tiene la fotocatálisis?", a: "Efecto autolimpiante, menor necesidad de limpieza, reducción de contaminantes y un beneficio medioambiental. Somos pioneros en aplicarla en fachadas." },
    { q: "¿Sobre qué fachadas se puede aplicar?", a: "Principalmente sobre superficies de fachada expuestas; valoramos cada caso con un diagnóstico previo." },
  ],
}

// Cómo trabajamos (proceso común, refuerza confianza y estructura SEO).
export const PROCESS = [
  { t: "Diagnóstico", d: "Visitamos la fachada y evaluamos su estado real." },
  { t: "Propuesta", d: "Presupuesto claro con alcance, plazos y medios de elevación." },
  { t: "Ejecución", d: "Trabajo en altura certificado, con seguridad y mínimas molestias." },
  { t: "Garantía", d: "Verificación final y, si quieres, contrato de mantenimiento." },
]
