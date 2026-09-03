# Orb portable 🫧

Todo el personaje **Orb** (el SVG con código) en una carpeta autocontenida,
lista para copiar a otro proyecto. Cero dependencias salvo `react`.

## Archivos

| Archivo       | Qué es                                                        |
| ------------- | ------------------------------------------------------------- |
| `Orb.tsx`     | Componente React (SVG + animación rAF: parpadeo, mirada, hop) |
| `orb-logic.ts`| Matemática pura: morphs, parpadeo, hop, squash, **spawn**      |
| `orb.css`     | Estilos mínimos + variables `--orb-body` / `--orb-eye`        |
| `index.ts`    | Re-export para `import { Orb } from "./orb"`                  |
| `demo.tsx`    | Ejemplo con botón "Aparecer de nuevo"                         |

## Instalación en otro proyecto

1. Copia la carpeta `orb/` a tu proyecto (ej: `src/components/orb/`).
2. Importa el CSS una vez:
   ```ts
   import "./orb/orb.css";
   ```
3. Úsalo:
   ```tsx
   import { Orb } from "./orb";

   <Orb size={120} state="idle" tone="ink" playful hop shadow />
   ```

No necesitas Tailwind, `clsx`, ni alias `@/`.

## Animación de aparición 🫧😵‍💫

Pop tipo **burbuja** (sale de la nada, se hace grande con overshoot,
aro que se expande) + **sacudida de cabeza de mareado** (tilt oscilante
amortiguado + ojos que tambalean + squash de gelatina).

```tsx
const [key, setKey] = useState(0);

<Orb
  size={140}
  state="happy"
  tone="ink"
  playful
  appear          // activa el spawn al montar
  appearKey={key} // cambia la key para repetirlo
  appearDuration={1600}
  onAppearDone={() => console.log("terminó")}
/>

<button onClick={() => setKey(k => k + 1)}>Aparecer</button>
```

### Cómo funciona

- `spawnScale(p)` — escala 0 → ~1.18 (burbuja) → wobble → 1, con opacidad.
- `spawnRing(p)` — aro que se expande y se desvanece (primera mitad).
- `spawnTilt(p)` — `sin(local·π·6)·16°·decay`: 3 sacudidas de cabeza.
- `spawnSquish(p)` — gelatina lateral que acompaña el mareo.
- `spawnEyeOffset(p)` — los ojos tambalean ±2.4px.
- Todo respeta `prefers-reduced-motion` (aparece directo, sin animar).

## Props

| Prop             | Default | Descripción                                      |
| ---------------- | ------- | ------------------------------------------------ |
| `size`           | `48`    | px de ancho/alto                                 |
| `state`          | `idle`  | `idle \| thinking \| happy \| working \| success \| error` |
| `tone`           | —       | `ink` (negro) / `paper` (blanco). Sin tone usa CSS vars |
| `playful`        | `false` | respiración, bob, tilt, miradas                  |
| `hop`            | `false` | saltitos idle aleatorios                         |
| `shadow`         | `false` | sombrita debajo                                  |
| `flourish`       | `false` | destellos al saltar                              |
| `trackPointer`   | `true`  | los ojos siguen el mouse                         |
| `appear`         | `false` | pop burbuja + mareo al montar / al cambiar `appearKey` |
| `appearKey`      | `0`     | cámbialo para re-ejecutar la aparición           |
| `appearDuration` | `1600`  | ms totales del spawn                             |
| `onAppearDone`   | —       | callback al terminar                             |
| `className`/`label` | —    | clase extra / aria-label                         |

## Colores sin `tone`

Si no pasas `tone`, el Orb usa las variables CSS (útil con dark mode):

```css
:root { --orb-body: #111; --orb-eye: #f5f5f2; }
[data-theme="dark"] { --orb-body: #fff; --orb-eye: #111; }
```
