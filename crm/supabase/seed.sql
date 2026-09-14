-- 20 clínicas dentales demo — Santiago.
-- Correr DESPUÉS de 0001_init.sql. Idempotente (upsert por id).

insert into public.leads (
  id, nombre_negocio, rubro, comuna, telefono_wa, website, maps_url, clase,
  buy_score, slug, ejemplo_url, galeria_url, insight, mensaje_wa, status,
  dia_lote, fecha_envio, fecha_respuesta, next_followup, followup_step,
  plan_ofrecido, monto_clp, reunion_at, sena, motivo_perdido, owner, notas, source
) values
(
  'den-01', 'Clínica Dental Andes', 'dentista', 'Providencia', '56981110001',
  'https://clinicadentalandes.cl', 'https://maps.google.com/?q=Clinica+Dental+Andes+Providencia', 'A',
  92, 'clinica-dental-andes', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Web de 2018, sin WhatsApp visible, hero con stock. Estación encaja.',
  'Hola, soy Manuel de Reclu (reclu.cl). Vi Clínica Dental Andes en Providencia y armé un ejemplo de cómo se vería su web: https://reclu.cl/creaciones/dentista-b-claro ¿Les acomoda si se lo muestro 10 min por acá?',
  'nuevo', 1, null, null, null, 0, 'estacion', 990000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-02', 'Sonrisa Vitacura', 'dentista', 'Vitacura', '56981110002',
  null, 'https://maps.google.com/?q=Sonrisa+Vitacura', 'A',
  88, 'sonrisa-vitacura', 'https://reclu.cl/creaciones/dentista-b-oscuro-premium', 'https://reclu.cl/galeria/dentista',
  'Solo Instagram. Pacientes alto ticket (carillas/implantes). Constelación.',
  'Hola, soy Manuel de Reclu. Vi Sonrisa Vitacura y preparé un ejemplo oscuro premium para clínicas como la suya: https://reclu.cl/creaciones/dentista-b-oscuro-premium ¿Conversamos 10 min?',
  'nuevo', 1, null, null, null, 0, 'constelacion', 1490000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-03', 'Odontología Ñuñoa Centro', 'dentista', 'Ñuñoa', '56981110003',
  'https://odonto-nunoa.cl', 'https://maps.google.com/?q=Odontologia+Nunoa', 'B',
  76, 'odontologia-nunoa', 'https://reclu.cl/creaciones/dentista-b-teal', 'https://reclu.cl/galeria/dentista',
  'Wix lento, formulario roto. Sonda para validar, upsell a Estación.',
  'Hola, soy Manuel de Reclu. Vi Odontología Ñuñoa Centro: su sitio actual se siente lento. Les armé un ejemplo: https://reclu.cl/creaciones/dentista-b-teal ¿Lo miramos 10 min?',
  'nuevo', 1, null, null, null, 0, 'sonda', 420000, null, false, null, 'Manuel', null, 'web'
),
(
  'den-04', 'Dental Las Condes', 'dentista', 'Las Condes', '56981110004',
  null, 'https://maps.google.com/?q=Dental+Las+Condes', 'A',
  85, 'dental-las-condes', 'https://reclu.cl/creaciones/dentista-b-azul-cian', 'https://reclu.cl/galeria/dentista',
  '3 sucursales, una sola ficha de Maps. Quieren agenda online.',
  'Hola, soy Manuel de Reclu. Vi Dental Las Condes — 3 sucursales y una web que no las muestra. Ejemplo: https://reclu.cl/creaciones/dentista-b-azul-cian ¿10 min esta semana?',
  'nuevo', 1, null, null, null, 0, 'estacion', 990000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-05', 'Centro Dental Maipú', 'dentista', 'Maipú', '56981110005',
  'https://centrodentalmaipu.cl', 'https://maps.google.com/?q=Centro+Dental+Maipu', 'B',
  64, 'centro-dental-maipu', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Mucho volumen, poco premium. Sonda + Care.',
  'Hola, soy Manuel de Reclu. Vi Centro Dental Maipú y armé un ejemplo claro y directo: https://reclu.cl/creaciones/dentista-b-claro ¿Les sirve si se lo muestro?',
  'nuevo', 2, null, null, null, 0, 'sonda', 420000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-06', 'Clínica Oral Santiago Centro', 'dentista', 'Santiago', '56981110006',
  null, 'https://maps.google.com/?q=Clinica+Oral+Santiago', 'B',
  71, 'clinica-oral-santiago', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Atienden convenios. Insight: página de convenios + WhatsApp.',
  'Hola, soy Manuel de Reclu. Vi Clínica Oral Santiago Centro. Les dejé un ejemplo de web con WhatsApp y convenios: https://reclu.cl/creaciones/dentista-b-claro',
  'nuevo', 2, null, null, null, 0, 'estacion', 990000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-07', 'Implantes Lo Barnechea', 'dentista', 'Lo Barnechea', '56981110007',
  'https://implanteslb.cl', 'https://maps.google.com/?q=Implantes+Lo+Barnechea', 'A',
  90, 'implantes-lo-barnechea', 'https://reclu.cl/creaciones/dentista-b-oscuro-premium', 'https://reclu.cl/galeria/dentista',
  'Ticket alto. Enviado hace 5 días, follow-up vencido (día 2).',
  'Hola de nuevo, Manuel de Reclu. El martes les pasé un ejemplo para Implantes Lo Barnechea: https://reclu.cl/creaciones/dentista-b-oscuro-premium ¿Lo alcanzaron a ver?',
  'contactado', 1,
  timezone('America/Santiago', now()) - interval '5 days',
  null,
  (timezone('America/Santiago', now()))::date - 3,
  2, 'constelacion', 1490000, null, false, null, 'Manuel', 'Enviado lote 1. Sin respuesta.', 'maps'
),
(
  'den-08', 'Ortodoncia La Florida', 'dentista', 'La Florida', '56981110008',
  null, 'https://maps.google.com/?q=Ortodoncia+La+Florida', 'B',
  68, 'ortodoncia-la-florida', 'https://reclu.cl/creaciones/dentista-b-teal', 'https://reclu.cl/galeria/dentista',
  'Brackets e Invisalign. Follow-up día 2 vencido.',
  'Hola, Manuel de Reclu otra vez. Les había escrito por Ortodoncia La Florida con este ejemplo: https://reclu.cl/creaciones/dentista-b-teal ¿Les hace sentido una web así?',
  'contactado', 1,
  timezone('America/Santiago', now()) - interval '4 days',
  null,
  (timezone('America/Santiago', now()))::date - 2,
  2, 'estacion', 990000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-09', 'Dental Peñalolén', 'dentista', 'Peñalolén', '56981110009',
  null, 'https://maps.google.com/?q=Dental+Penalolen', 'B',
  55, 'dental-penalolen', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Follow-up día 5 vencido. Último empujón antes de 9.',
  'Hola, soy Manuel de Reclu. Les escribo por última vez esta semana por Dental Peñalolén. Ejemplo: https://reclu.cl/creaciones/dentista-b-claro Si no es el momento, no hay problema.',
  'contactado', 2,
  timezone('America/Santiago', now()) - interval '8 days',
  null,
  (timezone('America/Santiago', now()))::date - 1,
  5, 'sonda', 420000, null, false, null, 'Manuel', null, 'csv'
),
(
  'den-10', 'Sonríe Independencia', 'dentista', 'Independencia', '56981110010',
  'https://sonrieindependencia.cl', 'https://maps.google.com/?q=Sonrie+Independencia', 'B',
  60, 'sonrie-independencia', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Cadencia día 9 vencida. Candidato a perdido/sin_respuesta si no contesta.',
  'Hola, Manuel de Reclu. Cierro el hilo de Sonríe Independencia — si más adelante quieren verse una web nueva, me escriben. Ejemplo: https://reclu.cl/creaciones/dentista-b-claro',
  'contactado', 2,
  timezone('America/Santiago', now()) - interval '12 days',
  null,
  (timezone('America/Santiago', now()))::date - 2,
  9, 'sonda', 420000, null, false, null, 'Manuel', '3 toques. Silencio.', 'maps'
),
(
  'den-11', 'Clínica Brackets Recoleta', 'dentista', 'Recoleta', '56981110011',
  null, 'https://maps.google.com/?q=Clinica+Brackets+Recoleta', 'B',
  58, 'brackets-recoleta', 'https://reclu.cl/creaciones/dentista-b-teal', 'https://reclu.cl/galeria/dentista',
  'Enviado ayer. Follow-up futuro (día 2).',
  'Hola, soy Manuel de Reclu. Vi Clínica Brackets Recoleta y armé este ejemplo: https://reclu.cl/creaciones/dentista-b-teal ¿10 min esta semana?',
  'contactado', 3,
  timezone('America/Santiago', now()) - interval '1 day',
  null,
  (timezone('America/Santiago', now()))::date + 1,
  2, 'estacion', 990000, null, false, null, 'Manuel', null, 'maps'
),
(
  'den-12', 'Odontopediatría La Reina', 'dentista', 'La Reina', '56981110012',
  'https://odonto-lareina.cl', 'https://maps.google.com/?q=Odontopediatria+La+Reina', 'A',
  81, 'odontopediatria-la-reina', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Respondió: "mándenme el ejemplo". Mover a interesado.',
  'Hola, soy Manuel de Reclu. Como les comenté, el ejemplo para Odontopediatría La Reina está acá: https://reclu.cl/creaciones/dentista-b-claro',
  'respondio', 1,
  timezone('America/Santiago', now()) - interval '3 days',
  timezone('America/Santiago', now()) - interval '1 day',
  null, 2, 'estacion', 990000, null, false, null, 'Manuel', 'Pidieron ver el ejemplo por WA.', 'maps'
),
(
  'den-13', 'Dental Estética Las Condes', 'dentista', 'Las Condes', '56981110013',
  'https://dentalestetica.cl', 'https://maps.google.com/?q=Dental+Estetica+Las+Condes', 'A',
  94, 'dental-estetica-las-condes', 'https://reclu.cl/creaciones/dentista-b-oscuro-premium', 'https://reclu.cl/galeria/dentista',
  'Respondió preguntando precio. Estación hero.',
  'Hola, Manuel de Reclu. El plan Estación queda en $990.000 + Care $60.000/mes. Les dejo el ejemplo: https://reclu.cl/creaciones/dentista-b-oscuro-premium',
  'respondio', 1,
  timezone('America/Santiago', now()) - interval '6 days',
  timezone('America/Santiago', now()) - interval '2 days',
  null, 2, 'estacion', 990000, null, false, null, 'Manuel', 'Preguntaron precio. Enviar one-pager.', 'web'
),
(
  'den-14', 'Centro Maxilofacial Providencia', 'dentista', 'Providencia', '56981110014',
  'https://maxilofacialstgo.cl', 'https://maps.google.com/?q=Centro+Maxilofacial+Providencia', 'A',
  87, 'maxilofacial-providencia', 'https://reclu.cl/creaciones/dentista-b-azul-cian', 'https://reclu.cl/galeria/dentista',
  'Interesado en Constelación. Esperan calendario de rediseño.',
  'Hola, Manuel de Reclu. Agendemos 20 min para el rediseño de Centro Maxilofacial. Ejemplo: https://reclu.cl/creaciones/dentista-b-azul-cian',
  'interesado', 1,
  timezone('America/Santiago', now()) - interval '10 days',
  timezone('America/Santiago', now()) - interval '7 days',
  (timezone('America/Santiago', now()))::date + 2,
  5, 'constelacion', 1490000, null, false, null, 'Manuel', 'Quieren ver casos de clínicas similares.', 'maps'
),
(
  'den-15', 'Clínica Dental Huechuraba', 'dentista', 'Huechuraba', '56981110015',
  null, 'https://maps.google.com/?q=Clinica+Dental+Huechuraba', 'B',
  73, 'clinica-dental-huechuraba', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Reunión agendada. Llevar Estación + Care.',
  'Hola, Manuel de Reclu. Confirmado: nos vemos para mostrar el ejemplo de Clínica Dental Huechuraba. https://reclu.cl/creaciones/dentista-b-claro',
  'reunion', 2,
  timezone('America/Santiago', now()) - interval '14 days',
  timezone('America/Santiago', now()) - interval '9 days',
  null, 5, 'estacion', 990000,
  timezone('America/Santiago', now()) + interval '2 days',
  false, null, 'Manuel', 'Meet 20 min. Decisor: Dra. Soto.', 'maps'
),
(
  'den-16', 'Sonrisa San Miguel', 'dentista', 'San Miguel', '56981110016',
  'https://sonrisasanmiguel.cl', 'https://maps.google.com/?q=Sonrisa+San+Miguel', 'B',
  70, 'sonrisa-san-miguel', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Propuesta Estación enviada. Esperando seña.',
  'Hola, Manuel de Reclu. Les dejé la propuesta Estación ($990.000) + Care ($60.000/mes). Con seña arrancamos en 10 días.',
  'propuesta', 2,
  timezone('America/Santiago', now()) - interval '20 days',
  timezone('America/Santiago', now()) - interval '16 days',
  (timezone('America/Santiago', now()))::date + 3,
  9, 'estacion', 990000, null, false, null, 'Manuel', 'PDF enviado. Follow-up propuesta el viernes.', 'web'
),
(
  'den-17', 'Implantes Vitacura Studio', 'dentista', 'Vitacura', '56981110017',
  'https://implantesvitacura.cl', 'https://maps.google.com/?q=Implantes+Vitacura', 'A',
  96, 'implantes-vitacura-studio', 'https://reclu.cl/creaciones/dentista-b-oscuro-premium', 'https://reclu.cl/galeria/dentista',
  'Ganado. Seña pagada. Constelación + Care.',
  'Hola, Manuel de Reclu. Recibimos la seña — arrancamos Implantes Vitacura Studio esta semana. Gracias.',
  'ganado', 1,
  timezone('America/Santiago', now()) - interval '40 days',
  timezone('America/Santiago', now()) - interval '35 days',
  null, 14, 'constelacion', 1490000,
  timezone('America/Santiago', now()) - interval '28 days',
  true, null, 'Manuel', 'Seña 30% 12 ago. Kickoff hecho.', 'maps'
),
(
  'den-18', 'Dental Puente Alto Express', 'dentista', 'Puente Alto', '56981110018',
  null, 'https://maps.google.com/?q=Dental+Puente+Alto', 'B',
  48, 'dental-puente-alto', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Pidieron "más adelante". Nurture Q4.',
  'Hola, Manuel de Reclu. Como acordamos, les escribo más adelante. El ejemplo sigue acá: https://reclu.cl/creaciones/dentista-b-claro',
  'nurture', 3,
  timezone('America/Santiago', now()) - interval '18 days',
  timezone('America/Santiago', now()) - interval '15 days',
  (timezone('America/Santiago', now()))::date - 1,
  14, 'sonda', 420000, null, false, null, 'Manuel', 'Recontactar en octubre.', 'maps'
),
(
  'den-19', 'Clínica Oral Macul', 'dentista', 'Macul', '56981110019',
  'https://oralmacul.cl', 'https://maps.google.com/?q=Clinica+Oral+Macul', 'B',
  52, 'clinica-oral-macul', 'https://reclu.cl/creaciones/dentista-b-claro', 'https://reclu.cl/galeria/dentista',
  'Perdido por precio. Sonda todavía caro para ellos.',
  'Hola, Manuel de Reclu. Entendido por presupuesto — si cambia el escenario, me escriben. Éxito con Clínica Oral Macul.',
  'perdido', 3,
  timezone('America/Santiago', now()) - interval '25 days',
  timezone('America/Santiago', now()) - interval '20 days',
  null, 9, 'sonda', 420000, null, false, 'precio', 'Manuel', 'Dijeron que $420k se sale. No insistir.', 'csv'
),
(
  'den-20', 'Odontología Plaza Egaña', 'dentista', 'Ñuñoa', '56981110020',
  null, 'https://maps.google.com/?q=Odontologia+Plaza+Egana', 'A',
  83, 'odontologia-plaza-egana', 'https://reclu.cl/creaciones/dentista-b-azul-cian', 'https://reclu.cl/galeria/dentista',
  'Ubicación top. Sin web, solo ficha Maps. Prioridad lote de hoy.',
  'Hola, soy Manuel de Reclu (reclu.cl). Vi Odontología Plaza Egaña en Ñuñoa — no tienen web y el Maps se queda corto. Les armé un ejemplo: https://reclu.cl/creaciones/dentista-b-azul-cian ¿10 min por acá?',
  'nuevo', 1, null, null, null, 0, 'estacion', 990000, null, false, null, 'Manuel', null, 'maps'
)
on conflict (id) do update set
  nombre_negocio = excluded.nombre_negocio,
  rubro = excluded.rubro,
  comuna = excluded.comuna,
  telefono_wa = excluded.telefono_wa,
  website = excluded.website,
  maps_url = excluded.maps_url,
  clase = excluded.clase,
  buy_score = excluded.buy_score,
  slug = excluded.slug,
  ejemplo_url = excluded.ejemplo_url,
  galeria_url = excluded.galeria_url,
  insight = excluded.insight,
  mensaje_wa = excluded.mensaje_wa,
  status = excluded.status,
  dia_lote = excluded.dia_lote,
  fecha_envio = excluded.fecha_envio,
  fecha_respuesta = excluded.fecha_respuesta,
  next_followup = excluded.next_followup,
  followup_step = excluded.followup_step,
  plan_ofrecido = excluded.plan_ofrecido,
  monto_clp = excluded.monto_clp,
  reunion_at = excluded.reunion_at,
  sena = excluded.sena,
  motivo_perdido = excluded.motivo_perdido,
  owner = excluded.owner,
  notas = excluded.notas,
  source = excluded.source;

delete from public.events where lead_id like 'den-%';

insert into public.events (lead_id, type, payload) values
  ('den-07', 'sent', '{"via":"seed","step":0}'::jsonb),
  ('den-08', 'sent', '{"via":"seed","step":0}'::jsonb),
  ('den-09', 'sent', '{"via":"seed","step":0}'::jsonb),
  ('den-10', 'sent', '{"via":"seed","step":0}'::jsonb),
  ('den-11', 'sent', '{"via":"seed","step":0}'::jsonb),
  ('den-12', 'sent', '{"via":"seed"}'::jsonb),
  ('den-12', 'reply', '{"text":"mándenme el ejemplo"}'::jsonb),
  ('den-13', 'sent', '{"via":"seed"}'::jsonb),
  ('den-13', 'reply', '{"text":"¿cuánto sale?"}'::jsonb),
  ('den-14', 'reply', '{"text":"nos interesa, queremos ver plazos"}'::jsonb),
  ('den-15', 'note', '{"text":"Reunión con Dra. Soto"}'::jsonb),
  ('den-16', 'note', '{"text":"Propuesta Estación enviada"}'::jsonb),
  ('den-17', 'note', '{"text":"Seña 30% recibida"}'::jsonb),
  ('den-18', 'note', '{"text":"Pidieron más adelante — nurture"}'::jsonb),
  ('den-19', 'note', '{"text":"Perdido por precio"}'::jsonb)
on conflict do nothing;
