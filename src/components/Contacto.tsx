import React, { useEffect, useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Sparkles, CalendarDays, ArrowRight } from 'lucide-react';
import { ContactFormData } from '../types';
import { submitLead } from '../lib/leads';
import { FIELD_MAX } from '../lib/formLimits';
import { whatsappUrl } from '../data/site';
import { HoneypotField } from './HoneypotField';
import { PlanSelect, normalizeContactPlan } from './PlanSelect';

interface ContactoProps {
  preselectedPlan?: string;
  onOpenSchedule?: () => void;
}

export const Contacto: React.FC<ContactoProps> = ({ preselectedPlan, onOpenSchedule }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    plan: normalizeContactPlan(preselectedPlan),
    presupuestoAprox: '500k-1m',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honey, setHoney] = useState('');

  useEffect(() => {
    if (preselectedPlan) {
      setFormData((prev) => ({ ...prev, plan: normalizeContactPlan(preselectedPlan) }));
    }
  }, [preselectedPlan]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitLead({
        source: 'contacto',
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
        plan: formData.plan,
        honey,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar. Prueba por WhatsApp o escríbenos directo.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const text = `Hola Órbita! Quisiera pedir un presupuesto para mi sitio web. Nombre: ${formData.nombre || 'Interesado'}`;
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="bg-[#F7F8FC] px-6 py-24 sm:py-28 pb-32 sm:pb-36 relative z-10 overflow-hidden">
      <div className="max-w-[88rem] mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div className="relative">
          {/* Soft floating decorative background glow */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-zinc-300/40 rounded-full blur-3xl pointer-events-none animate-float-y" />
          <div className="absolute top-48 left-36 w-60 h-60 bg-zinc-300/30 rounded-full blur-3xl pointer-events-none animate-float-y-delayed" />

          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200 mb-4 inline-block">
              Contacto Directo
            </span>

            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] leading-[1.02] mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Pon tu marca<br />
              en órbita.
            </h2>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-sm mb-7">
              Cuéntanos qué vendes. Te respondemos con enfoque y rango de inversión — sin una propuesta de 40 páginas.
            </p>

            {onOpenSchedule && (
              <button
                type="button"
                onClick={onOpenSchedule}
                className="w-full max-w-md text-left rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#0B0B12]/20 transition-all group mb-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B0B12] text-white flex items-center justify-center shrink-0">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7280] mb-0.5">
                      Agenda directa
                    </p>
                    <p className="text-base font-medium text-[#0B0B12] tracking-tight">
                      Agendar una reunión
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      30 min · lun–vie · 8:00–19:00 · Santiago
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 shrink-0 rounded-full bg-[#0B0B12] text-white text-xs font-medium px-3.5 py-2 group-hover:bg-zinc-800">
                    Elegir horario
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                  </span>
                </div>
              </button>
            )}

            <div className="space-y-4 pt-4 border-t border-zinc-200/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-sm text-zinc-700">
                  Respuesta garantizada en menos de 24 horas hábiles.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 text-[#6B7280] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0B0B12]">¿Prefieres hablar directo?</p>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="text-xs font-medium text-[#6B7280] hover:underline"
                  >
                    Escribinos por WhatsApp →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form Card */}
        <div className="bg-white rounded-2xl border border-zinc-200/90 p-8 sm:p-10 shadow-sm relative z-10">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-medium text-[#0B0B12] tracking-tight">
                Señal recibida
              </h3>
              <p className="text-zinc-600 text-sm max-w-xs mx-auto leading-relaxed">
                Gracias por escribirnos. Analizamos tu proyecto y te contactaremos muy pronto con propuesta y alcance.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#6B7280] hover:underline pt-2"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-5 relative">
              <HoneypotField value={honey} onChange={setHoney} />
              <div>
                <label htmlFor="contacto-nombre" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Nombre completo *
                </label>
                <input
                  id="contacto-nombre"
                  type="text"
                  required
                  maxLength={FIELD_MAX.nombre}
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Tu nombre o empresa"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-[#0B0B12] focus:ring-2 focus:ring-[#6B7280]/30 focus:border-[#6B7280] outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contacto-email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contacto-email"
                    type="email"
                    required
                    maxLength={FIELD_MAX.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hola@tumarca.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-[#0B0B12] focus:ring-2 focus:ring-[#6B7280]/30 focus:border-[#6B7280] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    maxLength={FIELD_MAX.telefono}
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+56 9 1234 5678"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-[#0B0B12] focus:ring-2 focus:ring-[#6B7280]/30 focus:border-[#6B7280] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contacto-plan"
                  className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5"
                >
                  Plan de preferencia
                </label>
                <PlanSelect
                  id="contacto-plan"
                  value={formData.plan || 'Estación'}
                  onChange={(plan) => setFormData({ ...formData, plan })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Cuéntanos sobre tu negocio y proyecto *
                </label>
                <textarea
                  required
                  rows={4}
                  maxLength={FIELD_MAX.mensaje}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="¿Qué vendes, cuál es tu objetivo y para cuándo quieres lanzar?"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-[#0B0B12] focus:ring-2 focus:ring-[#6B7280]/30 focus:border-[#6B7280] outline-none transition-all resize-none"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0B0B12] text-white rounded-full py-3.5 px-6 font-medium text-sm hover:bg-zinc-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? (
                  <span>Procesando señal...</span>
                ) : (
                  <>
                    <span>Enviar y pedir presupuesto</span>
                    <Send className="w-4 h-4 text-zinc-400" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
