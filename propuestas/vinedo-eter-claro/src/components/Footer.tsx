export function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo">ETER</span>
          <span className="site-footer__tagline">ETER · Viña de ladera · Casablanca</span>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navegación">
          <a href="#cuarteles-terroir">Cuarteles</a>
          <a href="#vinos-de-parcela">Vinos</a>
          <a href="#cata-en-bodega">Cata</a>
          <a href="#club-eter">Club</a>
        </nav>
        <div className="site-footer__legal">© 2026 ETER · RUT 76.123.456-7 · Beber con moderación · Valores referenciales</div>
      </div>
    </footer>
  );
}
