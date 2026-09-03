import { useRef, useState } from 'react';

interface Pregunta {
  q: string;
  a: string;
}

const FAQ: Pregunta[] = [
  {
    q: '¿Cómo elijo mi talla o medida y qué pasa si no calibra?',
    a: 'Cada ficha incluye medidas reales de la pieza en centímetros y una guía para comparar con algo que ya tengas en casa. Si igual no calibra, tienes 10 días corridos para cambio o devolución: coordinamos el retiro y la devolución del dinero se hace al mismo medio de pago dentro de 5 días hábiles.',
  },
  {
    q: '¿Cuánto cuesta y cuánto demora el despacho?',
    a: 'Región Metropolitana $2.990 (24–48 horas hábiles), regiones centro y sur $4.490 (2 a 5 días) y regiones extremas $6.990 (4 a 8 días). Despacho gratis en compras desde $60.000. Todo se confirma en el checkout antes de pagar, sin cobros sorpresa después.',
  },
  {
    q: '¿Cómo sigo mi pedido?',
    a: 'Al confirmar tu compra recibes un correo con el número de pedido. Cuando sale de bodega llegan el número de seguimiento por correo y SMS, actualizado en cada hito hasta la entrega.',
  },
  {
    q: '¿Qué formas de pago aceptan y qué tan seguro es el checkout?',
    a: 'Débito, crédito, transferencia y Webpay. El pago se procesa en una pasarela certificada: no almacenamos datos de tarjetas en nuestros servidores y toda la navegación viaja bajo HTTPS.',
  },
  {
    q: '¿Puedo retirar en tienda?',
    a: 'Sí. Al elegir retiro en tienda el pedido queda listo en 2 horas hábiles en Providencia, Santiago, y tienes 10 días para retirarlo. Es gratis e independiente del monto de la compra.',
  },
  {
    q: '¿Qué garantía legal tienen los productos?',
    a: 'Todos los productos cuentan con garantía legal de 6 meses por fallas de fábrica, además del derecho a cambio o devolución en 10 días corridos desde la recepción según la ley del consumidor chilena.',
  },
  {
    q: '¿Y si el producto llega dañado o fallado?',
    a: 'Escríbenos dentro de las primeras 48 horas con una foto del producto y del envase. Coordinamos retiro a domicilio sin costo y eliges reposición inmediata o devolución total del dinero.',
  },
];

export function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const alternar = (i: number) => setAbierta((v) => (v === i ? null : i));

  const navegar = (i: number, delta: number) => {
    const siguiente = (i + delta + FAQ.length) % FAQ.length;
    refs.current[siguiente]?.focus();
    setAbierta(siguiente);
  };

  return (
    <section className="seccion" id="faq">
      <div className="contenedor contenedor--angosto">
        <div className="cabecera reveal">
          <p className="kicker">Preguntas frecuentes</p>
          <h2>Las dudas que frenan una compra,<br />resueltas antes de pagar.</h2>
        </div>
        <div className="faq reveal">
          {FAQ.map((item, i) => {
            const expandida = abierta === i;
            return (
              <div key={item.q} className={`faq__item ${expandida ? 'faq__item--abierta' : ''}`}>
                <h3>
                  <button
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    type="button"
                    aria-expanded={expandida}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-boton-${i}`}
                    onClick={() => alternar(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        navegar(i, 1);
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        navegar(i, -1);
                      }
                    }}
                  >
                    {item.q}
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  role="region"
                  id={`faq-panel-${i}`}
                  aria-labelledby={`faq-boton-${i}`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contacto() {
  return (
    <footer className="contacto" id="contacto">
      <div className="contenedor contacto__grilla">
        <div>
          <p className="kicker">Propuesta</p>
          <h2>Una tienda que vende orden.</h2>
          <p className="baja">
            Este rediseño es una propuesta preparada por Órbita para tiendas online chilenas.
            Los datos comerciales son demostrativos y se ajustan a cada marca.
          </p>
        </div>
        <div className="contacto__datos">
          <dl>
            <div>
              <dt>Tienda demo</dt>
              <dd>Alameda Store · Providencia, Santiago</dd>
            </div>
            <div>
              <dt>Contacto</dt>
              <dd>hola@alamedastore.cl · +56 9 5555 0147</dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>Lunes a viernes 10:00–19:00 · Sábados 10:00–14:00</dd>
            </div>
          </dl>
          <a className="btn btn--tinta" href="#arriba">Volver arriba</a>
        </div>
      </div>
      <div className="contenedor contacto__pie">
        <small>© 2026 Órbita · Propuesta de rediseño, uso interno.</small>
        <small>Demo sin ventas reales</small>
      </div>
    </footer>
  );
}
