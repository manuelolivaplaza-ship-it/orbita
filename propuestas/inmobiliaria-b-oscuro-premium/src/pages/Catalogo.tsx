import { useMemo, useState } from "react";
import { Revelar, Tilt } from "../components/widgets";
import { Enlace } from "../lib/router";
import { propiedades, comunas, rutas, etiquetas } from "../lib/datos";

const uf = (n: number) => n.toLocaleString("es-CL") + " UF";

export function Catalogo() {
  const [operacion, setOperacion] = useState<"todas" | "venta" | "arriendo">("todas");
  const [tipo, setTipo] = useState("todas");
  const [comuna, setComuna] = useState("todas");
  const [minDorm, setMinDorm] = useState(0);
  const [orden, setOrden] = useState("destacadas");

  const tipos = useMemo(() => [...new Set(propiedades.map((p) => p.tipo))], []);

  const lista = useMemo(() => {
    let r = propiedades.filter(
      (p) =>
        (operacion === "todas" || p.operacion === operacion) &&
        (tipo === "todas" || p.tipo === tipo) &&
        (comuna === "todas" || p.comuna === comuna) &&
        p.dormitorios >= minDorm
    );
    if (orden === "precio-desc") r = [...r].sort((a, b) => b.precioUF - a.precioUF);
    if (orden === "precio-asc") r = [...r].sort((a, b) => a.precioUF - b.precioUF);
    if (orden === "m2") r = [...r].sort((a, b) => b.m2 - a.m2);
    if (orden === "destacadas") r = [...r].sort((a, b) => Number(b.destacada ?? false) - Number(a.destacada ?? false));
    return r;
  }, [operacion, tipo, comuna, minDorm, orden]);

  return (
    <section className="seccion pagina">
      <header className="pagina-cab">
        <p className="kicker">{etiquetas.catalogo}</p>
        <h1>
          {lista.length} {lista.length === 1 ? etiquetas.catalogoUno.toLowerCase() : etiquetas.fichaPlural} en cartera
        </h1>
        <p className="seccion-sub">
          Cada ficha se publica con rol de avalúo, gastos comunes reales y plano acotado. Las visitas
          se agendan con la corredora responsable de cada propiedad.
        </p>
      </header>

      <div className="filtros" role="group" aria-label="Filtros de búsqueda">
        <div className="filtro-grupo" aria-label="Operación">
          {(["todas", "venta", "arriendo"] as const).map((op) => (
            <button
              key={op}
              type="button"
              className={"filtro-pill" + (operacion === op ? " activa" : "")}
              onClick={() => setOperacion(op)}
            >
              {op === "todas" ? "Todas" : op === "venta" ? "Venta" : "Arriendo"}
            </button>
          ))}
        </div>
        <label className="filtro">
          <span>Tipo</span>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="todas">Todos</option>
            {tipos.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="filtro">
          <span>Comuna</span>
          <select value={comuna} onChange={(e) => setComuna(e.target.value)}>
            <option value="todas">Todas</option>
            {[...new Set(propiedades.map((p) => p.comuna))].sort().map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="filtro">
          <span>Dormitorios</span>
          <select value={minDorm} onChange={(e) => setMinDorm(Number(e.target.value))}>
            <option value={0}>Cualquiera</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </label>
        <label className="filtro">
          <span>Ordenar</span>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="destacadas">Destacadas</option>
            <option value="precio-desc">Mayor precio</option>
            <option value="precio-asc">Menor precio</option>
            <option value="m2">Más m²</option>
          </select>
        </label>
        <p className="filtro-comunas" aria-hidden="true">
          {comunas.slice(0, 4).join(" · ")}…
        </p>
      </div>

      {lista.length === 0 ? (
        <div className="vacio">
          <p>No hay propiedades con esos filtros hoy.</p>
          <button
            type="button"
            className="btn btn-sec"
            onClick={() => {
              setOperacion("todas");
              setTipo("todas");
              setComuna("todas");
              setMinDorm(0);
              setOrden("destacadas");
            }}
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="grilla-catalogo">
          {lista.map((p, i) => (
            <Revelar key={p.id} delay={(i % 3) * 90} as="article">
              <Tilt className="tarjeta-prop">
                <Enlace a={`${rutas.ficha}/${p.id}`} className="tarjeta-link" ariaLabel={p.titulo}>
                  <span className="tarjeta-foto">
                    <img src={p.fotos[0]} alt={p.titulo} loading="lazy" />
                    <span className="tarjeta-tag">{p.operacion === "venta" ? "Venta" : "Arriendo"}</span>
                    {p.destacada && <span className="tarjeta-estrella">Destacada</span>}
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
      )}
    </section>
  );
}
