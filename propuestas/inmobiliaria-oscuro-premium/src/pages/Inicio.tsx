import Hero3D from "../components/Hero3D";
import { Revelar, Contador, Tilt, Marquesina, Btn } from "../components/widgets";
import { Enlace } from "../lib/router";
import {
  marca,
  heroHud,
  comunas,
  propiedades,
  cifras,
  cartera,
  metodo,
  testimonios,
  rutas,
  valoresGestion,
} from "../lib/datos";

const uf = (n: number) => n.toLocaleString("es-CL") + " UF";

export function Inicio() {
  const destacadas = propiedades.filter((p) => p.destacada);

  return (
    <>
      <section className="hero" id="inicio">
        <Hero3D />
        <div className="hero-velo" aria-hidden="true" />
        <div className="hero-contenido">
          <p className="kicker revelar is-in">{marca.kicker}</p>
          <h1 className="hero-titulo">
            {marca.claim.map((linea, i) => (
              <span className="hero-linea" key={i}>
                {linea}
              </span>
            ))}
          </h1>
          <p className="hero-sub">{marca.sub}</p>
          <div className="hero-ctas">
            <Btn a={marca.ctaPrimario.a}>{marca.ctaPrimario.texto}</Btn>
            <Btn a={marca.ctaSecundario.a} variante="sec">
              {marca.ctaSecundario.texto}
            </Btn>
          </div>
          <ul className="hero-hud" aria-label="Datos de la corredora">
            {heroHud.map((h) => (
              <li key={h.k}>
                <span>{h.k}</span>
                <strong>{h.v}</strong>
              </li>
            ))}
          </ul>
        </div>
        <p className="hero-hint" aria-hidden="true">
          Desliza
        </p>
      </section>

      <Marquesina items={comunas} />

      <section className="seccion" id="destacadas">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Cartera destacada</p>
            <h2>
              Tres propiedades que <em>valen</em> la visita.
            </h2>
          </Revelar>
          <Revelar delay={120}>
            <Enlace a={rutas.catalogo} className="enlace-flecha">
              Ver las {propiedades.length} propiedades →
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
                    <span className="tarjeta-tag">{p.operacion === "venta" ? "Venta" : "Arriendo"}</span>
                  </span>
                  <span className="tarjeta-cuerpo">
                    <span className="tarjeta-ref">{p.ref}</span>
                    <strong className="tarjeta-titulo">{p.titulo}</strong>
                    <span className="tarjeta-meta">
                      {p.comuna} · {p.m2} m² {p.dormitorios > 0 ? `· ${p.dormitorios} dorm` : "· oficinas"}
                    </span>
                    <span className="tarjeta-precio">
                      {uf(p.precioUF)}
                      {p.operacion === "arriendo" && <em>/mes</em>}
                    </span>
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
        <Revelar>
          <p className="cifras-nota">
            Cifras de la corredora, cerradas cada 31 de diciembre. Cada propiedad se publica con su
            rol de avalúo y sus gastos comunes — sin sorpresas después de la visita.
          </p>
        </Revelar>
      </section>

      <section className="seccion" id="cartera">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Cartera</p>
            <h2>Cuatro líneas, una misma exigencia.</h2>
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
            “La ficha con los gastos comunes reales antes de la primera visita nos ahorró tres
            meses de visitas inútiles.”
            <footer>— R. y P. Sanfuentes · compradores, El Golf</footer>
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
            <p className="kicker">Valores de gestión</p>
            <h2>{valoresGestion.intro}</h2>
            <p className="seccion-sub">{valoresGestion.sub}</p>
          </Revelar>
        </div>
        <Revelar className="tabla-wrap">
          <table className="tabla">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Venta</th>
                <th>Arriendo</th>
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
        <Revelar>
          <p className="tabla-nota">
            Tasación sin costo · difusión profesional incluida · sin cargos por visitas ni reportes.
            Si la campaña pactada no se cumple, la gestión no se cobra.
          </p>
        </Revelar>
      </section>

      <section className="seccion" id="testimonios">
        <div className="seccion-cab">
          <Revelar>
            <p className="kicker">Cartas de clientes</p>
            <h2>Lo que dicen quienes firmaron.</h2>
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
            ¿Conversamos sobre su <em>propiedad</em>?
          </h2>
          <p>Tasación sin costo, en UF y por escrito, dentro de 48 horas.</p>
          <div className="hero-ctas">
            <Btn a={rutas.captacion}>Solicitar tasación</Btn>
            <Btn a={rutas.contacto} variante="sec">
              Contacto
            </Btn>
          </div>
        </Revelar>
      </section>
    </>
  );
}
