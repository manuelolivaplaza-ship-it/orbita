import React, { useMemo, useState } from 'react';
import { Plus, Search, Star, Globe, GlobeLock, Copy, Pencil, Trash2, Minus } from 'lucide-react';
import type { CatalogItem, CatalogProfile, ProductStatus } from '../../data/crmCatalog';
import { formatClp } from '../../lib/crmStore';
import { CrmDrawer, Field, fieldClass } from './CrmDrawer';

interface Props {
  profile: CatalogProfile;
  products: CatalogItem[];
  onSave: (item: Partial<CatalogItem> & { name: string }) => void;
  onTogglePublished: (id: string) => void;
  onToggleFeatured: (id: string) => void;
  onAdjustStock: (id: string, delta: number) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onExport: () => void;
}

const STATUS_STYLE: Record<ProductStatus, string> = {
  publicado: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  borrador: 'bg-amber-50 text-amber-800 border-amber-200',
  oculto: 'bg-zinc-100 text-zinc-600 border-zinc-200',
  agotado: 'bg-red-50 text-red-700 border-red-200',
};

type Draft = {
  id?: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  priceClp: string;
  compareAtClp: string;
  stock: string;
  unit: string;
  durationMin: string;
  featured: boolean;
  published: boolean;
};

const emptyDraft = (profile: CatalogProfile): Draft => ({
  name: '',
  sku: '',
  category: profile.categories[0],
  description: '',
  priceClp: '',
  compareAtClp: '',
  stock: profile.hasStock ? '0' : '',
  unit: profile.hasStock ? 'unidad' : 'sesión',
  durationMin: profile.hasDuration ? '45' : '',
  featured: false,
  published: true,
});

function fromItem(item: CatalogItem): Draft {
  return {
    id: item.id,
    name: item.name,
    sku: item.sku,
    category: item.category,
    description: item.description,
    priceClp: String(item.priceClp),
    compareAtClp: item.compareAtClp ? String(item.compareAtClp) : '',
    stock: item.stock === null ? '' : String(item.stock),
    unit: item.unit,
    durationMin: item.durationMin ? String(item.durationMin) : '',
    featured: item.featured,
    published: item.published,
  };
}

export function CrmProductsPanel({
  profile,
  products,
  onSave,
  onTogglePublished,
  onToggleFeatured,
  onAdjustStock,
  onDelete,
  onDuplicate,
  onExport,
}: Props) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('todos');
  const [web, setWeb] = useState<'todos' | 'web' | 'ocultos'>('todos');
  const [draft, setDraft] = useState<Draft | null>(null);

  const filtered = useMemo(() => {
    const query = q.toLowerCase();
    return products.filter((p) => {
      const matchQ =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);
      const matchCat = cat === 'todos' || p.category === cat;
      const matchWeb = web === 'todos' || (web === 'web' ? p.published : !p.published);
      return matchQ && matchCat && matchWeb;
    });
  }, [products, q, cat, web]);

  const published = products.filter((p) => p.published).length;
  const featured = products.filter((p) => p.featured).length;
  const low = products.filter((p) => p.stock !== null && p.stock > 0 && p.stock <= 5).length;
  const out = products.filter((p) => p.stock === 0).length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft?.name.trim()) return;
    const priceClp = Number(draft.priceClp.replace(/\./g, '').replace(',', '')) || 0;
    const compare = draft.compareAtClp ? Number(draft.compareAtClp.replace(/\./g, '')) : undefined;
    onSave({
      id: draft.id,
      name: draft.name.trim(),
      sku: draft.sku.trim(),
      category: draft.category,
      description: draft.description.trim(),
      priceClp,
      compareAtClp: compare,
      stock: profile.hasStock ? Number(draft.stock) || 0 : null,
      unit: draft.unit,
      durationMin: profile.hasDuration && draft.durationMin ? Number(draft.durationMin) : undefined,
      featured: draft.featured,
      published: draft.published,
      status: draft.published ? (Number(draft.stock) === 0 && profile.hasStock ? 'agotado' : 'publicado') : 'borrador',
    });
    setDraft(null);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat label={`En la web ${profile.webPath}`} value={published} hint={`${products.length} en total`} />
        <Stat label="Destacados en home" value={featured} hint="Aparecen primero" />
        {profile.hasStock ? (
          <>
            <Stat label="Stock bajo (≤5)" value={low} hint="Reponer" warn={low > 0} />
            <Stat label="Agotados" value={out} hint="No se pueden vender" warn={out > 0} />
          </>
        ) : (
          <>
            <Stat label="Borradores" value={products.filter((p) => !p.published).length} hint="No visibles" />
            <Stat
              label="Ticket medio"
              value={formatClp(Math.round(products.filter((p) => p.published && p.priceClp).reduce((s, p) => s + p.priceClp, 0) / Math.max(published, 1)))}
              hint={profile.priceLabel}
            />
          </>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xs">
        <div className="flex flex-col gap-3 border-b border-zinc-100 bg-zinc-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
            <div className="relative min-w-[180px] flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={`Buscar ${profile.itemPlural.toLowerCase()}, SKU…`}
                className="w-full rounded-lg border border-zinc-200 bg-white py-1.5 pl-9 pr-3 text-xs outline-none focus:border-zinc-400"
              />
            </div>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 text-xs outline-none"
            >
              <option value="todos">Todas las categorías</option>
              {profile.categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="flex rounded-lg border border-zinc-200 bg-white p-0.5 text-[11px] font-medium">
              {(['todos', 'web', 'ocultos'] as const).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setWeb(id)}
                  className={`rounded-md px-2.5 py-1 ${web === id ? 'bg-zinc-950 text-white' : 'text-zinc-500'}`}
                >
                  {id === 'todos' ? 'Todos' : id === 'web' ? 'En la web' : 'Ocultos'}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onExport}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Exportar
            </button>
            <button
              type="button"
              onClick={() => setDraft(emptyDraft(profile))}
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800"
            >
              <Plus className="h-3.5 w-3.5" />
              Nuevo {profile.itemLabel.toLowerCase()}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-zinc-100 bg-zinc-50/70 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              <tr>
                <th className="py-3 pl-5 pr-3">{profile.itemLabel}</th>
                <th className="px-3 py-3">Categoría</th>
                <th className="px-3 py-3">{profile.priceLabel}</th>
                {profile.hasStock && <th className="px-3 py-3">{profile.stockLabel}</th>}
                <th className="px-3 py-3">Web</th>
                <th className="py-3 pr-5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-14 text-center text-zinc-400">
                    No hay {profile.itemPlural.toLowerCase()} con esos filtros.
                  </td>
                </tr>
              ) : (
                filtered.map((p) => (
                  <tr key={p.id} className="group hover:bg-zinc-50/80">
                    <td className="py-3 pl-5 pr-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-950 font-mono text-[10px] font-semibold text-white">
                          {p.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 font-semibold text-zinc-950">
                            <span className="truncate">{p.name}</span>
                            {p.featured && <Star className="h-3 w-3 fill-amber-400 text-amber-400" />}
                          </div>
                          <div className="mt-0.5 font-mono text-[10px] text-zinc-400">
                            {p.sku} · {p.unit}
                            {p.durationMin ? ` · ${p.durationMin} min` : ''}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <span className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                        {p.category}
                      </span>
                    </td>
                    <td className="px-3 py-3 font-mono">
                      <div className="font-semibold text-zinc-950">{p.priceClp === 0 ? 'Sin cargo' : formatClp(p.priceClp)}</div>
                      {p.compareAtClp ? (
                        <div className="text-[10px] text-zinc-400 line-through">{formatClp(p.compareAtClp)}</div>
                      ) : (
                        <div className="text-[10px] text-zinc-400">{p.priceUf} UF</div>
                      )}
                    </td>
                    {profile.hasStock && (
                      <td className="px-3 py-3">
                        <div className="inline-flex items-center rounded-lg border border-zinc-200 bg-white">
                          <button
                            type="button"
                            className="px-1.5 py-1 text-zinc-500 hover:text-zinc-950"
                            onClick={() => onAdjustStock(p.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span
                            className={`min-w-[2rem] text-center font-mono text-xs tabular-nums ${
                              p.stock === 0 ? 'text-red-600' : (p.stock ?? 0) <= 5 ? 'text-amber-700' : 'text-zinc-900'
                            }`}
                          >
                            {p.stock ?? '—'}
                          </span>
                          <button
                            type="button"
                            className="px-1.5 py-1 text-zinc-500 hover:text-zinc-950"
                            onClick={() => onAdjustStock(p.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </td>
                    )}
                    <td className="px-3 py-3">
                      <div className="flex flex-col gap-1">
                        <span className={`inline-flex w-fit rounded-full border px-2 py-0.5 text-[10px] font-semibold ${STATUS_STYLE[p.status]}`}>
                          {p.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => onTogglePublished(p.id)}
                          className="inline-flex w-fit items-center gap-1 text-[10px] font-medium text-zinc-500 hover:text-zinc-950"
                        >
                          {p.published ? <Globe className="h-3 w-3 text-emerald-600" /> : <GlobeLock className="h-3 w-3" />}
                          {p.published ? `Visible ${profile.webPath}` : 'No sale en la web'}
                        </button>
                      </div>
                    </td>
                    <td className="py-3 pr-5">
                      <div className="flex items-center justify-end gap-0.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                        <IconBtn title="Destacar" onClick={() => onToggleFeatured(p.id)}>
                          <Star className={`h-3.5 w-3.5 ${p.featured ? 'fill-amber-400 text-amber-400' : ''}`} />
                        </IconBtn>
                        <IconBtn title="Editar" onClick={() => setDraft(fromItem(p))}>
                          <Pencil className="h-3.5 w-3.5" />
                        </IconBtn>
                        <IconBtn title="Duplicar" onClick={() => onDuplicate(p.id)}>
                          <Copy className="h-3.5 w-3.5" />
                        </IconBtn>
                        <IconBtn
                          title="Eliminar"
                          onClick={() => {
                            if (confirm(`¿Eliminar «${p.name}»?`)) onDelete(p.id);
                          }}
                        >
                          <Trash2 className="h-3.5 w-3.5 text-red-500" />
                        </IconBtn>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <CrmDrawer
        open={Boolean(draft)}
        title={draft?.id ? `Editar ${profile.itemLabel.toLowerCase()}` : `Nuevo ${profile.itemLabel.toLowerCase()}`}
        subtitle={`Lo que marques como publicado aparece en ${profile.webPath} del sitio.`}
        onClose={() => setDraft(null)}
      >
        {draft && (
          <form onSubmit={submit} className="space-y-3.5">
            <Field label="Nombre">
              <input className={fieldClass} required value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="SKU">
                <input className={fieldClass} value={draft.sku} onChange={(e) => setDraft({ ...draft, sku: e.target.value })} />
              </Field>
              <Field label="Categoría">
                <select className={fieldClass} value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })}>
                  {profile.categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Descripción interna">
              <textarea
                className={`${fieldClass} resize-none`}
                rows={3}
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label={`${profile.priceLabel} (CLP)`}>
                <input
                  className={fieldClass}
                  inputMode="numeric"
                  value={draft.priceClp}
                  onChange={(e) => setDraft({ ...draft, priceClp: e.target.value })}
                />
              </Field>
              <Field label="Precio tachado (opcional)">
                <input
                  className={fieldClass}
                  inputMode="numeric"
                  value={draft.compareAtClp}
                  onChange={(e) => setDraft({ ...draft, compareAtClp: e.target.value })}
                />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {profile.hasStock && (
                <Field label={profile.stockLabel}>
                  <input
                    className={fieldClass}
                    inputMode="numeric"
                    value={draft.stock}
                    onChange={(e) => setDraft({ ...draft, stock: e.target.value })}
                  />
                </Field>
              )}
              <Field label="Unidad">
                <input className={fieldClass} value={draft.unit} onChange={(e) => setDraft({ ...draft, unit: e.target.value })} />
              </Field>
              {profile.hasDuration && (
                <Field label="Duración (min)">
                  <input
                    className={fieldClass}
                    inputMode="numeric"
                    value={draft.durationMin}
                    onChange={(e) => setDraft({ ...draft, durationMin: e.target.value })}
                  />
                </Field>
              )}
            </div>
            <label className="flex items-center justify-between rounded-xl border border-zinc-200 px-3 py-2.5 text-sm">
              <span>Publicar en la web ({profile.webPath})</span>
              <input type="checkbox" checked={draft.published} onChange={(e) => setDraft({ ...draft, published: e.target.checked })} />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-zinc-200 px-3 py-2.5 text-sm">
              <span>Destacar en el home</span>
              <input type="checkbox" checked={draft.featured} onChange={(e) => setDraft({ ...draft, featured: e.target.checked })} />
            </label>
            <button type="submit" className="w-full rounded-xl bg-zinc-950 py-2.5 text-sm font-medium text-white hover:bg-zinc-800">
              Guardar
            </button>
          </form>
        )}
      </CrmDrawer>
    </div>
  );
}

function Stat({ label, value, hint, warn }: { label: string; value: React.ReactNode; hint: string; warn?: boolean }) {
  return (
    <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-xs">
      <div className="text-[11px] font-medium text-zinc-500">{label}</div>
      <div className={`mt-1 font-mono text-xl font-bold tabular-nums ${warn ? 'text-amber-700' : 'text-zinc-950'}`}>{value}</div>
      <div className="mt-1 text-[11px] text-zinc-400">{hint}</div>
    </div>
  );
}

function IconBtn({ children, onClick, title }: { children: React.ReactNode; onClick: () => void; title: string }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-950"
    >
      {children}
    </button>
  );
}
