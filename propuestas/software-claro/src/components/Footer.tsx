export function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="grid footer-grid">
        <div className="footer-brand">
          <span className="footer-brand-name">CORDILLERA</span>
          <span className="footer-brand-sub">fábrica de software · Santiago</span>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#engagement">Engagement</a>
          <a href="#stack-real">Stack</a>
          <a href="#sla">SLA</a>
          <a href="#casos-industria">Casos</a>
          <a href="#como-partimos">Cómo partimos</a>
          <a href="#presupuesto">Presupuesto</a>
          <a href="#reserva">Reserva</a>
        </nav>

        <div className="footer-legal">© 2026 Cordillera SPA · RUT 76.XXX.XXX-X (demo) · Hecho en Chile · Privacidad</div>
      </div>
    </footer>
  );
}
