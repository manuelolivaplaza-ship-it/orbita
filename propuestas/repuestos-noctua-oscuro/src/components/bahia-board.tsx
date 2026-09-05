import { bahiaTonight } from "@/data/catalog";

export function BahiaBoard() {
  return (
    <div className="border border-line bg-nave">
      <div className="flex items-end justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
        <div>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mute">
            Tablero de bahía
          </p>
          <p className="mt-1 font-display text-2xl font-medium tracking-wide text-face">
            Esta madrugada
          </p>
        </div>
        <p className="flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-face">
          <span className="lamp" data-on="true" />
          En picking
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-line font-mono text-[0.58rem] uppercase tracking-[0.18em] text-mute">
              <th className="px-5 py-3 font-medium md:px-6">Hora</th>
              <th className="px-3 py-3 font-medium">Patente</th>
              <th className="px-3 py-3 font-medium">Vehículo</th>
              <th className="px-3 py-3 font-medium">Pieza</th>
              <th className="px-5 py-3 font-medium md:px-6">Destino</th>
            </tr>
          </thead>
          <tbody>
            {bahiaTonight.map((job) => (
              <tr key={`${job.plate}-${job.piece}`} className="border-b border-line last:border-0">
                <td className="px-5 py-3.5 font-mono text-[0.72rem] tracking-wide text-sodium md:px-6">
                  {job.hora}
                </td>
                <td className="px-3 py-3.5 font-mono text-[0.72rem] tracking-[0.12em]">
                  {job.plate}
                </td>
                <td className="px-3 py-3.5 text-sm">{job.vehicle}</td>
                <td className="px-3 py-3.5 text-sm">{job.piece}</td>
                <td className="px-5 py-3.5 text-sm text-mute md:px-6">
                  {job.dest}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
