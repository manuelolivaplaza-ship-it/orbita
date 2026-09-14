import { Revelar, Tilt, Galeria, Plano, Formulario, Btn, Chips } from "../components/widgets";
import { Enlace } from "../lib/router";
import { propiedades, rutas, marca } from "../lib/datos";

const uf = (n: number) => n.toLocaleString("es-CL") + " UF";
const clp = (n: number) => "$" + n.toLocaleString("es-CL");

export function Ficha({ id }: { id: string }) {
  const p = propiedades.find((x) => x.id === id);

  if (!p) {
    return (
      <section className="seccion pagina">
        <header className="pagina-cab">
          <h1>Propiedad no encontrada</h1>
          <p className="seccion-sub">Puede que la ficha haya salido de cartera.</p>
          <Btn a={rutas.catalogo}>Volver a propiedades</Btn>
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
          <Enlace a={rutas.catalogo}>Propiedades</Enlace>
          <span>/</span>
          <em>{p.ref}</em>
        </nav>
        <div className="ficha-titular">
          <div>
            <p className="kicker">
              {p.operacion === "venta" ? "Venta" : "Arriendo"} · {p.tipo} · {p.comuna}
            </p>
            <h1>{p.titulo}</h1>
          </div>
          <div className="ficha-precio">
            <p className="ficha-uf">
              {uf(p.precioUF)}
              {p.operacion === "arriendo" && <em>/mes</em>}
            </p>
            {p.operacion === "venta" && <p className="ficha-ref">Referencia {p.ref} · precio en UF</p>}
            {p.operacion === "arriendo" && p.gastosComunes > 0 && (
              <p className="ficha-ref">Gastos comunes {clp(p.gastosComunes)}</p>
            )}
          </div>
        </div>
        <Chips
          items={[
            { k: "Superficie útil", v: `${p.m2} m²` },
            ...(p.terrenoM2 ? [{ k: "Terreno", v: `${p.terrenoM2.toLocaleString("es-CL")} m²` }] : []),
            ...(p.dormitorios > 0 ? [{ k: "Dormitorios", v: String(p.dormitorios) }] : [{ k: "Uso", v: "Oficinas" }]),
            { k: "Baños", v: String(p.banos) },
            { k: "Estacionamientos", v: String(p.estacionamientos) },
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
              <h2>La propiedad</h2>
              <p>{p.descripcion}</p>
              <p>
                La ficha completa —rol de avalúo, gastos comunes, contribuciones, reglamento de
                copropiedad y plano acotado— se entrega antes de la primera visita. Las visitas se
                realizan con cita, acompañadas por la corredora responsable de esta propiedad.
              </p>
            </div>
          </Revelar>
          <Revelar>
            <h2 className="titulo-bloque">Plano esquemático</h2>
            <div className="plano-wrap">
              <Plano dormitorios={p.dormitorios} banos={p.banos} m2={p.m2} />
            </div>
          </Revelar>
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
            <p className="mapa-nota">Vista referencial · la dirección exacta se entrega al agendar visita.</p>
          </Revelar>
        </div>

        <aside className="ficha-col-b">
          <Revelar className="ficha-cta">
            <p className="kicker">Agendar visita</p>
            <h2>¿Quién quiere verla?</h2>
            <p className="ficha-cta-sub">
              La corredora responsable coordina la visita y envía antes el dossier completo de{" "}
              {p.ref}.
            </p>
            <Formulario
              campos={[
                { nombre: "nombre", etiqueta: "Nombre", requerido: true },
                { nombre: "telefono", etiqueta: "Teléfono", tipo: "tel", requerido: true },
                { nombre: "correo", etiqueta: "Correo", tipo: "email" },
                {
                  nombre: "fecha",
                  etiqueta: "Preferencia de visita",
                  tipo: "select",
                  opciones: ["Esta semana", "Próxima semana", "Sábado morning", "A convenir"],
                },
              ]}
              asunto={`Visita ${p.ref}`}
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
              <p className="kicker">También en cartera</p>
              <h2>Propiedades similares</h2>
            </Revelar>
          </div>
          <div className="grilla-destacadas">
            {similares.map((s, i) => (
              <Revelar key={s.id} delay={i * 100} as="article">
                <Tilt className="tarjeta-prop">
                  <Enlace a={`${rutas.ficha}/${s.id}`} className="tarjeta-link" ariaLabel={s.titulo}>
                    <span className="tarjeta-foto">
                      <img src={s.fotos[0]} alt={s.titulo} loading="lazy" />
                      <span className="tarjeta-tag">{s.operacion === "venta" ? "Venta" : "Arriendo"}</span>
                    </span>
                    <span className="tarjeta-cuerpo">
                      <strong className="tarjeta-titulo">{s.titulo}</strong>
                      <span className="tarjeta-meta">
                        {s.comuna} · {s.m2} m²
                      </span>
                      <span className="tarjeta-precio">{uf(s.precioUF)}</span>
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
