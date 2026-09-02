export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo" aria-label="ALTAMAR inicio">
          ALTAMAR
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#propiedades">Propiedades</a>
          <a href="#ficha-altamar">Ficha</a>
          <a href="#borde-costero">Borde costero</a>
          <a href="#en-verde">En verde</a>
        </nav>

        <a className="header__tel" href="tel:+56974263188">
          +56 9 7426 3188
        </a>

        <a
          className="header__tel-icon"
          href="tel:+56974263188"
          aria-label="Llamar +56 9 7426 3188"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.14.4 2.26.82 3.32a2 2 0 0 1-.57 2.06l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.06-.57c1.06.42 2.18.7 3.32.82A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        <a className="header__cta" href="#visita-nocturna">
          Agendar visita nocturna
        </a>

        <button className="header__hamburger" type="button" aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
