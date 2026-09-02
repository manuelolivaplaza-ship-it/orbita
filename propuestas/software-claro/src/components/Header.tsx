import { useEffect, useState } from "react";

export function Header() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${stuck ? "is-stuck" : ""}`} role="banner">
        <div className="grid header-inner">
          <div className="header-brand">
            <span className="header-brand-name">CORDILLERA</span>
            <span className="header-brand-sub">fábrica de software</span>
          </div>

          <nav className="header-nav" aria-label="Navegación principal">
            <a href="#engagement">Engagement</a>
            <a href="#stack-real">Stack</a>
            <a href="#sla">SLA</a>
            <a href="#casos-industria">Casos</a>
            <a href="#como-partimos">Cómo partimos</a>
            <a href="#presupuesto">Presupuesto</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+569912345678" className="header-tel">
              +569 9 1234 5678
            </a>
            <a
              href="tel:+569912345678"
              className="header-tel-icon"
              aria-label="Llamar +569 9 1234 5678"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.35.46 2.66.99 3.9a2 2 0 0 1-.57 2.1L8.09 11.16a16 16 0 0 0 4.75 4.75l1.44-1.44a2 2 0 0 1 2.1-.57c1.24.53 2.55.87 3.9.99A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a href="#reserva" className="header-cta">
              Agenda discovery 30 min
            </a>
            <button className="header-burger" aria-label="Menú" aria-expanded="false">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* sticky bottom CTA for mobile — CTA header oculto aparece aquí */}
      <div className="mobile-sticky-cta" aria-hidden="false">
        <a href="#reserva" className="btn-primary">
          Agenda discovery 30 min
        </a>
      </div>
    </>
  );
}
