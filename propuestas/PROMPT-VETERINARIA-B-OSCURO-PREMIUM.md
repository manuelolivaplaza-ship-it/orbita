# SUPER-PROMPT — VETERINARIA B · GRUPO "OSCURO / PREMIUM MINIMAL REAL" (21 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas veterinarias chilenas cuya estética real (medida por captura
renderizada) es **oscura y premium minimal**: fondo noche dominante, tipografía como joya,
imagen clínica presentada con foco. Es la estética de la veterinaria de especialidad y
cirugía: vende precisión, tecnología y calma — no peluquería canina.
Benchmark REAL verificado del rubro en este mismo segmento: Los Avellanos
(veterinarialosavellanos.cl), Dermoveterinaria Vidas (dermoveterinariavidas.cl), Centro
Animal (centroanimal.cl), Go Animal (goanimal.cl), Dr. Yury (dryury.cl). Internacionalmente,
el canónico del veterinary dark premium: Bond Vet dark sections (bondvet.com),
Veterinary Emergency Group (veterinaryemergencygroup.com), Southern Animal Health
(southernanimalhealth.com.au) — oscuridad cálida, serif/sans contrastadas, la sala como
galería iluminada.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/veterinaria-b-oscuro`.
2. En tu copia: package.json → "name": "veterinaria-b-oscuro". meta.json →
   { "title": "NOCTUA VET — Clínica Veterinaria de Especialidad · Propuesta Órbita", "client": "NOCTUA VET" }.
   index.html → <html lang="es">, <title>NOCTUA VET — Clínica Veterinaria de Especialidad</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- veterinaria-b-oscuro`
   - `npm run propuestas:build -- veterinaria-b-oscuro` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/veterinaria-b-oscuro/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: NOCTUA VET — Clínica Veterinaria de Especialidad
H1: "La serenidad también se practica en veterinaria."
Subhead: "Cirugía, imagenología y cuidados intensivos con protocolo hospitalario.
Evaluación honesta antes de cualquier procedimiento."
CTA principal: "Reservar evaluación"
Urgencias: +56 9 8765 4321 (visible permanente)
Contacto: hola@noctuavet.cl · Las Condes, Santiago
Horario: Lun–Vie 9:00–20:00 · Sáb 10:00–15:00 · Urgencias 24/7

## PALETA (regla dura — la oscuridad tiene capas, variables CSS en :root)
--fondo #131614 (verde-negro profundo) · --superficie #1B201D · --superficie-alta #232A26 ·
--filete #2E3630 · --hueso #EDEAE3 (texto, NUNCA #FFF) · --gris-calido #98A29B ·
ACENTO ÚNICO --verde-lumen #7FC8A9 (<5% de la UI). PROHIBIDO #000/#FFF puros, verde neón
(#39FF14 y familia), glow en texto, gradientes púrpura-azul genéricos.
border-radius: 0 en TODO. Profundidad por capas de fondo + filetes 1px (nunca sombras difusas).

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/manos/mascotas tiernas = descartar)
hero.jpg 16:9 sala quirúrgica crepuscular, luz oculta cálida, instrumental acero sobre paño
verde quirúrgico, VACÍA · object.jpg 4:5 bodegón chiaroscuro de estetoscopio y frascos ámbar
sobre piedra oscura · texture.jpg 1:1 macro tela verde quirúrgica con luz rasante ·
corridor.jpg 16:9 pasillo nocturno simétrico con focos empotrados cálidos, cinematográfico
pero sereno.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero pantalla completa: kicker verde-lumen uppercase, H1 gigante hueso leading
           0.95, subhead gris cálido, CTA sólido verde-lumen texto tinta. hero.jpg lateral
           7/12 integrado por degradado hacia el fondo (NUNCA overlay negro plano). Grano
           fílmico sutilísimo (opacity .04) sobre toda la página.
#filosofia ★ LA SECCIÓN QUE DIFERENCIA ★ editorial corto: "Protocolo hospitalario para quien
           no puede decir dónde le duele." Copy base: "Cada indicación se explica; cada precio
           se confirma antes. La confianza se construye con criterio, no con promesas."
           Sin testimonios públicos JAMÁS: la discreción es el argumento premium.
#cifras    Count-up tabulares serif al entrar: "+12 años", "+18.000 pacientes", "97% continúa
           su plan de control", "2 médicos titulados siempre los mismos". Evidencia numérica
           en vez de before/after.
#especialidades Índice numerado 01–06 lista editorial con HOVER FLIP-CARD (280ms): Cirugía
           soft tissue · Imagenología (RX/ecografía) · Laboratorio clínico · Hospitalización ·
           Oncología paliativa · Urgencias 24/7. La fila revela panel var(--superficie) con
           duración típica y precio "desde". En móvil tap = acordeón.
#precios   "Precios claros, sin sorpresas": tabla sobria 5 tratamientos precio desde en CLP
           tabulares + nota legal honesta ("El valor final se confirma en la evaluación.
           Nunca partimos un procedimiento sin tu aprobación.").
#metodo    3 columnas filetes verticales 1px: 01 Triage → 02 Diagnóstico explicado →
           03 Plan y seguimiento, números grandes verde-lumen apagado.
#galeria   object.jpg + texture.jpg como OBRAS DE GALERÍA: filete 1px, caption técnica 11px,
           revelado cortina clip-path inset 700ms al entrar, Ken Burns 36s solo en UNA.
#faq       6 acordeones honestos (280ms): ¿Atienden urgencias de madrugada? ¿Cuánto cuesta la
           evaluación? ¿Quién realiza la cirugía? ¿Puedo acompañar a mi mascota? ¿Qué formas
           de pago aceptan? ¿Cómo sigue el post-operatorio?
#reserva   Sobre var(--superficie): headline, teléfono hueso gigante, botón verde-lumen,
           horarios. Micro-línea: "Respondemos personalmente. Sin call centers."
           Footer sobrio: marca pequeña, dirección, legal Chile, año.

## CONVERSIÓN SIEMPRE PRESENTE
Nav translúcido blur sutil con botón verde-lumen "Reservar"; hide-down/show-up + compacta
24px al scroll. Sticky CTA móvil discreto tras el hero. Cursor personalizado sutil (punto
verde-lumen 6px con lerp, se agranda sobre links; desactivado en touch/reduced-motion).

## MOTION (CSS/transiciones exactas)
Barra progreso 2px verde-lumen · H1 clip-reveal líneas stagger .12s ease(0.22,1,0.36,1) ·
galería cortina clip-path · count-up 1.2s · flip-cards 280ms · hovers 150–250ms · TODO respeta
prefers-reduced-motion.

## REGLAS DURAS (incumplir una = trabajo rechazado)
PROHIBIDO: personas/caras/manos, mascotas de stock, antes/después, testimonios con foto o
estrellas, marquee, planes SaaS, iconos centrales, glow/neón, #000/#FFF puros, overlays negros
planos sobre foto, emojis, stock externo, inglés. Todo español de Chile, alt="" descriptivos,
contraste AA, focus-visible ring verde-lumen, ::selection verde-lumen/texto oscuro, responsive
real a 360px, radios 0, padding ≥112px desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes. 4) npm run propuesta -- veterinaria-b-oscuro,
revisa en navegador y corrige. 5) npm run propuestas:build -- veterinaria-b-oscuro hasta cero
errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts salvo
necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿precio,
urgencias y quién-cirugía respondidos antes del footer? ¿Se siente clínica de especialidad o
página genérica?). Itera hasta lo primero. Calidad > velocidad. 7) Resumen breve final.
