# SUPER-PROMPT — DENTISTA B · GRUPO "TEAL / VERDE AGUA — SALUD DENTAL (claro)" (10 sitios)

Eres director de arte + frontend senior. Vas a construir UNA propuesta comercial de rediseño
reutilizable para clínicas y consultas dentales chilenas cuya estética real (medida por
captura renderizada) es **clara con identidad teal/verde-agua**: papel blanco dominante,
acento teal presente pero contenido, sensación de higiene + cercanía. Es la estética de la
clínica dental moderna y amable: frescura, limpieza y trato cercano sin caer en lo infantil.
Benchmark REAL verificado del rubro en este mismo segmento: NeoDonto (neodonto.cl), Interdent
Maipú (interdentchile.cl), CDC Dental (cdcdental.cl), Clínica Odontológica Condell
(clinicacondell.cl), Clínica Dental Omnia (clinicaomnia.cl), Salud Oral (saludoral.cl).
Internacionalmente, el canónico del teal clínico-amable: Bondi Dental, Maven Dental
(mavendental.com.au), Bupa Dental — teal como higiene contemporánea, aire y palabra clara.

## CONTEXTO DEL PROYECTO
1. Duplica `_plantilla` como base del proyecto (no partas de cero). Está en
   `C:\Users\manue\OneDrive\Desktop\órbita\propuestas\_plantilla`.
   Copia ARCHIVOS, no node_modules. Nombre de carpeta: `propuestas/dentista-b-teal`.
2. En tu copia: package.json → "name": "dentista-b-teal". meta.json →
   { "title": "LAGO AZUL DENTAL — Clínica Dental · Propuesta Órbita", "client": "LAGO AZUL DENTAL",
     "brand": "LAGO AZUL DENTAL", "sector": "dentista",
     "description": "Propuesta clara con acento teal para clínica dental chilena: higiene, cercanía y valores transparentes." }.
   index.html → <html lang="es">, <title>LAGO AZUL DENTAL — Clínica Dental</title>.
3. Stack REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap.
4. Comandos obligatorios (desde la RAÍZ `C:\Users\manue\OneDrive\Desktop\órbita`):
   - `npm run propuesta -- dentista-b-teal`
   - `npm run propuestas:build -- dentista-b-teal` (debe compilar limpio antes de terminar).
5. Las imágenes van en TU app: propuestas/dentista-b-teal/public/media/.

## MARCA DEMO (textos literales, no cambiar)
Nombre: LAGO AZUL DENTAL — Clínica Dental
H1: "Odontología fresca para toda la familia."
Subhead: "Consulta, limpieza y tratamientos con dentistas titulados.
Valores claros desde la primera visita y horas sin esperas."
CTA principal: "Agendar hora" · secundario: "Ver tratamientos"
Urgencias: +56 9 8765 4321 (texto visible permanente: "¿Dolor ahora? Llámanos")
Contacto: hola@lagoazuldental.cl · La Florida, Santiago
Horario: Lun–Sáb 9:30–20:00

## PALETA (regla dura, variables CSS en :root)
--papel #FAFDFB · --tinta #123832 (verde-petróleo profundo) · --gris #6F8880 · --linea #D7E5DE ·
ACENTO ÚNICO --teal #17907E (<5-8% de la UI: CTA principal, kickers, estados activos, links;
el resto neutro). border-radius: 0 en TODO. Cero sombras difusas: separación por filetes
1px var(--linea) y whitespace.

## PASO 0 — MEDIA (public/media/, máx 4 imágenes; caras/sonrisas de stock = descartar)
recepcion.jpg 16:9 recepción luminosa VACÍA con mostrador blanco y pared verde-agua pálido ·
box.jpg 16:9 box dental ordenado con sillón vacío y luz natural lateral ·
detalle.jpg 1:1 macro de superficie cerámica verde-agua con luz suave ·
instrumental.jpg 4:5 bodegón de frascos y instrumental alineado sobre bandeja blanca.

## SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero: kicker teal uppercase ("CLÍNICA DENTAL · LA FLORIDA"), H1 gigante leading
           0.92 tracking negativo, subhead 2 líneas, CTA sólido tinta + link subrayado animado
           a #valores. recepcion.jpg derecha 7/12, caption técnica 11px. Banda fina bajo el
           hero: "Horas puntuales sin esperas · Urgencias dentales durante horario".
#tratamientos Índice numerado 01–06 editorial (NO cards): Evaluación y diagnóstico · Limpieza
           y profilaxis · Restauraciones · Odontopediatría · Endodoncia · Ortodoncia y
           alineadores. Hover/tap expande 64px revelando duración típica y valor "desde"
           (280ms).
#cifras    Count-up al entrar en viewport (IntersectionObserver): "+11 años en la comuna",
           "+8.000 pacientes", "96% recomienda la clínica", "3 dentistas titulados siempre
           los mismos". Números tabulares serif grandes.
#valores   "Valores claros desde la primera visita": tabla editorial 6 filas precio desde en
           CLP tabulares (evaluación, limpieza, resina, urgencia y control, endodoncia un
           conducto, blanquimiento) + nota honesta: "El valor final se confirma después del
           diagnóstico. Nunca partimos un tratamiento sin tu aprobación."
#metodo    3 columnas filete superior 1px: 01 Agendas tu hora → 02 Diagnóstico explicado en
           simple → 03 Tratamiento y control. Sin iconitos centrales: números grandes
           apagados.
#voces     3 testimonios SIN foto, SIN estrellas: cita serif itálica grande, atribución
           "— Javiera, paciente desde 2020 · La Florida". Rotación fade lenta, pausable.
#faq       6 acordeones honestos (280ms): ¿Atienden urgencias el mismo día? ¿Cuánto cuesta la
           evaluación? ¿Atienden niños? ¿Trabajan con isapres o bonos? ¿El presupuesto puede
           cambiar? ¿Qué formas de pago aceptan?
#reserva   Headline corto + teléfono tabular gigante + CTA + horarios + mapa-línea de
           dirección. Footer sobrio legal CL (razón social LAGO AZUL DENTAL SpA, SII, año).

## CONVERSIÓN SIEMPRE PRESENTE
Nav con botón "Agendar" fijo + teléfono de urgencias visible en desktop; nav hide-down/
show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Agendar hora").
Subrayados animados 200ms.

## MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px teal · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) ·
fade+rise 24px al entrar (once) · hovers 150–250ms · acordeones 280ms · count-up 1.2s ·
TODO respeta prefers-reduced-motion (si activo: nada se mueve).

## REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro siempre (papel según paleta). PROHIBIDO secciones negras/noche u overlays
  oscuros sobre fotos.
- PROHIBIDO stock dental cliché: sonrisas perfectas de banco de imágenes, bocas abiertas con
  espejo, dientes animados, niños de stock. Solo las imágenes ya presentes en public/media
  (nada externo, nada nuevo). Si falta una, tipografía y layout llevan el diseño solos.
- Sin badges de rating, sin marquee de logos de isapres, sin contadores falsos, sin
  testimonios con foto, sin planes "más elegido", sin iconitos de diente como pieza central.
- Accent en MENOS del 5% de la UI. Radios 0. Botón sólido ink sobre fondo claro.
- Todo texto y alt en español de Chile, alt="" descriptivos, contraste AA, focus-visible ring
  teal, ::selection con color de marca, hero impecable a 360px, padding vertical ≥112px
  desktop / ≥72px móvil, max-width ~1200px.

## PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando
ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/. 4) npm run propuesta --
dentista-b-teal, revisa en navegador y corrige. 5) npm run propuestas:build -- dentista-b-teal
hasta cero errores. No agregues dependencias nuevas; no toques package.json ni vite.config.ts
salvo necesidad crítica. 6) Auto-revisión contra REGLAS DURAS y arco de conversión (¿valor,
urgencia y quién-trata respondidos antes del footer?). 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a clínicas dentales chilenas
(grupo con esta estética). Si queda "bien pero genérica", itera hasta que una clínica la
envidie para sí misma.
