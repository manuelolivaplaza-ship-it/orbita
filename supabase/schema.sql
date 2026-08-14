-- Órbita — pegar en Supabase → SQL Editor → Run
-- Luego: Authentication → Providers → Email
--   - Enable Email
--   - Confirm email: off (o on, como prefieras)
--   - Disable sign-ups (solo creas el usuario admin a mano)
-- Authentication → Users → Add user (tu email + clave)
-- Después ejecuta el INSERT de admins al final, con tu email.

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

create table if not exists public.proposals (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text,
  client text,
  notes text,
  status text not null default 'draft' check (status in ('draft', 'sent', 'won', 'lost'))
);

alter table public.admins enable row level security;
alter table public.leads enable row level security;
alter table public.bookings enable row level security;
alter table public.proposals enable row level security;

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

drop policy if exists "admins self read" on public.admins;
create policy "admins self read"
  on public.admins for select to authenticated
  using (user_id = auth.uid() or public.is_admin());

drop policy if exists "leads public insert" on public.leads;
create policy "leads public insert"
  on public.leads for insert to anon, authenticated
  with check (true);

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
begin
  if p_nombre is null or length(trim(p_nombre)) < 2 then
    raise exception 'Nombre inválido';
  end if;
  if p_email is null or position('@' in p_email) = 0 then
    raise exception 'Email inválido';
  end if;
  if extract(dow from p_slot_date) in (0, 6) then
    raise exception 'Solo lunes a viernes';
  end if;
  if p_slot_minutes < 8 * 60 or p_slot_minutes > 18 * 60 + 30 then
    raise exception 'Horario fuera de rango';
  end if;

  insert into public.bookings (
    nombre, email, telefono, tema, nota,
    slot_date, slot_minutes, slot_label, status
  ) values (
    trim(p_nombre), lower(trim(p_email)), nullif(trim(p_telefono), ''),
    nullif(trim(p_tema), ''), nullif(trim(p_nota), ''),
    p_slot_date, p_slot_minutes, p_slot_label, 'pending'
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
