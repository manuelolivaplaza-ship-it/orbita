import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { submitLead } from '../lib/leads';
import { FIELD_MAX } from '../lib/formLimits';
import { HoneypotField } from './HoneypotField';
import { site, sitePhoneDisplay, siteTelHref, whatsappUrl } from '../data/site';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [honey, setHoney] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (!consent) {
      setError('Marca el consentimiento para suscribirte.');
      return;
    }
    setSending(true);
    setError(null);
    try {
      await submitLead({ source: 'newsletter', email: email.trim(), honey });
      setSubmitted(true);
      setEmail('');
      setConsent(false);
    } catch {
      setError('No se pudo suscribir. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="relative z-10 bg-white text-[#0B0B12] border-t border-zinc-200/80 selection:bg-zinc-200 selection:text-zinc-900">
      <div className="max-w-[88rem] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* 1. TOP CTA & NEWSLETTER BANNER (Light Theme Card) */}
        <div className="bg-[#F7F8FC] border border-zinc-200/80 rounded-3xl p-8 sm:p-12 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Estudio Digital · Santiago, Chile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B0B12] leading-tight">
                Construyamos una web que convierta visitas en clientes.
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                Desarrollamos landings de alta conversión y sitios corporativos con CRM integrado, entregados con máxima velocidad y soporte continuo.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  to="/#contacto"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#0B0B12] text-white hover:bg-zinc-800 px-6 py-2.5 text-sm font-medium transition-all shadow-sm active:scale-[0.99]"
                >
                  <span>Cotizar proyecto</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/?agendar=1"
                  className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-[#0B0B12] hover:decoration-[#0B0B12]"
                >
                  Agendar llamada de 30 min
                </Link>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="lg:col-span-5 bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
              <h3 className="text-[#0B0B12] text-base font-semibold mb-1">
                Recibe novedades y análisis web
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm mb-4 leading-relaxed">
                Estrategias de conversión, diseño digital y casos reales. Sin spam.
              </p>
              {submitted ? (
                <div className="flex items-center gap-2.5 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>¡Listo! Te avisaremos con cada nueva publicación.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <HoneypotField value={honey} onChange={setHoney} />
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      maxLength={FIELD_MAX.email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@empresa.com"
                      required
                      className="flex-1 bg-[#F7F8FC] border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-[#0B0B12] placeholder-zinc-400 focus:outline-none focus:border-zinc-500 focus:bg-white transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={sending || !consent}
                      title={!consent ? 'Marca el consentimiento para habilitar el envío' : undefined}
                      className="inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shrink-0 shadow-xs"
                    >
                      <span>{sending ? 'Enviando...' : 'Suscribirme'}</span>
                    </button>
                  </div>
                  {!consent && (
                    <p className="text-[11px] text-zinc-400">
                      El botón se habilita cuando aceptas el contacto por correo.
                    </p>
                  )}
                  <label className="flex items-start gap-2 text-left text-[11px] text-zinc-500 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 rounded border-zinc-300 text-[#0B0B12] focus:ring-0 shrink-0"
                    />
                    <span>
                      Acepto que Reclu me contacte por correo.{' '}
                      <Link to="/privacidad" className="underline text-zinc-700 hover:text-[#0B0B12]">
                        Ver política de privacidad
                      </Link>
                      .
                    </span>
                  </label>
                  {error && <p className="text-xs text-rose-600">{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 2. NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-0 md:pr-6">
            <Link to="/" className="inline-flex items-center group">
              <span className="text-2xl font-bold tracking-tight text-[#0B0B12] group-hover:text-zinc-600 transition-colors">
                reclu
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              Reclu diseña y desarrolla sitios web de alto impacto orientados a resultados comerciales. Sitios claros, rápidos y optimizados para convertir.
            </p>
            <div className="pt-2 space-y-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Santiago, Chile · Cobertura internacional</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a href={siteTelHref} className="hover:text-[#0B0B12] transition-colors">
                  {sitePhoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-[#0B0B12] transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Soluciones</p>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li><Link to="/servicios" className="hover:text-[#0B0B12] transition-colors">Sitios Web & Landings</Link></li>
              <li><Link to="/crm" className="hover:text-[#0B0B12] transition-colors">Panel CRM con WhatsApp</Link></li>
              <li><Link to="/galeria" className="hover:text-[#0B0B12] transition-colors">Galería de Propuestas</Link></li>
              <li><Link to="/precios" className="hover:text-[#0B0B12] transition-colors">Planes y Precios</Link></li>
              <li><Link to="/servicios" className="hover:text-[#0B0B12] transition-colors">Rediseño & Optimización</Link></li>
            </ul>
          </div>

          {/* Explorar */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Explorar</p>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li><Link to="/creaciones" className="hover:text-[#0B0B12] transition-colors">Creaciones en vivo</Link></li>
              <li><Link to="/galeria" className="hover:text-[#0B0B12] transition-colors">Propuestas por rubro</Link></li>
              <li><Link to="/#sistema" className="hover:text-[#0B0B12] transition-colors">Cómo trabajamos</Link></li>
              <li><Link to="/#faq" className="hover:text-[#0B0B12] transition-colors">Preguntas frecuentes</Link></li>
              <li><Link to="/" className="hover:text-[#0B0B12] transition-colors">Inicio</Link></li>
            </ul>
          </div>

          {/* Contacto & Legal */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Contacto & Legal</p>
            <ul className="space-y-2.5 text-sm text-zinc-600">
              <li><Link to="/#contacto" className="hover:text-[#0B0B12] transition-colors">Pedir cotización</Link></li>
              <li><Link to="/?agendar=1" className="hover:text-[#0B0B12] transition-colors">Agendar reunión</Link></li>
              <li>
                <a
                  href={whatsappUrl('Hola Reclu — quisiera cotizar un proyecto web')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0B0B12] transition-colors"
                >
                  WhatsApp directo
                </a>
              </li>
              <li><Link to="/privacidad" className="hover:text-[#0B0B12] transition-colors">Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-[#0B0B12] transition-colors">Términos de servicio</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. LEGAL BAR */}
        <div className="pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Reclu. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacidad" className="hover:text-zinc-800 transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-zinc-800 transition-colors">Términos</Link>
            <span>Santiago, CL · Desarrollado con precisión</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
