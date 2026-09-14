-- Órbita — pegar en Supabase → SQL Editor → Run
-- Se puede volver a correr: actualiza funciones, policies y límites.
--
-- Authentication → Providers → Email
--   - Enable Email
--   - Confirm email: a gusto
--   - Disable sign-ups (OBLIGATORIO: solo creás el admin a mano)
-- Authentication → Users → Add user (tu email + clave fuerte)
-- Authentication → el usuario admin → Enable MFA
-- Después el INSERT de admins al final, con tu email.
-- Nunca pongas la service_role en VITE_* ni en el frontend.

create extension if not exists "pgcrypto";

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('contacto', 'cotizacion', 'newsletter', 'reunion')),
  nombre text,
  email text not null,
  telefono text,
  mensaje text,
  plan text,
  extras text,
  total text,
  empresa text,
  rubro text,
  plazo text,
  objetivo text,
  fecha text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_created_idx on public.leads (lower(email), created_at desc);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  email text not null,
  telefono text,
  tema text,
  nota text,
  slot_date date not null,
  slot_minutes int not null check (slot_minutes >= 0 and slot_minutes < 1440),
  slot_label text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  timezone text not null default 'America/Santiago'
);

create unique index if not exists bookings_slot_unique
  on public.bookings (slot_date, slot_minutes)
  where status in ('pending', 'confirmed');

create index if not exists bookings_date_idx on public.bookings (slot_date, slot_minutes);
create index if not exists bookings_email_status_idx on public.bookings (email, status);

create table if not exists public.proposals (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text,
  client text,
  notes text,
  status text not null default 'draft' check (status in ('draft', 'sent', 'won', 'lost'))
);

alter table public.leads drop constraint if exists leads_email_format;
alter table public.leads add constraint leads_email_format
  check (char_length(email) between 3 and 254 and position('@' in email) > 1);

alter table public.leads drop constraint if exists leads_field_lens;
alter table public.leads add constraint leads_field_lens check (
  (nombre is null or char_length(nombre) <= 120)
  and (telefono is null or char_length(telefono) <= 40)
  and (mensaje is null or char_length(mensaje) <= 4000)
  and (plan is null or char_length(plan) <= 80)
  and (extras is null or char_length(extras) <= 500)
  and (total is null or char_length(total) <= 80)
  and (empresa is null or char_length(empresa) <= 160)
  and (rubro is null or char_length(rubro) <= 120)
  and (plazo is null or char_length(plazo) <= 40)
  and (objetivo is null or char_length(objetivo) <= 240)
  and (fecha is null or char_length(fecha) <= 80)
);

alter table public.bookings drop constraint if exists bookings_field_lens;
alter table public.bookings add constraint bookings_field_lens check (
  char_length(nombre) between 2 and 120
  and char_length(email) between 3 and 254
  and (telefono is null or char_length(telefono) <= 40)
  and (tema is null or char_length(tema) <= 80)
  and (nota is null or char_length(nota) <= 2000)
);

alter table public.proposals drop constraint if exists proposals_field_lens;
alter table public.proposals add constraint proposals_field_lens check (
  char_length(slug) between 1 and 80
  and (title is null or char_length(title) <= 200)
  and (client is null or char_length(client) <= 160)
  and (notes is null or char_length(notes) <= 4000)
);

alter table public.admins enable row level security;
alter table public.leads enable row level security;
alter table public.bookings enable row level security;
alter table public.proposals enable row level security;

revoke insert on table public.leads from anon, authenticated, public;
revoke insert on table public.bookings from anon, authenticated, public;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

grant execute on function public.is_admin() to authenticated;
revoke execute on function public.is_admin() from anon, public;

drop policy if exists "admins self read" on public.admins;
create policy "admins self read"
  on public.admins for select to authenticated
  using (user_id = auth.uid() or public.is_admin());

-- El público ya no inserta directo: solo via submit_lead().
drop policy if exists "leads public insert" on public.leads;

drop policy if exists "leads admin read" on public.leads;
create policy "leads admin read"
  on public.leads for select to authenticated
  using (public.is_admin());

drop policy if exists "leads admin update" on public.leads;
create policy "leads admin update"
  on public.leads for update to authenticated
  using (public.is_admin());

drop policy if exists "bookings admin read" on public.bookings;
create policy "bookings admin read"
  on public.bookings for select to authenticated
  using (public.is_admin());

drop policy if exists "bookings admin update" on public.bookings;
create policy "bookings admin update"
  on public.bookings for update to authenticated
  using (public.is_admin());

drop policy if exists "proposals admin all" on public.proposals;
create policy "proposals admin all"
  on public.proposals for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create or replace function public.list_taken_slots(p_date date)
returns table (slot_minutes int)
language sql
stable
security definer
set search_path = public
as $$
  select b.slot_minutes
  from public.bookings b
  where b.slot_date = p_date
    and b.status in ('pending', 'confirmed');
$$;

grant execute on function public.list_taken_slots(date) to anon, authenticated;

create or replace function public.submit_lead(
  p_source text,
  p_nombre text,
  p_email text,
  p_telefono text,
  p_mensaje text,
  p_plan text,
  p_extras text,
  p_total text,
  p_empresa text,
  p_rubro text,
  p_plazo text,
  p_objetivo text,
  p_fecha text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
  email_n text;
  nombre_n text;
begin
  email_n := lower(trim(coalesce(p_email, '')));
  nombre_n := nullif(trim(coalesce(p_nombre, '')), '');

  if p_source is null or p_source not in ('contacto', 'cotizacion', 'newsletter', 'reunion') then
    raise exception 'Origen inválido';
  end if;
  if email_n = '' or position('@' in email_n) < 2 or char_length(email_n) > 254 then
    raise exception 'Email inválido';
  end if;
  if p_source <> 'newsletter' and (nombre_n is null or char_length(nombre_n) < 2) then
    raise exception 'Nombre inválido';
  end if;
  if char_length(coalesce(p_telefono, '')) > 40
    or char_length(coalesce(p_mensaje, '')) > 4000
    or char_length(coalesce(p_plan, '')) > 80
    or char_length(coalesce(p_extras, '')) > 500
    or char_length(coalesce(p_total, '')) > 80
    or char_length(coalesce(p_empresa, '')) > 160
    or char_length(coalesce(p_rubro, '')) > 120
    or char_length(coalesce(p_plazo, '')) > 40
    or char_length(coalesce(p_objetivo, '')) > 240
    or char_length(coalesce(p_fecha, '')) > 80
    or char_length(coalesce(nombre_n, '')) > 120
  then
    raise exception 'El mensaje es demasiado largo';
  end if;

  if (select count(*) from public.leads where created_at > now() - interval '1 minute') >= 20 then
    raise exception 'El formulario está ocupado. Probá de nuevo en un momento';
  end if;
  if (
    select count(*) from public.leads
    where lower(email) = email_n
      and created_at > now() - interval '10 minutes'
  ) >= 3 then
    raise exception 'Demasiados envíos. Probá de nuevo en unos minutos';
  end if;

  insert into public.leads (
    source, nombre, email, telefono, mensaje,
    plan, extras, total, empresa, rubro, plazo, objetivo, fecha
  ) values (
    p_source,
    nombre_n,
    email_n,
    nullif(trim(coalesce(p_telefono, '')), ''),
    nullif(trim(coalesce(p_mensaje, '')), ''),
    nullif(trim(coalesce(p_plan, '')), ''),
    nullif(trim(coalesce(p_extras, '')), ''),
    nullif(trim(coalesce(p_total, '')), ''),
    nullif(trim(coalesce(p_empresa, '')), ''),
    nullif(trim(coalesce(p_rubro, '')), ''),
    nullif(trim(coalesce(p_plazo, '')), ''),
    nullif(trim(coalesce(p_objetivo, '')), ''),
    nullif(trim(coalesce(p_fecha, '')), '')
  )
  returning id into new_id;

  return new_id;
end;
$$;

grant execute on function public.submit_lead(
  text, text, text, text, text, text, text, text, text, text, text, text, text
) to anon, authenticated;

create or replace function public.create_booking(
  p_nombre text,
  p_email text,
  p_telefono text,
  p_tema text,
  p_nota text,
  p_slot_date date,
  p_slot_minutes int,
  p_slot_label text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
  email_n text;
  nombre_n text;
  v_today date;
  v_now_min int;
begin
  nombre_n := trim(coalesce(p_nombre, ''));
  email_n := lower(trim(coalesce(p_email, '')));
  v_today := (timezone('America/Santiago', now()))::date;
  v_now_min :=
    extract(hour from timezone('America/Santiago', now()))::int * 60
    + extract(minute from timezone('America/Santiago', now()))::int;

  if char_length(nombre_n) < 2 or char_length(nombre_n) > 120 then
    raise exception 'Nombre inválido';
  end if;
  if position('@' in email_n) < 2 or char_length(email_n) > 254 then
    raise exception 'Email inválido';
  end if;
  if p_slot_date is null then
    raise exception 'Fecha inválida';
  end if;
  if extract(dow from p_slot_date) in (0, 6) then
    raise exception 'Solo lunes a viernes';
  end if;
  if p_slot_date < v_today then
    raise exception 'No se puede reservar una fecha pasada';
  end if;
  if p_slot_date > v_today + 60 then
    raise exception 'Elegí una fecha dentro de los próximos 60 días';
  end if;
  if p_slot_minutes is null
    or p_slot_minutes < 8 * 60
    or p_slot_minutes > 18 * 60 + 30
    or p_slot_minutes % 30 <> 0
  then
    raise exception 'Horario inválido';
  end if;
  if p_slot_date = v_today and p_slot_minutes < v_now_min + 30 then
    raise exception 'Ese horario ya no está disponible';
  end if;
  if char_length(coalesce(p_telefono, '')) > 40
    or char_length(coalesce(p_tema, '')) > 80
    or char_length(coalesce(p_nota, '')) > 2000
    or char_length(coalesce(p_slot_label, '')) > 160
  then
    raise exception 'El mensaje es demasiado largo';
  end if;

  if (select count(*) from public.bookings where created_at > now() - interval '5 minutes') >= 15 then
    raise exception 'La agenda está ocupada. Probá de nuevo en un momento';
  end if;
  if exists (
    select 1 from public.bookings
    where email = email_n
      and status = 'pending'
      and slot_date >= v_today
  ) then
    raise exception 'Ya tenés una reunión pendiente con ese email';
  end if;

  insert into public.bookings (
    nombre, email, telefono, tema, nota,
    slot_date, slot_minutes, slot_label, status
  ) values (
    nombre_n, email_n, nullif(trim(coalesce(p_telefono, '')), ''),
    nullif(trim(coalesce(p_tema, '')), ''), nullif(trim(coalesce(p_nota, '')), ''),
    p_slot_date, p_slot_minutes, nullif(trim(coalesce(p_slot_label, '')), ''), 'pending'
  )
  returning id into new_id;

  return new_id;
exception
  when unique_violation then
    raise exception 'Ese horario ya está reservado';
end;
$$;

grant execute on function public.create_booking(
  text, text, text, text, text, date, int, text
) to anon, authenticated;

-- 1) Crea el usuario en Authentication → Users
-- 2) Descomenta y corre con tu email:
-- insert into public.admins (user_id)
-- select id from auth.users where email = 'tu@email.com'
-- on conflict do nothing;
