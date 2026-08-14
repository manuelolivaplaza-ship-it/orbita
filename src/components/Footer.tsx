import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { submitLead } from '../lib/leads';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';
import { LiquidGlass } from './LiquidGlass';

const VIDEO_SOFT = 'https://mail.programbi.com/uploads/Astronaut_looking_at_Earth_1080p_202608102055.mp4';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [inView, setInView] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentYear = new Date().getFullYear();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const update = () => {
      const main = document.querySelector('main');
      if (!main) return;
      setInView(main.getBoundingClientRect().bottom < window.innerHeight - 48);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    if (inView && !reducedMotion) setLoadVideo(true);
  }, [inView, reducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loadVideo) return;
    if (!inView) {
      video.pause();
      return;
    }
    let cancelled = false;
    const playFromStart = () => {
      if (cancelled) return;
      video.currentTime = 0;
      void video.play();
    };
    if (video.readyState >= 2) playFromStart();
    else video.addEventListener('loadeddata', playFromStart, { once: true });
    return () => {
      cancelled = true;
      video.removeEventListener('loadeddata', playFromStart);
    };
  }, [inView, loadVideo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    try {
      await submitLead({ source: 'newsletter', email: email.trim() });
      setSubmitted(true);
      setEmail('');
    } finally {
      setSending(false);
    }
  };

  return (
    <footer className="footer-reveal sticky bottom-0 z-0 min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A0C14] text-white">
      {/* 1) BACKGROUND LAYER: Video Loop + Soft Vignette */}
      {!reducedMotion && loadVideo && (
        <video
          ref={videoRef}
          src={VIDEO_SOFT}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
      )}

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(10,12,20,0.08) 0%, rgba(10,12,20,0.42) 100%), linear-gradient(180deg, rgba(10,12,20,0.12) 0%, rgba(10,12,20,0.5) 100%)',
        }}
      />

      <div className="footer-reveal__veil" aria-hidden />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-36 sm:pt-44 pb-16 max-w-4xl mx-auto w-full">
        {/* Large Centered Headline */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8"
          style={{ letterSpacing: '-0.035em' }}
        >
          Tu marca, sin ruido.
        </h2>

        {/* Newsletter Form */}
        <div className="w-full max-w-lg">
          {submitted ? (
            <LiquidGlass pill className="inline-flex">
              <div className="inline-flex items-center gap-2 text-white px-6 py-3 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Listo. Te escribimos pronto.</span>
              </div>
            </LiquidGlass>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <LiquidGlass pill>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 pl-5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="¿Tu mejor email?"
                    required
                    className="w-full sm:flex-1 bg-transparent text-white placeholder-white/55 py-2.5 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-full bg-[#0B0B12]/80 hover:bg-black text-white px-6 py-2.5 text-sm font-medium tracking-wide transition-all shrink-0 flex items-center justify-center gap-2 border border-white/15 disabled:opacity-70"
                  >
                    <span>{sending ? 'Enviando…' : 'AVÍSAME'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </LiquidGlass>
            </form>
          )}
        </div>
      </div>

      {/* 3) BOTTOM GLASS BAR (Lumina signature) */}
      <div className="relative z-20 px-4 md:px-8 pb-4 md:pb-6 w-full max-w-[88rem] mx-auto">
        <LiquidGlass className="p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-start">
            
            {/* COL 1 — Brand */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" fill="#0B0B12" />
                    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#0B0B12" strokeWidth="1.8" transform="rotate(-25 12 12)" />
                  </svg>
                </div>
                <span className="text-xl font-medium tracking-tight text-white">Órbita</span>
              </div>
              <p className="text-white/65 text-sm max-w-xs leading-relaxed font-normal">
                Órbita diseña sitios y landings de alto impacto — claros, rápidos y hechos para convertir.
              </p>
            </div>

            {/* COL 2 — DESCUBRIR */}
            <div>
              <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">
                DESCUBRIR
              </h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li><Link to="/creaciones" className="hover:text-white transition-colors">Creaciones</Link></li>
                <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link to="/#metodo" className="hover:text-white transition-colors">Método</Link></li>
                <li><Link to="/#precios" className="hover:text-white transition-colors">Precios</Link></li>
                <li><Link to="/#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* COL 3 — EL ESTUDIO */}
            <div>
              <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">
                EL ESTUDIO
              </h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li><Link to="/" className="hover:text-white transition-colors">Origen</Link></li>
                <li><Link to="/#metodo" className="hover:text-white transition-colors">Cómo trabajamos</Link></li>
                <li><Link to="/#faq" className="hover:text-white transition-colors">Preguntas</Link></li>
                <li><a href="mailto:hola@orbita.studio" className="hover:text-white transition-colors">Unirse</a></li>
              </ul>
            </div>

            {/* COL 4 — CONCIERGE */}
            <div>
              <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">
                CONCIERGE
              </h4>
              <ul className="space-y-2 text-sm text-white/85">
                <li><Link to="/#contacto" className="hover:text-white transition-colors">Pedir presupuesto</Link></li>
                <li><Link to="/?agendar=1" className="hover:text-white transition-colors">Agendar reunión</Link></li>
                <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
                <li><a href="mailto:soporte@orbita.studio" className="hover:text-white transition-colors">Reportar problema</a></li>
              </ul>
            </div>

          </div>

          {/* Legal line inside bottom bar */}
          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/40 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>© {currentYear} Órbita. Todos los derechos reservados.</span>
            <span>Santiago, CL · Hecho con precisión</span>
          </div>
        </LiquidGlass>
      </div>
    </footer>
  );
};
