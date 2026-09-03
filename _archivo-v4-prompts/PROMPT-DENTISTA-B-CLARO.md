# SUPER-PROMPT v4 — DENTISTA B · "SERENA CLARO" · anti-homogeneidad

> Pega este bloque completo en la IA que construye el sitio (opencode, Claude Code, AI Studio…).
> Benchmark REAL: 172 sitios dentista grado B capturados y agrupados por píxeles (no por CSS).
> Grupo visual unico para esta web: **Claro minimalista / neutro — 128 sitios (74,4% del rubro, el masivo)**, familias px neutro, % oscuro tipico 0–6%, blancos dominantes #e0e0e0/#c0c0c0/#a0a0a0. Referentes verificados del CRM con buyScore real: **Mora Pavic Odontologia (morapavic.cl · Las Condes · 74 · 37% oscuro)** — negro editorial contenido, **Dental Vitacura (dentalvitacura.com · Vitacura · 74 · 27% oscuro)** — burdeos contenido sobre blanco, **Clinica Sanz (clinicasanz.cl · Vitacura · 74 · 1% oscuro)** — blanco clinico puro, **Bites Odontopediatria Dra. Claudia (bitesodontopediatria.cl · Vitacura · 74 · 0% oscuro)** — blanco pediatría luminoso, **Dental Oleksiuk (dentaloleksiuk.cl · Providencia · 74 · 2% oscuro)** — neutro con acento azul contenido, **Medimas Dental Care (medimasdentalcare.cl · Providencia · 72 · 2% oscuro)** — cian disciplinado. Seguidos por Centro Medico Brimed (73), Amplus (71), Odontymed (71), Mg Dental (71). Este grupo NO es boutique oscuro ni teal: es el dental chileno serio y ordenado que gana por luz, aire y tabla de valores. Objetivo de precio percibido: USD 18.000–24.000. Este prompt es v4 ANTI-HOMOGENEIDAD: debe parecer hecho por un estudio especializado en SALUD DENTAL, no una landing premium generica.

## ROL

Eres director de arte + frontend senior nivel Awwwards ESPECIALIZADO en clinicas dentales y salud oral: conoces la diferencia entre una ficha de endodoncia y una de ortodoncia, sabes que el paciente chileno desconfia del "desde" sin letra chica, y que la conversion real es "evaluacion explicada + presupuesto por escrito + Isapre/Fonasa claro + el mismo dentista de principio a fin". Disenas como quien ha hecho 20 dentales premium, no como quien adapta una plantilla SaaS.

## CONTEXTO DEL PROYECTO

Trabajas en el monorepo Orbita (`C:\Users\manue\OneDrive\Desktop\órbita`).
1) Duplica `propuestas/_plantilla` → `propuestas/dentista-b-claro/` (archivos, no node_modules). package.json name "dentista-b-claro"; meta.json titulo "SERENA DENTAL — Clinica Odontologica · Propuesta Orbita"; index.html lang="es".
2) Stack real: React 19 + TypeScript + Vite 6, CSS PURO en src/styles.css (variables, grid, clamp). Sin Tailwind. Unica dependencia extra permitida: `motion`.
3) Comandos desde la raiz orbita: dev `npm run propuesta -- dentista-b-claro` (:3010) · build `npm run propuestas:build -- dentista-b-claro`. El build debe pasar sin errores.
4) AISLAMIENTO (regla dura): PROHIBIDO leer, listar o copiar archivos de cualquier otra carpeta de propuestas (son de otros clientes y su CSS esta prohibido como fuente). Se parte SOLO de `_plantilla` virgen. Si te "acuerdas" del CSS de otra propuesta, esa memoria no se usa.

## ADN DEL RUBRO (inviolable — esto te diferencia de cualquier otro rubro)

- **Gramatica: G10 Carta / menu denso (primaria) + G4 Protocolo clinico (apoyo arriba del pliegue).** El PRIMER viewport es promesa clinica + acceso a agenda y prevision + tabla-arancel visible sin scroll infinito. La unidad de repeticion es la FILA DE ARANCEL (no el capitulo editorial, no la semana de kine). El precio vive EN LA FILA, alineado a la derecha en tabular, con nota honesta al pie. NO es storytelling de 7 capitulos: es carta de prestaciones que se escanea en 8 segundos. G4 aparece solo arriba: "que pasa el dia 1 + prevision + sucursal/horario" en banda compacta.
- **Tipografia: T9 — Bitter (display) + Outfit (texto).** PROHIBIDO Inter, Geist, Space Grotesk, Poppins, Montserrat, Roboto, Open Sans, Lato, Arial, system-ui. Escala H1: clamp(2.3rem,5.8vw,4.4rem); numeros de precio en tabular lining, tracking 0. Bitter para titulares clinicos con autoridad cercana; Outfit para cuerpo y filas con legibilidad de tabla. H2 serif 1.6–1.9rem, cuerpo 1.05rem/1.55.
- **Secciones propias con ids del oficio (max 3 compartibles con otros rubros: header, footer, reserva):**
  - `#tratamientos-arancel` — carta densa de prestaciones con precio "desde" en CLP tabular: Limpieza, Restauracion, Endodoncia, Implante, Ortodoncia. Cada fila con hover 160ms que revela duracion tipica + que incluye.
  - `#primera-evaluacion` — que incluye la evaluacion de 45 min: scanner/radiografia, diagnostico explicado en palabras simples, presupuesto por escrito, plan a tu ritmo. Tiempo, pasos y entrega.
  - `#isapre-reembolso` — Fonasa / Isapre (reembolso y bono) / particular: como pagas, boleta reembolsable, convenios reales, sin letra chica. Tabla de 3 columnas filete 1px.
  - `#especialidades-reales` — las del box de SERENA (no 12 genericas): Endodoncia microscopica, Implantologia, Ortodoncia alineadores, Estetica adhesiva. 4 bloques, no cards con icono de diente gigante.
  PROHIBIDO el arco `#inicio #cifras #catalogo #precios #metodo #galeria #faq #reserva` como secuencia. Cada id debe leerse como jerga de clinica dental chilena.
- **Firma de motion de oficio:** filas de arancel con highlight 160ms (no stagger 0.12s global); CTA "Agendar evaluacion" siempre visible (no aparece con scroll); acordeon de prevision 200ms; transiciones de seccion 160–200ms secas. Nada de orbes, clip-reveal cinematografico global ni bounce: esto es clinica, no galeria. Todo respeta prefers-reduced-motion → cero animacion.
- **Direccion de imagen (4 imagenes, public/media/, sin personas/caras/manos/logos/texto/patentes):**
  1. `sillon.jpg` 16:9 — box dental vacio con sillon en posicion baja, luz norte lateral de ventana, orden quirurgico.
  2. `bandeja.jpg` 1:1 — bandeja de instrumental esterilizado (espejos, sondas) alineada sobre tela blanca, luz rasante.
  3. `recepcion.jpg` 4:3 — recepcion luminosa vacia, madera palida + piedra clara, aire y calma.
  4. `lampara.jpg` 3:4 — detalle de lampara operatoria apagada, textura metalica y vidrio, luz de box contenida.
- **Paleta de 3 roles (variables en :root):** `--bg` #FDFCF9 (blanco clinico calido, papel hueso, no #FFF), `--ink` #1A2A2E (tinta petroleo profunda), `--accent` #218380 (teal clinico apagado, <5% area: CTA principal, kicks, links), `--accent-2` #E07A5F (coral contenido para precio destacado y subrayados), `--state` #C48A3F (ambar calido: "evaluacion esta semana / cupo"), `--muted` #7A8A94, `--linea` #E6E2DA. PROHIBIDO #000/#FFF puros, teal neon #00E5CC, degradados, sombras difusas. Radios 0 en TODO. --accent-2 y --state SI aparecen en filas y etiquetas del oficio (no es un hex solo en botones).
- **Ritmo vertical y densidad:** respiracion generosa en hero (padding 96–128px desktop), pero densidad de CARTA en #tratamientos-arancel: filas compactas 14–18px padding vertical, filete 1px, tipografia tabular. Whitespace solo en hero y #primera-evaluacion. Contraste con rubros editoriales: aqui el precio se escanea, no se narra.

## BENCHMARK A IMITAR (disciplina, no copia)

Mora Pavic (Las Condes, 74) — aire editorial con negro contenido · Dental Vitacura (74) — jerarquia tipografica sobria · Clinica Sanz (74) — blanco clinico extremo · Bites (74) — calidez pediatrica luminosa · Dental Oleksiuk (74) — neutro disciplinado · Medimas (72) — acento cian contenido. Internacional: Tendler Dental + Zen Dental Studio — tipografia grande, aire, sala clinica como protagonista, tabla de valores sin gritos. Imita la DISCIPLINA de luz + grilla + precio honesto, no los pixeles.

## MARCA DEMO (textos literales, no cambiar)

Nombre: SERENA DENTAL
H1: "Odontologia seria, sin sustos ni letra chica."
Subhead: "Diagnostico explicado, presupuesto por escrito y tratamiento a tu ritmo. El mismo dentista te acompana de principio a fin."
CTA principal: "Agendar evaluacion" · secundario: "Ver valores"
Contacto: +56 9 8765 4321 · hola@serenadental.cl · Nunoa, Santiago
Horario: Lun–Vie 9:00–19:30 · Sab 10:00–14:00
Micro-copy honesto: "Si el plan cambia despues de la evaluacion, te avisamos antes de partir. Nunca iniciamos sin tu aprobacion por escrito."
Banda honesta bajo hero: "Atencion con hora o por urgencia · Convenios con las principales isapres · Boleta reembolsable"

## CONTRATO DE CONVERSION (obligatorio, la ubicacion la fija la gramatica G10/G4)

- Precio/arancel "desde" EN LA FILA de #tratamientos-arancel + referencia en #primera-evaluacion (no en popup): Evaluacion con radiografia $29.900 · Limpieza y profilaxis desde $39.900 · Restauracion resina desde $59.900 · Endodoncia 1 conducto desde $129.000 · Extraccion simple desde $49.900 · Blanqueamiento desde $89.900 · Implante desde $390.000 · Ortodoncia alineadores desde $45.000/mes. Nota al pie: "Valores referenciales; el valor final se confirma tras diagnostico. Sin sorpresas."
- Telefono visible en header desktop y sticky movil (siempre).
- CTA persistente movil: "Agendar evaluacion" (sticky discreto tras el hero, no tapa contenido).
- Prueba social honesta sin foto de persona: "+15 anos en Nunoa · +9.500 pacientes · 96% nos recomienda · 3 dentistas, siempre los mismos" como linea estatica tabular (sin count-up animado en filas; count-up opcional solo una vez si se usa, pero NUNCA en #tratamientos-arancel).

## REGLAS DURAS (una violacion = rechazado)

Sin personas/caras/manos/logos/texto en imagen. Sin antes/despues fotografico. Sin testimonios con foto ni identidad inventada ("Maria G." prohibido). Sin badges de rating, marquee, planes Free/Pro/Enterprise, terminal decorativo, orbes, grilla de puntos, sparkles, 3 cards simetricas con icono. Radios 0. Espanol de Chile + alt descriptivos. Contraste AA, focus-visible, ::selection de marca, responsive 360px real, sin stock externo. prefers-reduced-motion → cero animacion. Tipografias: solo Bitter + Outfit. Fondo claro siempre: PROHIBIDO secciones negras/noche u overlays oscuros sobre fotos. Accent <5% UI. Filetes 1px var(--linea), cero sombras difusas.

## PROCESO OBLIGATORIO (en este orden)

1. **DIRECCION_DE_ARTE.md primero** (en dentista-b-claro/): gramatica G10+G4 y por que (2 frases del oficio), pareja T9, los 3 roles de color con logica, lista de ids del oficio, donde vive precio/telefono/CTA sticky/prueba social, firma de motion con ms, que muestra cada imagen. PROHIBIDO crear App.tsx o styles.css antes de que este archivo exista.
2. Generar las 4 imagenes (media antes que maqueta).
3. Maquetar desde cero: CSS nuevo en src/styles.css partiendo solo del reset minimo (focus-visible, skip-link, reduced-motion). Prohibido pegar bloques de otra propuesta.
4. `npm run propuestas:build -- dentista-b-claro` hasta cero errores.
5. Auto-QA: grep de ids — si aparece la secuencia v3 (inicio/cifras/catalogo/precios/metodo/galeria/faq), rehacer secciones. Verificar AA, 360px, alts. Verificar que --accent no domina (>5% area = fallo).
6. Criterio de LISTO: apaga --accent (cambialo a gris). Si el sitio SIGUE pareciendo una clinica dental chilena seria (carta de arancel legible, evaluacion explicada, Isapre claro, telefono y agendar siempre visibles), pasa. Si parece una "landing premium generica", falla aunque compile: vuelve al ADN.
7. Resumen breve: que construiste, decisiones de la direccion de arte, estado del build.
