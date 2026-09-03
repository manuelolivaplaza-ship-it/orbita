# SUPER-PROMPT — CENTRO-MEDICO · GRUPO "CLARO MINIMALISTA / NEUTRO" (35 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para centros médicos y policlínicos de especialidades en Chile cuya estética real es
**clara, limpia y luminosa**: blanco/hueso dominante, tipografía display serena, grilla
disciplinada, acento contenido, fotografía editorial sobria. Es la estética del centro médico de
barrio alto y comuna que vende confianza cercana: consultas por especialidad, procedimientos
ambulatorios y convenios previsionales sin estridencia. Referencias reales verificadas del rubro:
IntegraMédica (integramedica.cl) — la red privada más grande de Chile, blanco institucional,
azul corporativo #004B8D, jerarquía serena y navegación por especialidad (25 centros,
la clínica que “te ve hoy”); VidaIntegra / RedSalud (redsalud.cl) — red clara y ordenada con
reserva online protagonista; internacionalmente, Mayo Clinic (mayoclinic.org) como el canónico
del health system claro: nav blanco, tipografía display ligera, azul profundo sobre papel #ffffff,
y One Medical (onemedical.com) — concierge médico claro minimalista, aire y confianza editorial.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
2. Stack: React 19 + Vite 6 + TypeScript + **CSS puro** (sin Tailwind, sin UI kits).
3. Comandos obligatorios desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`:
   - `npm run propuesta` — levanta la propuesta en dev.
   - `npm run propuestas:build` — build de producción (debe compilar limpio antes de terminar).

## PASO 0 — IDENTIDAD
Lee `PROMPT.md` del proyecto (fuente de verdad: nombre del centro, headline literal,
paleta, tipografías, tono español de Chile). Mantén la identidad; solo micro-mejoras de redacción.

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (blanco/hueso según paleta del proyecto). PROHIBIDO secciones negras/noche
  u overlays oscuros.
- Accent (definido en PROMPT.md: azul clínico institucional, teal sobrio o verde salvia) en MENOS del 5% de la UI.
- Cero fotos stock de doctores con fonendo apuntando a cámara, enfermeras sonrientes cruzadas de
  brazos, corazones latiendo, cruces médicas gigantes o pasillos de hospital genéricos. Solo las
  imágenes editoriales ya presentes en `public/media` (nada externo). Si no hay, tipografía y
  layout llevan el diseño solos.
- Sin badges de rating ni estrellas, sin marquee, sin planes SaaS, sin testimonios con foto,
  sin logos de convenios inventados, sin iconos decorativos como pieza central.
- Todo texto y alt en español de Chile. Radios 0. Botón sólido ink sobre fondo claro.
- Secciones e ids fijos del arco de conversión: **#precios**, **#cifras**, **#faq**
  (las anclas del nav deben funcionar siempre).

## DISEÑO — CRAFT EDITORIAL SALUD CLARA
1. Tipografía: display sans serena definida en PROMPT.md, leading 0.9–0.95 y tracking
   negativo; kickers uppercase tracking amplio (ESPECIALIDAD / SEDE / HORARIO); números tabulares
   en valores (CLP), horarios y fichas de especialidad.
2. Layout: grilla 12 columnas, whitespace generoso (py-28+), max-width consistente, divisores
   de 1px, captions de 11–12px estilo nota administrativa (sede y piso, horario de atención,
   convenios FONASA/ISAPRE, tiempo de espera estimado, director médico).
3. Motion: clip-reveal del h1 por líneas, stagger ~0.12s, ease [0.22,1,0.36,1], hovers 150–250ms,
   nav hide-down/show-up, barra de progreso 2px, acordeones FAQ ~280ms. Respeta prefers-reduced-motion.
4. Responsive real: hero legible a 360px, sticky CTA móvil discreto tras el hero ("Agendar hora"
   / "Reservar bono"). Cards de especialidad con icono línea fina + horario + CTA sobrio.

## ARCO DE CONVERSIÓN (obligatorio)
- **#precios** — valores claros por tipo de atención (tabla editorial sobria en CLP, no cards
  SaaS): consulta médica general, consulta por especialidad (medicina interna, pediatría,
  ginecología, traumatología, dermatología, otorrino, cardiología), evaluación inicial /
  control, procedimientos ambulatorios menores (curaciones, infiltraciones, ECG, ecografía),
  bono PAD / bono electrónico; convenios FONASA / ISAPRE, bono y reembolso indicados al margen;
  sin letra chica oculta. Valores con separador de miles chileno.
- **#cifras** — años operando, pacientes atendidos al año, médicos por especialidad,
  especialidades disponibles, % de horas asignadas en ≤48h, sedes/comunas con atención,
  convenios previsionales activos (números tabulares grandes, confianza editorial).
- **#faq** — acordeón con las dudas típicas del rubro: cómo reservar hora (web / teléfono /
  WhatsApp / bono electrónico), qué convenios y previsiones aceptan (FONASA A-D, ISAPRE, seguros,
  particular), qué llevar a la primera consulta (CI, orden médica, exámenes previos), cómo retirar
  o ver resultados de exámenes (portal paciente), presencial vs telemedicina (cuándo aplica),
  políticas de anulación y reprogramación (plazo 24h), formas de pago (efectivo, débito/crédito,
  WebPay), boleta/factura y reembolso ISAPRE.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md y todo src/.
2) Implementa sección por sección respetando ids/anclas.
3) `npm run propuestas:build` hasta compilar limpio. No agregues dependencias nuevas;
   no toques package.json ni vite.config.ts salvo necesidad crítica.
4) Termina con un resumen breve de qué mejoraste.

Calidad > velocidad: esta propuesta se usa para vender rediseños a centros médicos
y policlínicos chilenos del grupo claro minimalista (35 sitios con esta estética de 45
capturados; 5 oscuros quedan documentados sin prompt por <10). Benchmark chileno claro:
que se sienta tan confiable como pedir hora en IntegraMédica/RedSalud, pero con la
cercanía de tu centro médico de comuna que te conoce por tu nombre.
