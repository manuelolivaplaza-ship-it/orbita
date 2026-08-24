import { useMemo, useState } from "react";
import { Revelar, Tilt } from "../components/widgets";
import { Enlace } from "../lib/router";
import { propiedades, op, linea, rutas, etiquetas } from "../lib/datos";

export function Catalogo() {
  const [estado, setEstado] = useState<"todas" | "venta" | "arriendo">("todas");
  const [tipo, setTipo] = useState("todas");
  const [comuna, setComuna] = useState("todas");
  const [minM2, setMinM2] = useState(0);
  const [orden, setOrden] = useState("anio");

  const tipos = useMemo(() => [...new Set(propiedades.map((p) => p.tipo))], []);

  const lista = useMemo(() => {
    let r = propiedades.filter(
      (p) =>
        (estado === "todas" || p.operacion === estado) &&
        (tipo === "todas" || p.tipo === tipo) &&
        (comuna === "todas" || p.comuna === comuna) &&
        p.m2 >= minM2
    );
    if (orden === "anio") r = [...r].sort((a, b) => a.anio - b.anio);
    if (orden === "m2") r = [...r].sort((a, b) => b.m2 - a.m2);
    if (orden === "destacadas") r = [...r].sort((a, b) => Number(b.destacada ?? false) - Number(a.destacada ?? false));
    return r;
  }, [estado, tipo, comuna, minM2, orden]);

  return (
    <section className="seccion pagina">
      <header className="pagina-cab">
        <p className="kicker">{etiquetas.catalogo}</p>
        <h1>
          {lista.length} {lista.length === 1 ? etiquetas.catalogoUno.toLowerCase() : etiquetas.fichaPlural} del estudio
        </h1>
        <p className="seccion-sub">
          Cada proyecto se documenta con ficha técnica, plantas y presupuesto referencial. La
          ubicación exacta se comparte por privacidad de los mandantes.
        </p>
      </header>

      <div className="filtros" role="group" aria-label="Filtros de proyectos">
        <div className="filtro-grupo" aria-label="Estado">
          {(["todas", "venta", "arriendo"] as const).map((e) => (
            <button
              key={e}
              type="button"
              className={"filtro-pill" + (estado === e ? " activa" : "")}
              onClick={() => setEstado(e)}
            >
              {e === "todas" ? "Todos" : op(e)}
            </button>
          ))}
        </div>
        <label className="filtro">
          <span>Formato</span>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="todas">Todas</option>
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
          <span>Valor desde</span>
          <select value={minM2} onChange={(e) => setMinM2(Number(e.target.value))}>
            <option value={0}>Cualquiera</option>
            <option value={50}>$50.000</option>
            <option value={100}>$100.000</option>
            <option value={250}>$250.000</option>
          </select>
        </label>
        <label className="filtro">
          <span>Ordenar</span>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="anio">Menor duración</option>
            <option value="m2">Mayor precio</option>
            <option value="destacadas">Destacados</option>
          </select>
        </label>
      </div>

      {lista.length === 0 ? (
        <div className="vacio">
          <p>No hay proyectos con esos filtros.</p>
          <button
            type="button"
            className="btn btn-sec"
            onClick={() => {
              setEstado("todas");
              setTipo("todas");
              setComuna("todas");
              setMinM2(0);
              setOrden("anio");
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
                    <span className="tarjeta-tag">{op(p.operacion)}</span>
                    {p.destacada && <span className="tarjeta-estrella">Destacado</span>}
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
      )}
    </section>
  );
}
