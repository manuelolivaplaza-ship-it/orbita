# SUPER-PROMPT v3 — KINESIOLOGIA · "ÉTER-CLARO" · grupo Claro minimalista / neutro (41 + 4 satélites)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **54 capturas renderizadas de 109 leads A+B Maps (solo crm-maps-AB.json)** · 4 grupos visuales validados. Cobertura 49% (54/109 dominios). Grupo objetivo: **Claro minimalista / neutro (41 sitios) + satélites Azul/cian (2) y Teal (2)** — estética dominante del rubro: papel hueso, tipografía editorial serena, orden clínico y luz. Benchmark verificado de este segmento: **Fisioterapia Invasiva Chile (fisioinvasiva.cl · 81 · Providencia)** por disciplina editorial, **Human Move Kinesiología (humanmove.cl · 81 · Vitacura)** por neutro 13% oscuro, **SportSalud (sportsalud.cl · 81 · Las Condes)**, **RehabSport Chile (rehabsport.cl · 81 · 1% oscuro)** por minimalismo extremo, **Kineplanet (kineplanet.cl · 75 · 0% oscuro)** por mensaje a domicilio directo; satélites teal/azul: **Centro Alivia (centroalivia.cl · 77)** y **Consulta CKIR (consultakinesica.cl · 72)**. Internacional: **Mayo Clinic (mayoclinic.org)** por health system claro y **ATI Physical Therapy (atipt.com)** por fisioterapia EEUU — blanco institucional, teal clínico usado con parsimonia sobre #ffffff.
> Objetivo: que quien lleva 3 meses con dolor de hombro/rodilla y posterga la evaluación sienta "aquí me van a evaluar en serio y no me van a vender 20 sesiones por adelantado" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un centro de kinesiología chileno premium pero cercano. Presupuesto percibido: USD 14.000. Editorial de calma + rigor clínico + cercanía sin cliché deportivo. No es gym, no es clínica fría: es rehabilitación donde volver a moverte no da miedo.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/kinesiologia-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "kinesiologia-eter-claro". meta.json →
   { "title": "ÉTER — Kinesiología · Propuesta Órbita", "client": "ÉTER", "brand": "ÉTER", "sector": "kinesiologia",
     "description": "Propuesta clara editorial para centros de kinesiología chilenos: rehabilitación luminosa, criterio clínico y agenda humana." }.
   index.html → <html lang="es">, <title>ÉTER — Kinesiología · Centro de Kinesiología y Rehabilitación</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- kinesiologia-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- kinesiologia-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/kinesiologia-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de kinesiologia-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/kinesiologia-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Fisioterapia Invasiva (orden editorial, blancos generosos) · Human Move (neutro sereno) · SportSalud (grilla disciplinada) · RehabSport (minimalismo 99% light) · Kineplanet (cercanía a domicilio) + matiz teal contenido de CKIR/centroalivia (azul/cian 0-7% oscuro). Internacional: Mayo Clinic (confianza institucional) + ATI Physical Therapy (aire, teal sobre blanco).

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Centro de Kinesiología y Rehabilitación
H1: "Volver a moverte sin miedo."
Subhead: "Evaluación kinésica en 48 horas, plan por escrito y reembolso ISAPRE/FONASA informado antes de partir. Traumatológica, deportiva y neurológica — en box o a domicilio."
CTA principal: "Agendar evaluación" · secundario: "Ver precios y convenios"
Contacto: +56 2 2840 3315 · hola@eterkine.cl · Las Condes / Vitacura / Providencia — box y domicilio
Horario: Lun–Vie 8:00–20:00 · Sáb 9:00–14:00
Badges silenciosos (no hero): "Boleta reembolsable · ISAPRE · FONASA · Convenio directo"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico wellness)
- "Llevas meses con el hombro avisando y lo llamas 'tensión'."
- "No es falta de elongar. Es una lesión que no se arregla con YouTube."
- "Te ofrecieron 20 sesiones por adelantado sin siquiera evaluarte. Aquí no."
- "Sin lista de espera de 6 semanas. Evaluación en 48h y plan con alta estimada — no sesiones eternas."
- "Si tu caso es quirúrgico o necesita otro especialista, te derivamos donde corresponde — sin retenerte."
- Micro-copy honesto: "Emitimos boleta reembolsable el mismo día. El valor final se confirma en la evaluación, no antes."

PALETA (regla dura, como variables CSS en :root — medida de 54 capturas: 41 neutros claros 0-15% oscuro)
--papel #F8F6F1 · --papel-2 #EFE9E0 · --tinta #1C1E1B · --gris #8A857E · --linea #E0D9CC ·
ACENTO ÚNICO --teal #0F766E (teal clínico desaturado, <5% de la UI: CTA secundario, kickers, links, estados activos; CTA principal es sólido tinta #1C1E1B sobre papel). PROHIBIDO teal neón (#00FFC8 y familia), verde lima saturado (#BFFF00), dorados brillantes, degradados. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. Fondo claro SIEMPRE. NUNCA #000/#FFF puros (usa tinta y papel).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; deportistas con vendas genéricas/cerebros 3D/esqueletos neón/manos con guantes apuntando = descartar y regenerar)
box.jpg 16:9 box de kinesiología VACÍO luz norte: camilla lino claro, mesa de roble clara, ventanal grande, banda elástica enrollada y cuaderno clínico desenfocado, pared hueso — calma clínica absoluta, sin personas ·
still.jpg 4:5 bodegón sobre papel hueso: cuaderno abierto con pauta de ejercicios, lápiz grafito, banda elástica verde desaturada y taza cerámica, luz natural ·
detail.jpg 1:1 macro lino pálido / textura camilla con luz rasante suave ·
corridor.jpg 16:9 pasillo/box luminoso vacío con luz natural y sombra suave, sereno, nada clínico frío.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero: kicker teal uppercase tracking amplio ("CENTRO DE KINESIOLOGÍA · LAS CONDES / VITACURA · BOX Y DOMICILIO"), H1 gigante leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta "Agendar evaluación" + link subrayado animado teal a #precios. box.jpg derecha 7/12, caption técnica 11px ("Box ÉTER — luz norte, 60 min por sesión"). Banda fina bajo hero: "Evaluación en 48h · Plan por escrito · Alta estimada informada · Boleta reembolsable". Puntos flotantes sutiles opacity .10.
#cifras  Count-up al entrar (IntersectionObserver): "+9 años", "+4.800 pacientes/año", "81% alta en ≤8 sesiones", "6 kinesiólogos mismo equipo". Números tabulares serif grandes. Nota pequeña: "Sin antes/después. La evidencia es alta oportuna, no foto."
#evidencia (alias de #cifras — si usas #evidencia, duplica el bloque con id="cifras" o usa ambos ids para cumplir regla dura)
#servicios  Índice numerado 01–06 editorial (NO cards): Kinesiología traumatológica · Deportiva · Neurológica · Respiratoria · A domicilio · Evaluación + plan de tratamiento. Hover/tap expande 64px revelando "para quién es / duración 45–60 min / desde $XX.XXX" (280ms). Lenguaje plano, sin jerga quirúrgica.
#equipo  3 columnas filete superior 1px: no fotos de personas — es detalle de espacio/objeto que representa cada línea (camilla, banda, cuaderno). Nombre, credencial breve (Kinesiólogo U. de Chile, diplomado terapia manual), enfoque en 1 línea. "Mismo kinesiólogo de principio a fin, no rotación".
#precios  "Valores claros, sin sorpresas": tabla editorial 5 filas precio DESDE en CLP tabulares (Evaluación kinésica 45 min, Sesión traumatológica/deportiva box, Sesión neurológica/respiratoria, Sesión a domicilio RM, Pack 5 y 10 sesiones) + nota honesta al margen: "Convenios ISAPRE/FONASA y reembolso. El valor final se confirma en la evaluación. Nunca partimos sin plan escrito y aprobado." Sin badge "más elegido". Columna lateral con comunas a domicilio (Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Santiago Centro).
#metodo  3 columnas filete superior 1px: 01 Evaluación (45 min, qué traer: orden, exámenes) → 02 Plan y frecuencia por escrito (sesiones/semana, alta estimada) → 03 Sesiones y re-evaluación. Números grandes teal apagado. Sin iconitos centrales.
#galeria  still.jpg + detail.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Pauta personalizada · 60 min · box/domicilio"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cuánto cuesta la primera evaluación? ¿Atienden ISAPRE/FONASA y cómo es el reembolso? ¿Box o domicilio, qué me conviene? ¿Cada cuánto son las sesiones y cuánto dura el tratamiento? ¿Qué llevo a la evaluación? ¿Cómo cancelo o reprogramo? Respuestas con teléfono visible, sin letra chica oculta.
#reserva  Headline corto "Agenda tu evaluación. Nosotros el resto." + teléfono tabular gigante + CTA tinta + horarios + dirección/comunas. Micro-línea: "Responden kinesiólogos, no call center. Si no contestamos, devolvemos el llamado el mismo día." Footer sobrio legal CL (Razón social ÉTER SpA, SII, boleta, año).

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" sólido tinta fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar evaluación"). Subrayados animados 200ms. Teléfono fijo visible en header y footer.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px teal · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones/count-up 280ms/1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos (noctua es otro prompt).
- PROHIBIDO stock kinesiología cliché: deportistas vendados genéricos, manos con guantes apuntando a cámara, columnas vertebrales 3D flotando, esqueletos neón, equipos posando con delantal, antes/después. Solo las imágenes ya presentes en public/media (nada externo). Si falta una, tipografía y layout llevan el diseño solos.
- PROHIBIDO promesas de cura, badges de rating con estrellas, marquee de logos, contadores falsos, planes "más elegido", iconitos de hueso/columna como pieza central, emojis.
- Accent teal en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro (no teal sólido).
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring teal, ::selection teal/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
- Ética: sin diagnósticos en el copy, sin urgencia falsa, derivación responsable si el caso no es kinésico.

PROCESO OBLIGATORIO
1) Duplica _plantilla → kinesiologia-eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas (#inicio, #cifras, #precios, #faq, #reserva obligatorios). 4) npm run propuesta -- kinesiologia-eter-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- kinesiologia-eter-claro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio, quién-te-atiende y cómo-pedir-hora respondidos antes del footer? ¿Se siente rehabilitación luminosa o clínica genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros de kinesiología chilenos (grupo de 41 neutros + 4 satélites azul/teal). Si queda "bien pero genérica clínica", itera hasta que un centro la envidie para sí mismo. Benchmark chileno claro: tan confiable como pedir hora en Clínica Las Condes, pero con la cercanía de un kine que te conoce por tu nombre.
```
