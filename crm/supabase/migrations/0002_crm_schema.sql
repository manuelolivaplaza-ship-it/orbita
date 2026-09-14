-- Reclu CRM outbound — schema crm (mismo proyecto que reclu/Órbita)
-- NO toca public.leads del sitio.
-- Supabase → SQL Editor → Run TODO este archivo.

create extension if not exists pgcrypto;

create schema if not exists crm;

do $$ begin
  create type crm.lead_status as enum (
    'nuevo', 'contactado', 'respondio', 'interesado',
    'reunion', 'propuesta', 'ganado', 'nurture', 'perdido'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type crm.motivo_perdido as enum (
    'precio', 'timing', 'no_fit', 'sin_respuesta', 'otro'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type crm.plan_ofrecido as enum (
    'sonda', 'estacion', 'constelacion'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type crm.event_type as enum (
    'sent', 'reply', 'status_change', 'note'
  );
exception when duplicate_object then null;
end $$;

create table if not exists crm.leads (
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
  status crm.lead_status not null default 'nuevo',
  dia_lote int,
  fecha_envio timestamptz,
  fecha_respuesta timestamptz,
  next_followup date,
  followup_step int not null default 0,
  plan_ofrecido crm.plan_ofrecido,
  monto_clp int,
  reunion_at timestamptz,
  sena boolean not null default false,
  motivo_perdido crm.motivo_perdido,
  owner text not null default 'Manuel',
  notas text,
  source text not null default 'csv',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint crm_leads_followup_step_chk check (followup_step in (0, 2, 5, 9, 14)),
  constraint crm_leads_buy_score_chk check (buy_score is null or (buy_score between 0 and 100)),
  constraint crm_leads_ganado_sena_chk check (status <> 'ganado' or sena = true),
  constraint crm_leads_perdido_motivo_chk check (status <> 'perdido' or motivo_perdido is not null),
  constraint crm_leads_nombre_len_chk check (char_length(nombre_negocio) between 1 and 200)
);

create table if not exists crm.events (
  id uuid primary key default gen_random_uuid(),
  lead_id text not null references crm.leads (id) on delete cascade,
  type crm.event_type not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists crm.app_settings (
  id int primary key default 1 check (id = 1),
  daily_new_cap int not null default 50,
  timezone text not null default 'America/Santiago',
  bot_key_override text,
  owner_default text not null default 'Manuel',
  updated_at timestamptz not null default now()
);

insert into crm.app_settings (id) values (1)
on conflict (id) do nothing;

create index if not exists crm_leads_status_idx on crm.leads (status);
create index if not exists crm_leads_next_followup_idx on crm.leads (next_followup) where next_followup is not null;
create index if not exists crm_leads_status_followup_idx on crm.leads (status, next_followup);
create index if not exists crm_leads_nuevos_score_idx on crm.leads (buy_score desc nulls last) where status = 'nuevo';
create index if not exists crm_leads_dia_lote_idx on crm.leads (dia_lote);
create index if not exists crm_leads_telefono_idx on crm.leads (telefono_wa);
create index if not exists crm_events_lead_idx on crm.events (lead_id, created_at desc);

create or replace function crm.leads_before_write()
returns trigger language plpgsql as $$
begin
  if new.plan_ofrecido is not null and new.monto_clp is null then
    new.monto_clp := case new.plan_ofrecido
      when 'sonda' then 420000
      when 'estacion' then 990000
      when 'constelacion' then 1490000
    end;
  end if;
  if tg_op = 'UPDATE' then new.updated_at := now(); end if;
  return new;
end;
$$;

drop trigger if exists leads_before_write on crm.leads;
create trigger leads_before_write
  before insert or update on crm.leads
  for each row execute procedure crm.leads_before_write();

create or replace function crm.leads_after_status()
returns trigger language plpgsql as $$
begin
  if tg_op = 'UPDATE' and new.status is distinct from old.status then
    insert into crm.events (lead_id, type, payload)
    values (new.id, 'status_change', jsonb_build_object(
      'from', old.status, 'to', new.status,
      'motivo', new.motivo_perdido, 'sena', new.sena
    ));
  end if;
  return new;
end;
$$;

drop trigger if exists leads_after_status on crm.leads;
create trigger leads_after_status
  after update on crm.leads
  for each row execute procedure crm.leads_after_status();

alter table crm.leads enable row level security;
alter table crm.events enable row level security;
alter table crm.app_settings enable row level security;

grant usage on schema crm to postgres, service_role;
grant all on all tables in schema crm to service_role;
grant all on all sequences in schema crm to service_role;
grant execute on all functions in schema crm to service_role;
alter default privileges in schema crm grant all on tables to service_role;

-- Exponer schema crm en la API (PostgREST)
notify pgrst, 'reload schema';
