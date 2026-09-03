import React, { useState } from 'react';
import { MessageCircle, Bell, Webhook, Volume2, Save, Check } from 'lucide-react';
import { NotificationSettings } from '../../lib/crmStore';

interface CrmNotificationConfigProps {
  settings: NotificationSettings;
  companyName: string;
  onSave: (newSettings: NotificationSettings) => void;
}

export const CrmNotificationConfig: React.FC<CrmNotificationConfigProps> = ({
  settings,
  companyName,
  onSave,
}) => {
  const [form, setForm] = useState<NotificationSettings>(settings);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="border-b border-zinc-200/80 pb-4">
        <h3 className="text-base font-bold text-zinc-950">Automatizaciones y Alertas de Contacto</h3>
        <p className="text-xs text-zinc-500 mt-1">
          Configura a dónde y cómo se envían los prospectos capturados desde el sitio web de {companyName}.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 1. Canal WhatsApp */}
        <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-zinc-950">Notificaciones Directas a WhatsApp</h4>
                <p className="text-[11px] text-zinc-500">Recibe una alerta instantánea cada vez que alguien solicita una hora o cotización.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={form.whatsappEnabled}
                onChange={(e) => setForm({ ...form, whatsappEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>

          {form.whatsappEnabled && (
            <div className="mt-4 pt-4 border-t border-zinc-100">
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Número de WhatsApp (Chile o Internacional)
              </label>
              <input
                type="text"
                value={form.whatsappNumber}
                onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                placeholder="+56 9 8452 1190"
                className="w-full max-w-sm rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-mono text-zinc-900 focus:border-zinc-400 focus:outline-none"
              />
              <p className="text-[11px] text-zinc-400 mt-1">
                A este número se enviará el mensaje predeterminado con el nombre, servicio y teléfono del cliente.
              </p>
            </div>
          )}
        </div>

        {/* 2. Webhook & Integraciones */}
        <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Webhook className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-zinc-950">Webhook para Zapier, Make o n8n</h4>
                <p className="text-[11px] text-zinc-500">Envía el payload JSON de cada lead a tu software de gestión o CRM externo.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={form.webhookEnabled}
                onChange={(e) => setForm({ ...form, webhookEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
            </label>
          </div>

          {form.webhookEnabled && (
            <div className="mt-4 pt-4 border-t border-zinc-100">
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Endpoint Webhook (POST)
              </label>
              <input
                type="url"
                value={form.webhookUrl}
                onChange={(e) => setForm({ ...form, webhookUrl: e.target.value })}
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-mono text-zinc-900 focus:border-zinc-400 focus:outline-none"
              />
            </div>
          )}
        </div>

        {/* 3. Notificación Sonora */}
        <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
              <Volume2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-950">Sonido de Notificación en Navegador</h4>
              <p className="text-[11px] text-zinc-500">Reproduce un timbre sutil en la pantalla de recepción cuando llega un prospecto.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={form.soundEnabled}
              onChange={(e) => setForm({ ...form, soundEnabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
          </label>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {savedSuccess && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 animate-fade-in">
              <Check className="h-4 w-4" />
              <span>Configuración guardada</span>
            </span>
          )}
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-zinc-800 transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Guardar Cambios</span>
          </button>
        </div>
      </form>
    </div>
  );
};
