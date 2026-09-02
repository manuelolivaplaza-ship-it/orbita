import { useMemo, useState } from "react";

type Ficha = {
  id: string;
  comuna: string;
  tipo: "Depto" | "Casa";
  dorm: number;
  titulo: string;
  datos: string;
  uf: number;
  clp: string;
  gc: string | null;
  estado: "DISPONIBLE" | "RESERVADA";
  comunaFull: string;
};

const FICHAS: Ficha[] = [
  {
    id: "renaca-norte-1d",
    comuna: "Reñaca",
    comunaFull: "Reñaca Norte",
    tipo: "Depto",
    dorm: 1,
    titulo: "Depto 1D 36m² · Reñaca Norte",
    datos: "1D · 1B · 36m² útiles · piso 4 · vista interior",
    uf: 3950,
    clp: "$154.761.000",
    gc: "$92.400",
    estado: "DISPONIBLE",
  },
  {
    id: "renaca-victoria-2d",
    comuna: "Reñaca",
    comunaFull: "Reñaca Victoria",
    tipo: "Depto",
    dorm: 2,
    titulo: "Depto 2D 64m² · Reñaca Victoria",
    datos: "2D · 2B · 64m² útiles · piso 9 · vista mar lateral",
    uf: 5800,
    clp: "$227.244.000",
    gc: "$146.900",
    estado: "DISPONIBLE",
  },
  {
    id: "concon-bosques-3d",
    comuna: "Concón",
    comunaFull: "Bosques de Montemar",
    tipo: "Depto",
    dorm: 3,
    titulo: "Depto 3D 92m² · Bosques de Montemar",
    datos: "3D · 2B · 92m² útiles · piso 6 · vista parque",
    uf: 8200,
    clp: "$321.276.000",
    gc: "$188.300",
    estado: "DISPONIBLE",
  },
  {
    id: "vina-alvarez-2d",
    comuna: "Viña del Mar",
    comunaFull: "Álvarez",
    tipo: "Depto",
    dorm: 2,
    titulo: "Depto 2D 58m² · Álvarez",
    datos: "2D · 1B · 58m² útiles · piso 5 · orientación norte",
    uf: 5200,
    clp: "$203.736.000",
    gc: "$134.600",
    estado: "RESERVADA",
  },
  {
    id: "concon-costa-4d",
    comuna: "Concón",
    comunaFull: "Costa Montemar",
    tipo: "Casa",
    dorm: 4,
    titulo: "Casa 4D 178m² · Costa Montemar",
    datos: "4D · 3B · 178m² útiles · 2 pisos · jardín 120m²",
    uf: 13800,
    clp: "$540.684.000",
    gc: null,
    estado: "DISPONIBLE",
  },
  {
    id: "valpo-alegre-3d",
    comuna: "Valparaíso",
    comunaFull: "Cerro Alegre",
    tipo: "Depto",
    dorm: 3,
    titulo: "Depto 3D 84m² · Cerro Alegre",
    datos: "3D · 2B · 84m² útiles · piso 2 · terraza 12m²",
    uf: 6900,
    clp: "$270.342.000",
    gc: "$162.800",
    estado: "DISPONIBLE",
  },
];

export function Propiedades() {
  const [comuna, setComuna] = useState("Todos");
  const [tipo, setTipo] = useState("Todos");
  const [dorm, setDorm] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");

  const filtered = useMemo(() => {
    return FICHAS.filter((f) => {
      if (comuna !== "Todos" && f.comuna !== comuna) return false;
      if (tipo !== "Todos" && f.tipo !== tipo) return false;
      if (dorm !== "Todos" && String(f.dorm) !== dorm) return false;
      if (precio !== "Todos") {
        const limit = Number(precio);
        if (f.uf > limit) return false;
      }
      return true;
    });
  }, [comuna, tipo, dorm, precio]);

  return (
    <section id="propiedades" className="section-propiedades">
      <div className="grid">
        {/* header */}
        <div className="prop-header">
          <p className="prop-kicker">STOCK REAL · 8 PROPIEDADES HOY · BORDE COSTERO</p>
          <h2 className="prop-h2">Filtra por borde costero y ve el precio con gastos</h2>
          <p className="prop-intro">
            Todo lo publicado está disponible para visita nocturna y con papeles a la vista. Si se reserva, sale del listado en el día. Precio en UF + CLP del día.
          </p>
        </div>

        {/* barra filtros */}
        <div className="prop-filtros" role="toolbar" aria-label="Filtros de propiedades">
          <select value={comuna} onChange={(e) => setComuna(e.target.value)} aria-label="Comuna">
            <option value="Todos">Comuna · Todos</option>
            <option value="Reñaca">Reñaca</option>
            <option value="Concón">Concón</option>
            <option value="Viña del Mar">Viña del Mar</option>
            <option value="Valparaíso">Valparaíso plano</option>
          </select>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} aria-label="Tipo">
            <option value="Todos">Tipo · Todos</option>
            <option value="Depto">Depto</option>
            <option value="Casa">Casa</option>
          </select>
          <select value={dorm} onChange={(e) => setDorm(e.target.value)} aria-label="Dormitorios">
            <option value="Todos">Dorm · Todos</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select value={precio} onChange={(e) => setPrecio(e.target.value)} aria-label="Precio">
            <option value="Todos">Precio · Todos</option>
            <option value="5500">Hasta UF 5.500</option>
            <option value="8500">Hasta UF 8.500</option>
            <option value="14000">Hasta UF 14.000</option>
          </select>
          <span className="prop-contador">
            {filtered.length} propiedades · 3 con visita hoy · 2 a pasos del mar
          </span>
        </div>

        {/* mapa + grilla layout */}
        <div className="prop-layout">
          <div className="prop-mapa-col">
            <div className="prop-mapa-wrap">
              <img
                src="/media/altamar-mapa-4x3.png"
                alt="Trazado borde costero Reñaca Concón"
                className="prop-mapa-img"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  console.warn("[ALTAMAR] falta media: altamar-mapa-4x3.png");
                  const wrap = img.parentElement;
                  if (wrap && !wrap.querySelector(".media-falta")) {
                    const d = document.createElement("div");
                    d.className = "media-falta";
                    d.setAttribute("data-falta", "altamar-mapa-4x3.png");
                    d.textContent = "falta: altamar-mapa-4x3.png";
                    (d as HTMLElement).style.cssText =
                      "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.82rem 'Source Serif 4',serif";
                    wrap.appendChild(d);
                  }
                }}
              />
            </div>
            <p className="prop-mapa-caption">Trazado borde costero · Reñaca – Concón · sin pins genéricos</p>

            <aside className="prop-aside">
              <p className="prop-aside-title">¿Buscas arriendo costero?</p>
              <p className="prop-aside-text">
                Arriendo 2D desde UF 23/mes · GC incluido en ficha. Comisión 50% del mes por lado. Tasación $88.000 se abona al vender.
              </p>
              <a href="tel:+56974263188" className="prop-aside-tel">
                +56 9 7426 3188
              </a>
            </aside>
          </div>

          <div className="prop-grilla-col">
            <div className="prop-grilla">
              {filtered.map((f) => (
                <article key={f.id} className="prop-card">
                  <div className="prop-card-top">
                    <span className="prop-card-comuna">{f.comuna}</span>
                    <span className="prop-card-tipo">· {f.tipo}</span>
                    <span className="prop-card-estado">
                      <span
                        className="prop-dot"
                        style={{ background: f.estado === "DISPONIBLE" ? "var(--accent-2)" : "var(--accent)" }}
                        aria-hidden="true"
                      />
                      {f.estado}
                    </span>
                  </div>
                  <h3 className="prop-card-title">{f.titulo}</h3>
                  <p className="prop-card-datos">{f.datos}</p>
                  <div className="prop-card-precio">
                    <span className="prop-card-precio-desde">desde</span>
                    <span className="prop-card-precio-valor">UF {f.uf.toLocaleString("es-CL")} · {f.clp}</span>
                  </div>
                  <p className="prop-card-gc">
                    {f.gc ? `Gastos comunes ${f.gc} (abr 2026)` : "Sin gastos comunes · casa independiente"}
                  </p>
                  <div className="prop-card-ctas">
                    <a href="#ficha-altamar" className="prop-card-link">
                      Ver ficha →
                    </a>
                    <a href="#visita-nocturna" className="prop-card-visita">
                      Visita hoy
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="prop-empty">Sin resultados con esos filtros. Prueba ampliar comuna o precio.</p>
            )}
            <p className="prop-nota">
              Valores en UF al día; CLP referencial UF 39.180. Gastos comunes del último mes informado por copropiedad/administración. Valores referenciales; se confirman en ficha y visita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
