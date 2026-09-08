import React from 'react';
import { ArrowRight, AlertTriangle, CalendarDays, Package, Inbox } from 'lucide-react';
import { CrmMetricsGrid } from './CrmMetricsGrid';
import { CrmAnalyticsChart } from './CrmAnalyticsChart';
import { CrmAudienceBreakdown } from './CrmAudienceBreakdown';
import type { CrmStore } from '../../lib/crmStore';
import { formatClp, formatWhen } from '../../lib/crmStore';
import type { CrmSection } from './CrmShell';

export function CrmOverviewPanel({
  store,
  brand,
  onSection,
}: {
  store: CrmStore;
  brand: string;
  onSection: (s: CrmSection) => void;
}) {
  const today = new Date();
  const start = new Date(today);
  start.setHours(0, 0, 0, 0);
  const end = new Date(today);
  end.setHours(23, 59, 59, 999);

  const todayAppts = store.appointments
    .filter((a) => {
      const t = new Date(a.startsAt).getTime();
      return t >= start.getTime() && t <= end.getTime() && a.status !== 'cancelada';
    })
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));

  const lowStock = store.products.filter((p) => p.stock !== null && p.stock <= 5);
  const newLeads = store.leads.filter((l) => l.status === 'nuevo');
  const openOrders = store.orders.filter((o) => !['entregado', 'cancelado'].includes(o.status));
  const published = store.products.filter((p) => p.published);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Mini
          label="Citas de hoy"
          value={todayAppts.length}
          hint={todayAppts[0] ? `Próxima ${formatWhen(todayAppts[0].startsAt)}` : 'Sin agenda'}
          onClick={() => onSection('agenda')}
        />
        <Mini
          label={`${store.profile.itemPlural} en web`}
          value={published.length}
          hint={`${store.products.length} en catálogo`}
          onClick={() => onSection('catalog')}
        />
        <Mini
          label="Prospectos nuevos"
          value={newLeads.length}
          hint="Sin contactar"
          onClick={() => onSection('leads')}
        />
        <Mini
          label="Pedidos abiertos"
          value={openOrders.length}
          hint={openOrders[0] ? openOrders[0].number : 'Al día'}
          onClick={() => onSection('orders')}
        />
      </div>

      <CrmMetricsGrid metrics={store.metrics} />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card
          title="Agenda de hoy"
          action="Ver agenda"
          onAction={() => onSection('agenda')}
          icon={CalendarDays}
        >
          {todayAppts.length === 0 ? (
            <Empty text={`No hay horas cargadas para ${brand} hoy.`} />
          ) : (
            <ul className="divide-y divide-zinc-100">
              {todayAppts.map((a) => (
                <li key={a.id} className="flex items-start justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-zinc-950">{a.clientName}</div>
                    <div className="truncate text-[11px] text-zinc-500">
                      {a.service} · {a.professional}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-mono text-[11px] text-zinc-700">
                      {new Date(a.startsAt).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-[10px] capitalize text-zinc-400">{a.status}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card
          title={store.profile.hasStock ? 'Alertas de stock' : 'Catálogo en la web'}
          action={`Ir a ${store.profile.navLabel.toLowerCase()}`}
          onAction={() => onSection('catalog')}
          icon={store.profile.hasStock ? AlertTriangle : Package}
        >
          {store.profile.hasStock ? (
            lowStock.length === 0 ? (
              <Empty text="Stock en orden." />
            ) : (
              <ul className="divide-y divide-zinc-100">
                {lowStock.slice(0, 6).map((p) => (
                  <li key={p.id} className="flex items-center justify-between py-2.5">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{p.name}</div>
                      <div className="font-mono text-[10px] text-zinc-400">{p.sku}</div>
                    </div>
                    <span className={`font-mono text-xs font-semibold ${p.stock === 0 ? 'text-red-600' : 'text-amber-700'}`}>
                      {p.stock === 0 ? 'Agotado' : `${p.stock} u.`}
                    </span>
                  </li>
                ))}
              </ul>
            )
          ) : (
            <ul className="divide-y divide-zinc-100">
              {published.slice(0, 6).map((p) => (
                <li key={p.id} className="flex items-center justify-between py-2.5">
                  <div className="min-w-0 truncate text-sm font-medium">{p.name}</div>
                  <span className="ml-3 shrink-0 font-mono text-[11px] text-zinc-500">
                    {p.priceClp === 0 ? 'Sin cargo' : formatClp(p.priceClp)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Bandeja nueva" action="Ver prospectos" onAction={() => onSection('leads')} icon={Inbox}>
          {newLeads.length === 0 ? (
            <Empty text="No hay leads sin contactar." />
          ) : (
            <ul className="divide-y divide-zinc-100">
              {newLeads.slice(0, 6).map((l) => (
                <li key={l.id} className="py-2.5">
                  <div className="truncate text-sm font-medium">{l.name}</div>
                  <div className="truncate text-[11px] text-zinc-500">
                    {l.service} · {l.channel}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <CrmAnalyticsChart data7d={store.metrics.chartData7d} data30d={store.metrics.chartData30d} />
      <CrmAudienceBreakdown
        devices={store.metrics.devices}
        channels={store.metrics.channels}
        topPages={store.metrics.topPages}
        locations={store.metrics.locations}
      />
    </div>
  );
}

function Mini({
  label,
  value,
  hint,
  onClick,
}: {
  label: string;
  value: number;
  hint: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-2xl border border-zinc-200/80 bg-white p-3 text-left shadow-xs transition-colors hover:border-zinc-300 sm:p-4"
    >
      <div className="text-[11px] font-medium leading-snug text-zinc-500">{label}</div>
      <div className="mt-1 font-mono text-xl font-bold tabular-nums text-zinc-950 sm:text-2xl">{value}</div>
      <div className="mt-1 truncate text-[11px] text-zinc-400">{hint}</div>
    </button>
  );
}

function Card({
  title,
  action,
  onAction,
  icon: Icon,
  children,
}: {
  title: string;
  action: string;
  onAction: () => void;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xs">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-zinc-950">
          <Icon className="h-4 w-4 shrink-0 text-zinc-400" />
          <span className="truncate">{title}</span>
        </div>
        <button type="button" onClick={onAction} className="inline-flex shrink-0 items-center gap-0.5 text-[11px] font-medium text-zinc-500 hover:text-zinc-950">
          <span className="max-w-[7.5rem] truncate sm:max-w-none">{action}</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
      {children}
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="py-6 text-center text-xs text-zinc-400">{text}</p>;
}
