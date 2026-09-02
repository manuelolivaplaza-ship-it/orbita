export function EnVerde() {
  return (
    <section id="en-verde" className="section-verde">
      <div className="grid">
        <div className="verde-header">
          <p className="verde-kicker">MODALIDAD · VERDE O INMEDIATA</p>
          <h2 className="verde-h2">En verde con precio de hoy. O inmediata para visitar mañana.</h2>
          <p className="verde-intro">
            No vendemos humo de plusvalía. Precio cerrado en UF, entrega con fecha y multa por atraso. Si no te sirve esperar, hay stock inmediato a pasos del mar.
          </p>
        </div>

        <div className="verde-layout">
          <div className="verde-tabla-col">
            <div className="verde-tabla-wrap">
              <table className="verde-tabla">
                <thead>
                  <tr>
                    <th></th>
                    <th>EN VERDE</th>
                    <th>ENTREGA INMEDIATA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="verde-label">Plazo entrega</td>
                    <td>13 meses (abr 2027) · obra 72% avance</td>
                    <td>Inmediata · escritura en 30 días</td>
                  </tr>
                  <tr>
                    <td className="verde-label">Precio</td>
                    <td><span className="verde-num">UF 5.400 · $211.572.000</span> (precio verde)</td>
                    <td><span className="verde-num">UF 5.800 · $227.244.000</span></td>
                  </tr>
                  <tr>
                    <td className="verde-label">Pie</td>
                    <td>15% pie en 12 cuotas sin interés</td>
                    <td>10% pie contra promesa</td>
                  </tr>
                  <tr>
                    <td className="verde-label">Gastos comunes estimados</td>
                    <td>$142.000 (estimado 2027)</td>
                    <td>$146.900 reales (abr 2026)</td>
                  </tr>
                  <tr>
                    <td className="verde-label">Visita</td>
                    <td>Piloto + obra con casco (sábados 10:00)</td>
                    <td>Depto real hoy 19:00/20:30</td>
                  </tr>
                  <tr>
                    <td className="verde-label">Garantía</td>
                    <td>Multa 0,5 UF/día atraso · postventa 1 año</td>
                    <td>Sin multa · postventa 5 años estructura</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="verde-nota">
              No prometemos plusvalía. En verde es más barato porque esperas; inmediata es más cara porque entras mañana. Ambos con precio en UF, sin reajuste.
            </p>
          </div>

          <aside className="verde-aside">
            <h3 className="verde-aside-title">¿Y si se reserva de noche?</h3>
            <p className="verde-aside-text">
              Reserva con $500.000 contra promesa en 10 días. Si no firma, se devuelve íntegra. Nadie queda amarrado, ni de día ni de niebla.
            </p>
            <ul className="verde-checklist">
              <li><span className="verde-check" aria-hidden="true">✓</span> Promesa revisada por abogado</li>
              <li><span className="verde-check" aria-hidden="true">✓</span> Certificados al día</li>
              <li><span className="verde-check" aria-hidden="true">✓</span> Sin multa por retracto pre-promesa</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
