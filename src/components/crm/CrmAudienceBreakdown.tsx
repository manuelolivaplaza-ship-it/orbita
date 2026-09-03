import React, { useState } from 'react';
import { Smartphone, Monitor, Tablet, Globe, MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { AudienceMetric } from '../../data/crmMockData';

interface CrmAudienceBreakdownProps {
  devices: AudienceMetric[];
  channels: AudienceMetric[];
  topPages: { path: string; title: string; views: number; conversionRate: number }[];
  locations: { city: string; visits: number; percentage: number }[];
}

export const CrmAudienceBreakdown: React.FC<CrmAudienceBreakdownProps> = ({
  devices,
  channels,
  topPages,
  locations,
}) => {
  const [hoveredDevice, setHoveredDevice] = useState<string | null>(null);

  // SVG Donut Chart calculations
  const totalDeviceVisits = devices.reduce((acc, curr) => acc + curr.count, 0);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  let accumulatedAngle = 0;

  const maxViews = Math.max(...topPages.map((p) => p.views), 1);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* 1. Canales de Adquisición */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="h-4 w-4 text-zinc-500" />
              <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">Canales de Tráfico</h4>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase">30 Días</span>
          </div>

          <div className="mt-4 space-y-3.5">
            {channels.map((channel) => (
              <div key={channel.name} className="group">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors">
                    {channel.name}
                  </span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-[11px] text-zinc-400">{channel.count.toLocaleString('es-CL')}</span>
                    <span className="font-bold text-zinc-950">{channel.percentage}%</span>
                  </div>
                </div>
                <div className="h-1.5 w-full rounded-full bg-zinc-100 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 group-hover:opacity-90"
                    style={{ width: `${channel.percentage}%`, backgroundColor: channel.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Dispositivos con Donut SVG */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-zinc-500" />
              <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">Dispositivos</h4>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
              76% MÓVIL
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            {/* SVG Donut Chart */}
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
              <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="transparent"
                  stroke="#F4F4F5"
                  strokeWidth="9"
                />

                {/* Slices */}
                {devices.map((device) => {
                  const strokeDashoffset = circumference - (device.percentage / 100) * circumference;
                  const rotation = accumulatedAngle;
                  accumulatedAngle += (device.percentage / 100) * 360;

                  return (
                    <circle
                      key={device.name}
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="transparent"
                      stroke={device.color}
                      strokeWidth={hoveredDevice === device.name ? '11' : '9'}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      transform={`rotate(${rotation} 50 50)`}
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredDevice(device.name)}
                      onMouseLeave={() => setHoveredDevice(null)}
                    />
                  );
                })}
              </svg>

              {/* Donut Center text */}
              <div className="pointer-events-none absolute text-center">
                <span className="font-mono text-sm font-bold text-zinc-950">76%</span>
                <span className="block text-[9px] font-mono text-zinc-400 uppercase">iOS / Android</span>
              </div>
            </div>

            {/* Device list */}
            <div className="flex-1 space-y-2">
              {devices.map((device) => (
                <div
                  key={device.name}
                  onMouseEnter={() => setHoveredDevice(device.name)}
                  onMouseLeave={() => setHoveredDevice(null)}
                  className={`flex items-center justify-between rounded-lg p-1.5 text-xs transition-colors cursor-pointer ${
                    hoveredDevice === device.name ? 'bg-zinc-100/80' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: device.color }} />
                    <span className="text-zinc-700 font-medium">{device.name.split(' ')[0]}</span>
                  </div>
                  <span className="font-mono font-bold text-zinc-900">{device.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Páginas Más Visitadas */}
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-zinc-500" />
              <h4 className="text-xs font-semibold text-zinc-950 uppercase tracking-wider">Rendimiento por URL</h4>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase">Conversión</span>
          </div>

          <div className="mt-3.5 divide-y divide-zinc-100">
            {topPages.map((page) => {
              const relativeWidth = Math.round((page.views / maxViews) * 100);
              return (
                <div key={page.path} className="py-2.5 first:pt-0 last:pb-0 group">
                  <div className="flex items-center justify-between text-xs">
                    <div className="min-w-0 pr-2">
                      <div className="font-mono font-semibold text-zinc-950 truncate group-hover:text-zinc-700">
                        {page.path}
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate">{page.title}</div>
                    </div>
                    <div className="text-right shrink-0 font-mono">
                      <div className="font-bold text-emerald-600">{page.conversionRate}% conv.</div>
                      <div className="text-[10px] text-zinc-400">{page.views.toLocaleString('es-CL')} visitas</div>
                    </div>
                  </div>
                  {/* Micro progress bar */}
                  <div className="mt-1.5 h-1 w-full rounded-full bg-zinc-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-zinc-800 group-hover:bg-zinc-950 transition-all"
                      style={{ width: `${relativeWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Geolocation Comunas Chips */}
      <div className="rounded-2xl border border-zinc-200/80 bg-white px-5 py-3.5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-600 font-medium">
          <MapPin className="h-4 w-4 text-zinc-400" />
          <span>Distribución Geográfica Principal:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          {locations.map((loc) => (
            <span
              key={loc.city}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-zinc-700"
            >
              <span>{loc.city}</span>
              <span className="font-bold text-zinc-950">{loc.percentage}%</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
