import { Revelar, Tilt, Galeria, Plano, Formulario, Btn, Chips } from "../components/widgets";
import { Enlace } from "../lib/router";
import { propiedades, op, linea, rutas, marca } from "../lib/datos";

export function Ficha({ id }: { id: string }) {
  const p = propiedades.find((x) => x.id === id);

  if (!p) {
    return (
      <section className="seccion pagina">
        <header className="pagina-cab">
          <h1>Caso no encontrado</h1>
          <p className="seccion-sub">Puede que la ficha se haya movido de lugar.</p>
          <Btn a={rutas.catalogo}>Volver a casos</Btn>
        </header>
      </section>
    );
  }

  const similares = propiedades
    .filter((x) => x.id !== p.id && (x.comuna === p.comuna || x.tipo === p.tipo))
    .slice(0, 3);

  const [lat, lon] = p.coord;
  const d = 0.012;
  const bbox = `${lon - d}%2C${lat - d}%2C${lon + d}%2C${lat + d}`;
  const mapa = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <>
      <section className="ficha-cab pagina">
        <nav className="migas" aria-label="Migas de pan">
          <Enlace a={rutas.inicio}>Inicio</Enlace>
          <span>/</span>
          <Enlace a={rutas.catalogo}>Casos</Enlace>
          <span>/</span>
          <em>{p.ref}</em>
        </nav>
        <div className="ficha-titular">
          <div>
            <p className="kicker">
              {op(p.operacion)} · {p.tipo} · {p.comuna}
            </p>
            <h1>{p.titulo}</h1>
          </div>
          <div className="ficha-precio">
            <p className="ficha-uf">{linea(p)}</p>
            <p className="ficha-ref">
              {p.m2} m² {p.terrenoM2 ? `· terreno ${p.terrenoM2.toLocaleString("es-CL")} m²` : ""} · ficha {p.ref}
            </p>
          </div>
        </div>
        <Chips
          items={[
            { k: "Valor desde", v: "$" + (p.m2 * 1000).toLocaleString("es-CL") },
            ...(p.terrenoM2 ? [{ k: "Terreno", v: `${p.terrenoM2.toLocaleString("es-CL")} m²` }] : []),
            { k: "Especialidad", v: p.tipo },
            ...(p.dormitorios > 0 ? [{ k: "Abogados", v: String(p.dormitorios) }] : []),
            { k: "Modalidad", v: op(p.operacion) },
            { k: "Plazo", v: `${p.anio} semanas` },
          ]}
        />
      </section>

      <section className="pagina ficha-cuerpo">
        <div className="ficha-col-a">
          <Revelar>
            <Galeria fotos={p.fotos} alt={p.titulo} />
          </Revelar>
          <Revelar>
            <div className="prosa">
              <h2>El caso</h2>
              <p>{p.descripcion}</p>
              <p>
                Antes de agendar recibe el plan por escrito: qué incluye, cuánto demora y el
                valor final con copagos si corresponde.
              </p>
            </div>
          </Revelar>
          {p.dormitorios > 0 && (
            <Revelar>
              <h2 className="titulo-bloque">Planta esquemática</h2>
              <div className="plano-wrap">
                <Plano dormitorios={p.dormitorios} banos={p.banos} m2={p.m2} />
              </div>
            </Revelar>
          )}
          <Revelar>
            <h2 className="titulo-bloque">Ubicación</h2>
            <div className="mapa-wrap">
              <iframe
                title={`Mapa de ${p.titulo}`}
                src={mapa}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mapa-nota">Vista referencial · zona referencial de atención.</p>
          </Revelar>
        </div>

        <aside className="ficha-col-b">
          <Revelar className="ficha-cta">
            <p className="kicker">Consultar por un proyecto así</p>
            <h2>¿Hagamos el tuyo?</h2>
            <p className="ficha-cta-sub">
              Le contamos en qué consiste, cuántas sesiones toma y el valor total antes de
              agendar.
            </p>
            <Formulario
              campos={[
                { nombre: "nombre", etiqueta: "Nombre", requerido: true },
                { nombre: "telefono", etiqueta: "Teléfono", tipo: "tel", requerido: true },
                { nombre: "correo", etiqueta: "Correo", tipo: "email" },
                {
                  nombre: "etapa",
                  etiqueta: "Etapa de su proyecto",
                  tipo: "select",
                  opciones: ["Primera consulta", "Soy paciente", "Tengo urgencia", "Solo quiero cotizar"],
                },
              ]}
              asunto={`Consulta proyecto ${p.ref}`}
            />
            <p className="ficha-directo">
              O directo:{" "}
              <a href={marca.telefonoHref}>{marca.telefono}</a>
            </p>
          </Revelar>
        </aside>
      </section>

      {similares.length > 0 && (
        <section className="seccion">
          <div className="seccion-cab">
            <Revelar>
              <p className="kicker">Casos relacionados</p>
              <h2>Otros casos</h2>
            </Revelar>
          </div>
          <div className="grilla-destacadas">
            {similares.map((s, i) => (
              <Revelar key={s.id} delay={i * 100} as="article">
                <Tilt className="tarjeta-prop">
                  <Enlace a={`${rutas.ficha}/${s.id}`} className="tarjeta-link" ariaLabel={s.titulo}>
                    <span className="tarjeta-foto">
                      <img src={s.fotos[0]} alt={s.titulo} loading="lazy" />
                      <span className="tarjeta-tag">{op(s.operacion)}</span>
                    </span>
                    <span className="tarjeta-cuerpo">
                      <strong className="tarjeta-titulo">{s.titulo}</strong>
                      <span className="tarjeta-meta">
                        {s.tipo} · {s.comuna} · {s.m2} m²
                      </span>
                      <span className="tarjeta-precio">{linea(s)}</span>
                    </span>
                  </Enlace>
                </Tilt>
              </Revelar>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
