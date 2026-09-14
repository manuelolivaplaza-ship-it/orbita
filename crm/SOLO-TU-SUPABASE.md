# Solo TU — Supabase (10 min)

1. supabase.com → New project (NO uses el de reclu.cl inbound)
2. SQL Editor → pega y Run: crm/supabase/migrations/0001_init.sql
3. SQL Editor → pega y Run: crm/supabase/seed.sql
4. Project Settings → API:
   - Project URL → pega en crm/.env.local como NEXT_PUBLIC_SUPABASE_URL
   - service_role (secret) → SUPABASE_SERVICE_ROLE_KEY
5. Avisa a Super Manu: "supabase listo"

Ya hecho por Super Manu:
- .env.local con CRM_APP_PASSWORD, CRM_SESSION_SECRET, CRM_BOT_KEY, cap 50
- data/dia_01_import.csv (100 leads día 1) listos para importar en /leads

Después (Super Manu):
- npm run dev / verificar /hoy
- import CSV
- cablear Reclu WA Pilot con CRM_BOT_KEY
- Vercel si quieres
