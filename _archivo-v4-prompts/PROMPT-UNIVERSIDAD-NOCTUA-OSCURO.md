# SUPER-PROMPT v3 — UNIVERSIDAD · NOCTUA-OSCURO · "BIBLIOTECA NOCTURNA" (17 universidades privadas · 87 A+B Maps · alternativa oscura premium)

> Pega este bloque completo en la IA que construye el sitio (opencode muse-spark-1.2).
> Benchmark REAL analizado 2026 — **87 leads A+B Maps → 65 dominios únicos → 30 públicas/trad excluidas → 28 fetched → 17 privados válidos**. **Agrupación CSS provisional: Neutro/plantilla 17 (100%) — sin grupo oscuro pixel-validado por OOM**. Esta propuesta es la **alternativa oscura premium** para el mismo universo: pitch nocturno para rectorías que quieren diferenciarse de la feria luminosa (blanco WordPress genérico) y verse biblioteca nocturna, acreditación silenciosa, exigencia serena. Inspiración oscura medida en CSS: **UNAB (unab.cl · oscuro/premium minimal #32373c)**, **USS (uss.cl · #1b3860 + oro #ceb37c institucional)**, **U. Autónoma (uautonoma.cl · #3d3935 + #202b56)**, **U. Central (ucentral.cl · #32373c)** + acentos cromáticos del rubro **UAndes carmín #ce0019**, **UDD violeta #7a00df**, **IPP azul #0057ff**. Internacional oscuro: **Yale / Princeton dark editorial + U. de Navarra nocturna**. Si ÉTER-CLARO es "luz académica", NOCTUA es "noche académica": la misma claridad, pero en tinta.
> Objetivo: que un rector que quiere verse premium sin gritar piense "esta es la universidad que impone respeto de noche — biblioteca iluminada, no feria".

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una universidad privada chilena en modo OSCURO editorial premium — noche académica, biblioteca iluminada. Presupuesto percibido: USD 42.000. Debe sentirse como entrar a una biblioteca universitaria de noche: tinta profunda, madera oscura, luz cálida puntual, tipografía serif con autoridad, silencio que impone respeto. No es dashboard neón, no es landing oscura con gradientes morado-cian genéricos: es prestigio nocturno contenido, acreditación dicha en voz baja.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/universidad-noctua-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app. Si universidad-noctua-oscuro ya existe, reutilízala (limpia src/ antes).
2) En tu copia: package.json → cambia "name" a "universidad-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Universidad Privada · Propuesta Órbita",
     "client": "Universidad privada (grupo Neutro/plantilla 17 — pitch oscuro)",
     "brand": "NOCTUA", "sector": "universidad",
     "description": "Propuesta oscura premium para universidades privadas chilenas: noche académica, prestigio silencioso y admisión sin fricción." }.
   index.html → <html lang="es">, <title>NOCTUA — Universidad Privada</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- universidad-noctua-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- universidad-noctua-oscuro   (compila tsc + vite)
   La propuesta queda servida en /propuestas/universidad-noctua-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios): son de otros clientes. No las leas, no las modifiques.
   Solo creas/editas DENTRO de universidad-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/universidad-noctua-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
UNAB oscuro (#32373c premium minimal, multi-sede) · USS (dupla azul noche #1b3860 + oro #ceb37c) · U. Autónoma (tinta #3d3935) · UAndes carmín contenido · UDD violeta distinción · Yale/Princeton editorial nocturno (tinta + hueso + filete dorado sutil) · U. de Navarra nocturna. Negro mate con capas, no negro puro; tipografía grande, lujo contenido sin neón.

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Universidad Privada
H1: "Prestigio que no necesita gritar."
Subhead: "Carreras acreditadas, profesores con nombre y apellido, y una admisión que entiendes en 5 minutos — ahora en una universidad que se lee de noche como una biblioteca iluminada."
CTA principal: "Postular ahora" · secundario: "Conocer carreras"
Contacto: +56 2 2840 3315 · admision@noctua.cl · Providencia, Santiago
Horario: Lun–Vie 9:00–19:00 · Sáb 9:00–13:00
Acreditación: Acreditada 5 años (2024-2029) · Sedes Santiago / Viña del Mar / Concepción (demo)
Dolor real que ataca el copy (no inventar otro):
- "Tu web clara actual se pierde entre 17 clones blancos con la misma plantilla WordPress: no impone prestigio y no convierte."
- "De noche tu universidad también existe — biblioteca, laboratorios, posgrados — pero tu web no lo cuenta."
- "El postulante nocturno (vespertino, posgrado, adulto) no se ve reflejado: tu sitio es feria diurna, no biblioteca nocturna."

PALETA (regla dura, variables CSS en :root — la oscuridad tiene capas, medida de referentes oscuros del rubro)
--fondo #0E1320 (tinta noche profunda, fondo SIEMPRE) · --superficie #171E2E (bloques) · --superficie-alta #1E2942 · --filete #2A3652 · --hueso #E9E4DE (texto principal, NUNCA #FFF puro) · --hueso-suave #CFC8BE · --gris #9AA0A6 · --gris-apagado #7A8290 ·
ACENTO ÚNICO --champagne #C9A86A (oro champán apagado, <5% de la UI: CTA sólido, kickers uppercase tracking amplio, links activos, filete activo, + y % de cifras). PROHIBIDO #000/#FFF puros, neón saturado, glow en texto, gradientes púrpura-azul genéricos, rojo neón brillante, sombras difusas. border-radius: 0 en TODO salvo 50% circular. Profundidad por capas de fondo + filetes 1px (nunca sombras). ::selection var(--champagne)/texto var(--fondo). Focus-visible ring 2px var(--champagne).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; campus diurno luminoso / estudiantes lanzando birretes / renders neón = descartar y regenerar)
biblioteca-noche.jpg 16:9 biblioteca universitaria VACÍA de noche, mesas de madera oscura iluminadas puntual, estanterías en penumbra, luz cálida contenida, cinematográfico sereno, sin personas ·
patio-noche.jpg 16:9 patio interior de campus de noche, hormigón y madera oscura con iluminación rasante cálida, bancas vacías, reflejo suave, sin ocupantes ·
detalle-noche.jpg 1:1 macro de papel hueso con sello seco dorado y tipografía en relieve sobre tinta, luz rasante cálida, detalle premium ·
aula-noche.jpg 4:5 aula / taller nocturno ordenado, mesas alineadas, pizarra limpia, luz cálida puntual, sin personas.
Si no hay media, tipografía y capas de tinta llevan el diseño (no uses stock externo diurno, no uses birretes).

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa tinta: kicker champagne uppercase tracking .16em "UNIVERSIDAD PRIVADA · ACREDITADA 5 AÑOS · BIBLIOTECA NOCTURNA",
           H1 gigante hueso serif leading 0.92 tracking -0.03em, subhead gris 18px max 62ch, CTA sólido champagne texto fondo + link subrayado animado champagne a #carreras ("Conocer carreras").
           biblioteca-noche.jpg derecha 7/12 integrada por degradado hacia var(--fondo) (NUNCA overlay negro plano opaco). Grano fílmico sutilísimo opacity .04 sobre toda la página. Banda fina bajo hero (filete 1px var(--filete)):
           "Admisión 2026 abierta · Acreditada 5 años · Vespertino y posgrados · Sedes Santiago / Viña / Concepción".

#confianza Barra de confianza bajo hero (filete 1px, tabular 11px hueso-suave): "Acreditada 5 años" · "96% empleabilidad 1er año" · "42 carreras" · "+18.000 titulados" — champagne para números, sin estrellas.

#carreras  Índice numerado 01–08 editorial nocturno (NO cards): Derecho · Ingeniería Comercial · Psicología · Enfermería · Arquitectura · Medicina · Diseño · Pedagogía.
           Cada fila: nombre grande serif hueso 28–32px + sede + duración + flecha champagne. Hover/tap expande 72px revelando FICHA sobre var(--superficie) (280ms): malla resumida, campo laboral, arancel referencia "desde $X.XXX.XXX CLP/año" y sello acreditación. Números apagados var(--gris-apagado). En móvil tap = acordeón.

#cifras    Count-up tabulares al entrar (IntersectionObserver, 1.2s): "+42 carreras", "96% empleabilidad 1er año", "5 años acreditada", "+18.000 titulados".
           Números grandes hueso 56–72px, + y % en champagne 32px. Caption 11px gris por cifra. Sin gráficos 3D.

#evidencia Prueba social nocturna sin fotos: 3 citas serif itálicas grandes hueso 24–28px con comilla champagne 48px, atribución gris 12px "— Valentina, egresada Derecho 2023 · Fiscalía". Carrusel fade lento 6s pausable. Logos acreditación como filetes tipográficos 11px hueso-suave (no marquee).

#admision  4 pasos con filete superior 1px var(--filete): 01 Simula tu puntaje → 02 Postula online → 03 Entrevista → 04 Matrícula. Cada paso con duración y documento. CTA "Simular postulación" anclado a #precios. Números grandes champagne apagado 18%.

#precios   "Aranceles claros, sin sorpresas" sobre var(--superficie): tabla editorial 6 filas CLP tabulares hueso (separador chileno) — columnas: Carrera | Arancel anual | Matrícula | Beca % ref | Gratuidad — + nota honesta gris:
           "El arancel final depende de la carrera y beneficios. Se confirma por escrito tras tu postulación. Nunca matriculamos sin entrevista previa."
           Toggle "Con gratuidad / Sin gratuidad" recalcula (solo visual). Debe funcionar a 360px con scroll horizontal contenido y filetes var(--filete).

#faq       6 acordeones honestos sobre tinta (280ms, uno abierto a la vez): ¿Cuánto cuesta postular? ¿Hay gratuidad/becas y cómo sé si califico? ¿Puedo convalidar ramos? ¿Hay intercambio? ¿Dónde están las sedes y hay vespertino/online nocturno? ¿Cómo es la entrevista y cuánto demora la respuesta?
           Respuestas con teléfono visible.

#reserva   Sobre var(--superficie): headline corto hueso "Conversemos tu postulación" + teléfono tabular gigante hueso + CTA sólido champagne "Agendar entrevista" + horarios + dirección.
           Micro-línea gris: "Responde Admisión en <24h. Sin call center externo."
           Footer sobrio legal CL sobre var(--fondo) (NOCTUA Universidad SpA, RUT demo, SII, año).

CONVERSIÓN SIEMPRE PRESENTE
Nav tinta translúcido blur 8px con botón champagne "Postular" fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Postular ahora", champagne sobre tinta). Subrayados animados champagne 200ms. Cursor personalizado sutil opcional (punto champagne 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion). Barra progreso scroll 2px var(--champagne).

MOTION (CSS/transiciones exactas)
H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · acordeones/expansiones 280ms · count-up 1.2s · galería cortina clip-path inset 700ms al entrar · hovers 150–250ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve). Sin parallax agresivo.

REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo oscuro en capas SIEMPRE (tinta). PROHIBIDO bloques blancos, secciones claras, overlays blancos, fondos papel.
- PROHIBIDO stock diurno cliché: campus soleado genérico, estudiantes lanzando birretes a pleno día, selfies grupales, manos con diplomas, aulas abarrotadas posadas, birrete gigante como icono, gráficos 3D isométricos, cohetes/bombillas neón, gradientes morado-cian genéricos, glow/neón en texto, #000/#FFF puros.
- Sin badges de rating con estrellas, sin marquee infinito, sin contadores falsos, sin testimonios con foto/estrellas, sin planes "más elegido", sin iconitos centrales (birrete/volante) como pieza central.
- Acento champagne en MENOS del 5% de la UI. Radios 0. Botón sólido champagne sobre tinta (texto tinta). Fondo oscuro en capas siempre.
- Todo texto y alt en español de Chile, alt descriptivos, contraste AA (hueso sobre tinta ≥7:1), focus-visible ring champagne, ::selection champagne/tinta, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px, números tabulares OBLIGATORIOS.
- IDs #precios, #cifras, #faq OBLIGATORIOS y navegables.

PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/ (si falta una, tipografía/capas llevan el diseño). 4) npm run propuesta -- universidad-noctua-oscuro, revisa en navegador y corrige a 360px. 5) npm run propuestas:build -- universidad-noctua-oscuro hasta cero errores. No agregues dependencias nuevas; no toques vite.config.ts salvo crítico. 6) Auto-revisión contra REGLAS DURAS y arco (¿arancel, empleabilidad y cómo postular respondidos antes del footer? ¿Se siente biblioteca nocturna premium o landing oscura genérica?). Itera hasta lo primero. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a 17 universidades privadas chilenas (87 A+B Maps, grupo neutro 100% — pitch oscuro de contraste). Si queda "bien pero feria oscura genérica", itera hasta que un rector la envidie para su biblioteca nocturna. Benchmark nocturno chileno: tan silenciosamente prestigiosa como USS de noche (azul #1b3860 + oro #ceb37c), pero con la nitidez editorial de UNAB oscura sin caer en dashboard.
```

> Tabla grupo → prompt: **Neutro/plantilla 17 (100% universo válido, blanco/WordPress genérico)** → **ÉTER-CLARO** (papel #F8F6F0 + azul #14365F, luz académica, pitch por defecto). **Alternativa oscura premium (sin grupo pixel por OOM, inspirada en 4 oscuros CSS: UNAB/USS/UAutónoma/UCentral)** → **NOCTUA-OSCURO** (tinta #0E1320 + champagne #C9A86A, biblioteca nocturna, pitch de contraste para rectorías que quieren diferenciarse). Ambos prompts atacan mismo dolor (admisión confusa + arancel opaco + plantilla intercambiable) desde luz vs noche. 87 A+B Maps cubiertos con 2 caras de la misma moneda.
