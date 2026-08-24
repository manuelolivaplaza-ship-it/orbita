# Rediseño profesional del homepage: carrusel orbital + galería en home + polish SEO/perf

## Concepto
El hero pasa de "video de planeta + texto" a una composición de marca: **un anillo orbital 3D donde las propuestas giran como satélites alrededor del logo Órbita** (nodo central con glow y anillos SVG decorativos — sin video ni dependencias externas). A la izquierda, copy y CTAs; a la derecha, el carrusel. Debajo, nueva sección que conecta el home con la galería por sectores. Sin video, carga más rápido.

## 1. Hero rediseñado — `src/components/Hero.tsx`
- Split `lg`: izquierda copy (H1 "Tu marca, / en órbita." con clip-reveal como hoy, subtítulo ajustado mencionando la galería, badge glass), derecha `OrbitCarousel`.
- CTAs: "Pedir presupuesto" (primario igual al actual), "Explorar la galería" → `/galeria` (nuevo secundario), link "Agendar reunión".
- Fuera: video remoto del planeta y su degradado blanco. Fondo: starfield existente del MainLayout + suave glow radial propio.
- El marquee de tipos de cliente se mantiene bajo el hero.

## 2. OrbitCarousel — nuevo `src/components/home/OrbitCarousel.tsx`
- Datos: `virtual:propuestas-catalogo` + `src/data/sectores.ts`. Selección curada automática: 1 propuesta por sector (≈10 cards) — se actualiza sola al agregar propuestas nuevas.
- Anillo tipo "platillo giratorio": cada card es un mini marco de navegador posicionado en círculo (perspective + transform por ángulo; escala/opacidad/blur según profundidad). Auto-avance cada ~5s girando un paso con easing; pausa al hover; flechas ‹ › y dots; drag horizontal con snap a la card más cercana.
- Card frontal (la más grande y plana): **preview en vivo** reutilizando `PreviewHeroShot` (shot ~1280×860, sandbox allow-scripts), badge de sector con su color de acento y brand; click → `/propuesta/{slug}?from=/galeria/{sector}`. El resto: skeleton tintado con el color del sector + brand (iframes montados solo en frontal y siguiente — máximo 2 vivos).
- Centro: logo-órbita SVG (el del navbar) con `animate-pulse-glow` + anillos orbitales SVG sutiles.
- Chip glass flotante: "N propuestas · M sectores en órbita".
- `prefers-reduced-motion`: abanico estático de 3 cards sin auto-rotación.
- Mobile: anillo bajo el copy, radio menor (~6 cards), drag habilitado.

## 3. Sección Galería en el home — nuevo `src/components/home/GaleriaTeaser.tsx`
- Posición: tras TrustStrip (hero → trust → **galería** → creaciones → servicios...), `id="galeria"`.
- Header: eyebrow "Galería de propuestas", H2 "Tu sector, en órbita.", link "Ver galería completa" → `/galeria`.
- Grid de 12 chips-card de sector (icono lucide con accent, label, count de propuestas) → `/galeria/{slug}`.
- Fila de 3 `PropuestaCard` destacadas (determinista: una variante clara, una oscura, una de color) para mostrar el producto real en vivo.
- Banda CTA: "Explora las {N} propuestas en vivo".

## 4. Navbar + Footer
- Navbar: estado activo (indicador sutil — pill/dot) para Inicio/Creaciones/Galería/Servicios según la ruta actual.
- Footer: añadir "Galería" a la navegación del footer (respetando el layout del footer-reveal oscuro).

## 5. SEO + Performance
- `index.html`: canonical, JSON-LD (Organization/ProfessionalService "Órbita"), `og:image` absoluta.
- og:image 1200×630 generada con captura real del nuevo hero (playwright-core temporal → `public/og-image.jpg`); `PageMeta.tsx` gana prop `image` y HomePage la usa.
- `vite.config.ts`: `build.rollupOptions.output.manualChunks` para separar vendor (react/react-dom/lucide-react/supabase) del código app → ataca el warning de chunk 718 KB.
- `loading="lazy"` en imágenes remotas de SistemaOrbita/ShowcasePanel.

## 6. Verificación
- `npx tsc --noEmit` + `npx vite build` (sin `npm run build` completo: el otro bot sigue con abogado-b-azul-cian roto).
- Playwright headless: hero renderiza el anillo (N cards posicionadas, iframe frontal montado, resto skeleton), flechas avanzan, click en card frontal → visor `/propuesta/...`, sección galería con chips y 3 cards vivas, navbar activo, viewport móvil 390px, emulación `prefers-reduced-motion`, y máximo 2 iframes montados en el hero.
- Captura visual del hero para validación.

## Cuidados con el otro bot
- No se tocan `propuestas/` ni `CaseCard.tsx`/`PreviewHeroShot.tsx` (solo se reutilizan).
- `src/index.css`: solo se añade al final; no se toca el bloque `.galeria-card`.
- Archivos nuevos: `OrbitCarousel.tsx`, `GaleriaTeaser.tsx`, `public/og-image.jpg`. Editados: `Hero.tsx`, `HomePage.tsx`, `Navbar.tsx`, `Footer.tsx`, `PageMeta.tsx`, `index.html`, `vite.config.ts`, `index.css` (append).
