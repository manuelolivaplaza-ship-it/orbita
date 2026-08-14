# Órbita

Sitio del estudio: landings y sitios de conversión. Vite + React + TypeScript + Tailwind.

## Correr en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Supabase (agenda, formularios, admin)

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. SQL Editor → pega y corre `supabase/schema.sql`.
3. Authentication → Providers → Email activado. Desactiva registros públicos.
4. Authentication → Users → Add user (tu email y clave).
5. En SQL, registra el admin (cambia el email):

```sql
insert into public.admins (user_id)
select id from auth.users where email = 'tu@email.com'
on conflict do nothing;
```

6. Settings → API: copia URL y `anon` key a `.env.local`:

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

7. Panel: `/admin`

Con Supabase conectado, el formulario, la cotización, el newsletter y **agendar reunión** se guardan en la base. Los horarios ocupados dejan de aparecer.

## GitHub + Vercel

```bash
git init
git add .
git commit -m "Órbita: sitio, agenda y admin"
```

Crea el repo en GitHub y súbelo:

```bash
git remote add origin https://github.com/TU_USUARIO/orbita.git
git branch -M main
git push -u origin main
```

En Vercel: Import Git Repository → ese repo. En Environment Variables agrega las mismas `VITE_SUPABASE_*`.

## Propuestas

Carpeta `propuestas/`. Cada subcarpeta es `/propuesta/nombre`. Ver `propuestas/README.md`.

## Scripts

- `npm run dev` — desarrollo
- `npm run build` — typecheck + propuestas + build
- `npm run preview` — preview del build
- `npm run propuestas:build` — construir propuestas React
- `npm run propuesta -- slug` — dev aislado de una propuesta
