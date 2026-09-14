-- Reclu CRM — outbound WhatsApp a pymes Chile
-- Proyecto Supabase PROPIO. No mezclar con el inbound de reclu.cl
-- (esa tabla public.leads es de formularios; esta es otra base).
--
-- Supabase → SQL Editor → Run. Se puede volver a correr.

create extension if not exists pgcrypto;

do $$ begin
  create type public.lead_status as enum (
    'nuevo', 'contactado', 'respondio', 'interesado',
    'reunion', 'propuesta', 'ganado', 'nurture', 'perdido'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.motivo_perdido as enum (
    'precio', 'timing', 'no_fit', 'sin_respuesta', 'otro'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.plan_ofrecido as enum (
    'sonda', 'estacion', 'constelacion'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.event_type as enum (
    'sent', 'reply', 'status_change', 'note'
  );
exception when duplicate_object then null;
end $$;

create table if not exists public.leads (
  id text primary key default gen_random_uuid()::text,
  nombre_negocio text not null,
  rubro text,
  comuna text,
  telefono_wa text,
  website text,
  maps_url text,
  clase text,
  buy_score int,
  slug text,
  ejemplo_url text,
  galeria_url text,
  insight text,
  mensaje_wa text,
  status public.lead_status not null default 'nuevo',
  dia_lote int,
  fecha_envio timestamptz,
  fecha_respuesta timestamptz,
  next_followup date,
  followup_step int not null default 0,
  plan_ofrecido public.plan_ofrecido,
  monto_clp int,
  reunion_at timestamptz,
  sena boolean not null default false,
  motivo_perdido public.motivo_perdido,
  owner text not null default 'Manuel',
  notas text,
  source text not null default 'csv',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint leads_followup_step_chk check (followup_step in (0, 2, 5, 9, 14)),
  constraint leads_buy_score_chk check (buy_score is null or (buy_score between 0 and 100)),
  constraint leads_ganado_sena_chk check (status <> 'ganado' or sena = true),
  constraint leads_perdido_motivo_chk check (status <> 'perdido' or motivo_perdido is not null),
  constraint leads_nombre_len_chk check (char_length(nombre_negocio) between 1 and 200)
);

comment on column public.leads.sena is 'Seña pagada. obligatorio para status=ganado';
comment on column public.leads.followup_step is 'Cadencia WA en días desde fecha_envio: 0 (sin envío) → 2 → 5 → 9 → 14';
comment on column public.leads.telefono_wa is 'Dígitos internacionales, típico 569XXXXXXXX';

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  lead_id text not null references public.leads (id) on delete cascade,
  type public.event_type not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.app_settings (
  id int primary key default 1 check (id = 1),
  daily_new_cap int not null default 50,
  timezone text not null default 'America/Santiago',
  bot_key_override text,
  owner_default text not null default 'Manuel',
  updated_at timestamptz not null default now()
);

insert into public.app_settings (id) values (1)
on conflict (id) do nothing;

create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_next_followup_idx on public.leads (next_followup)
  where next_followup is not null;
create index if not exists leads_status_followup_idx on public.leads (status, next_followup);
create index if not exists leads_nuevos_score_idx on public.leads (buy_score desc nulls last)
  where status = 'nuevo';
create index if not exists leads_dia_lote_idx on public.leads (dia_lote);
create index if not exists leads_telefono_idx on public.leads (telefono_wa);
create index if not exists leads_rubro_idx on public.leads (rubro);
create index if not exists leads_comuna_idx on public.leads (comuna);
create index if not exists events_lead_idx on public.events (lead_id, created_at desc);
create index if not exists events_type_idx on public.events (type, created_at desc);

create or replace function public.leads_before_write()
returns trigger
language plpgsql
as $$
begin
  if new.plan_ofrecido is not null and new.monto_clp is null then
    new.monto_clp := case new.plan_ofrecido
      when 'sonda' then 420000
      when 'estacion' then 990000
      when 'constelacion' then 1490000
    end;
  end if;
  if tg_op = 'UPDATE' then
    new.updated_at := now();
  end if;
  return new;
end;
$$;

drop trigger if exists leads_before_write on public.leads;
create trigger leads_before_write
  before insert or update on public.leads
  for each row execute procedure public.leads_before_write();

create or replace function public.leads_after_status()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'UPDATE' and new.status is distinct from old.status then
    insert into public.events (lead_id, type, payload)
    values (
      new.id,
      'status_change',
      jsonb_build_object(
        'from', old.status,
        'to', new.status,
        'motivo', new.motivo_perdido,
        'sena', new.sena
      )
    );
  end if;
  return new;
end;
$$;

drop trigger if exists leads_after_status on public.leads;
create trigger leads_after_status
  after update on public.leads
  for each row execute procedure public.leads_after_status();

alter table public.leads enable row level security;
alter table public.events enable row level security;
alter table public.app_settings enable row level security;

revoke all on table public.leads from anon, authenticated, public;
revoke all on table public.events from anon, authenticated, public;
revoke all on table public.app_settings from anon, authenticated, public;

grant all on table public.leads to service_role;
grant all on table public.events to service_role;
grant all on table public.app_settings to service_role;
