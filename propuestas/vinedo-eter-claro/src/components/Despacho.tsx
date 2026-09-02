export function Despacho() {
  return (
    <section id="despacho-y-retiro" className="despacho" aria-label="Despacho y retiro">
      <div className="despacho__inner">
        <p className="despacho__kicker">DESPACHO Y RETIRO</p>
        <h2 className="despacho__title">Del cuartel a tu mesa. Sin bodega intermedia.</h2>
        <div className="despacho__tabla" role="table" aria-label="Tabla de despacho y retiro">
          <div className="despacho__fila" role="row">
            <span className="despacho__destino" role="cell">
              RM — Santiago y comunas
            </span>
            <span className="despacho__plazo" role="cell">
              48–72h hábiles
            </span>
            <span className="despacho__costo" role="cell">
              $3.900 · gratis sobre $70.000
            </span>
          </div>
          <div className="despacho__fila" role="row">
            <span className="despacho__destino" role="cell">
              Regiones — I a XII + RM rural
            </span>
            <span className="despacho__plazo" role="cell">
              72–96h hábiles
            </span>
            <span className="despacho__costo" role="cell">
              $6.900 · gratis sobre $110.000
            </span>
          </div>
          <div className="despacho__fila" role="row">
            <span className="despacho__destino" role="cell">
              Retiro en bodega — Casablanca, Ruta 68 km 78
            </span>
            <span className="despacho__plazo" role="cell">
              Lun–sáb 10–17h
            </span>
            <span className="despacho__costo" role="cell">
              Gratis · avisa 24h antes
            </span>
          </div>
        </div>
        <p className="despacho__micro">Despacho por Starken / Chilexpress según comuna. Embalaje de cartón con celdas. Botella rota = reposición sin costo.</p>
      </div>
    </section>
  );
}
