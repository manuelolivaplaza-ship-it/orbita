export function FichaAltamar() {
  return (
    <section id="ficha-altamar" className="section-ficha">
      <div className="grid">
        <div className="ficha-header">
          <p className="ficha-kicker">FICHA EJEMPLO · 2D REÑACA VICTORIA · PISO 9</p>
          <h2 className="ficha-h2">Depto 2D que se arrienda solo, pero lo vendemos con números de niebla y cobre</h2>
          <p className="ficha-intro">
            No es el más barato de Reñaca. Es el que tiene gastos al día, sin multas y con visita sin apuro a las 20:30 con la avenida del mar encendida abajo.
          </p>
        </div>

        <div className="ficha-layout">
          <div className="ficha-media-col">
            <div className="ficha-principal-wrap">
              <img
                src="/media/altamar-interior-16x9.png"
                alt="Interior vacío luz noche costera Reñaca Victoria"
                className="ficha-principal-img"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  console.warn("[ALTAMAR] falta media: altamar-interior-16x9.png");
                  const wrap = img.parentElement;
                  if (wrap && !wrap.querySelector(".media-falta")) {
                    const d = document.createElement("div");
                    d.className = "media-falta";
                    d.setAttribute("data-falta", "altamar-interior-16x9.png");
                    d.textContent = "falta: altamar-interior-16x9.png";
                    (d as HTMLElement).style.cssText =
                      "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.82rem 'Source Serif 4',serif";
                    wrap.appendChild(d);
                  }
                }}
              />
            </div>
            <p className="ficha-caption">Interior vacío · luz noche costera · Reñaca Victoria</p>
            <div className="ficha-thumbs">
              <div className="ficha-thumb-wrap">
                <img
                  src="/media/altamar-tile-01-1x1.png"
                  alt="Detalle bronce náutico con pátina salina"
                  className="ficha-thumb-img"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    console.warn("[ALTAMAR] falta media: altamar-tile-01-1x1.png");
                    const wrap = img.parentElement;
                    if (wrap && !wrap.querySelector(".media-falta")) {
                      const d = document.createElement("div");
                      d.className = "media-falta";
                      d.setAttribute("data-falta", "altamar-tile-01-1x1.png");
                      d.textContent = "falta: altamar-tile-01-1x1.png";
                      (d as HTMLElement).style.cssText =
                        "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.72rem 'Source Serif 4',serif";
                      wrap.appendChild(d);
                    }
                  }}
                />
              </div>
              <div className="ficha-thumb-wrap">
                <img
                  src="/media/altamar-tile-02-1x1.png"
                  alt="Detalle carta náutica plegada con líneas batimétricas"
                  className="ficha-thumb-img"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    console.warn("[ALTAMAR] falta media: altamar-tile-02-1x1.png");
                    const wrap = img.parentElement;
                    if (wrap && !wrap.querySelector(".media-falta")) {
                      const d = document.createElement("div");
                      d.className = "media-falta";
                      d.setAttribute("data-falta", "altamar-tile-02-1x1.png");
                      d.textContent = "falta: altamar-tile-02-1x1.png";
                      (d as HTMLElement).style.cssText =
                        "position:absolute;inset:0;display:grid;place-items:center;background:#122836;border:1px solid var(--linea);color:var(--muted);font:500 0.72rem 'Source Serif 4',serif";
                      wrap.appendChild(d);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="ficha-data-col">
            <div className="ficha-tabla">
              <div className="ficha-fila">
                <span className="ficha-campo">Superficie útil</span>
                <span className="ficha-valor">64m² + 9m² terraza con vista mar lateral</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Dormitorios / baños</span>
                <span className="ficha-valor">2D · 2B · 1E (bodega subterránea)</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Orientación / piso</span>
                <span className="ficha-valor">Nor-poniente · piso 9 de 14 · vista mar lateral</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Antigüedad</span>
                <span className="ficha-valor">2017 · sin ampliaciones · termopanel + DVH</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Gastos comunes</span>
                <span className="ficha-valor">$146.900 (abr 2026, boleta a la vista en visita)</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Contribuciones</span>
                <span className="ficha-valor">$54.800 trimestral aprox.</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Precio venta</span>
                <span className="ficha-valor">UF 5.800 · $227.244.000</span>
              </div>
              <div className="ficha-fila">
                <span className="ficha-campo">Precio arriendo alternativo</span>
                <span className="ficha-valor">UF 23/mes · $901.140/mes (si no se vende en 45 días)</span>
              </div>
            </div>

            <div className="ficha-banda">
              <span className="ficha-pill">
                <span className="prop-dot" style={{ background: "var(--accent-2)" }} aria-hidden="true" /> Gastos al día ✔
              </span>
              <span className="ficha-pill">
                <span className="prop-dot" style={{ background: "var(--accent-2)" }} aria-hidden="true" /> Sin multas copropiedad
              </span>
              <span className="ficha-pill">
                <span className="prop-dot" style={{ background: "var(--accent-2)" }} aria-hidden="true" /> Visita hoy 19:00 y 20:30 libre
              </span>
            </div>

            <div className="ficha-ctas">
              <a href="#visita-nocturna" className="ficha-cta-primary">
                Agendar visita para este depto
              </a>
              <a href="https://wa.me/56974263188?text=Hola%20ALTAMAR%2C%20quiero%20la%20ficha%20PDF%20del%202D%20Re%C3%B1aca%20Victoria%20piso%209.%20%C2%BFMe%20la%20env%C3%ADas%3F" target="_blank" rel="noopener noreferrer" className="ficha-cta-ghost">
                Pedir ficha PDF por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
