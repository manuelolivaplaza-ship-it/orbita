import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, CalendarDays } from 'lucide-react';
import { LiquidGlass } from './LiquidGlass';

interface NavbarProps {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
}

type NavItem = {
  label: string;
  to?: string;
  hash?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onOpenSchedule }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setHidden(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (mobileMenuOpen || y < 32) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  const navLinks: NavItem[] = [
    { label: 'Inicio', to: '/' },
    { label: 'Creaciones', to: '/creaciones' },
    { label: 'Servicios', to: '/servicios' },
    { label: 'Método', to: '/', hash: 'metodo' },
    { label: 'Precios', to: '/', hash: 'precios' },
    { label: 'Contacto', to: '/', hash: 'contacto' },
  ];

  const goTo = (item: NavItem) => {
    setMobileMenuOpen(false);
    if (item.hash) {
      if (location.pathname === '/') {
        document.getElementById(item.hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate({ pathname: '/', hash: item.hash });
      }
      return;
    }
    if (item.to) {
      navigate(item.to);
    }
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 pointer-events-none transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden && !mobileMenuOpen ? '-translate-y-[120%]' : 'translate-y-0'
      }`}
    >
      <div className="max-w-[88rem] mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        <LiquidGlass pill tone="light">
          <Link
            to="/"
            className="flex items-center gap-2.5 pl-2 pr-4 py-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280] rounded-full"
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-white/80 border border-white/70">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="5" fill="#0B0B12" />
                <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#0B0B12" strokeWidth="1.8" strokeDasharray="100" transform="rotate(-25 12 12)" />
                <circle cx="18.5" cy="8.5" r="1.8" fill="#6B7280" />
              </svg>
            </div>
            <span className="text-xl font-medium tracking-tight text-[#0B0B12] group-hover:text-[#6B7280] transition-colors">
              Órbita
            </span>
          </Link>
        </LiquidGlass>

        <nav className="hidden lg:block">
          <LiquidGlass pill tone="light">
            <div className="flex items-center gap-1 px-2 py-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => goTo(link)}
                  className="text-sm font-medium text-zinc-700 hover:text-[#0B0B12] transition-colors duration-200 relative group px-3.5 py-1.5 rounded-full hover:bg-white/40"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </LiquidGlass>
        </nav>

        <div className="hidden lg:block">
          <LiquidGlass pill tone="light">
            <div className="flex items-center gap-1 p-1.5 pl-2">
              <button
                type="button"
                onClick={onOpenSchedule}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] px-3.5 py-2 rounded-full hover:bg-white/35 transition-all"
              >
                <CalendarDays className="w-4 h-4 text-zinc-500" />
                Agendar
              </button>
              <button
                type="button"
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 bg-[#0B0B12] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-zinc-800 transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7280]"
              >
                <span>Pedir presupuesto</span>
                <ArrowRight className="w-4 h-4 text-zinc-300" />
              </button>
            </div>
          </LiquidGlass>
        </div>

        <div className="lg:hidden">
          <LiquidGlass pill tone="light">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-[#0B0B12] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </LiquidGlass>
        </div>
      </div>

    </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[#0B0B12]/40 backdrop-blur-sm"
            aria-label="Cerrar menú"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-x-3 top-3 bottom-3 sm:left-auto sm:w-[22rem] flex flex-col rounded-[1.75rem] bg-white border border-zinc-200/80 shadow-[0_24px_60px_-20px_rgba(15,15,40,0.35)] overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0B0B12] text-white">
                  <Sparkles className="w-4 h-4 text-[#D4D4D8]" />
                </div>
                <span className="text-lg font-medium text-[#0B0B12] tracking-tight">Órbita</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => goTo(link)}
                  className="w-full text-left text-base font-medium text-[#0B0B12] px-4 py-3.5 rounded-2xl hover:bg-zinc-50 active:bg-zinc-100"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 border-t border-zinc-100 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-[#0B0B12] py-3.5 px-6 rounded-full font-medium text-sm"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Agendar reunión</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#0B0B12] text-white py-3.5 px-6 rounded-full font-medium text-sm"
              >
                <span>Pedir presupuesto</span>
                <ArrowRight className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
