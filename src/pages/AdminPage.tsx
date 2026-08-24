import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Session } from '@supabase/supabase-js';
import { PageMeta } from '../components/PageMeta';
import { isSupabaseConfigured, getSupabase } from '../lib/supabase';
import {
  fetchFolderProposals,
  isAdminUser,
  listLeads,
  listProposalRows,
  upsertProposal,
  type FolderProposal,
  type LeadRow,
  type ProposalRow,
} from '../lib/admin';
import {
  bookingWhen,
  listBookings,
  updateBookingStatus,
  type BookingRow,
  type BookingStatus,
} from '../lib/bookings';

type Tab = 'agenda' | 'consultas' | 'propuestas';

const SOURCE_LABEL: Record<LeadRow['source'], string> = {
  contacto: 'Contacto',
  cotizacion: 'Cotización',
  newsletter: 'Newsletter',
  reunion: 'Reunión',
};

const STATUS_LABEL: Record<BookingStatus, string> = {
  pending: 'Pendiente',
  confirmed: 'Confirmada',
  cancelled: 'Cancelada',
};

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString('es-CL', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default function AdminPage() {
  const configured = isSupabaseConfigured();
  const [session, setSession] = useState<Session | null>(null);
  const [admin, setAdmin] = useState(false);
  const [booting, setBooting] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [signing, setSigning] = useState(false);
  const [tab, setTab] = useState<Tab>('agenda');
  const [bookings, setBookings] = useState<BookingRow[]>([]);
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [folders, setFolders] = useState<FolderProposal[]>([]);
  const [rows, setRows] = useState<ProposalRow[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [draft, setDraft] = useState({ slug: '', title: '', client: '', notes: '', status: 'draft' as ProposalRow['status'] });

  useEffect(() => {
    if (!configured) {
      setBooting(false);
      return;
    }
    const supabase = getSupabase();
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });
    return () => data.subscription.unsubscribe();
  }, [configured]);

  useEffect(() => {
    if (!session) {
      setAdmin(false);
      setBooting(false);
      return;
    }
    let cancelled = false;
    isAdminUser()
      .then((ok) => {
        if (!cancelled) setAdmin(ok);
      })
      .finally(() => {
        if (!cancelled) setBooting(false);
      });
    return () => {
      cancelled = true;
    };
  }, [session]);

  const refresh = async () => {
    setLoadError(null);
    try {
      const [nextBookings, nextLeads, nextFolders, nextRows] = await Promise.all([
        listBookings(),
        listLeads(),
        fetchFolderProposals(),
        listProposalRows(),
      ]);
      setBookings(nextBookings);
      setLeads(nextLeads);
      setFolders(nextFolders);
      setRows(nextRows);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : 'No se pudo cargar el panel');
    }
  };

  useEffect(() => {
    if (admin) void refresh();
  }, [admin]);

  const pendingCount = bookings.filter((b) => b.status === 'pending').length;

  const mergedProposals = useMemo(() => {
    const bySlug = new Map(rows.map((r) => [r.slug, r]));
    const slugs = new Set([...folders.map((f) => f.slug), ...rows.map((r) => r.slug)]);
    return [...slugs].sort().map((slug) => ({
      slug,
      folder: folders.find((f) => f.slug === slug),
      row: bySlug.get(slug),
    }));
  }, [folders, rows]);

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    setSigning(true);
    setAuthError(null);
    const { error } = await getSupabase().auth.signInWithPassword({ email, password });
    if (error) setAuthError('No se pudo entrar. Revisá el email y la contraseña.');
    setSigning(false);
  };

  if (!configured) {
    return (
      <Shell title="Admin | Órbita">
        <Card>
          <h1 className="text-2xl font-medium tracking-tight mb-2">Falta conectar Supabase</h1>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Crea el proyecto en Supabase, corre <code>supabase/schema.sql</code> y agrega{' '}
            <code>VITE_SUPABASE_URL</code> y <code>VITE_SUPABASE_ANON_KEY</code> en Vercel y en{' '}
            <code>.env.local</code>.
          </p>
        </Card>
      </Shell>
    );
  }

  if (booting) {
    return (
      <Shell title="Admin | Órbita">
        <p className="text-sm text-zinc-500">Cargando…</p>
      </Shell>
    );
  }

  if (!session) {
    return (
      <Shell title="Entrar | Admin Órbita">
        <Card className="max-w-md">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7280] mb-2">Panel</p>
          <h1 className="text-2xl font-medium tracking-tight mb-6">Entrar</h1>
          <form onSubmit={signIn} className="space-y-3">
            <input
              type="email"
              required
              autoComplete="username"
              placeholder="Email"
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400"
            />
            <input
              type="password"
              required
              autoComplete="current-password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:border-zinc-400"
            />
            {authError && <p className="text-sm text-red-600">{authError}</p>}
            <button
              type="submit"
              disabled={signing}
              className="w-full bg-[#0B0B12] text-white rounded-full py-3 text-sm font-medium disabled:opacity-70"
            >
              {signing ? 'Entrando…' : 'Entrar'}
            </button>
          </form>
        </Card>
      </Shell>
    );
  }

  if (!admin) {
    return (
      <Shell title="Sin acceso | Admin Órbita" email={session.user.email} onOut={() => getSupabase().auth.signOut()}>
        <Card>
          <h1 className="text-2xl font-medium tracking-tight mb-2">Esta cuenta no es admin</h1>
          <p className="text-sm text-zinc-600">
            En Supabase, agrega tu usuario a la tabla <code>admins</code> (está al final de{' '}
            <code>supabase/schema.sql</code>).
          </p>
        </Card>
      </Shell>
    );
  }

  return (
    <Shell title="Panel | Órbita" email={session.user.email} onOut={() => getSupabase().auth.signOut()}>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7280] mb-1">Panel</p>
          <h1 className="text-3xl font-medium tracking-tight" style={{ letterSpacing: '-0.03em' }}>
            Actividad
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Stat label="Reuniones pendientes" value={pendingCount} />
          <Stat label="Consultas" value={leads.length} />
          <Stat label="Propuestas" value={mergedProposals.length} />
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {(
          [
            ['agenda', 'Agenda'],
            ['consultas', 'Formularios'],
            ['propuestas', 'Propuestas'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              tab === id ? 'bg-[#0B0B12] text-white border-[#0B0B12]' : 'bg-white text-zinc-700 border-zinc-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {loadError && <p className="text-sm text-red-600 mb-4">{loadError}</p>}

      {tab === 'agenda' && (
        <Card>
          {bookings.length === 0 ? (
            <Empty text="Todavía no hay reuniones." />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wider text-zinc-400">
                    <th className="pb-3 pr-4 font-semibold">Cuándo</th>
                    <th className="pb-3 pr-4 font-semibold">Quién</th>
                    <th className="pb-3 pr-4 font-semibold">Tema</th>
                    <th className="pb-3 pr-4 font-semibold">Estado</th>
                    <th className="pb-3 font-semibold" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {bookings.map((row) => (
                    <tr key={row.id} className="align-top">
                      <td className="py-3 pr-4 whitespace-nowrap">
                        <div className="font-medium text-[#0B0B12] capitalize">{bookingWhen(row)}</div>
                        <div className="text-xs text-zinc-400">Pedida {formatWhen(row.created_at)}</div>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="font-medium">{row.nombre}</div>
                        <div className="text-zinc-500">{row.email}</div>
                        {row.telefono && <div className="text-zinc-500">{row.telefono}</div>}
                      </td>
                      <td className="py-3 pr-4 text-zinc-600">
                        <div>{row.tema || '—'}</div>
                        {row.nota && <div className="text-xs text-zinc-400 mt-1 max-w-xs">{row.nota}</div>}
                      </td>
                      <td className="py-3 pr-4">
                        <StatusPill status={row.status} />
                      </td>
                      <td className="py-3 text-right space-x-2 whitespace-nowrap">
                        {row.status !== 'confirmed' && (
                          <button
                            type="button"
                            className="text-xs font-medium text-emerald-700 hover:underline"
                            onClick={() => updateBookingStatus(row.id, 'confirmed').then(refresh)}
                          >
                            Confirmar
                          </button>
                        )}
                        {row.status !== 'cancelled' && (
                          <button
                            type="button"
                            className="text-xs font-medium text-red-600 hover:underline"
                            onClick={() => updateBookingStatus(row.id, 'cancelled').then(refresh)}
                          >
                            Cancelar
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      )}

      {tab === 'consultas' && (
        <Card>
          {leads.length === 0 ? (
            <Empty text="Nadie ha escrito todavía." />
          ) : (
            <div className="space-y-4">
              {leads.map((lead) => (
                <article key={lead.id} className="rounded-2xl border border-zinc-100 bg-[#F7F8FC] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                      {SOURCE_LABEL[lead.source]}
                    </span>
                    <span className="text-xs text-zinc-400">{formatWhen(lead.created_at)}</span>
                  </div>
                  <p className="font-medium text-[#0B0B12]">
                    {lead.nombre || 'Sin nombre'} · {lead.email}
                  </p>
                  {lead.telefono && <p className="text-sm text-zinc-500">{lead.telefono}</p>}
                  <div className="mt-2 text-sm text-zinc-600 space-y-0.5">
                    {lead.plan && <p>Plan: {lead.plan}</p>}
                    {lead.total && <p>Estimación: {lead.total}</p>}
                    {lead.empresa && <p>Empresa: {lead.empresa}</p>}
                    {lead.fecha && <p>Fecha: {lead.fecha}</p>}
                    {lead.mensaje && <p className="mt-2 leading-relaxed">{lead.mensaje}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </Card>
      )}

      {tab === 'propuestas' && (
        <div className="space-y-5">
          <Card>
            <h2 className="text-sm font-medium mb-3">Registrar o actualizar</h2>
            <form
              className="grid sm:grid-cols-2 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!draft.slug.trim()) return;
                void upsertProposal(draft).then(() => {
                  setDraft({ slug: '', title: '', client: '', notes: '', status: 'draft' });
                  return refresh();
                });
              }}
            >
              <input
                required
                placeholder="slug (carpeta)"
                maxLength={80}
                value={draft.slug}
                onChange={(e) => setDraft({ ...draft, slug: e.target.value })}
                className="px-3 py-2.5 rounded-xl border border-zinc-200 text-sm outline-none"
              />
              <input
                placeholder="Cliente"
                maxLength={160}
                value={draft.client}
                onChange={(e) => setDraft({ ...draft, client: e.target.value })}
                className="px-3 py-2.5 rounded-xl border border-zinc-200 text-sm outline-none"
              />
              <input
                placeholder="Título"
                maxLength={200}
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                className="px-3 py-2.5 rounded-xl border border-zinc-200 text-sm outline-none sm:col-span-2"
              />
              <textarea
                placeholder="Notas internas"
                maxLength={4000}
                value={draft.notes}
                onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                className="px-3 py-2.5 rounded-xl border border-zinc-200 text-sm outline-none sm:col-span-2 resize-none"
                rows={2}
              />
              <select
                value={draft.status}
                onChange={(e) => setDraft({ ...draft, status: e.target.value as ProposalRow['status'] })}
                className="px-3 py-2.5 rounded-xl border border-zinc-200 text-sm outline-none"
              >
                <option value="draft">Borrador</option>
                <option value="sent">Enviada</option>
                <option value="won">Ganada</option>
                <option value="lost">Perdida</option>
              </select>
              <button type="submit" className="rounded-full bg-[#0B0B12] text-white text-sm font-medium py-2.5">
                Guardar
              </button>
            </form>
          </Card>

          <Card>
            {mergedProposals.length === 0 ? (
              <Empty text="No hay propuestas registradas en la base." />
            ) : (
              <ul className="divide-y divide-zinc-100">
                {mergedProposals.map((item) => (
                  <li key={item.slug} className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-[#0B0B12]">
                        {item.row?.client || item.folder?.client || item.slug}
                      </p>
                      <p className="text-sm text-zinc-500">
                        {item.row?.title || item.folder?.title || 'Sin título'}
                        {item.folder ? ` · carpeta ${item.folder.kind}` : ' · solo en base'}
                      </p>
                      {item.row?.notes && <p className="text-xs text-zinc-400 mt-1">{item.row.notes}</p>}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {item.row && (
                        <span className="text-[11px] uppercase tracking-wider text-zinc-500">{item.row.status}</span>
                      )}
                      <a
                        href={`/propuesta/${item.slug}`}
                        className="text-xs font-medium text-[#0B0B12] hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Abrir enlace
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      )}
    </Shell>
  );
}

function Shell({
  title,
  email,
  onOut,
  children,
}: {
  title: string;
  email?: string;
  onOut?: () => void;
  children: ReactNode;
}) {
  return (
    <div className="min-h-svh bg-[#F7F8FC] text-[#0B0B12]">
      <PageMeta title={title} description="Panel interno de Órbita." />
      <header className="border-b border-zinc-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-3">
          <Link to="/" className="text-sm font-medium tracking-tight">
            Órbita
          </Link>
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            {email && <span className="hidden sm:inline">{email}</span>}
            {onOut && (
              <button type="button" onClick={onOut} className="hover:text-[#0B0B12]">
                Salir
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-5 py-10">{children}</main>
    </div>
  );
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white border border-zinc-200/80 rounded-2xl p-5 sm:p-6 ${className}`}>{children}</div>;
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-2.5">
      <div className="text-lg font-medium tabular-nums">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-zinc-400">{label}</div>
    </div>
  );
}

function StatusPill({ status }: { status: BookingStatus }) {
  const cls =
    status === 'confirmed'
      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
      : status === 'cancelled'
        ? 'bg-zinc-100 text-zinc-500 border-zinc-200'
        : 'bg-amber-50 text-amber-800 border-amber-200';
  return (
    <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${cls}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="text-sm text-zinc-500 py-8 text-center">{text}</p>;
}
