# SUPER-PROMPT v3 — KINESIOLOGIA · "NOCTUA-OSCURO" · grupo Oscuro / premium minimal (9 sitios)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **54 capturas renderizadas de 109 leads A+B Maps (solo crm-maps-AB.json)** · 4 grupos visuales validados. Cobertura 49%. Grupo objetivo: **Oscuro / premium minimal (9 sitios)** — estética noche dominante, tipografía como joya, la rehabilitación presentada como pieza de precisión. Benchmark verificado de este segmento: **Kalud (kalud.cl · 81 · 93% oscuro)** por noche total, **PHYSIOCORE (physiocore.cl · 77 · 56%)** y **FORZA Kinesiología (forzakinesiologia.cl · 77 · 50%)** por oscuro premium deportivo, **Rehlab (rehlab.cl · 77 · 49% React puro)**, **KINECHI (kinechi.cl · 75 · 52%)**, **TREKINE (trekine.cl · 75 · 62%)**, **KDR Salud y Deporte (kdr.cl · 72 · 89%)**, **KINEON (kineon.cl · 71 · 67%)**, **PHYSIOLAB (physiolab.cl · 71 · 98% oscuro)** — todos medidos con dark_pct real por píxeles. Internacional: **Aesop (aesop.com)** por oscuridad contenida y **Bond Vet dark sections (bondvet.com)** por clínica nocturna serena, además **ATI Physical Therapy night** como contraste controlado.
> Objetivo: que el deportista lesionado o post-quirúrgico sienta "aquí me miden, me exigen y me devuelven a la cancha sin humo" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un centro de kinesiología deportiva y rehabilitación premium nocturno chileno. Presupuesto percibido: USD 16.000. Editorial nocturna de precisión + tecnología serena + confianza de gimnasio clínico. No es spa, no es crossfit ruidoso: es laboratorio de movimiento donde cada grado de flexión importa.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/kinesiologia-noctua-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "kinesiologia-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Kinesiología · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "kinesiologia",
     "description": "Propuesta oscura premium minimal para centros de kinesiología chilenos: noche clínica, precisión y retorno deportivo." }.
   index.html → <html lang="es">, <title>NOCTUA — Kinesiología · Centro de Kinesiología Deportiva</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- kinesiologia-noctua-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- kinesiologia-noctua-oscuro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/kinesiologia-noctua-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de kinesiologia-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/kinesiologia-noctua-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
Kalud (93% oscuro, noche absoluta) · PHYSIOLAB (98% oscuro, laboratorio nocturno) · KDR (89% oscuro, salud y deporte en noche) · KINEON (67% personalizado 1:1) · FORZA/PHYSIOCORE (premium deportivo 50-56%) · TREKINE/KINECHI (52-62% quiropráctico nocturno) · Rehlab (49% React minimal). Internacional: Aesop (oscuridad cálida en capas) + Bond Vet dark (sala como galería iluminada).

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Centro de Kinesiología Deportiva
H1: "Precisión que se siente en cada repetición."
Subhead: "Rehabilitación deportiva y traumatológica con medición objetiva. Plan con alta estimada y vuelta a cancha progresiva — sin sesiones eternas."
CTA principal: "Agendar evaluación" · secundario: "Ver medición y precios"
Contacto: +56 2 2840 3316 · hola@noctuakine.cl · Las Condes / La Reina — box y retorno deportivo
Horario: Lun–Vie 7:30–20:30 · Sáb 8:00–14:00
Badges silenciosos (no hero): "Boleta reembolsable · Evaluación con test funcionales · Alta con criterios"

DOLOR REAL QUE ATACAS (copy con filo chileno, no humo fitness)
- "Te dijeron 'reposo y antiinflamatorio' y sigues cojeando a las 3 semanas."
- "No es falta de ganas. Es un protocolo sin medición que te devuelve a medias."
- "Te vendieron un pack cerrado sin test de fuerza ni salto. Aquí cada sesión tiene métrica."
- "Sin derivación eterna. Evaluación con test funcionales en 48h y plan con semanas estimadas — no 'ven cuando puedas'."
- "Si tu lesión es quirúrgica, te derivamos al traumatólogo correcto — no te retenemos para facturar."
- Micro-copy honesto: "Alta con criterios objetivos (fuerza, salto, dolor). No te damos el alta cuando se acaba el bono."

PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root — medida de 9 capturas: 49-98% oscuro)
--fondo #101416 (azul-negro tinta profunda) · --superficie #1A1E22 · --superficie-alta #22272B · --filete #2E3440 · --hueso #E8E4DE (texto, NUNCA #FFF) · --gris #9AA0A6 ·
ACENTO ÚNICO --teal-frio #3EB5A6 (<5% de la UI: CTA sólido, kickers, estados activos, links; tracking amplio uppercase). PROHIBIDO #000/#FFF puros, neón saturado (#00FFC8 y familia), glow en texto, gradientes púrpura-azul genéricos. border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas). Fondo oscuro en capas SIEMPRE (nada de bloques blancos).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; deportistas vendados genéricos con grito/columna neón/manos con guantes apuntando/esqueleto 3D = descartar y regenerar)
lab.jpg 16:9 laboratorio de movimiento nocturno VACÍO: camilla oscura, jaula de fuerza desenfocada, luz oculta cálida rasante, cinematográfica pero serena ·
measure.jpg 4:5 bodegón chiaroscuro: banda elástica negra, goniómetro acero, cuaderno con test de salto sobre piedra oscura ·
texture.jpg 1:1 macro lino oscuro / goma de piso técnico con luz rasante cálida ·
corridor.jpg 16:9 pasillo/box nocturno simétrico con focos cálidos empotrados, sereno, nada gym ruidoso.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero pantalla completa: kicker teal-frío uppercase ("KINESIOLOGÍA DEPORTIVA · LAS CONDES / LA REINA"), H1 gigante hueso leading 0.95 tracking negativo, subhead gris, CTA sólido teal-frío texto fondo + link subrayado animado a #servicios. lab.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo opacity .04 sobre toda la página.
#filosofia  ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Rehabilitar es medir." Copy base: "Cada plan tiene test inicial, métrica semanal y criterio de alta por escrito. Si no mejoras, ajustamos el plan — no te extendemos el bono." Sin testimonios públicos JAMÁS: la discreción es el argumento premium deportivo.
#cifras  Count-up tabulares al entrar (IntersectionObserver): "+11 años", "+3.200 altas deportivas", "84% alta en ≤8 sesiones", "4 tests funcionales por caso". Números hueso serif grandes, caption gris 11px. Nota: "Sin antes/después. La evidencia es retorno medido."
#servicios  Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Traumatológica de rodilla/hombro · Deportiva retorno a cancha · Post-quirúrgica (LCA, menisco) · Columna y dolor persistente · Evaluación funcional (salto, fuerza, ROM) · A domicilio premium. La fila revela panel var(--superficie) con duración 60 min y precio "desde" CLP. En móvil tap = acordeón.
#precios  "Precios claros, sin sorpresas": tabla sobria 5 filas precio desde en CLP tabulares (Evaluación funcional 60 min con tests, Sesión deportiva/traumatológica box, Sesión post-quirúrgica, Sesión a domicilio, Pack 5 y 10 con medición incluida) + nota honesta: "El valor final se confirma tras la evaluación funcional. Nunca partimos sin objetivos y criterios de alta por escrito."
#metodo  3 columnas filetes verticales 1px: 01 Evaluación funcional (60 min, qué traer) → 02 Plan y progresión por fases (fuerza, control, retorno) → 03 Alta y prevención. Números grandes teal-frío apagado.
#galeria  measure.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Goniómetro · test de salto · 60 min"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cuánto cuesta la evaluación funcional? ¿Trabajan con ISAPRE/FONASA y reembolso? ¿Cuántas sesiones necesito para volver a correr/jugar? ¿Atienden post-quirúrgico con orden del traumatólogo? ¿Box o domicilio, qué conviene para mi lesión? ¿Qué pasa si no alcanzo el criterio de alta? Respuestas con teléfono visible y derivación responsable.
#reserva  Sobre var(--superficie): headline corto "Vuelve a tu nivel. Medido.", teléfono hueso gigante tabular, botón teal-frío, horarios, dirección. Micro-línea: "Responden kinesiólogos, no bots. Si no contestamos, devolvemos el llamado el mismo día." Footer sobrio: marca pequeña, dirección, legal Chile, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón teal-frío "Agendar"; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto teal-frío 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px teal-frío · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, atletas gritando, antes/después, testimonios con foto o estrellas, marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales (hueso/columna/esqueleto), glow/neón, #000/#FFF puros, overlays negros planos sobre foto, emojis, stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos). Todo español de Chile, alt="" descriptivos, contraste AA, focus-visible ring teal-frío, ::selection teal-frío/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta -- kinesiologia-noctua-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build -- kinesiologia-noctua-oscuro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio, medición y criterio de alta respondidos antes del footer? ¿Se siente laboratorio premium o gym oscuro genérico?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros de kinesiología deportiva chilenos (grupo de 9 oscuros premium: 49-98% dark). Si queda "bien pero gimnasio genérico", itera hasta que un jefe de kinesiología deportiva la envidie para su box.
```
