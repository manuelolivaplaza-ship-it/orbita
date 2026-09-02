import { useEffect, useRef, useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const diff = y - lastY.current;
      if (!open) {
        if (y > 80 && diff > 4) setHidden(true);
        else if (diff < -4 || y <= 80) setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""}`}>
      <div className="header-inner">
        <a href="#" className="logo" aria-label="ETER inicio">
          ETER
        </a>

        <nav className="nav-desktop" aria-label="Principal">
          <a href="#familias-obra">Familias obra</a>
          <a href="#ficha-tecnica">Ficha técnica</a>
          <a href="#venta-a-obra">Venta a obra</a>
          <a href="#stock-sucursal">Stock sucursal</a>
          <a href="#horario-retiro">Horario retiro</a>
        </nav>

        <div className="header-right">
          <span className="phone-mono">+56 2 2840 3315</span>
          <a href="#cotiza-obra" className="btn-accent">
            Cotizar por WhatsApp
          </a>
        </div>

        <button
          className="hamburger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="sheet-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      {open && (
        <div id="sheet-nav" className="sheet">
          <span className="sheet-phone">+56 2 2840 3315</span>
          <nav aria-label="Principal móvil">
            <a href="#familias-obra" onClick={() => setOpen(false)}>
              Familias obra
            </a>
            <a href="#ficha-tecnica" onClick={() => setOpen(false)}>
              Ficha técnica
            </a>
            <a href="#venta-a-obra" onClick={() => setOpen(false)}>
              Venta a obra
            </a>
            <a href="#stock-sucursal" onClick={() => setOpen(false)}>
              Stock sucursal
            </a>
            <a href="#horario-retiro" onClick={() => setOpen(false)}>
              Horario retiro
            </a>
          </nav>
          <a href="#cotiza-obra" className="btn-accent" onClick={() => setOpen(false)}>
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
