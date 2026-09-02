export function Footer() {
  return (
    <footer className="site-footer">
      <div className="grid">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-brand">ALTAMAR · Corredora Borde Costero · Av. Borgoño 14.422, oficina 4 · Reñaca</p>
            <p className="footer-horario">Horario oficina 10:00–21:30 Lun–Sáb · Dom con reserva</p>
          </div>
          <div className="footer-right">
            <nav className="footer-nav" aria-label="Footer">
              <a href="#propiedades">Propiedades</a>
              <span className="footer-sep" aria-hidden="true">
                ·
              </span>
              <a href="#borde-costero">Borde costero</a>
              <span className="footer-sep" aria-hidden="true">
                ·
              </span>
              <a href="#visita-nocturna">Visita nocturna</a>
            </nav>
            <p className="footer-copy">© 2026 ALTAMAR</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar" aria-label="CTA móvil">
      <a href="#propiedades" className="mobile-cta-a">
        Ver stock costero
      </a>
      <a href="#visita-nocturna" className="mobile-cta-b">
        Agendar visita nocturna
      </a>
    </div>
  );
}
