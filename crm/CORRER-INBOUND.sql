-- Pegar en Supabase → SQL Editor → Run TODO.
-- Cotizaciones / contacto / reuniones del sitio → crm.leads (el CRM).

alter table crm.leads
  add column if not exists email text;

alter table crm.leads drop constraint if exists crm_leads_email_len_chk;
alter table crm.leads add constraint crm_leads_email_len_chk
  check (email is null or char_length(email) between 3 and 254);

create index if not exists crm_leads_email_idx on crm.leads (lower(email));
create index if not exists crm_leads_source_idx on crm.leads (source);
create index if not exists crm_leads_inbound_nuevos_idx
  on crm.leads (created_at desc)
  where source in ('cotizacion', 'contacto', 'reunion', 'web')
    and status in ('nuevo', 'reunion');

create or replace function public.submit_crm_inbound(
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
returns text
language plpgsql
security definer
set search_path = public, crm
as $$
declare
  new_id text;
  email_n text;
  nombre_n text;
  negocio text;
  digits text;
  plan_n text;
  plan_enum crm.plan_ofrecido;
  monto int;
  score int;
  notas_txt text;
  insight_txt text;
  st crm.lead_status;
  reunion_ts timestamptz;
begin
  email_n := lower(trim(coalesce(p_email, '')));
  nombre_n := nullif(trim(coalesce(p_nombre, '')), '');

  if p_source is null or p_source not in ('contacto', 'cotizacion', 'newsletter', 'reunion') then
    raise exception 'Origen inválido';
  end if;
  if p_source = 'newsletter' then
    return null;
  end if;
  if email_n = '' or position('@' in email_n) < 2 or char_length(email_n) > 254 then
    raise exception 'Email inválido';
  end if;
  if nombre_n is null or char_length(nombre_n) < 2 then
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

  if (
    select count(*) from crm.leads
    where source in ('cotizacion', 'contacto', 'reunion', 'web')
      and created_at > now() - interval '1 minute'
  ) >= 20 then
    raise exception 'El formulario está ocupado. Prueba de nuevo en un momento';
  end if;
  if (
    select count(*) from crm.leads
    where email is not null
      and lower(email) = email_n
      and created_at > now() - interval '10 minutes'
  ) >= 3 then
    raise exception 'Demasiados envíos. Prueba de nuevo en unos minutos';
  end if;

  negocio := nullif(trim(coalesce(p_empresa, '')), '');
  if negocio is null then negocio := nombre_n; end if;
  negocio := left(negocio, 200);

  digits := regexp_replace(coalesce(p_telefono, ''), '\D', '', 'g');
  if digits like '00%' then digits := substring(digits from 3); end if;
  if length(digits) = 9 and digits like '9%' then
    digits := '56' || digits;
  elsif length(digits) = 8 then
    digits := '569' || digits;
  elsif length(digits) = 11 and digits like '56%' and substring(digits from 3 for 1) <> '9' then
    digits := '569' || substring(digits from 3);
  end if;
  if digits = '' then digits := null; end if;

  plan_n := lower(translate(trim(coalesce(p_plan, '')), 'áéíóúÁÉÍÓÚ', 'aeiouAEIOU'));
  if plan_n like '%sonda%' then
    plan_enum := 'sonda';
  elsif plan_n like '%constela%' then
    plan_enum := 'constelacion';
  elsif plan_n like '%estacion%' then
    plan_enum := 'estacion';
  else
    plan_enum := null;
  end if;

  begin
    monto := nullif(regexp_replace(coalesce(p_total, ''), '\D', '', 'g'), '')::int;
    if monto is not null and (monto < 0 or monto > 100000000) then
      monto := null;
    end if;
  exception when others then
    monto := null;
  end;

  reunion_ts := null;
  if p_source = 'reunion' and coalesce(p_fecha, '') ~ '^\d{4}-\d{2}-\d{2}' then
    begin
      reunion_ts := p_fecha::timestamptz;
    exception when others then
      reunion_ts := null;
    end;
  end if;

  score := case p_source
    when 'cotizacion' then 95
    when 'reunion' then 90
    else 80
  end;

  st := case when p_source = 'reunion' then 'reunion'::crm.lead_status else 'nuevo'::crm.lead_status end;

  insight_txt := concat_ws(
    ' · ',
    case p_source
      when 'cotizacion' then 'Cotización web'
      when 'reunion' then 'Reunión agendada'
      else 'Contacto web'
    end,
    nullif(trim(coalesce(p_plan, '')), ''),
    nullif(trim(coalesce(p_objetivo, '')), ''),
    nullif(trim(coalesce(p_plazo, '')), '')
  );

  notas_txt := concat_ws(
    E'\n',
    'Nombre: ' || nombre_n,
    'Email: ' || email_n,
    case when digits is not null then 'Tel: ' || digits end,
    case when nullif(trim(coalesce(p_rubro, '')), '') is not null then 'Rubro: ' || trim(p_rubro) end,
    case when nullif(trim(coalesce(p_extras, '')), '') is not null then 'Extras: ' || trim(p_extras) end,
    case when nullif(trim(coalesce(p_total, '')), '') is not null then 'Estimación: ' || trim(p_total) end,
    case when nullif(trim(coalesce(p_fecha, '')), '') is not null then 'Fecha: ' || trim(p_fecha) end,
    case when nullif(trim(coalesce(p_mensaje, '')), '') is not null then 'Detalle: ' || trim(p_mensaje) end
  );

  insert into crm.leads (
    nombre_negocio, rubro, telefono_wa, email, insight, notas,
    status, plan_ofrecido, monto_clp, buy_score, source, owner,
    reunion_at
  ) values (
    negocio,
    nullif(trim(coalesce(p_rubro, '')), ''),
    digits,
    email_n,
    insight_txt,
    notas_txt,
    st,
    plan_enum,
    monto,
    score,
    p_source,
    'Manuel',
    reunion_ts
  )
  returning id into new_id;

  insert into crm.events (lead_id, type, payload)
  values (
    new_id,
    'note',
    jsonb_build_object(
      'kind', 'inbound',
      'source', p_source,
      'email', email_n,
      'plan', nullif(trim(coalesce(p_plan, '')), ''),
      'total', nullif(trim(coalesce(p_total, '')), ''),
      'extras', nullif(trim(coalesce(p_extras, '')), '')
    )
  );

  return new_id;
end;
$$;

grant execute on function public.submit_crm_inbound(
  text, text, text, text, text, text, text, text, text, text, text, text, text
) to anon, authenticated;

notify pgrst, 'reload schema';
