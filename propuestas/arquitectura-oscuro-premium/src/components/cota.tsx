export function Cota() {
  const ticks = [12, 24, 36, 48, 60, 72, 84];

  return (
    <div className="cota" aria-hidden>
      <span className="cota-line" />
      {ticks.map((top) => (
        <span key={top} className="cota-tick" style={{ top: `${top}%` }} />
      ))}
      <span className="cota-label" style={{ top: "18%" }}>
        22° S
      </span>
      <span className="cota-label" style={{ top: "46%" }}>
        33° S
      </span>
      <span className="cota-label" style={{ top: "72%" }}>
        41° S
      </span>
    </div>
  );
}
