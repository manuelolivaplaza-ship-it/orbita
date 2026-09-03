import { useState } from 'react';
import { PRODUCTOS, clp, media } from '../data';

const LINEAS = ['Todo', 'Textiles', 'Cerámica', 'Madera'] as const;
type Linea = (typeof LINEAS)[number];

/* ── #coleccion ── */
export function Coleccion() {
  const [activa, setActiva] = useState<Linea>('Todo');
  const visibles = activa === 'Todo' ? PRODUCTOS : PRODUCTOS.filter((p) => p.linea === activa);

  return (
    <section className="seccion" id="coleccion">
      <div className="contenedor">
        <div className="cabecera reveal">
          <p className="kicker">Catálogo</p>
          <h2>
            Una grilla disciplinada,<br />
            fichas que responden lo esencial.
          </h2>
          <p className="baja">
            Tarjetas uniformes con material, origen y precio en números tabulares. El filtro
            ordena la colección sin recargar la página; el hover solo insinúa el producto.
          </p>
        </div>

        <div className="filtros reveal" role="tablist" aria-label="Filtrar por línea">
          {LINEAS.map((linea) => (
            <button
              key={linea}
              type="button"
              role="tab"
              aria-selected={activa === linea}
              className={`filtro ${activa === linea ? 'filtro--activa' : ''}`}
              onClick={() => setActiva(linea)}
            >
              {linea}
              <span className="filtro__cuenta">
                {linea === 'Todo'
                  ? PRODUCTOS.length
                  : PRODUCTOS.filter((p) => p.linea === linea).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="grilla reveal">
          {visibles.map((p) => (
            <li key={p.nombre} className="tarjeta">
              <figure className="tarjeta__media">
                <img
                  src={media('lino-detalle.png')}
                  alt={`Detalle de textura de ${p.material.toLowerCase()} — ${p.nombre}`}
                  width="1280"
                  height="960"
                  loading="lazy"
                />
                <figcaption className="sr-only">{p.origen}</figcaption>
              </figure>
              <h3>{p.nombre}</h3>
              <p className="tarjeta__ficha">
                {p.material} · {p.origen}
              </p>
              <p className="tarjeta__precio">{clp(p.precio)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── #precios ── */
const RANGOS: Array<{ linea: string; rango: string; nota: string }> = [
  { linea: 'Textiles', rango: '$18.990 – $45.990', nota: 'Mantas, plaids, cojines y alfombras' },
  { linea: 'Cerámica', rango: '$12.990 – $24.990', nota: 'Piezas torneadas, algunas únicas' },
  { linea: 'Madera', rango: '$14.990 – $27.990', nota: 'Tablas, paneras y porta utensilios' },
];

export function Precios() {
  return (
    <section className="seccion seccion--hueso" id="precios">
      <div className="contenedor">
        <div className="cabecera reveal">
          <p className="kicker">Precios y despacho</p>
          <h2>
            Transparencia comercial:<br />
            todo a la vista, sin letra chica.
          </h2>
        </div>

        <table className="tabla reveal">
          <caption className="sr-only">Rangos de precio por línea de producto</caption>
          <thead>
            <tr>
              <th scope="col">Línea</th>
              <th scope="col">Rango de precio</th>
              <th scope="col">Qué incluye</th>
            </tr>
          </thead>
          <tbody>
            {RANGOS.map((r) => (
              <tr key={r.linea}>
                <th scope="row">{r.linea}</th>
                <td className="num">{r.rango}</td>
                <td>{r.nota}</td>
              </tr>
            ))}
            <tr>
              <th scope="row">Envío gratis</th>
              <td className="num">desde $60.000</td>
              <td>En compras menores, el despacho se cobra según región</td>
            </tr>
          </tbody>
        </table>

        <table className="tabla tabla--secundaria reveal">
          <caption className="sr-only">Costo de despacho por zona</caption>
          <thead>
            <tr>
              <th scope="col">Zona de despacho</th>
              <th scope="col">Costo</th>
              <th scope="col">Plazo estimado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Región Metropolitana</th>
              <td className="num">$2.990</td>
              <td>24 a 48 horas hábiles</td>
            </tr>
            <tr>
              <th scope="row">Regiones centro y sur</th>
              <td className="num">$4.490</td>
              <td>2 a 5 días hábiles</td>
            </tr>
            <tr>
              <th scope="row">Regiones extremas</th>
              <td className="num">$6.990</td>
              <td>4 a 8 días hábiles</td>
            </tr>
            <tr>
              <th scope="row">Retiro en tienda</th>
              <td className="num">$0</td>
              <td>Listo en 2 horas · Providencia, Santiago</td>
            </tr>
          </tbody>
        </table>

        <p className="nota reveal">
          Medios de pago aceptados: débito, crédito, transferencia y Webpay. Los precios incluyen
          IVA. Cambios y devoluciones dentro de 10 días corridos según la ley del consumidor,
          con retiro a domicilio sin costo si el producto llega fallado.
        </p>
      </div>
    </section>
  );
}

/* ── #cifras ── */
const CIFRAS = [
  { valor: '12', unidad: 'años', texto: 'vendiendo en línea desde 2014' },
  { valor: '38.400', unidad: 'pedidos/año', texto: 'despachados durante 2025' },
  { valor: '321', unidad: 'comunas', texto: 'cubiertas en las 16 regiones' },
  { valor: '2,7', unidad: 'días', texto: 'entrega promedio nacional' },
  { valor: '1,8%', unidad: 'tasa de cambio', texto: 'devoluciones resueltas en 72 horas' },
  { valor: '4,8', unidad: '/5', texto: 'valoración promedio de clientas y clientes' },
];

export function Cifras() {
  return (
    <section className="seccion" id="cifras">
      <div className="contenedor">
        <div className="cabecera reveal">
          <p className="kicker">Cifras</p>
          <h2>Operación real, medible.</h2>
        </div>
        <dl className="cifras reveal">
          {CIFRAS.map((c) => (
            <div key={c.unidad} className="cifra">
              <dt>
                <span className="cifra__valor num">{c.valor}</span>{' '}
                <span className="cifra__unidad">{c.unidad}</span>
              </dt>
              <dd>{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── banda editorial + #metodo ── */
export function BandaEditorial() {
  return (
    <section className="editorial" aria-label="Interior de tienda">
      <figure className="contenedor editorial__figura reveal">
        <img
          src={media('tienda-interior.png')}
          alt="Interior luminoso de una tienda minimalista con estanterías de roble pálido, textiles doblados y cerámica neutra"
          width="1280"
          height="960"
          loading="lazy"
        />
        <figcaption>
          Retail físico y digital con un mismo criterio: producto protagonista, señal mínima.
        </figcaption>
      </figure>
    </section>
  );
}

const PASOS = [
  { n: '01', titulo: 'Explora la colección', texto: 'Fichas con material, medidas y origen real de cada pieza.' },
  { n: '02', titulo: 'Agrega al carro', texto: 'Precios finales con IVA; el umbral de envío gratis se muestra siempre.' },
  { n: '03', titulo: 'Paga seguro', texto: 'Webpay, débito, crédito o transferencia en un checkout de un paso.' },
  { n: '04', titulo: 'Sigue tu pedido', texto: 'Número de seguimiento por correo y SMS desde que sale de bodega.' },
  { n: '05', titulo: 'Recibe o retira', texto: 'Despacho a domicilio o retiro en tienda listo en 2 horas.' },
];

export function Metodo() {
  return (
    <section className="seccion seccion--hueso" id="metodo">
      <div className="contenedor">
        <div className="cabecera reveal">
          <p className="kicker">Cómo comprar</p>
          <h2>Cinco pasos, cero fricción.</h2>
        </div>
        <ol className="pasos reveal">
          {PASOS.map((paso) => (
            <li key={paso.n} className="paso">
              <span className="paso__n num">{paso.n}</span>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
