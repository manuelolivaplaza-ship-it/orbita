# Reclu CRM

CRM ultra liviano para outbound WhatsApp a pymes Chile. **No es Salesforce.** UI tipo Linear/Vercel.

Una sola operación (Manuel). Sin WhatsApp API embebida, sin email blast, sin multi-tenant, sin facturación.

Proyecto Next.js aparte del sitio reclu.cl. Usa un **Supabase nuevo** — no mezclar con la tabla `leads` de formularios inbound.

## Setup en 10 minutos

### 1. Supabase (2 min)

1. [supabase.com](https://supabase.com) → New project.
2. SQL Editor → pega y corre `supabase/migrations/0001_init.sql`.
3. SQL Editor → pega y corre `supabase/seed.sql` (20 clínicas dentales demo).

### 2. Env (2 min)

```bash
cd crm
cp .env.example .env.local
```

Completa:

| Variable | Dónde |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API → `service_role` (**nunca** al browser) |
| `CRM_APP_PASSWORD` | clave del panel |
| `CRM_SESSION_SECRET` | string largo random |
| `CRM_BOT_KEY` | string largo random (el bot la manda en el header) |

### 3. Local (1 min)

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) → entra con `CRM_APP_PASSWORD` → **/hoy**.

### 4. Vercel (5 min)

Proyecto **nuevo** (no el de reclu.cl). Root Directory = `crm`.

```bash
npx vercel
```

Pega las mismas env vars (Production + Preview). Deploy.

## Inbound web

Las cotizaciones, contactos y reuniones de reclu.cl se guardan en `crm.leads` (mismo Supabase, schema `crm`). No se abre WhatsApp.

1. SQL Editor → corre `CORRER-INBOUND.sql` (o `supabase/migrations/0003_inbound.sql`).
2. En el CRM, **/hoy → Entrantes web**.
3. El visitante envía el formulario; aparece como lead `cotizacion` / `contacto` / `reunion`.

## Páginas

| Ruta | Qué |
|---|---|
| `/hoy` | Follow-ups vencidos primero + nuevos (cap 50) + export CSV batch |
| `/` | KPIs |
| `/pipeline` | Kanban |
| `/leads` | Tabla + filtros + import CSV |
| `/leads/[id]` | Ficha + timeline |
| `/settings` | Cap, timezone `America/Santiago`, API key |

Estados: `nuevo → contactado → respondio → interesado → reunion → propuesta → ganado`. También `nurture` y `perdido` (motivo: `precio|timing|no_fit|sin_respuesta|otro`). **Ganado solo con seña.**

Cadencia follow-up: día **0 / 2 / 5 / 9 / 14** desde el primer envío.

## API bot

Header: `Authorization: Bearer $CRM_BOT_KEY` o `x-crm-bot-key`.

```bash
# Cola de hoy
curl -H "Authorization: Bearer $CRM_BOT_KEY" https://TU_DOMINIO/api/bot/queue

# Marcar enviado
curl -X POST -H "Authorization: Bearer $CRM_BOT_KEY" -H "Content-Type: application/json" \
  -d '{"id":"den-01"}' https://TU_DOMINIO/api/bot/sent

# Marcar respuesta
curl -X POST -H "Authorization: Bearer $CRM_BOT_KEY" -H "Content-Type: application/json" \
  -d '{"id":"den-01","text":"cuánto sale"}' https://TU_DOMINIO/api/bot/reply

# Patch
curl -X PATCH -H "Authorization: Bearer $CRM_BOT_KEY" -H "Content-Type: application/json" \
  -d '{"status":"interesado","plan_ofrecido":"estacion"}' \
  https://TU_DOMINIO/api/bot/leads/den-01
```

El bot **no** manda WhatsApp desde acá. Abre `wa.me/569…` o usa tu propio sender. El CRM solo marca enviados / respuestas / estado.

## Import CSV

Upsert por `id`. Headers con acentos OK. Aliases:

- `CONTROL_PIPELINE` / `estado` / `status` → `status` (`Respondió` → `respondio`)
- `por_dia` / `día` / `lote` → `dia_lote`
- `Teléfono` / `whatsapp` / `wa` → `telefono_wa` (normaliza a `569…`)

Ejemplo: `data/sample-control-pipeline.csv`.

UI: `/leads` o `/hoy` → Importar CSV. API: `POST /api/import` (sesión o bot key) con `multipart file` o `{ "csv": "..." }`.

## Precios (contexto venta)

- Estación **$990.000** (hero)
- Sonda ~**$420.000**
- Constelación ~**$1.490.000**
- Care ~**$60.000 / mes**

WA Reclu: **+56 9 3540 9699** · Manuel.
