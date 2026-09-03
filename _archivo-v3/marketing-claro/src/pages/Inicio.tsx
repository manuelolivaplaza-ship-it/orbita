import { Revelar, Contador, Tilt, Marquesina, Btn, HeroPrincipal } from "../components/widgets";
import { Enlace } from "../lib/router";
import {
  marca,
  heroHud,
  comunas,
  linea,
  propiedades,
  op,
  cifras,
  cartera,
  metodo,
  testimonios,
  cita,
  rutas,
  valoresGestion,
} from "../lib/datos";

export function Inicio() {
  const destacadas = propiedades.filter((p) => p.destacada);

  return (
    <>
            <HeroPrincipal />

      <Marquesina items={comunas} />

      <section className="seccion" id="destacadas">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Casos y proyectos</p>
            <h2>
              Casos que se <em>muestran</em> solos.
            </h2>
          </Revelar>
          <Revelar delay={120}>
            <Enlace a={rutas.catalogo} className="enlace-flecha">
              Ver los {propiedades.length} casos →
            </Enlace>
          </Revelar>
        </div>
        <div className="grilla-destacadas">
          {destacadas.map((p, i) => (
            <Revelar key={p.id} delay={i * 110} as="article">
              <Tilt className="tarjeta-prop">
                <Enlace a={`${rutas.ficha}/${p.id}`} className="tarjeta-link" ariaLabel={p.titulo}>
                  <span className="tarjeta-foto">
                    <img src={p.fotos[0]} alt={p.titulo} loading={i === 0 ? "eager" : "lazy"} />
                    <span className="tarjeta-tag">{op(p.operacion)}</span>
                  </span>
                  <span className="tarjeta-cuerpo">
                    <span className="tarjeta-ref">{p.ref}</span>
                    <strong className="tarjeta-titulo">{p.titulo}</strong>
                    <span className="tarjeta-meta">
                      {p.tipo} · {p.comuna}
                    </span>
                    <span className="tarjeta-precio">{linea(p)}</span>
                  </span>
                </Enlace>
              </Tilt>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="seccion seccion-tinta" id="cifras">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Cifras</p>
            <h2>Lo que se puede contar, se cuenta.</h2>
          </Revelar>
        </div>
        <div className="cifras">
          {cifras.map((c, i) => (
            <Revelar key={c.etiqueta} delay={i * 90} as="article" className="cifra">
              <p className="cifra-valor">
                <Contador valor={c.valor} sufijo={c.sufijo} />
              </p>
              <h3>{c.etiqueta}</h3>
              <p>{c.detalle}</p>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="seccion" id="servicios">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Servicios</p>
            <h2>Cuatro formas de ayudarte, un mismo estándar.</h2>
          </Revelar>
        </div>
        <div className="cartera">
          {cartera.map((c, i) => (
            <Revelar key={c.n} delay={i * 80} as="article" className="cartera-item">
              <span className="cartera-n">{c.n}</span>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
              <em>{c.pie}</em>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="cita-parallax">
        <Revelar>
          <blockquote>
            “{cita.texto}”
            <footer>— {cita.autor}</footer>
          </blockquote>
        </Revelar>
      </section>

      <section className="seccion" id="metodo">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">El método</p>
            <h2>Cuatro pasos, cero improvisación.</h2>
          </Revelar>
        </div>
        <div className="metodo">
          {metodo.map((m, i) => (
            <Revelar key={m.n} delay={i * 90} as="li" className="metodo-paso">
              <span className="metodo-n">{m.n}</span>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="seccion seccion-tinta" id="valores">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Honorarios</p>
            <h2>{valoresGestion.intro}</h2>
            <p className="seccion-sub">{valoresGestion.sub}</p>
          </Revelar>
        </div>
        <Revelar className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Rango</th>
                <th>Notas</th>
              </tr>
            </thead>
            <tbody>
              {valoresGestion.filas.map((f) => (
                <tr key={f.tipo}>
                  <td>
                    <strong>{f.tipo}</strong>
                    <span>{f.detalle}</span>
                  </td>
                  <td>{f.venta}</td>
                  <td>{f.arriendo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Revelar>
      </section>

      <section className="seccion" id="testimonios">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Cartas de clientes</p>
            <h2>Lo que dicen nuestros clientes.</h2>
          </Revelar>
        </div>
        <div className="testimonios">
          {testimonios.map((t, i) => (
            <Revelar key={t.autor} delay={i * 100} as="article" className="testimonio">
              <p>“{t.texto}”</p>
              <footer>
                <strong>{t.autor}</strong>
                <span>{t.detalle}</span>
              </footer>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="cinta-cta">
        <Revelar>
          <h2>
            ¿Trabajamos <em>juntos</em>?
          </h2>
          <p>Primera reunión sin costo con propuesta y presupuesto en 72 horas.</p>
          <div className="hero-ctas">
            <Btn a={rutas.captacion}>Cotizar proyecto</Btn>
            <Btn a={rutas.contacto} variante="sec">
              Contacto
            </Btn>
          </div>
        </Revelar>
      </section>
    </>
  );
}
