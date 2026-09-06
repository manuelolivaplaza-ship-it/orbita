import React, { useState } from 'react';
import { CrmNotificationConfig } from './CrmNotificationConfig';
import type { NotificationSettings } from '../../lib/crmStore';
import type { SiteContent } from '../../data/crmCatalog';
import type { CatalogProfile } from '../../data/crmCatalog';
import { Field, fieldClass } from './CrmDrawer';

export function CrmSettingsPanel({
  settings,
  site,
  companyName,
  profile,
  onSaveSettings,
  onSaveSite,
}: {
  settings: NotificationSettings;
  site: SiteContent;
  companyName: string;
  profile: CatalogProfile;
  onSaveSettings: (s: NotificationSettings) => void;
  onSaveSite: (s: SiteContent) => void;
}) {
  const [tab, setTab] = useState<'site' | 'alerts'>('site');
  const [form, setForm] = useState(site);
  const [saved, setSaved] = useState(false);

  React.useEffect(() => {
    setForm(site);
  }, [site]);

  const persist = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSite(form);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-lg border border-zinc-200 bg-white p-0.5 text-xs font-medium">
        <button
          type="button"
          onClick={() => setTab('site')}
          className={`rounded-md px-3 py-1.5 ${tab === 'site' ? 'bg-zinc-950 text-white' : 'text-zinc-600'}`}
        >
          Datos del sitio
        </button>
        <button
          type="button"
          onClick={() => setTab('alerts')}
          className={`rounded-md px-3 py-1.5 ${tab === 'alerts' ? 'bg-zinc-950 text-white' : 'text-zinc-600'}`}
        >
          WhatsApp y alertas
        </button>
      </div>

      {tab === 'alerts' && (
        <CrmNotificationConfig settings={settings} companyName={companyName} onSave={onSaveSettings} />
      )}

      {tab === 'site' && (
        <form onSubmit={persist} className="mx-auto max-w-2xl space-y-4">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs space-y-3.5">
            <h3 className="text-sm font-semibold text-zinc-950">Contacto público</h3>
            <p className="text-xs text-zinc-500">Esto alimenta el footer, el botón de WhatsApp y la ficha de Google.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Teléfono">
                <input className={fieldClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </Field>
              <Field label="WhatsApp">
                <input className={fieldClass} value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
              </Field>
              <Field label="Email">
                <input className={fieldClass} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </Field>
              <Field label="Dirección">
                <input className={fieldClass} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              </Field>
            </div>
            <Field label="Frase del home">
              <textarea
                className={`${fieldClass} resize-none`}
                rows={2}
                value={form.homepageHeadline}
                onChange={(e) => setForm({ ...form, homepageHeadline: e.target.value })}
              />
            </Field>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-semibold text-zinc-950">Módulos visibles en la web</h3>
            <Toggle
              label={`Mostrar ${profile.itemPlural.toLowerCase()} en ${profile.webPath}`}
              checked={form.showCatalog}
              onChange={(showCatalog) => setForm({ ...form, showCatalog })}
            />
            <Toggle label="Mostrar precios al público" checked={form.showPrices} onChange={(showPrices) => setForm({ ...form, showPrices })} />
            <Toggle label="Mostrar botón de reserva / cotización" checked={form.showBooking} onChange={(showBooking) => setForm({ ...form, showBooking })} />
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs">
            <h3 className="mb-3 text-sm font-semibold text-zinc-950">Horario</h3>
            <div className="space-y-2">
              {form.hours.map((h, i) => (
                <div key={h.day} className="grid grid-cols-[7rem_1fr_1fr_auto] items-center gap-2 text-xs">
                  <span className="font-medium text-zinc-700">{h.day}</span>
                  <input
                    type="time"
                    disabled={h.closed}
                    value={h.open}
                    onChange={(e) => {
                      const hours = form.hours.map((x, idx) => (idx === i ? { ...x, open: e.target.value } : x));
                      setForm({ ...form, hours });
                    }}
                    className={fieldClass}
                  />
                  <input
                    type="time"
                    disabled={h.closed}
                    value={h.close}
                    onChange={(e) => {
                      const hours = form.hours.map((x, idx) => (idx === i ? { ...x, close: e.target.value } : x));
                      setForm({ ...form, hours });
                    }}
                    className={fieldClass}
                  />
                  <label className="flex items-center gap-1 text-zinc-500">
                    <input
                      type="checkbox"
                      checked={h.closed}
                      onChange={(e) => {
                        const hours = form.hours.map((x, idx) => (idx === i ? { ...x, closed: e.target.checked } : x));
                        setForm({ ...form, hours });
                      }}
                    />
                    Cerrado
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800">
            {saved ? 'Guardado' : 'Publicar cambios en el sitio'}
          </button>
        </form>
      )}
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-3 rounded-xl border border-zinc-100 px-3 py-2.5 text-sm">
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
}
