import React from 'react';
import { TrendingUp, Users, DollarSign, Gauge, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CompanyMetrics } from '../../data/crmMockData';
import { formatClp } from '../../lib/crmStore';

interface CrmMetricsGridProps {
  metrics: CompanyMetrics;
}

export const CrmMetricsGrid: React.FC<CrmMetricsGridProps> = ({ metrics }) => {
  // Sparkline generator with smooth SVG path and gradient area
  const generateSparkline = (values: number[], strokeColor: string, gradientId: string) => {
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const width = 100;
    const height = 30;

    const coords = values.map((val, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - 4 - ((val - min) / range) * (height - 8);
      return { x, y };
    });

    let pathD = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const curr = coords[i];
      const next = coords[i + 1];
      const cpX = (curr.x + next.x) / 2;
      pathD += ` C ${cpX} ${curr.y}, ${cpX} ${next.y}, ${next.x} ${next.y}`;
    }

    const areaD = `${pathD} L ${coords[coords.length - 1].x} ${height} L ${coords[0].x} ${height} Z`;
    const lastCoord = coords[coords.length - 1];

    return (
      <svg className="h-7 w-20 overflow-visible" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill={`url(#${gradientId})`} />
        <path
          d={pathD}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={lastCoord.x} cy={lastCoord.y} r="2.5" fill={strokeColor} />
      </svg>
    );
  };

  const visitsData = metrics.chartData7d.map((p) => p.visits);
  const leadsData = metrics.chartData7d.map((p) => p.conversions);
  const clicksData = metrics.chartData7d.map((p) => p.whatsappClicks);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* 1. Visitas Totales */}
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300 hover:shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span className="group-hover:text-zinc-900 transition-colors">Visitas Totales (30d)</span>
          <Users className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold tracking-tight text-zinc-950 tabular-nums">
            {metrics.totalVisits30d.toLocaleString('es-CL')}
          </span>
          <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
            <ArrowUpRight className="h-3 w-3" />
            +{metrics.visitsDeltaPercent}%
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
          <span>{metrics.uniqueVisitors30d.toLocaleString('es-CL')} únicas</span>
          {generateSparkline(visitsData, '#10B981', 'spark-visits')}
        </div>
      </div>

      {/* 2. Prospectos / Leads */}
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300 hover:shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span className="group-hover:text-zinc-900 transition-colors">Prospectos Capturados</span>
          <TrendingUp className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold tracking-tight text-zinc-950 tabular-nums">
            {metrics.leadsCount}
          </span>
          <span className="inline-flex items-center text-xs font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md">
            <ArrowUpRight className="h-3 w-3" />
            +{metrics.conversionDeltaPercent}%
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span>Conversión:</span>
            <span className="font-mono font-semibold text-zinc-950 tabular-nums">{metrics.conversionRate}%</span>
          </div>
          {generateSparkline(leadsData, '#6366F1', 'spark-leads')}
        </div>
      </div>

      {/* 3. Valor del Pipeline */}
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300 hover:shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span className="group-hover:text-zinc-900 transition-colors">Valor en Oportunidades</span>
          <DollarSign className="h-4 w-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold tracking-tight text-zinc-950 tabular-nums">
            {formatClp(metrics.pipelineValueClp)}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-500">
          <span className="font-mono text-zinc-400">~{Math.round(metrics.pipelineValueClp / 38000)} UF</span>
          {generateSparkline(clicksData, '#F59E0B', 'spark-clicks')}
        </div>
      </div>

      {/* 4. Rendimiento & Velocidad Web */}
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:border-zinc-300 hover:shadow-sm">
        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
          <span className="group-hover:text-zinc-900 transition-colors">Velocidad de Carga (LCP)</span>
          <Gauge className="h-4 w-4 text-emerald-500" />
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold tracking-tight text-emerald-600 tabular-nums">
            {metrics.loadSpeedSeconds}s
          </span>
          <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
            GRADO A+
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-500">
          <div className="flex items-center gap-1 text-emerald-600 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Google PageSpeed 100/100</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-400">Edge CDN</span>
        </div>
      </div>
    </div>
  );
};
