# SUPER-PROMPT v3 — UNIVERSIDAD · ÉTER-CLARO · "LUZ ACADÉMICA" (17 universidades privadas · 87 A+B Maps 2026-08-25)

> Pega este bloque completo en la IA que construye el sitio (opencode muse-spark-1.2).
> Benchmark REAL analizado 2026 — **87 leads A+B Maps (solo crm-maps-AB.json) → 65 dominios únicos dedup por dominio conservando mayor buyScore → 30 públicas/tradicionales excluidas → 28 fetched → 17 privados válidos (200+título)**. **Capturas Edge BLOQUEADAS 0/17 por OOM (98% RAM) — agrupación CSS provisional**: **Neutro/plantilla — 17 sitios (100% del universo válido)**. Estética real medida por CSS: blanco/hueso dominante, WordPress/Elementor genérico, tipografía sin autoridad, fotos stock intercambiables, admisión confusa. No hay grupo pixel oscuro validado — la oportunidad es total. Referentes verificados del grupo: **U. de los Andes (uandes.cl · 81 · Las Condes, carmín #ce0019 editorial sobrio)**, **U. del Desarrollo (udd.cl · 81 · violeta #7a00df premium)**, **UNAB (unab.cl · 75 · 5 sedes, React/Next, 6 años acreditada)**, **U. Adolfo Ibáñez (uai.cl · 75 · Vitacura, minimal tinta)**, **U. San Sebastián (uss.cl · 75 · azul #1b3860 + oro #ceb37c institucional)**, **U. Mayor (umayor.cl · 75)**, **U. Autónoma (uautonoma.cl · 72)**, **UDLA (admision.udla.cl · 69)**, **Finis Terrae (finis.cl · 69)**, **Santo Tomás (santotomas.cl · 66)**, **UDP (udp.cl · 66 · rojo #c23633)**, **UBO (ubo.cl · 66 · azul #1e73be)**, **Academia Humanismo (academia.cl · 63 · naranja #f47c20)**, **USEK (usek.cl · 63 · violeta #5d4fff)**, **UAH (uahurtado.cl · 60 · naranja #ff6b00)** y **U. Central (ucentral.cl · 57)**. Internacional: **Stanford (claridad + prueba social)** y **U. de Navarra (luz + humanismo)**.
> Objetivo: que un rector o directora de Admisión vea la propuesta y piense "así debería verse nuestra admisión 2026-2027 — clara, acreditada y sin letra chica".

```text
ROL
Eres director de arte + frontend senior nivel Awwwards. Construye el sitio completo de una universidad privada chilena premium en modo CLARO editorial. Presupuesto percibido: USD 40.000. Debe sentirse como una revista académica luminosa (Monocle + campus): luz norte, papel hueso, tipografía con autoridad, fotos documentales reales y un arco de conversión que lleva de curiosidad a postulación sin fricción. Sobrio, creíble, nada feria universitaria con globos.

CONTEXTO DEL PROYECTO (dónde y cómo se construye)
Trabajas dentro del monorepo Órbita en C:\Users\manue\OneDrive\Desktop\órbita.
1) Copia la plantilla: duplica la carpeta propuestas/_plantilla a propuestas/universidad-eter-claro
   (copia ARCHIVOS, no node_modules). Esa será tu app. Si universidad-eter-claro ya existe, reutilízala (limpia src/ antes).
2) En tu copia: package.json → cambia "name" a "universidad-eter-claro". meta.json →
   { "title": "ÉTER — Universidad Privada · Propuesta Órbita",
     "client": "Universidad privada (grupo Neutro/plantilla 17)",
     "brand": "ÉTER", "sector": "universidad",
     "description": "Propuesta clara luminosa para universidades privadas chilenas: orden académico, prueba social y admisión sin fricción." }.
   index.html → <html lang="es">, <title>ÉTER — Universidad Privada</title>.
3) STACK REAL de la plantilla: React 19 + TypeScript + Vite 6, estilos en src/styles.css
   con CSS puro (variables CSS, grid, clamp()). NO existe Tailwind ni Bootstrap: todo el
   diseño va en CSS propio bien organizado. ÚNICA dependencia extra PERMITIDA si la
   necesitas para animaciones: "motion" (npm i motion). Nada más.
4) Comandos (desde la raíz de órbita):
   - Desarrollo: npm run propuesta -- universidad-eter-claro   → http://localhost:3010
   - Build:      npm run propuestas:build -- universidad-eter-claro   (compila tsc + vite)
   La propuesta queda servida en /propuestas/universidad-eter-claro. El build debe pasar SIN errores.
5) IGNORA el resto de carpetas de propuestas/ (otros sitios): son de otros clientes. No las leas, no las modifiques.
   Solo creas/editas DENTRO de universidad-eter-claro/.
6) Las imágenes generadas van en TU app: propuestas/universidad-eter-claro/public/media/.

BENCHMARK A IMITAR (disciplina, no copia)
UAndes (sistema cromático carmín sobrio #ce0019) · USS (dupla azul #1b3860 + oro #ceb37c institucional) · UDD (violeta #7a00df distinción) · UNAB (escala multi-sede, acreditación 6 años) · UAI (minimal tinta premium) · Stanford (claridad + cifras) · U. de Navarra (humanismo luminoso). Grilla 12 cols, whitespace generoso, tipografía serif display para H1 + sans monolinear para filetes.

MARCA DEMO (textos literales, no cambiar)
Nombre: ÉTER — Universidad Privada
H1: "Una universidad que se elige con claridad."
Subhead: "Carreras acreditadas, profesores con nombre y apellido, y un proceso de admisión que puedes entender en 5 minutos. Sin letra chica, sin vueltas."
CTA principal: "Postular ahora" · secundario: "Conocer carreras"
Contacto: +56 2 2840 3315 · admision@eter.cl · Providencia, Santiago
Horario: Lun–Vie 9:00–19:00 · Sáb 9:00–13:00
Acreditación: Acreditada 5 años (2024-2029) · Sedes Santiago / Viña del Mar / Concepción (demo)
Dolor real que ataca el copy (no inventar otro):
- "Tu web actual se ve como cualquier WordPress con plantilla: no transmite por qué elegirte y no convierte visitas en postulaciones."
- "El futuro estudiante no entiende cuánto pagará realmente, si tiene gratuidad/beca ni qué puntaje necesita — se va a otra pestaña."
- "Fotos de birretes lanzados al aire no reemplazan prueba social: cifras, empleabilidad y egresados con nombre."

PALETA (regla dura, variables CSS en :root)
--papel #F8F6F0 (hueso cálido, fondo SIEMPRE) · --superficie #FFFFFF · --tinta #121B2A (azul-noche, texto principal) · --gris #6B7280 · --gris-suave #9AA3B2 · --linea #E2DDD4 · --linea-fuerte #D6CFBF ·
ACENTO ÚNICO --acento #14365F (azul institucional profundo, <5% de la UI: CTA sólido, kickers, links activos, filete activo, subrayados).
Oro sutil #C9A86A solo como filete 1px horizontal o detalle tipográfico, nunca como fondo ni botón. border-radius: 0 en TODO salvo 50% circular (avatars). Cero sombras difusas: separación por filetes 1px var(--linea) y whitespace. PROHIBIDO #000/#FFF puros en fondos/textos de sección (usa var(--papel) y var(--tinta)).

PASO 0 — MEDIA (public/media/, máx 4 imágenes; personas genéricas de stock = descartar y regenerar)
hero.jpg 16:9 patio interior de campus universitario VACÍO al mediodía, hormigón claro + madera, bancas vacías, luz norte difusa, sin personas, orden obsesivo ·
biblioteca.jpg 4:5 sala de biblioteca luminosa con estanterías y mesas vacías, luz natural lateral, documental sereno, sin ocupantes ·
detalle.jpg 1:1 macro de papel con sello seco y tipografía en relieve sobre hueso, luz rasante cálida, tipográfico ·
laboratorio.jpg 16:9 laboratorio / taller universitario ordenado, mesas limpias, instrumentos alineados, sin ocupantes, luz clínica suave.
Si no hay media, tipografía y layout llevan el diseño (no uses stock externo, no uses birretes/estudiantes posando).

SECCIONES — ARCO DE CONVERSIÓN (ids fijos, anclas del nav SIEMPRE funcionan)
#inicio    Hero editorial: kicker acento uppercase tracking .14em "UNIVERSIDAD PRIVADA · ACREDITADA 5 AÑOS",
           H1 gigante serif leading 0.92 tracking -0.03em, subhead 2 líneas 18px gris max 62ch, CTA sólido acento texto papel + link subrayado animado 200ms a #carreras ("Conocer carreras").
           hero.jpg derecha 7/12 con caption técnica 11px "Campus Providencia · Patio Central". Banda fina bajo hero (filete 1px):
           "Admisión 2026 abierta · Acreditada 5 años · Gratuidad y becas · Sedes Santiago / Viña / Concepción".

#confianza Barra de confianza bajo hero (filete superior 1px, tipografía tabular 11px): "Acreditada 5 años" · "96% empleabilidad 1er año" · "42 carreras" · "+18.000 titulados" — sin estrellas, sin badges, solo texto.

#carreras  Índice numerado 01–08 editorial (NO cards iguales): Derecho · Ingeniería Comercial · Psicología · Enfermería · Arquitectura · Medicina · Diseño · Pedagogía.
           Cada fila: nombre grande serif 28–32px + sede + duración (10 semestres) + flecha. Hover/tap expande 72px revelando FICHA (280ms): malla resumida (3 ramos troncales), campo laboral 1 línea, arancel referencia "desde $X.XXX.XXX CLP/año" y sello acreditación por carrera. En móvil tap = acordeón. Números apagados var(--gris-suave).

#cifras    Count-up tabulares serif al entrar (IntersectionObserver, 1.2s): "+42 carreras", "96% empleabilidad 1er año", "5 años acreditada", "+18.000 titulados".
           Números grandes tinta 56–72px, + y % en acento 32px. Caption 11px por cifra. Sin gráficos 3D, sin donut charts.

#evidencia Prueba social sin fotos de stock: 3 citas serif itálicas grandes 24–28px con comilla acento 48px, atribución 12px "— Valentina, egresada Derecho 2023 · Fiscalía" / "— Martín, Ing. Comercial 2022 · Banco" / "— Camila, Enfermería 2021 · Clínica".
           Carrusel fade lento 6s pausable + logos de acreditación / empleadores como filetes tipográficos 11px (no marquee infinito, no carrusel de logos con animación perpetua).

#admision  4 pasos con filete superior 1px por paso: 01 Simula tu puntaje → 02 Postula online (10 min) → 03 Entrevista (presencial/online 20 min) → 04 Matrícula. Cada paso con duración, documento necesario y microcopy honesto. CTA "Simular postulación" anclado a #precios.

#precios   "Aranceles claros, sin sorpresas": tabla editorial 6 filas con arancel anual referencia CLP tabulares (separador chileno, sin decimales) — columnas: Carrera | Arancel anual | Matrícula | Beca % ref | Gratuidad — + nota honesta al pie:
           "El arancel final depende de la carrera y beneficios. Se confirma por escrito tras tu postulación. Nunca matriculamos sin entrevista previa."
           Toggle "Con gratuidad / Sin gratuidad" que recalcula valores (solo visual, sin backend). Fila destacada sutil: "Simula tu arancel en 2 min". Debe funcionar perfecto a 360px con scroll horizontal contenido.

#faq       6 acordeones honestos (280ms, uno abierto a la vez): ¿Cuánto cuesta postular? ¿Hay gratuidad/becas y cómo sé si califico? ¿Puedo convalidar ramos de otra universidad/IP? ¿Hay intercambio internacional y dónde? ¿Dónde están las sedes y hay vespertino/online? ¿Cómo es la entrevista de admisión y cuánto demora la respuesta?
           Respuestas con teléfono visible y compromiso de respuesta <24h.

#reserva   Headline corto "Conversemos tu postulación" + teléfono tabular gigante +56 2 2840 3315 + CTA sólido acento "Agendar entrevista" + horarios + dirección Providencia.
           Micro-línea: "Responde Admisión en <24h. Sin call center externo."
           Footer sobrio legal CL (ÉTER Universidad SpA, RUT demo 76.XXX.XXX-X, SII, año, política de privacidad). Sin logos inventados, sin "diseñado por".

CONVERSIÓN SIEMPRE PRESENTE
Nav blanco translúcido blur 8px con botón "Postular" acento fijo; hide-down/show-up + compacta 24px al scroll. Sticky CTA móvil discreto tras el hero ("Postular ahora", aparece tras 40% scroll). Subrayados animados 200ms ease. Focus-visible ring acento 2px. ::selection var(--acento)/texto var(--papel).

MOTION (CSS/transiciones exactas)
Barra progreso scroll 2px var(--acento) · H1 clip-reveal por líneas stagger .12s ease(0.22,1,0.36,1) · fade+rise 24px al entrar (once, IntersectionObserver) · acordeones/expansiones 280ms cubic-bezier(0.22,1,0.36,1) · count-up 1.2s easeOut · hovers 150–250ms · TODO respeta prefers-reduced-motion (si activo: nada se mueve, acordeón instantáneo). Sin parallax agresivo, sin scroll-jacking.

REGLAS DURAS (incumplir una = trabajo rechazado)
- Fondo claro SIEMPRE (papel). PROHIBIDO secciones negras/noche, overlays oscuros sobre fotos, degradados oscuros, neón, glow.
- PROHIBIDO stock universitario cliché: estudiantes lanzando birretes, selfies grupales, manos con diplomas a cámara, aulas abarrotadas posadas, birrete gigante como icono, gráficos 3D isométricos de banco de imágenes, cohetes/bombillas como "innovación". Solo fotos documentales vacías/ordenadas de public/media. Si falta una, el layout tipográfico sostiene.
- Sin badges de rating con estrellas, sin marquee infinito de logos, sin contadores falsos, sin testimonios con foto/estrellas, sin planes "más elegido" con sombra, sin iconitos de birrete/cohete como pieza central, sin marquee de acreditaciones infinito.
- Acento en MENOS del 5% de la UI. Radios 0. Botón sólido acento sobre papel (texto papel). Sin outline fantasma como CTA principal.
- Todo texto y alt en español de Chile, alt descriptivos, contraste AA, focus-visible, ::selection acento/papel, hero impecable a 360px, padding vertical ≥112px desktop / ≥72px móvil, max-width ~1200px, números tabulares OBLIGATORIOS en #precios y #cifras.
- IDs #precios, #cifras, #faq OBLIGATORIOS y navegables (anclas del nav deben hacer scroll suave).

PROCESO OBLIGATORIO
1) Lee PROMPT.md del proyecto y todo src/. 2) Implementa sección por sección respetando ids/anclas. 3) Genera y verifica las 4 imágenes en public/media/ (si falta una, tipografía/layout llevan el diseño solos; no uses externos). 4) npm run propuesta -- universidad-eter-claro, revisa en navegador y corrige a 360px. 5) npm run propuestas:build -- universidad-eter-claro hasta cero errores. No agregues dependencias nuevas salvo "motion" si la necesitas. No toques vite.config.ts salvo crítico. 6) Auto-revisión contra REGLAS DURAS y arco (¿arancel, empleabilidad y cómo postular respondidos antes del footer? ¿Se siente universidad premium o plantilla genérica?). Itera hasta lo primero. 7) Resumen breve final.

Calidad > velocidad: esta propuesta se usa para vender rediseños a 17 universidades privadas chilenas (87 A+B Maps, 100% grupo neutro/plantilla). Si la propuesta queda "bonita pero intercambiable con una clínica o inmobiliaria", itera hasta que una directora de Admisión la quiera para su campus. Benchmark aspiracional chileno: tan clara como UAndes con la calidez de USS, pero con la precisión editorial de Stanford.
```

> Grupo 17: UDD, UAndes, UNAB, UGM, UAI, USS, UMayor, UAutónoma, UDLA, Finis, Santo Tomás, UDP, UBO, Academia, USEK, UAH, UCentral. Dolor transversal: admisión confusa + WordPress genérico + fotos stock birretes + arancel opaco. ÉTER-CLARO resuelve con luz, orden, cifras creíbles y admisión en 5 minutos. Paleta hueso #F8F6F0 + azul institucional #14365F medida del dolor CSS (blanco lavado → papel con carácter, acento contenido).

