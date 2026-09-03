# SUPER-PROMPT v3 — CENTRO-MÉDICO · "ÉTER-CLARO" · grupo Claro minimalista / neutro (35 + 4 satélites claros) — 39 sitios

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL analizado 2026 — **45 capturas renderizadas de 61 leads A+B Maps (solo crm-maps-AB.json)** · 7 grupos visuales validados. Cobertura 73.7% (45/61). Grupo objetivo: **Claro minimalista / neutro (35 sitios) + satélites Teal claro (1), Dorado/beige claro (1), Verde salud medio (1), Rojo coral medio (1) — 4 satélites claros/medios** — estética dominante del centro médico chileno de barrio alto y comuna: papel luminoso, grilla disciplinada, tipografía serena, la hora médica como protagonista. Benchmark verificado de este segmento: **IntegraMédica Manquehue (integramedica.cl · buyScore 55 · Las Condes · dark 34%)** por blanco institucional con azul #0060a0, **Grupo Cetep Balmoral (cetep.cl · 69 · 8% oscuro)** por 73% light neutro, **Centro Médico Bulnes (centromedicobulnes.cl · 75 · 9% oscuro)**, **CMT Providencia (cmtsalud.cl · 75 · 2% oscuro · React/Next)**, **Clínica Somno (somno.cl · 75 · 7% oscuro · 1.556 reseñas)**, **Centro Avanzar Ñuñoa (centroavanzar.cl · 77 · 293 reseñas)**, **Clínica Meds La Reina (meds.cl · 77 · 290 reseñas)** por minimalismo extremo 0% oscuro; satélites: **diagnoPRO Temuco (diagnopro.cl · teal 63% · 3% oscuro)** por teal salud claro, **ABCMed San Miguel (abcmed.cl · dorado 24% · 5% oscuro)** por beige premium claro, **OFIMEDICA Peñalolén (ofimedica.cl · verde 38% · 18% oscuro)** por verde salud medio, **Neuroavanza (rojo/coral 30% · 17% oscuro)** por urgencia contenida. Internacional: **Mayo Clinic (mayoclinic.org)** por health system claro canónico (nav blanco, azul profundo #004B8D sobre #ffffff, tipografía display ligera) + **One Medical (onemedical.com)** por concierge médico claro minimalista editorial.
> Objetivo: que quien lleva 2 semanas buscando hora con su FONASA/ISAPRE y le contestan "llame mañana" sienta "aquí pido hora hoy y me atienden con bono electrónico y resultado en portal" antes de scrollear.

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de un centro médico / policlínico de especialidades chileno luminoso y confiable. Presupuesto percibido: USD 14.000. Editorial de calma + rigor clínico + cercanía sin cliché hospitalario. No es hospital frío, no es clínica estética genérica: es el centro médico de comuna que te conoce por tu nombre y te da hora en 48h sin derivarte a call center.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/centro-medico-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app.
2) En tu copia: package.json → cambia "name" a "centro-medico-eter-claro". meta.json →
   { "title": "ÉTER — Centro Médico · Propuesta Órbita", "client": "ÉTER", "brand": "ÉTER", "sector": "centro-medico",
     "description": "Propuesta clara luminosa para centros médicos chilenos: especialidades, bono electrónico y reserva en 48h." }.
   index.html → <html lang="es">, <title>ÉTER — Centro Médico · Especialidades y hora en 48h</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la RAÍZ de órbita):
   - Desarrollo: npm run propuesta -- centro-medico-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- centro-medico-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuesta/centro-medico-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios son de otros clientes). No las leas, no las modifiques. Solo creas/editas DENTRO de centro-medico-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/centro-medico-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
IntegraMédica Manquehue (blanco institucional #e0e0e0 + azul #0060a0) · Grupo Cetep Balmoral (73% light, neutro 70% + azul 7%) · CMT Providencia (72% neutro, 2% oscuro, React/Next) · Bulnes (76% neutro, rojo coral 4% contenido) · Somno Vitacura (81% neutro, 7% oscuro) · Meds La Reina (rojo coral 30% como acento) · Avanzar Ñuñoa (63% neutro + azul 13%) + matiz teal/dorado de diagnoPRO/ABCMed/OFIMEDICA (salud clara) y rojo coral de Neuroavanza como señal de urgencia contenida. Internacional: Mayo Clinic (confianza institucional clara) + One Medical (aire editorial, azul sobre papel).

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Centro Médico
H1: "Tu hora, sin esperar semanas."
Subhead: "Especialidades con bono electrónico, exámenes y resultado en portal. Pides hoy, te ves en 48h — FONASA, ISAPRE y particular, sin letra chica."
CTA principal: "Agendar hora" · secundario: "Ver especialidades y precios"
Contacto: +56 2 2840 3315 · hola@etercentromedico.cl · Providencia / Las Condes / Santiago — 3 sedes, mismo equipo
Horario: Lun–Vie 8:00–20:00 · Sáb 8:30–14:00 · Reserva web 24/7
Badges silenciosos (no hero): "Bono electrónico · FONASA · ISAPRE · Particular · Portal paciente"

DOLOR REAL QUE ATACAS (copy con filo chileno, no genérico clínica)
- "Llevas 3 semanas llamando y te dicen 'llame mañana a las 8:00'."
- "No sabes si es traumatología, medicina interna o kinesiología — y nadie te orienta."
- "Llegas con bono comprado y el doctor 'no vino'."
- "Te mandan a comprar bono presencial a la caja con fila de 40 minutos."
- "Exámenes listos pero tienes que volver presencial a retirarlos en sobre."
- "Telemedicina suena bien hasta que te atienden por WhatsApp sin ficha."
- Micro-copy honesto: "Hora con bono electrónico y resultado en portal el mismo día. Si no hay cupo en 48h, te lo decimos altiro — no te dejamos en espera eterna."

PALETA (regla dura, como variables CSS en :root — medida de 45 capturas: 35 neutros claros avg 6.1% oscuro / 56.9% light)
--papel #F8F6F1 · --papel-2 #EFE9E0 · --tinta #121614 · --gris #8B8680 · --linea #E2DDD4 ·
ACENTO ÚNICO --azul-clinico #115E8A (azul acero institucional desaturado, <5% de la UI: CTA secundario, kickers, links, estados activos; CTA principal es sólido tinta #121614 sobre papel). PROHIBIDO azul neón (#0096FF y familia), teal neón (#00FFC8), verde lima, rojo coral saturado #FF3B30, dorados brillantes, degradados. border-radius: 0 en TODO. Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. Fondo claro SIEMPRE. NUNCA #000/#FFF puros (usa tinta y papel).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; doctores con fonendo apuntando a cámara / enfermeras cruzadas sonriendo / corazones latiendo / cruces gigantes neón / pasillos hospital genéricos = descartar y regenerar)
consulta.jpg 16:9 box de consulta VACÍO luz norte: camilla lino claro, mesa roble clara, ventanal grande, fichas clínicas alineadas y fonendo desenfocado sobre papel, pared hueso — calma clínica absoluta, sin personas ·
still.jpg 4:5 bodegón sobre papel hueso: cuaderno clínico abierto con pauta de control, lápiz grafito, tarjeta bono electrónico y taza cerámica, luz natural ·
detail.jpg 1:1 macro lino pálido / textura camilla con luz rasante suave ·
corridor.jpg 16:9 pasillo/consulta luminosa vacía con luz natural y sombra suave, serena, nada clínico frío.
Si falta una, tipografía y layout llevan el diseño solos. Nada externo a public/media.

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio  Hero: kicker azul-clínico uppercase tracking amplio ("CENTRO MÉDICO · PROVIDENCIA / LAS CONDES · 3 SEDES"), H1 gigante leading 0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta "Agendar hora" + link subrayado animado azul-clínico a #precios. consulta.jpg derecha 7/12, caption técnica 11px ("Box ÉTER — luz norte, 30 min por atención"). Banda fina bajo hero: "Bono electrónico · Resultado en portal · 48h o te avisamos · FONASA/ISAPRE/Particular". Puntos flotantes sutiles opacity .10.
#cifras  Count-up al entrar (IntersectionObserver): "+12 años", "+18.000 pacientes/año", "92% horas asignadas en ≤48h", "14 especialidades mismo lugar". Números tabulares serif grandes. Nota pequeña: "Sin fotos de doctores posando. La evidencia es hora oportuna, no stock."
#evidencia (alias de #cifras — si usas #evidencia, duplica el bloque con id="cifras" o usa ambos ids para cumplir regla dura)
#servicios  Índice numerado 01–08 editorial (NO cards): Medicina interna · Pediatría · Ginecología · Traumatología · Dermatología · Otorrino · Cardiología · Procedimientos ambulatorios (ECG, ecografía, curaciones, infiltraciones). Hover/tap expande 64px revelando "para quién es / duración 20–30 min / desde $XX.XXX" (280ms). Lenguaje plano, sin jerga hospitalaria.
#especialistas  3 columnas filete superior 1px: no fotos de personas — es detalle de espacio/objeto que representa cada línea (box, cuaderno, instrumento). Nombre, credencial breve (Médico cirujano U. de Chile, especialidad, registro), enfoque en 1 línea. "Mismo equipo por sede, no rotación sorpresa".
#precios  "Valores claros, sin sorpresas": tabla editorial 7 filas precio DESDE en CLP tabulares (Consulta general, Consulta especialidad, Control / evaluación, ECG 12 derivaciones, Ecografía abdominal, Curación / procedimiento menor, Bono PAD) + columna "FONASA / ISAPRE / Particular" y nota honesta al margen: "Bono electrónico y reembolso informado antes. El valor final se confirma al agendar según previsión. Nunca partimos sin bono emitido." Sin badge "más elegido". Columna lateral con sedes y horarios (Providencia, Las Condes, Santiago Centro) y convenios (FONASA A-D, ISAPRE, seguros complementarios).
#metodo  3 columnas filete superior 1px: 01 Agenda (web / teléfono / WhatsApp con bono) → 02 Atención (30 min, qué traer: CI, orden, exámenes previos) → 03 Resultado (portal paciente, receta y derivación si aplica). Números grandes azul-clínico apagado. Sin iconitos centrales.
#galeria  still.jpg + detail.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px ("Ficha clínica · 30 min · bono electrónico"), revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq  6 acordeones honestos (280ms): ¿Cómo reservo hora y con bono electrónico? ¿Qué previsión aceptan y cómo es el reembolso FONASA/ISAPRE? ¿Qué llevo a la primera consulta? ¿Cómo veo mis exámenes y resultados (portal paciente)? ¿Atienden presencial y telemedicina — cuándo conviene cada una? ¿Cómo anulo o reprogramo (plazo 24h) y qué pasa si el doctor no asiste? Respuestas con teléfono visible, sin letra chica oculta.
#reserva  Headline corto "Agenda hoy. Atiéndete en 48h." + teléfono tabular gigante + CTA tinta + horarios + direcciones exactas por sede. Micro-línea: "Responden administrativos de sede, no call center. Si no contestamos, devolvemos el llamado el mismo día." Footer sobrio legal CL (Razón social ÉTER SpA, SII, boleta, año).

CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar hora" sólido tinta fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar hora"). Subrayados animados 200ms. Teléfono fijo visible en header y footer.

MOTION (CSS/transiciones exactas; o "motion" si instalada)
Barra progreso scroll 2px azul-clínico · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones/count-up 280ms/1.2s · TODO respeta prefers-reduced-motion (si activo: nada se mueve).

REGLAS DURAS (incumplir una = rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos (noctua es otro prompt).
- PROHIBIDO stock centro médico cliché: doctores con fonendo apuntando a cámara, enfermeras cruzadas sonriendo, corazones latiendo, cruces gigantes, pasillos hospital genéricos, familia feliz en camilla. Solo las imágenes ya presentes en public/media (nada externo). Si falta una, tipografía y layout llevan el diseño solos.
- PROHIBIDO promesas de cura, badges de rating con estrellas, marquee de logos, contadores falsos, planes "más elegido", iconitos de cruz/corazón como pieza central, emojis.
- Accent azul-clínico en MENOS del 5% de la UI. Radios 0. Botón sólido tinta sobre fondo claro (no azul sólido).
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring azul-clínico, ::selection azul-clínico/texto claro, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px.
- Secciones e ids obligatorios: #inicio #cifras #precios #faq #reserva (anclas del nav deben funcionar). Si usas #evidencia, mantén también #cifras.
- Ética: sin diagnósticos en el copy, sin urgencia falsa, derivación responsable si el caso no es de la especialidad.

PROCESO OBLIGATORIO
1) Duplica _plantilla → centro-medico-eter-claro y ajusta name/meta/title. 2) Genera y verifica las 4 imágenes en public/media/. 3) Maqueta sección por sección respetando ids/anclas (#inicio, #cifras, #precios, #faq, #reserva obligatorios). 4) npm run propuesta -- centro-medico-eter-claro, revisa en navegador y corrige. 5) npm run propuestas:build -- centro-medico-eter-claro hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio por previsión, especialidades y cómo-pedir-hora respondidos antes del footer? ¿Se siente centro médico luminoso de comuna o clínica genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros médicos chilenos (grupo de 35 neutros + 4 satélites claros/medios, 39 sitios de 45 capturados — 86% del benchmark). Si queda "bien pero genérica clínica", itera hasta que un director médico la envidie para su policlínico. Benchmark chileno claro: tan confiable como pedir hora en IntegraMédica/RedSalud, pero con la cercanía de tu centro médico de comuna que te conoce por tu nombre.
```
