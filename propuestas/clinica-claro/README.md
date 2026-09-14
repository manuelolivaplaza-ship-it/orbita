# clinica-claro — Propuesta de rediseño · Clínica Lircay

Propuesta comercial de rediseño web para clínicas/centros médicos privados chilenos del grupo
**"Claro minimalista / neutro"** (32 sitios). Construida desde
`PROMPT-CLINICA-CLARO-MINIMALISTA.md` sobre `_plantilla`.

## Identidad demo

El super-prompt remite a un `PROMPT.md` que no existe en `_plantilla` (igual que en las
propuestas hermanas del grupo). Se definió y documenta esta identidad de fantasía, coherente
con las referencias verificadas del rubro (Clínica Las Condes, Clínica Alemana, Mayo Clinic):

- **Nombre:** Clínica Lircay — centro médico de especialidades, Av. Lircay 01450, Talca (desde 2004)
- **Paleta:** papel `#FBFBF9`, blanco `#FFFFFF`, tinta petróleo `#1B2B33`
  (suave `#4E5F68`, hover `#2A404B`), líneas `rgba(27,43,51,.14/.3)`
- **Acento:** teal clínico `#0F766E` / texto `#0C6A62` (AA sobre papel), <5% de la UI
  (kickers, números de paso, micro-reglas decorativas, barra de progreso, favicon)
- **Tipografía:** Hanken Grotesk (display, peso 300–600, leading 0.95, tracking negativo)
  + Inter (texto). Números tabulares en cifras, horarios, valores y fichas.
- **Tono:** español de Chile, sobrio, sin letra chica oculta.

## Arco de conversión

`#inicio → #servicios (especialidades) → #cifras → banda laboratorio → #unidades → #precios
(valores CLP + convenios FONASA/ISAPRE al margen) → #metodo → #compromisos → #faq → #contacto`

Anclas nav verificadas headless: caen a top ≈ 96px (scroll-padding). Acordeón FAQ exclusivo,
animado por grid 0fr→1fr (~280ms).

## Reglas duras cumplidas

- Fondo claro siempre, cero secciones noche u overlays oscuros
- Acento <5% de la UI (verificado: 16/417 elementos ≈ 3.8%)
- Radios 0 (`border-radius: 0 !important` global, verificado: 0 elementos con radio ≠ 0)
- Sin personas/manos/logos/texto en imágenes (3 editoriales en `public/media`,
  verificadas una a una con visión: hall, pasillo de boxes, bancada de laboratorio)
- Sin badges/estrellas/marquee/planes SaaS/testimonios con foto/logos de convenios
- Botón sólido tinta sobre fondo claro; focus-visible; ::selection de marca
- Responsive real a 360px (overflow horizontal = 0) + CTA fija móvil "Agendar hora"
  tras el hero; `prefers-reduced-motion` respetado
- Motion: clip-reveal del h1 por líneas (gated con clase `listo`), stagger ~0.08–0.12s,
  ease cubic-bezier(0.22,1,0.36,1), nav hide-down/show-up, barra progreso 2px

## Comandos (desde la raíz `órbita/`)

```bash
npm run propuesta -- clinica-claro        # dev en :3010, base /propuestas/clinica-claro/
npm run propuestas:build -- clinica-claro # build de producción → dist/
```

Verificación adicional recomendada tras cambios en TS: `npx tsc --noEmit` dentro de esta
carpeta (el script raíz no corre tsc).

---

Propuesta preparada por Órbita. Sitio demostrativo: identidad de fantasía; cifras, unidades,
valores y convenios son referenciales. No contactar leads ni publicar sin revisión de Manu.
