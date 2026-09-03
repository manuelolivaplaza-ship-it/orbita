# SUPER-PROMPT v3 — SALUD MENTAL · "NOCTUA-OSCURO" · grupo Oscuro Premium Minimal (aspiracional — 0% oscuros medidos, 100% oportunidad)

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **8 capturas de 14 dominios válidos**: 0% oscuros medidos (todos claros/neutro). El oscuro aquí es **diferenciación premium**: el rubro duerme en claro minimal; la noche bien hecha vende discreción y tribu. Referentes verificados del lado claro para contraste: CEAPSI/centrokiri/centroalianza (neutro), Raíces (lima/oliva) y centrodeterapiaintegral.cl (verde). Referentes internacionales oscuro editorial: **The Perfect Secret** (quiet luxury dark-on-dark), **Skinney MedSpa dark**, **Aesop** (contención).
> Objetivo: que quien valora privacidad absoluta piense "aquí nadie se va a enterar que vine, y me van a tomar en serio".

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio de un centro de salud mental chileno en modo oscuro editorial premium. Presupuesto percibido: USD 28.000. Debe sentirse como entrar a un estudio nocturno privado: oscuridad cálida y rica, silencio, tipografía como joya, cada imagen como obra iluminada. La discreción ES el lujo.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/salud-mental-noctua-oscuro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "salud-mental-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Salud Mental · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "salud-mental",
     "description": "Propuesta oscura premium para salud mental chilena: discreción, criterio y continuidad." }.
   index.html → <html lang="es">, <title>NOCTUA — Salud Mental</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- salud-mental-noctua-oscuro   → http://localhost:3010
   - Build:      npm run propuestas:build -- salud-mental-noctua-oscuro
   La propuesta queda servida en /propuesta/salud-mental-noctua-oscuro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de salud-mental-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/salud-mental-noctua-oscuro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
The Perfect Secret (noche cálida en capas, club privado) · Skinney MedSpa dark editorial + flip-cards · Skin Verse BH (serif/sans contrastadas, fotos como galería). Del lado chileno claro, tomas la lección inversa: si todos son #FAF9F5, la noche bien resuelta te hace inolvidable.

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Salud Mental
H1: "Discreción total. Criterio clínico."
Subhead: "Psicología y psiquiatría con reserva absoluta. Evaluación privada en 72 horas, sin salas de espera expuestas. Un profesional a cargo de tu caso."
CTA principal: "Reservar evaluación privada"
Contacto: +56 2 2965 4880 · hola@noctua.cl · Las Condes — presencial y online
Horario: Lun–Vie 9:00–20:00 · Sáb 9:00–14:00
Línea discreta (footer): "Entrada y agendamiento con reserva. Facturación neutra."

DOLOR REAL QUE ATACAS (copy nocturno, sin dramatismo barato)
- "No quieres que todo el edificio sepa por qué vas."
- "No es falta de ganas. Es que tu cabeza no para ni de noche."
- "Aquí no rotas de terapeuta cada mes. Una persona, tu caso, seguimiento real."
- "Si no somos tu lugar, te derivamos con nombre y apellido — no te dejamos botado."
- Micro-copy: "Nuestros mejores resultados son los que nadie nota desde fuera."

PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #121110 (negro CÁLIDO, no #000) · --superficie #1B1917 · --superficie-alta #23201C ·
--filete #2E2A26 · --marfil #EDE8E0 (texto, NUNCA #FFF) · --gris-calido #9B948B ·
ACENTO ÚNICO --champan #C8A96A (<5% UI: CTA sólido, kickers, links, estados activos). PROHIBIDO #000/#FFF puros, dorado brillante (#FFD700), neón/lima, glow en texto, gradientes púrpura-azul genéricos. border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas). Grano fílmico sutilísimo opacity .04 sobre toda la página.

PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/equipos posando = descartar y regenerar)
hero.jpg 16:9 sala nocturna VACÍA luz oculta cálida rasante: sillón marfil, muro carbón mate, mesa oscura, lámpara cálida fuera de cuadro, cinematográfica pero serena, sin personas ·
object.jpg 4:5 bodegón chiaroscuro: cuaderno de tapa oscura, lápiz, frasco ámbar sobre piedra oscura, luz cálida puntual ·
texture.jpg 1:1 macro tela/seda carbón con luz rasante cálida, textura rica ·
corridor.jpg 16:9 pasillo nocturno simétrico vacío con focos cálidos empotrados y obra enmarcada tenue, sereno, nada tétrico.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero pantalla completa: kicker champán uppercase ("SALUD MENTAL · LAS CONDES / ONLINE — RESERVA PRIVADA"), H1 gigante marfil leading 0.95 tracking negativo, subhead gris cálido, CTA sólido champán texto tinta. hero.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay negro plano). Grano fílmico .04. Banda fina: "Evaluación privada en 72h · Entrada discreta · Online y presencial".
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ "La privacidad es parte del tratamiento." Editorial corto 2 párrafos: por qué NO mostramos caras ni antes/después, por qué la ausencia de testimonio público es garantía. Copy base: "Nuestros mejores resultados son los que nadie puede señalar. La reserva no es marketing, es clínica." Sin testimonios públicos JAMÁS: la ausencia es el argumento premium.
#cifras  Count-up tabulares serif al entrar (IntersectionObserver): "+12 años", "+1.400 procesos continuos", "96% continúa su plan", "1 profesional a cargo, siempre el mismo". Evidencia numérica en vez de fotos.
#servicios  Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Psicoterapia adultos · Psiquiatría · Infanto-juvenil (con padres) · Pareja y familia · Crisis y regulación · Grupos reducidos. La fila revela panel var(--superficie) con duración 50 min y precio "desde" CLP + "para quién es". En móvil tap = acordeón.
#precios  "Valores claros, sin sorpresas": tabla sobria 5 filas precio desde en CLP tabulares (Evaluación privada 50 min, Psicoterapia, Psiquiatría control, Terapia pareja, Grupo) + nota honesta: "El valor final se confirma en tu evaluación privada. Boleta reembolsable con glosa neutra. Nunca partimos sin objetivos escritos." Sin "más elegido".
#metodo  3 columnas filetes verticales 1px: 01 Evaluación privada → 02 Plan y frecuencia por escrito → 03 Seguimiento continuo. Números grandes champán apagado. Sin iconos.
#galeria  object.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Papel carbón 300g — luz cálida 2700K"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cómo garantizan la discreción? ¿Cuánto cuesta la evaluación privada? ¿Atienden Fonasa/Isapre? ¿Presencial u online? ¿Qué pasa si no conecto con mi terapeuta? ¿Cómo pido hora si estoy en crisis? Respuestas con teléfono y derivación responsable a urgencia.
#reserva  Sobre var(--superficie): headline corto "Reserva tu evaluación privada.", teléfono marfil gigante tabular, botón champán, horarios, dirección. Micro-línea: "Respondemos personas. Si no contestamos, devolvemos el llamado el mismo día — con discreción." Footer sobrio: marca pequeña, facturación neutra, legal Chile, año, consentimiento informado.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón champán "Reservar"; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Reservar evaluación privada"). Cursor personalizado sutil (punto champán 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px champán · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
PROHIBIDO: personas/caras/manos, cabezas entre manos, cerebros/puzzles, testimonios con foto o estrellas, marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales (cerebro/corazón), glow/neón, #000/#FFF puros, dorados brillantes, overlays negros planos sobre foto, emojis, stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos). Todo español de Chile, alt="" descriptivos, contraste AA, focus-visible ring champán, ::selection champán/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
Ética: sin diagnósticos, sin promesas de cura, sin urgencia falsa, derivación responsable.

PROCESO OBLIGATORIO
1) Duplica _plantilla → salud-mental-noctua-oscuro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas (#inicio, #cifras, #precios, #faq, #reserva obligatorios). 4) npm run propuesta -- salud-mental-noctua-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build -- salud-mental-noctua-oscuro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio, quién-te-atiende y cómo-garantizan-discreción respondidos antes del footer? ¿Se siente club privado o página oscura genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.
```
