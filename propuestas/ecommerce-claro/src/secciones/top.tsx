import { useState } from 'react';
import { NAV, media } from '../data';

interface NavProps {
  oculto: boolean;
  progreso: number;
}

export function Nav({ oculto, progreso }: NavProps) {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className={`nav ${oculto ? 'nav--oculto' : ''}`}>
      <div className="contenedor nav__fila">
        <a className="nav__marca" href="#arriba" aria-label="Alameda Store, ir arriba">
          Alameda&nbsp;Store
        </a>
        <nav className="nav__links" aria-label="Secciones">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="nav__burger"
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto((v) => !v)}
        >
          <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div id="menu-movil" className={`nav__movil ${abierto ? 'nav__movil--abierto' : ''}`}>
        <nav className="contenedor" aria-label="Secciones móvil">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setAbierto(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="nav__progreso" style={{ transform: `scaleX(${progreso})` }} aria-hidden="true">
        <span />
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="arriba">
      <div className="contenedor hero__grilla">
        <div className="hero__texto">
          <p className="kicker">Colección Casa · Otoño 2026</p>
          <h1 className="hero__titulo">
            <span className="linea"><span>Una tienda clara</span></span>
            <span className="linea"><span>para comprar</span></span>
            <span className="linea"><span>sin fricción.</span></span>
          </h1>
          <p className="hero__baja">
            Rediseño de tienda online para marcas que venden orden: catálogo disciplinado,
            fichas de producto honestas y un checkout sin ruido. Propuesta preparada para
            tiendas chilenas del grupo claro minimalista.
          </p>
          <div className="hero__acciones">
            <a className="btn btn--tinta" href="#coleccion">Ver colección</a>
            <a className="btn btn--fantasma" href="#precios">Ver precios y envíos</a>
          </div>
        </div>
        <figure className="hero__figura">
          <img
            src={media('producto-textil.png')}
            alt="Pila de textiles de lino en tonos avena, blanco roto y gris junto a un bowl de gres crema sobre fondo blanco"
            width="1280"
            height="960"
          />
        </figure>
      </div>
    </section>
  );
}

const BENEFICIOS = [
  'Despacho gratis desde $60.000',
  'Cambio gratis en 10 días',
  'Retiro en tienda en 2 horas',
  'Pago seguro con Webpay',
];

export function BandaBeneficios() {
  return (
    <section className="banda" aria-label="Beneficios de compra">
      <ul className="banda__lista contenedor">
        {BENEFICIOS.map((texto) => (
          <li key={texto}>{texto}</li>
        ))}
      </ul>
    </section>
  );
}
