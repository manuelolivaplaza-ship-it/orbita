import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { submitLead } from '../lib/leads';
import { FIELD_MAX } from '../lib/formLimits';
import { HoneypotField } from './HoneypotField';
import { site, whatsappUrl } from '../data/site';

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
    <footer className="relative z-10 bg-[#090A0F] text-zinc-300 border-t border-zinc-800/80 selection:bg-zinc-700 selection:text-white">
      <div className="max-w-[88rem] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* 1. TOP CTA & NEWSLETTER BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-zinc-800/80 items-start">
          {/* Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Estudio Digital · Santiago, Chile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Construyamos una web que convierta visitas en clientes.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Desarrollamos landings de alta conversión y sitios corporativos con CRM integrado, entregados con máxima velocidad y soporte continuo.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/#contacto"
                className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#0B0B12] hover:bg-zinc-200 px-5 py-2.5 text-sm font-medium transition-all shadow-sm"
              >
                <span>Cotizar proyecto</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/?agendar=1"
                className="inline-flex items-center gap-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white px-5 py-2.5 text-sm font-medium border border-zinc-800 transition-all"
              >
                <span>Agendar llamada de 30 min</span>
              </Link>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-7">
            <h3 className="text-white text-base font-semibold mb-1">
              Recibe novedades y análisis web
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-4 leading-relaxed">
              Estrategias de conversión, diseño digital y casos reales. Sin spam.
            </p>
            {submitted ? (
              <div className="flex items-center gap-2.5 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3.5 text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
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
                    className="flex-1 bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={sending || !consent}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#0B0B12] hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-5 py-2.5 text-sm font-medium transition-colors shrink-0"
                  >
                    <span>{sending ? 'Enviando...' : 'Suscribirme'}</span>
                  </button>
                </div>
                <label className="flex items-start gap-2 text-left text-[11px] text-zinc-400 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-zinc-700 bg-zinc-950 text-white focus:ring-0 shrink-0"
                  />
                  <span>
                    Acepto que Reclu me contacte por correo.{' '}
                    <Link to="/privacidad" className="underline text-zinc-300 hover:text-white">
                      Ver política de privacidad
                    </Link>
                    .
                  </span>
                </label>
                {error && <p className="text-xs text-rose-400">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* 2. NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 py-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-2 space-y-4 pr-0 md:pr-6">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#0B0B12]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" fill="#0B0B12" />
                  <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#0B0B12" strokeWidth="1.8" strokeDasharray="100" transform="rotate(-25 12 12)" />
                  <circle cx="18.5" cy="8.5" r="1.8" fill="#6B7280" />
                </svg>
              </div>
              <span className="text-xl font-medium tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                Reclu
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Reclu diseña y desarrolla sitios web de alto impacto orientados a resultados comerciales. Sitios claros, rápidos y optimizados para convertir.
            </p>
            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span>Santiago, Chile · Cobertura internacional</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Soluciones */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Soluciones</p>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/servicios" className="hover:text-white transition-colors">Sitios Web & Landings</Link></li>
              <li><Link to="/crm" className="hover:text-white transition-colors">Panel CRM con WhatsApp</Link></li>
              <li><Link to="/galeria" className="hover:text-white transition-colors">Galería de Propuestas</Link></li>
              <li><Link to="/precios" className="hover:text-white transition-colors">Planes y Precios</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Rediseño & Optimización</Link></li>
            </ul>
          </div>

          {/* Explorar */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Explorar</p>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/creaciones" className="hover:text-white transition-colors">Creaciones en vivo</Link></li>
              <li><Link to="/galeria" className="hover:text-white transition-colors">Propuestas por rubro</Link></li>
              <li><Link to="/#sistema" className="hover:text-white transition-colors">Cómo trabajamos</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">Preguntas frecuentes</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            </ul>
          </div>

          {/* Contacto & Legal */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Contacto & Legal</p>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/#contacto" className="hover:text-white transition-colors">Pedir cotización</Link></li>
              <li><Link to="/?agendar=1" className="hover:text-white transition-colors">Agendar reunión</Link></li>
              <li>
                <a
                  href={whatsappUrl('Hola Reclu — quisiera cotizar un proyecto web')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp directo
                </a>
              </li>
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos de servicio</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. LEGAL BAR */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Reclu. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacidad" className="hover:text-zinc-300 transition-colors">Privacidad</Link>
            <Link to="/terminos" className="hover:text-zinc-300 transition-colors">Términos</Link>
            <span>Santiago, CL · Desarrollado con precisión</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
