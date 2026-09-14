import { Revelar, Tilt, Galeria, Plano, Formulario, Btn, Chips } from "../components/widgets";
import { Enlace } from "../lib/router";
import { propiedades, op, rutas, marca } from "../lib/datos";

export function Ficha({ id }: { id: string }) {
  const p = propiedades.find((x) => x.id === id);

  if (!p) {
    return (
      <section className="seccion pagina">
        <header className="pagina-cab">
          <h1>Proyecto no encontrado</h1>
          <p className="seccion-sub">Puede que la ficha se haya movido de lugar.</p>
          <Btn a={rutas.catalogo}>Volver a proyectos</Btn>
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
          <Enlace a={rutas.catalogo}>Proyectos</Enlace>
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
            <p className="ficha-uf">Año {p.anio}</p>
            <p className="ficha-ref">
              {p.m2} m² {p.terrenoM2 ? `· terreno ${p.terrenoM2.toLocaleString("es-CL")} m²` : ""} · ficha {p.ref}
            </p>
          </div>
        </div>
        <Chips
          items={[
            { k: "Superficie", v: `${p.m2} m²` },
            ...(p.terrenoM2 ? [{ k: "Terreno", v: `${p.terrenoM2.toLocaleString("es-CL")} m²` }] : []),
            { k: "Tipología", v: p.tipo },
            ...(p.dormitorios > 0 ? [{ k: "Recintos", v: String(p.dormitorios) }] : []),
            { k: "Estado", v: op(p.operacion) },
            { k: "Año", v: String(p.anio) },
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
              <h2>El proyecto</h2>
              <p>{p.descripcion}</p>
              <p>
                La memoria completa —estrategia, partidos, materiales y principales detalles— se
                presenta en una primera reunión de una hora, sin costo, en la oficina del estudio o
                en la obra.
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
            <p className="mapa-nota">Vista referencial · la dirección exacta se comparte por privacidad del mandante.</p>
          </Revelar>
        </div>

        <aside className="ficha-col-b">
          <Revelar className="ficha-cta">
            <p className="kicker">Consultar por este proyecto</p>
            <h2>¿Proyectamos algo así?</h2>
            <p className="ficha-cta-sub">
              Le enviamos la memoria de {p.ref} y una primera orientación de plazos y honorarios para
              un encargo similar.
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
                  opciones: ["Solo tengo el terreno", "Tengo anteproyecto", "Tengo permiso", "Aún no sé"],
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
              <p className="kicker">Del mismo estudio</p>
              <h2>Proyectos similares</h2>
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
                      <span className="tarjeta-precio">Año {s.anio}</span>
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
