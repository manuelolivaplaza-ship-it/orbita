# SUPER-PROMPT v3 — CENTRO-MÉDICO · "NOCTUA-OSCURO" · grupo Oscuro / premium minimal (real) (5 sitios)

> Pega este bloque completo en la IA que construye el sitio.
> Benchmark REAL analizado 2026 — **45 capturas renderizadas de 61 leads A+B Maps (solo crm-maps-AB.json)** · 7 grupos visuales validados. Grupo objetivo: **Oscuro / premium minimal (real) 5 sitios — 56% a 96% píxeles oscuros**. Estética nocturna de centro médico premium: fondo tinta petróleo profundo, tipografía como etiqueta de clínica privada, la consulta presentada como pieza de galería iluminada. Benchmark verificado: **Clínica Team Ñuñoa (clinicateam.cl · 71 · Ñuñoa · 56% oscuro · neutro 59% + negro 6%)** por oscuridad contenida premium, **Centro Comercial Intermodal La Cisterna (intermodales.cl · 77% oscuro · neutro 56% + negro 21% + teal 10%)** por noche institucional, **Clínica Cialo Estética (75% oscuro · neutro 75% + negro 20%)**, **Clínyco (66% oscuro · negro/profundo 62% + neutro 24% + azul 4%)**, **Salud Nacional Providencia (saludnacional · 96% oscuro · neutro 86% + negro 10%)** por noche absoluta. Todos medidos con dark_pct real por píxeles. Internacional: **One Medical dark editorial** + **Cleveland Clinic noche cálida en capas** + **Aesop (aesop.com)** por oscuridad contenida premium.
> Objetivo: que quien busca centro médico privado premium y valora discreción (sin sala de espera llena, con estacionamiento y bono electrónico prioritario) sienta "aquí me atienden sin fila y con ficha impecable" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un centro médico / policlínico premium nocturno chileno. Presupuesto percibido: USD 16.000. Editorial noche cálida + rigor clínico + discreción absoluta. No es centro médico de caja rápida: es policlínico donde la hora se respeta y la ficha no se pierde entre papeles.

CONTEXTO DEL PROYECTO
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/centro-medico-noctua-oscuro
   (copia ARCHIVOS, no node_modules).
2) En tu copia: package.json → "name": "centro-medico-noctua-oscuro". meta.json →
   { "title": "NOCTUA — Centro Médico · Propuesta Órbita", "client": "NOCTUA", "brand": "NOCTUA", "sector": "centro-medico",
     "description": "Propuesta oscura premium para centros médicos chilenos: especialidades, bono electrónico y atención sin espera." }.
   index.html → <html lang="es">, <title>NOCTUA — Centro Médico · Atención premium sin espera</title>.
3) STACK REAL: React 19 + TypeScript + Vite 6, estilos en src/styles.css con CSS puro. NO Tailwind.
   ÚNICA dependencia extra PERMITIDA: "motion".
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- centro-medico-noctua-oscuro → http://localhost:3010
   - Build:      npm run propuestas:build -- centro-medico-noctua-oscuro (debe compilar limpio)
   La propuesta queda en /propuesta/centro-medico-noctua-oscuro.
5) IGNORA el resto de carpetas de propuestas/. Solo trabajas DENTRO de centro-medico-noctua-oscuro/.
6) Las imágenes generadas van en TU app: propuestas/centro-medico-noctua-oscuro/public/media/.

BENCHMARK A IMITAR
Clínica Team Ñuñoa (56% oscuro, premium contenido) · Intermodal La Cisterna 77% (noche institucional con teal 10%) · Cialo 75% (noche estética neutra) · Clínyco 66% (negro 62% dominante) · Salud Nacional 96% (noche absoluta). Internacional: Aesop (oscuridad cálida en capas) + Cleveland Clinic dark + One Medical noche.

MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA — Centro Médico
H1: "Medicina sin sala llena."
Subhead: "Especialidades con hora exacta, bono electrónico prioritario y portal paciente. 30 minutos por atención — sin atraso en cadena."
CTA principal: "Agendar hora premium" · secundario: "Ver especialidades"
Contacto: +56 2 2840 3315 · hola@noctuacentromedico.cl · Las Condes / Vitacura — estacionamiento privado, acceso directo
Horario: Lun–Vie 8:00–20:30 · Sáb 9:00–14:00 · Reserva web prioritaria 24/7
Badges silenciosos (no hero): "Bono electrónico prioritario · Portal paciente · Estacionamiento privado"

DOLOR REAL QUE ATACAS
- "Sacaste hora a las 10:00 y te atienden a las 11:30 haciendo fila de pie."
- "No sabes si tu ISAPRE cubre y te enteras en la caja."
- "Te derivan 3 veces porque la especialidad no estaba clara desde el inicio."
- "Resultado de examen en sobre de papel que se pierde."
- Micro-copy honesto: "Hora exacta. Si nos atrasamos 15 min, te avisamos por WhatsApp — no te dejamos sentado mirando el reloj."

PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root — medida de 5 capturas: 56-96% oscuro, avg 74% dark)
--fondo #0F1412 (tinta petróleo profundo) · --superficie #1B2220 · --superficie-alta #252E2B ·
--filete #2E3834 · --hueso #E8E4DE (texto, NUNCA #FFF) · --gris-calido #9CA3A0 ·
ACENTO ÚNICO --teal-claro #3EB5A6 (<5% de la UI: CTA sólido, kickers, estados activos, links). PROHIBIDO #000/#FFF puros, azul neón (#0096FF), verde lima (#BFFF00), glow en texto, gradientes púrpura-azul genéricos, dorado brillante #FFD700. border-radius: 0 en TODO. Profundidad por capas + filetes 1px (nunca sombras difusas).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; doctores posando con fonendo / enfermeras sonriendo / corazones neón / cruces gigantes / manos con guantes apuntando = descartar)
lab.jpg 16:9 consulta nocturna VACÍA, camilla oscura lino grafito, mesa roble oscuro, luz oculta cálida rasante, instrumental desenfocado, penumbra elegante, sin personas ·
measure.jpg 4:5 bodegón chiaroscuro: fonendo acero, cuaderno clínico y tarjeta bono electrónico sobre piedra oscura ·
texture.jpg 1:1 macro lino oscuro / cuero técnico con luz rasante cálida ·
corridor.jpg 16:9 pasillo consulta nocturno simétrico con focos cálidos empotrados, cinematográfico sereno, sin gente.
Si falta una, tipografía y layout llevan el diseño solos.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker teal-claro uppercase ("CENTRO MÉDICO PREMIUM · LAS CONDES / VITACURA · HORA EXACTA"), H1 gigante hueso leading 0.95 tracking negativo, subhead gris cálido, CTA sólido teal-claro texto tinta. lab.jpg lateral 7/12 integrado por degradado hacia --fondo (NUNCA overlay negro plano). Grano fílmico sutilísimo opacity .04 sobre toda la página.
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "La hora se respeta." Copy: "30 minutos por paciente. Sin sobrecupo. Si tu caso no es de nuestra especialidad, te derivamos donde corresponde — no te retenemos para facturar."
#cifras    Count-up tabulares serif al entrar: "+15 años", "+14 especialidades", "94% atención a la hora", "+22 médicos mismo equipo". Evidencia numérica en vez de fotos de doctores sonriendo.
#servicios  Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Medicina interna · Cardiología · Dermatología premium · Traumatología · Ginecología · Procedimientos ambulatorios (ECG, ecografía, infiltraciones). La fila revela panel var(--superficie) con duración 30 min y precio "desde" CLP. En móvil tap = acordeón.
#precios   "Precios por bono, sin sorpresas": tabla sobria 5 filas precio desde en CLP tabulares (Consulta general, Consulta especialidad premium, Control, ECG/ecografía, Procedimiento menor) + columna "FONASA / ISAPRE / Particular" + nota legal honesta: "Bono electrónico prioritario. El valor final se confirma al agendar según previsión. Nunca atendemos sin bono emitido y ficha creada."
#metodo    3 columnas filetes verticales 1px: 01 Agenda prioritaria (web/telefónica con bono) → 02 Atención 30 min (qué traer: CI, orden, exámenes) → 03 Portal paciente (resultado, receta y derivación si aplica). Números grandes teal-claro apagado.
#galeria   measure.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px, revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Cómo agendo con bono electrónico prioritario? ¿Qué previsión cubren y cómo es el reembolso? ¿Qué llevo a la primera atención? ¿Portal paciente — cómo veo exámenes y recetas? ¿Atienden telemedicina premium cuándo corresponde? ¿Política de anulación y qué pasa si el médico se ausenta? Respuestas con teléfono visible.
#reserva   Sobre var(--superficie): headline corto "Hora exacta. Sin espera.", teléfono hueso gigante tabular, botón teal-claro, horarios, dirección con estacionamiento. Micro-línea: "Responde administración premium, no bot. Si no contestamos, devolvemos el llamado en 30 min hábil." Footer sobrio: marca pequeña, dirección, legal Chile, año.

CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón teal-claro "Agendar hora"; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar hora"). Cursor personalizado sutil (punto teal-claro 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

MOTION
Barra progreso 2px teal-claro · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) · galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta prefers-reduced-motion.

REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, corazones latiendo, cruces gigantes, testimonios con foto o estrellas, marquee de logos, contadores falsos, planes SaaS "más elegido", iconitos centrales (cruz/corazón), glow/neón, #000/#FFF puros, overlays negros planos sobre foto, emojis, stock externo, inglés. Fondo oscuro en capas SIEMPRE (nada de bloques blancos). Todo español de Chile, alt descriptivos, contraste AA, focus-visible ring teal-claro, ::selection teal-claro/texto oscuro, responsive real a 360px, radios 0, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.

PROCESO OBLIGATORIO
1) Lee PROMPT y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta -- centro-medico-noctua-oscuro, revisa en navegador y corrige. 5) npm run propuestas:build -- centro-medico-noctua-oscuro hasta cero errores. 6) Auto-revisión contra REGLAS DURAS y arco (¿precio por previsión, hora exacta y portal respondidos antes del footer? ¿Se siente policlínico premium nocturno o clínica oscura genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros médicos chilenos de estética oscura premium (5 sitios A+B Maps: Team Ñuñoa, Intermodal, Cialo, Clínyco, Salud Nacional — 56-96% dark). Si queda "bien pero genérica clínica oscura", itera hasta que un director médico premium la envidie para su policlínico.
```
