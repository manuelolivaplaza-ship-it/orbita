# Auditoría de seguridad pre-producción — Órbita

**Fecha:** 16 de agosto de 2026  
**Alcance:** código local del repo `órbita` (sitio Vite/React, panel `/admin`, agenda/leads en Supabase, propuestas, MiniMayorista, deploy Vercel).  
**Repositorio remoto:** `https://github.com/manuelolivaplaza-ship-it/orbita` (**público**).  
**Tipo de trabajo:** revisión defensiva del código y de la configuración. **No se atacó ningún sistema en ejecución.**

---

## 1. Qué se hizo y qué no

### Técnicas aplicadas (defensivas)

| Técnica | Qué se revisó |
|---|---|
| Modelado de superficie de ataque | Rutas, APIs de Supabase, formularios, iframes, estáticos, deploy |
| Revisión estática de código | `src/`, `supabase/schema.sql`, `vercel.json`, `vite.config.ts`, propuestas |
| Revisión de secretos | `.env`, `.gitignore`, archivos trackeados en git, bundle de `dist/` |
| Revisión de auth / autorización | login admin, `is_admin()`, políticas RLS, grants de RPCs |
| Revisión de inyección / XSS | `dangerouslySetInnerHTML`, `innerHTML`, iframes, render de leads |
| Revisión de lógica de negocio | reservas, leads, checkout de MiniMayorista |
| Revisión de headers HTTP | `vercel.json`, `index.html` (CSP, HSTS, frame, nosniff) |
| Revisión de exposición pública | `robots.txt`, `propuestas-index.json`, GitHub público, README |
| Análisis del bundle compilado | `dist/assets/index-Do5ll0pg.js` (claves, `service_role`, leftovers) |
| Dependencias | `npm audit --omit=dev` |
| Revisión de privacidad / cumplimiento | `LegalPage`, datos PII, encargados del tratamiento |

### Qué no se hizo (a propósito)

- No se escribieron exploits, PoCs ofensivos ni payloads.
- No se atacó el proyecto de Supabase, Vercel ni ningún host remoto.
- No se hizo fuerza bruta, fuzzing contra APIs vivas, ni escaneo de puertos.
- No se ejecutó ingeniería inversa ofensiva contra terceros.
- No se modificó código de la aplicación en esta pasada (solo este informe).

Si hace falta **corregir** los hallazgos en el código, pedilo y se implementan los parches defensivos (validación, headers, sandbox, rate limit, etc.) sin incluir exploits.

---

## 2. Resumen ejecutivo

El diseño de **Row Level Security** en `supabase/schema.sql` está bien pensado para un sitio de estudio: el público puede crear leads y reservas; solo un admin autenticado lee PII; nadie se auto-asigna admin desde el cliente. Eso es el núcleo correcto.

Aun así, **no está listo para producción** si vas a guardar datos reales de clientes. Los riesgos más graves no son un RCE clásico: son **abuso de las APIs públicas**, **robo de sesión admin vía iframe same-origin**, **propuestas comerciales indexables**, y **ausencia total de headers y rate limiting**.

| Severidad | Cantidad |
|---|---|
| Crítica | 0 |
| Alta | 4 |
| Media | 6 |
| Baja | 6 |
| Informativa / OK | 5 |

**Veredicto (16 ago, tras parches):** los hallazgos altos quedaron mitigados en código. **Hay que volver a correr `supabase/schema.sql` en el SQL Editor** para que el servidor aplique `submit_lead`, los límites y el `create_booking` nuevo. Sin ese paso, el cliente llama una RPC que no existe.

---

## 0. Remediación aplicada (esta pasada)

| ID | Estado | Qué se cambió |
|---|---|---|
| A-01 | Hecho | `sandbox` en iframes de propuesta y preview, **sin** `allow-same-origin` |
| A-02 | Hecho (requiere SQL) | RPC `submit_lead`, honeypot, cooldown, `CHECK` de longitud, rate limit por email y global. Insert directo a `leads` revocado |
| A-03 | Hecho (requiere SQL) | Fecha pasada, horizonte 60 días, slots de 30 min, buffer, 1 pending por email |
| A-04 | Parcial | Errores de login genéricos, `detectSessionInUrl: false`. MFA y “disable sign-ups” siguen siendo checklist del dashboard |
| M-01 | Hecho | Ya no se genera `/propuestas-index.json` |
| M-02 | Hecho | Headers en `vercel.json` (CSP, HSTS, nosniff, `frame-ancestors 'self'`) |
| M-03 | Hecho | Checkout MiniMayorista no confirma si falla; precios desde catálogo |
| M-04 | Fuera de código | Pasar el repo a privado en GitHub |
| M-05 | Hecho | Privacidad: Supabase, Ley 19.628, retención, consentimiento newsletter |
| M-06 | Hecho | Video deja de cargar de `mail.programbi.com`. Poner el archivo en `public/video/footer-loop.mp4` |
| B-02 | Hecho | `npm run dev` ya no usa `--host 0.0.0.0` |
| B-03 | Hecho | Errores internos no se muestran crudos |

---

## 3. Superficie de ataque mapeada

```
Navegador
  ├── SPA React (/, /creaciones, /servicios, /preview/:slug)
  ├── /admin                    login email+password → panel PII
  ├── /propuesta/:slug          iframe same-origin → /propuestas/:slug/*
  ├── /propuestas-index.json    listado de clientes (público)
  ├── Formularios
  │     ├── Contacto / cotización / newsletter  → insert leads
  │     └── Agenda                              → RPC create_booking
  └── WhatsApp / mailto (fallback)

Supabase (anon key en el frontend, esperado)
  ├── public.leads          INSERT anon  | SELECT solo admin
  ├── public.bookings       vía RPC      | SELECT/UPDATE solo admin
  ├── public.proposals      ALL solo admin
  ├── public.admins         SELECT self/admin
  ├── RPC is_admin()        authenticated
  ├── RPC list_taken_slots  anon
  └── RPC create_booking    anon (SECURITY DEFINER)

Vercel
  └── rewrite SPA; /propuestas/* se sirve como estáticos
```

---

## 4. Hallazgos

### A-01 — Alta — Iframe same-origin sin sandbox (sesión admin en riesgo)

**Dónde:** `src/pages/PropuestaPage.tsx` (iframe a `/propuestas/${slug}/…`), `src/components/cases/LivePreview.tsx`.

**Qué pasa:** las propuestas se cargan en un `<iframe>` **sin `sandbox`**. El README de propuestas dice que “el visitante las ve aisladas”. Eso no es cierto: el iframe es **mismo origen** que Órbita. Cualquier JS de esa propuesta puede leer `localStorage` del dominio (ahí persiste la sesión de Supabase: `persistSession: true` en `src/lib/supabase.ts`) y actuar como el admin.

**Impacto:** si una propuesta incluye un script de tercero, un HTML de un cliente, o un XSS futuro, se puede **tomar el panel** (leads, emails, teléfonos, agenda).

**Qué hacer:**

1. Poner `sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"` **sin** `allow-same-origin` (si ponés ambos, el iframe puede quitarse el sandbox).
2. Mejor aún: servir propuestas en un subdominio distinto (`propuestas.orbita.studio`) para aislar cookies/storage.
3. No incrustar HTML de clientes sin revisión.

---

### A-02 — Alta — APIs públicas sin rate limit, captcha ni tope de tamaño

**Dónde:**

- `leads` policy `"leads public insert"` → `with check (true)` (`supabase/schema.sql`)
- `submitLead()` en `src/lib/leads.ts` (contacto, cotización, newsletter)
- `create_booking` grant a `anon` (`supabase/schema.sql`)
- Formularios en `Contacto.tsx`, `BudgetModal.tsx`, `Footer.tsx`, `ScheduleModal.tsx`

**Qué pasa:** cualquiera que tenga la anon key (está en el JS del sitio, es normal) puede insertar filas ilimitadas. No hay honeypot, captcha, rate limit, ni `CHECK` de longitud en columnas `text`.

**Impacto:**

- Spam masivo de leads / newsletter.
- Llenar la agenda (índice único por slot) y dejar el estudio sin horarios.
- Costo de storage / ruido operativo.
- Payload grande en `mensaje` / `nota` (abuso de base).

**Qué hacer:**

- En Supabase: validar email, `char_length` máxima (nombre 120, mensaje 4000, etc.).
- Rate limit: Edge Function / trigger por IP o por email (p. ej. 3 leads / 10 min, 1 booking / email / día).
- Captcha (Turnstile o hCaptcha) en los 4 formularios **antes** del insert.
- Honeypot oculto en el cliente.
- Alertas (email/Slack) ante ráfagas.

---

### A-03 — Alta — `create_booking` (SECURITY DEFINER) valida poco

**Dónde:** `supabase/schema.sql` → función `public.create_booking`.

**Validaciones que sí tiene:** nombre ≥ 2, email con `@`, no sábado/domingo, minutos entre 08:00 y 18:30.

**Validaciones que faltan (el cliente las tiene, el servidor no):**

| Control | Cliente (`booking.ts`) | Servidor |
|---|---|---|
| No reservar el pasado | sí | **no** |
| Buffer de 30 min sobre “ahora” | sí | **no** |
| Slots de 30 en 30 | sí | **no** (cualquier minuto del rango) |
| Horizonte máximo (p. ej. 60 días) | no | **no** |
| Tope por email | no | **no** |

Como la función es `SECURITY DEFINER`, **bypasea RLS**. El cliente se puede ignorar: el servidor es la única frontera.

**Impacto:** reservas en fechas pasadas, slots “rotos” (08:07, 08:08…), agenda inutilizable.

**Qué hacer:** replicar en SQL las reglas de `slotsForDay` / `BOOKING` (alineación a 30, `p_slot_date >= current_date` en `America/Santiago`, tope a futuro, un booking pendiente por email).

---

### A-04 — Alta — Panel admin descubrible y auth débil para PII

**Dónde:** ruta `/admin` (`src/App.tsx`, `src/pages/AdminPage.tsx`). Documentada en el README público. `robots.txt` solo pide a bots que no la indexen (no es control de acceso).

**Qué pasa:**

- Login email + password, sin 2FA.
- “Desactivar sign-ups” es un comentario de checklist, no algo que el código pueda garantizar. Si en el dashboard de Supabase quedaron los registros abiertos, cualquiera crea cuenta (no ve PII, pero prueba contraseñas y ensucia `auth.users`).
- Mensajes de error de Supabase se muestran crudos (`error.message`) → enumeración de usuarios.
- Sesión en `localStorage` (robable por XSS, ver A-01).
- `detectSessionInUrl: true` puede dejar tokens en la URL y filtrarlos por `Referer`.

**Qué hacer:**

- Confirmar en Supabase: **Disable sign-ups**, confirmación de email, password mínima fuerte.
- Activar MFA para el usuario admin.
- Mover el panel a una ruta no obvia **y** protegerla (o un subdominio con auth extra).
- No mostrar el error crudo de Auth.
- Considerar `persistSession` en `sessionStorage` o cookie `HttpOnly` vía backend propio.

---

### M-01 — Media — El índice de propuestas es público (rompe el modelo “solo con el enlace”)

**Dónde:** `public/propuestas-index.json`, generado por `vite.config.ts` (`writePropuestasIndex`). Leído por `fetchFolderProposals()` en el admin.

**Contrato roto:** `propuestas/README.md` dice *“No hay listado público: solo entra quien tenga el enlace.”*

El archivo se publica en `/propuestas-index.json` con `slug`, `title` y `client`. Hoy lista **MiniMayorista**.

**Impacto:** un competidor o un crawler ve a quién le estás cotizando. Las URLs `/propuesta/minimayorista` y `/propuestas/minimayorista/` quedan triviales.

**Qué hacer:** no generar ese JSON en `public/`. Servirlo solo al admin (ruta autenticada) o construirlo en build pero **no** copiarlo a `dist` público. Añadir auth por token/query a cada propuesta comercial.

---

### M-02 — Media — Cero headers de seguridad en Vercel

**Dónde:** `vercel.json` solo tiene `rewrites`. `index.html` no declara CSP.

Faltan:

| Header | Para qué |
|---|---|
| `Content-Security-Policy` | limitar XSS / scripts de terceros |
| `Strict-Transport-Security` | forzar HTTPS |
| `X-Content-Type-Options: nosniff` | no adivinar MIME |
| `Referrer-Policy: strict-origin-when-cross-origin` | menos fugas de URL |
| `Permissions-Policy` | cámara/mic/geo off |
| `X-Frame-Options: DENY` o CSP `frame-ancestors 'self'` | **clickjacking del login admin** |

Hoy el formulario de `/admin` se puede incrustar en un sitio ajeno (clickjacking).

**Qué hacer:** agregar un bloque `headers` en `vercel.json` para `/(.*)` y una CSP inicial (empezar en Report-Only si hace falta por Google Fonts / Supabase / WhatsApp / video).

---

### M-03 — Media — MiniMayorista: checkout “siempre OK” y precios del cliente

**Dónde:** `propuestas/minimayorista/src/components/CheckoutModal.tsx`, `src/lib/supabase.ts`.

- Si Supabase no está configurado o el POST falla, **igual se muestra “Pedido confirmado”**.
- `precio`, `subtotal` y `total` los manda el navegador. Un usuario puede alterar el JSON.
- Códigos de pedido `MM-` + 5 dígitos aleatorios: colisiones posibles, predecibles.

**Impacto:** el cliente cree que el pedido existe y no existe; o existe con precios inventados.

**Qué hacer:** no confirmar si el backend falla; recalcular totales en servidor; UUID de pedido; no tratar esta propuesta como tienda real hasta tener backend con RLS propio.

---

### M-04 — Media — Repositorio GitHub público + schema + ruta admin

El repo está **Public**. Eso no es un bug por sí solo (el `.env` no está commiteado; `npm audit` dio 0 vulns; no hay `service_role` en el árbol). Pero publica:

- `supabase/schema.sql` (nombres de tablas, RPCs, checks)
- que el panel vive en `/admin`
- cómo se crea el usuario admin

Cualquiera arma el mapa de ataque sin mirar el JS.

**Qué hacer:** si el negocio lo permite, pasar el repo a **privado**. Si queda público, asumir que A-02/A-03 serán el primer objetivo.

---

### M-05 — Media — Privacidad incompleta para datos reales

**Dónde:** `src/pages/LegalPage.tsx`.

El texto no menciona:

- que los datos van a **Supabase** (encargado, región / transferencia internacional);
- plazos de retención;
- derechos ARCO / Ley 19.628 (Chile);
- cookies / `localStorage` de sesión;
- newsletter como base de datos de emails.

El footer guarda emails en `leads` con `source: newsletter` sin checkbox de consentimiento separado.

**Qué hacer:** completar política antes de recoger datos reales. Consentimiento explícito en newsletter.

---

### M-06 — Media — Video de tercero en el footer

**Dónde:** `src/components/Footer.tsx` → `https://mail.programbi.com/uploads/…mp4`

El hostname parece un servidor de correo sirviendo uploads. Es dependencia de disponibilidad, privacidad y supply-chain: si ese host se cae o se compromete, el home de Órbita carga un recurso ajeno.

**Qué hacer:** hostear el video en el mismo origen (`public/` o un CDN propio).

---

### B-01 — Baja — `robots.txt` no protege nada

```
Disallow: /propuesta
Disallow: /propuestas
Disallow: /admin
```

Los crawlers obedientes no indexan; un humano sí entra. Combinado con M-01, las propuestas no están ocultas.

---

### B-02 — Baja — Dev server abierto a la LAN

`package.json`: `vite --port=3000 --host=0.0.0.0` (igual en `scripts/propuestas.mjs`).

En una red compartida, cualquiera en la LAN ve el sitio en desarrollo (a veces con `.env` inyectado).

**Qué hacer:** quitar `--host` salvo que lo necesites. Nunca exponer `npm run dev` a Internet.

---

### B-03 — Baja — Mensajes de error de Supabase al usuario

`AdminPage` y `createBooking` muestran `error.message` tal cual. Sirve para enumerar cuentas y filtrar detalles internos.

---

### B-04 — Baja — Teléfonos y emails de negocio hardcodeados

`src/data/site.ts` (WhatsApp `56935409699`, `hola@orbita.studio`) y MiniMayorista (`+56 9 2038 7991`). Es esperado en un sitio de contacto; solo hay que saber que el scraping es trivial.

---

### B-05 — Baja — MiniMayorista: testimonios presentados como Google Maps

`TESTIMONIOS_EJEMPLO` en `productos.ts` con `origen: "Opinión en Google Maps"`. Si esa propuesta se envía como si fuera el sitio real, es contenido engañoso (riesgo reputacional / SERNAC, no técnico).

---

### B-06 — Baja — Plugin de propuestas: path traversal está cubierto

`vite.config.ts` rechaza `..` y comprueba `isInside`. En apps solo sirve `meta.json` / PDFs desde la raíz, no `src/` ni `node_modules`. **Esto está bien.** El riesgo residual es servir `dist/` completo de cada propuesta (JS incluido), que es lo que habilita A-01.

---

## 5. Controles que están bien (no romperlos)

1. **RLS activado** en `admins`, `leads`, `bookings`, `proposals`.
2. **`is_admin()`** es `SECURITY DEFINER` con `search_path = public` (evita hijack de search_path).
3. **No hay policy de INSERT en `admins`**: un usuario autenticado no se puede promover solo.
4. Leads: SELECT/UPDATE solo si `is_admin()`. Bookings: igual. Proposals: ALL solo admin.
5. `list_taken_slots` solo devuelve minutos, no nombre/email.
6. `.env*` está en `.gitignore`; `.env` **no** está en git. El bundle local de `dist/` no trae `service_role`.
7. `npm audit --omit=dev`: **0 vulnerabilidades**.
8. WhatsApp/links externos usan `noopener,noreferrer`.
9. React escapa por defecto: los leads en el admin no son XSS almacenado trivial (salvo A-01).
10. Slug de propuesta validado con regex `^[a-zA-Z0-9][a-zA-Z0-9._-]{0,80}$`.
11. Anon key de Supabase en el cliente es el modelo correcto **si** RLS aguanta. No uses nunca `service_role` en el frontend.

---

## 6. Checklist antes de producción

Marcá esto en Supabase / Vercel / el repo **antes** de apuntar el dominio:

- [ ] Authentication → **Disable sign-ups**
- [ ] Usuario admin creado a mano + fila en `public.admins`
- [ ] MFA activado en esa cuenta
- [ ] Confirmado que **no** existe `service_role` en Vercel env del frontend
- [ ] Solo `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` (+ WhatsApp si aplica)
- [ ] Parche A-03 aplicado en `create_booking`
- [ ] Rate limit / captcha en leads y bookings
- [ ] Iframes con sandbox (o subdominio)
- [ ] `propuestas-index.json` fuera de `public/`
- [ ] Headers en `vercel.json`
- [ ] Política de privacidad actualizada
- [ ] Repo privado, o aceptar que el schema es público
- [ ] Backup / retención de `leads` y `bookings`
- [ ] Probar el flujo admin en el deploy (login, ver un lead de prueba, confirmar/cancelar un slot) y **borrar los datos de prueba**

---

## 7. Prioridad de remediación

1. Sandbox / origen separado para propuestas (A-01)
2. Validar `create_booking` de verdad en SQL (A-03)
3. Captcha + rate limit + `CHECK` de longitud (A-02)
4. Cerrar sign-ups + MFA + no filtrar errores de Auth (A-04)
5. Sacar el índice de propuestas de `public/` (M-01)
6. Headers Vercel (M-02)
7. Legal + video propio + checkout honesto (M-03, M-05, M-06)

---

## 8. Inventario de archivos sensibles revisados

- `src/lib/supabase.ts`, `admin.ts`, `leads.ts`, `bookings.ts`
- `src/pages/AdminPage.tsx`, `PropuestaPage.tsx`, `LegalPage.tsx`
- `src/components/Contacto.tsx`, `BudgetModal.tsx`, `ScheduleModal.tsx`, `Footer.tsx`, `LivePreview.tsx`
- `supabase/schema.sql`
- `vercel.json`, `vite.config.ts`, `package.json`, `.gitignore`, `.env.example`
- `public/robots.txt`, `public/propuestas-index.json`
- `propuestas/minimayorista/src/lib/supabase.ts`, `CheckoutModal.tsx`
- `dist/assets/index-Do5ll0pg.js` (sin `service_role`)

Secretos locales: existe un `.env` con `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`. **No se copian valores en este archivo.** Esa anon key va a terminar en el JS público en el build de Vercel: es normal. La `service_role` no debe existir en ningún `VITE_*`.
