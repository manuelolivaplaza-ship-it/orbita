import { useEffect, useRef, useState } from "react";
import { Enlace, useRuta } from "../lib/router";
import { marca, nav, comunas, rutas } from "../lib/datos";

export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const barra = ref.current;
    if (!barra) return;
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total > 0 ? window.scrollY / total : 0;
      barra.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="progreso" aria-hidden="true">
      <div className="progreso-barra" ref={ref} />
    </div>
  );
}

export function Navbar() {
  const ruta = useRuta();
  const [compacta, setCompacta] = useState(false);
  const [oculta, setOculta] = useState(false);
  const [menu, setMenu] = useState(false);
  const prevScroll = useRef(0);

  useEffect(() => {
    setMenu(false);
  }, [ruta]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCompacta(y > 40);
      setOculta(y > 300 && y > prevScroll.current && !menu);
      prevScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menu]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <>
      <header className={"nav" + (compacta ? " compacta" : "") + (oculta ? " oculta" : "")}>
        <div className="nav-inner">
          <Enlace a={rutas.inicio} className="logo" ariaLabel={`${marca.nombre} — inicio`}>
            {marca.nombre}
            <span> {marca.sufijo}</span>
          </Enlace>
          <nav className="nav-links" aria-label="Secciones">
            {nav.map((n) => (
              <Enlace
                key={n.a}
                a={n.a}
                className={"nav-link" + (n.a !== "/" && ruta.startsWith(n.a) ? " activa" : "")}
              >
                {n.texto}
              </Enlace>
            ))}
          </nav>
          <Enlace a={rutas.captacion} className="btn btn-prim nav-cta">
            Agendar visita
          </Enlace>
          <button
            type="button"
            className={"hamburguesa" + (menu ? " abierta" : "")}
            onClick={() => setMenu((m) => !m)}
            aria-expanded={menu}
            aria-label="Abrir menú"
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={"menu-movil" + (menu ? " abierto" : "")} aria-hidden={!menu}>
        <nav aria-label="Menú">
          {[{ texto: "Inicio", a: rutas.inicio }, ...nav].map((n, i) => (
            <Enlace key={n.a} a={n.a} className="menu-link" onClick={() => setMenu(false)}>
              <em>0{i + 1}</em>
              {n.texto}
            </Enlace>
          ))}
        </nav>
        <div className="menu-pie">
          <a href={marca.telefonoHref}>{marca.telefono}</a>
          <a href={`mailto:${marca.correo}`}>{marca.correo}</a>
        </div>
      </div>
    </>
  );
}

export function Grain() {
  return <div className="grano" aria-hidden="true" />;
}

export function CtaMovil() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={"cta-movil" + (visible ? " visible" : "")}>
      <a className="btn btn-sec" href={marca.telefonoHref}>
        Llamar
      </a>
      <Enlace a={rutas.captacion} className="btn btn-prim">
        Agendar visita
      </Enlace>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-marca">
          <p className="footer-logo">
            {marca.nombre}
            <span> {marca.sufijo}</span>
          </p>
          <p className="footer-nota">{marca.pie}</p>
        </div>
        <nav className="footer-nav" aria-label="Pie">
          {[{ texto: "Inicio", a: rutas.inicio }, ...nav].map((n) => (
            <Enlace key={n.a} a={n.a}>
              {n.texto}
            </Enlace>
          ))}
        </nav>
        <div className="footer-datos">
          <p>{marca.direccion}</p>
          <p>{marca.horario}</p>
          <p>
            <a href={marca.telefonoHref}>{marca.telefono}</a>
          </p>
          <p>
            <a href={`mailto:${marca.correo}`}>{marca.correo}</a>
          </p>
        </div>
        <div className="footer-comunas">
          <p className="footer-comunas-t">Comunas</p>
          <p>{comunas.join(" · ")}</p>
        </div>
      </div>
      <div className="footer-base">
        <span>
          {marca.nombre} {marca.sufijo}
        </span>
        <span>Corredora de propiedades inscrita · este sitio no constituye oferta de bienes raíces.</span>
      </div>
    </footer>
  );
}
