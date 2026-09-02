import { useState } from "react";

const NAV = [
  { href: "#cuarteles-terroir", label: "Cuarteles" },
  { href: "#vinos-de-parcela", label: "Vinos de Parcela" },
  { href: "#cata-en-bodega", label: "Cata en Bodega" },
  { href: "#club-eter", label: "Club ETER" },
  { href: "#despacho-y-retiro", label: "Despacho y Retiro" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#" className="site-header__logo" aria-label="ETER inicio">
            ETER
          </a>
          <nav className="site-header__nav" aria-label="Navegación principal">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="site-header__right">
            <a href="tel:+56932204418" className="site-header__phone">
              +56 9 3220 4418
            </a>
            <a href="#reserva-cata" className="site-header__cta">
              Reservar cata
            </a>
            <button
              className="site-header__hamburger"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <nav
        className="site-header__drawer"
        data-open={open ? "true" : "false"}
        aria-label="Navegación móvil"
      >
        {NAV.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="tel:+56932204418" onClick={() => setOpen(false)}>
          +56 9 3220 4418
        </a>
        <a href="#reserva-cata" className="site-header__cta" onClick={() => setOpen(false)}>
          Reservar cata
        </a>
      </nav>
    </>
  );
}
