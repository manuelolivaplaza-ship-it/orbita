import React, { useMemo, useState } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import type { Appointment, AppointmentStatus, Order, OrderStatus, TeamMember } from '../../data/crmCatalog';
import { formatClp, formatDay, formatWhen } from '../../lib/crmStore';
import { CrmDrawer, Field, fieldClass } from './CrmDrawer';

const APPT: Record<AppointmentStatus, string> = {
  pendiente: 'bg-amber-50 text-amber-800 border-amber-200',
  confirmada: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  completada: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  cancelada: 'bg-red-50 text-red-700 border-red-200',
  'no-show': 'bg-zinc-100 text-zinc-500 border-zinc-200',
};

const ORDER: Record<OrderStatus, string> = {
  nuevo: 'bg-blue-50 text-blue-700 border-blue-200',
  pagado: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  preparando: 'bg-amber-50 text-amber-800 border-amber-200',
  enviado: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  entregado: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  cancelado: 'bg-red-50 text-red-700 border-red-200',
};

export function CrmAgendaPanel({
  appointments,
  services,
  team,
  onSave,
  onStatus,
}: {
  appointments: Appointment[];
  services: string[];
  team: string[];
  onSave: (item: Partial<Appointment> & { clientName: string; service: string; startsAt: string }) => void;
  onStatus: (id: string, status: AppointmentStatus) => void;
}) {
  const [open, setOpen] = useState(false);
  const groups = useMemo(() => {
    const sorted = [...appointments].sort((a, b) => a.startsAt.localeCompare(b.startsAt));
    const map = new Map<string, Appointment[]>();
    for (const a of sorted) {
      const key = formatDay(a.startsAt);
      map.set(key, [...(map.get(key) || []), a]);
    }
    return [...map.entries()];
  }, [appointments]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-500">Horas que entran desde la web, WhatsApp o se cargan a mano.</p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white"
        >
          <Plus className="h-3.5 w-3.5" />
          Nueva cita
        </button>
      </div>
      {groups.map(([day, rows]) => (
        <section key={day} className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xs">
          <header className="border-b border-zinc-100 bg-zinc-50/70 px-4 py-2.5 text-xs font-semibold capitalize text-zinc-700">
            {day}
          </header>
          <ul className="divide-y divide-zinc-100">
            {rows.map((a) => (
              <li key={a.id} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-zinc-950">
                      {new Date(a.startsAt).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className="text-sm font-medium text-zinc-950">{a.clientName}</span>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold capitalize ${APPT[a.status]}`}>
                      {a.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[12px] text-zinc-500">
                    {a.service} · {a.professional} · {a.durationMin} min
                    {a.valueClp ? ` · ${formatClp(a.valueClp)}` : ''}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {a.clientPhone && (
                    <a
                      href={`https://wa.me/${a.clientPhone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  )}
                  <select
                    value={a.status}
                    onChange={(e) => onStatus(a.id, e.target.value as AppointmentStatus)}
                    className="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[11px]"
                  >
                    {Object.keys(APPT).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <AppointmentForm
        open={open}
        onClose={() => setOpen(false)}
        services={services}
        team={team}
        onSave={(item) => {
          onSave(item);
          setOpen(false);
        }}
      />
    </div>
  );
}

function AppointmentForm({
  open,
  onClose,
  services,
  team,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  services: string[];
  team: string[];
  onSave: (item: Partial<Appointment> & { clientName: string; service: string; startsAt: string }) => void;
}) {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [service, setService] = useState(services[0] || '');
  const [professional, setProfessional] = useState(team[0] || '');
  const [startsAt, setStartsAt] = useState('');

  return (
    <CrmDrawer open={open} title="Nueva cita" subtitle="Se bloquea en la agenda del equipo." onClose={onClose}>
      <form
        className="space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          if (!clientName || !startsAt) return;
          onSave({
            clientName,
            clientPhone,
            service,
            professional,
            startsAt: new Date(startsAt).toISOString(),
          });
          setClientName('');
          setClientPhone('');
          setStartsAt('');
        }}
      >
        <Field label="Cliente">
          <input className={fieldClass} required value={clientName} onChange={(e) => setClientName(e.target.value)} />
        </Field>
        <Field label="WhatsApp">
          <input className={fieldClass} value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="+56 9" />
        </Field>
        <Field label="Servicio">
          <select className={fieldClass} value={service} onChange={(e) => setService(e.target.value)}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Profesional">
          <select className={fieldClass} value={professional} onChange={(e) => setProfessional(e.target.value)}>
            {team.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Fecha y hora">
          <input className={fieldClass} type="datetime-local" required value={startsAt} onChange={(e) => setStartsAt(e.target.value)} />
        </Field>
        <button type="submit" className="w-full rounded-xl bg-zinc-950 py-2.5 text-sm font-medium text-white">
          Guardar cita
        </button>
      </form>
    </CrmDrawer>
  );
}

export function CrmOrdersPanel({
  orders,
  onStatus,
}: {
  orders: Order[];
  onStatus: (id: string, status: OrderStatus) => void;
}) {
  const openValue = orders.filter((o) => !['entregado', 'cancelado'].includes(o.status)).reduce((s, o) => s + o.totalClp, 0);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xs">
          <div className="text-[11px] text-zinc-500">Pedidos</div>
          <div className="mt-1 font-mono text-xl font-bold">{orders.length}</div>
        </div>
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xs">
          <div className="text-[11px] text-zinc-500">En curso</div>
          <div className="mt-1 font-mono text-xl font-bold">
            {orders.filter((o) => !['entregado', 'cancelado'].includes(o.status)).length}
          </div>
        </div>
        <div className="col-span-2 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xs lg:col-span-1">
          <div className="text-[11px] text-zinc-500">Valor abierto</div>
          <div className="mt-1 font-mono text-xl font-bold">{formatClp(openValue)}</div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="py-3 pl-5 pr-3">Pedido</th>
              <th className="px-3 py-3">Cliente</th>
              <th className="px-3 py-3">Ítems</th>
              <th className="px-3 py-3">Total</th>
              <th className="py-3 pr-5">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-zinc-50/80">
                <td className="py-3 pl-5 pr-3">
                  <div className="font-mono font-semibold text-zinc-950">{o.number}</div>
                  <div className="text-[10px] text-zinc-400">{formatWhen(o.createdAt)} · {o.channel}</div>
                </td>
                <td className="px-3 py-3">
                  <div className="font-medium">{o.customerName}</div>
                  <div className="text-[11px] text-zinc-400">{o.city}</div>
                </td>
                <td className="px-3 py-3 text-zinc-600">
                  {o.items.map((i) => `${i.qty}× ${i.name}`).join(' · ')}
                </td>
                <td className="px-3 py-3 font-mono font-semibold">{formatClp(o.totalClp)}</td>
                <td className="py-3 pr-5">
                  <select
                    value={o.status}
                    onChange={(e) => onStatus(o.id, e.target.value as OrderStatus)}
                    className={`rounded-full border px-2 py-1 text-[11px] font-semibold capitalize ${ORDER[o.status]}`}
                  >
                    {Object.keys(ORDER).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CrmTeamPanel({
  team,
  onSave,
}: {
  team: TeamMember[];
  onSave: (item: Partial<TeamMember> & { name: string; role: string }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-500">Quién atiende, agenda y aparece como profesional en las citas.</p>
        <button
          type="button"
          onClick={() => {
            setEditing(null);
            setOpen(true);
          }}
          className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white"
        >
          <Plus className="h-3.5 w-3.5" />
          Agregar
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => {
              setEditing(m);
              setOpen(true);
            }}
            className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-left shadow-xs hover:border-zinc-300"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-sm font-semibold text-zinc-950">{m.name}</div>
                <div className="text-xs text-zinc-500">{m.role}</div>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${m.active ? 'bg-emerald-50 text-emerald-700' : 'bg-zinc-100 text-zinc-500'}`}>
                {m.active ? 'Activo' : 'Inactivo'}
              </span>
            </div>
            <div className="mt-3 space-y-0.5 font-mono text-[11px] text-zinc-500">
              <div>{m.specialty}</div>
              <div>{m.email}</div>
              <div>{m.phone}</div>
            </div>
          </button>
        ))}
      </div>
      <TeamForm
        open={open}
        member={editing}
        onClose={() => setOpen(false)}
        onSave={(item) => {
          onSave(item);
          setOpen(false);
        }}
      />
    </div>
  );
}

function TeamForm({
  open,
  member,
  onClose,
  onSave,
}: {
  open: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onSave: (item: Partial<TeamMember> & { name: string; role: string }) => void;
}) {
  const [name, setName] = useState(member?.name || '');
  const [role, setRole] = useState(member?.role || '');
  const [email, setEmail] = useState(member?.email || '');
  const [phone, setPhone] = useState(member?.phone || '');
  const [specialty, setSpecialty] = useState(member?.specialty || '');
  const [active, setActive] = useState(member?.active ?? true);

  React.useEffect(() => {
    setName(member?.name || '');
    setRole(member?.role || '');
    setEmail(member?.email || '');
    setPhone(member?.phone || '');
    setSpecialty(member?.specialty || '');
    setActive(member?.active ?? true);
  }, [member, open]);

  return (
    <CrmDrawer open={open} title={member ? 'Editar integrante' : 'Nuevo integrante'} onClose={onClose}>
      <form
        className="space-y-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ id: member?.id, name, role, email, phone, specialty, active });
        }}
      >
        <Field label="Nombre">
          <input className={fieldClass} required value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Cargo">
          <input className={fieldClass} required value={role} onChange={(e) => setRole(e.target.value)} />
        </Field>
        <Field label="Especialidad">
          <input className={fieldClass} value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
        </Field>
        <Field label="Email">
          <input className={fieldClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="Teléfono">
          <input className={fieldClass} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Field>
        <label className="flex items-center justify-between rounded-xl border border-zinc-200 px-3 py-2.5 text-sm">
          <span>Activo en agenda</span>
          <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
        </label>
        <button type="submit" className="w-full rounded-xl bg-zinc-950 py-2.5 text-sm font-medium text-white">
          Guardar
        </button>
      </form>
    </CrmDrawer>
  );
}
