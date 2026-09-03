import React, { useState, useId, useMemo } from 'react';
import { AreaChart, BarChart3, TrendingUp, Sparkles, Smartphone, Monitor, Layers, ArrowUpRight } from 'lucide-react';
import { ChartDataPoint } from '../../data/crmMockData';

interface CrmAnalyticsChartProps {
  data7d: ChartDataPoint[];
  data30d: ChartDataPoint[];
}

type MetricType = 'visits' | 'whatsappClicks' | 'conversions';
type ChartStyle = 'area' | 'bar' | 'step';

export const CrmAnalyticsChart: React.FC<CrmAnalyticsChartProps> = ({ data7d, data30d }) => {
  const [period, setPeriod] = useState<'7d' | '30d'>('7d');
  const [metric, setMetric] = useState<MetricType>('visits');
  const [chartStyle, setChartStyle] = useState<ChartStyle>('area');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const gradientId = useId();
  const glowFilterId = useId();
  const activeData = period === '7d' ? data7d : data30d;

  const values = activeData.map((d) => d[metric]);
  const maxValue = Math.max(...values, 10);
  const minValue = 0;

  // Prior period benchmark (simulated previous week/month: ~82% - 90% of current with slight variance)
  const priorValues = useMemo(() => {
    return values.map((val, i) => Math.max(0, Math.round(val * (0.78 + ((i * 7) % 15) * 0.01))));
  }, [values]);

  const totalPeriodValue = useMemo(() => {
    return values.reduce((acc, curr) => acc + curr, 0);
  }, [values]);

  const priorTotalValue = useMemo(() => {
    return priorValues.reduce((acc, curr) => acc + curr, 0);
  }, [priorValues]);

  const deltaPercentage = useMemo(() => {
    if (priorTotalValue === 0) return 14.8;
    return Number((((totalPeriodValue - priorTotalValue) / priorTotalValue) * 100).toFixed(1));
  }, [totalPeriodValue, priorTotalValue]);

  const averageValue = useMemo(() => {
    return Math.round(totalPeriodValue / (values.length || 1));
  }, [totalPeriodValue, values.length]);

  // Find peak day
  const peakIndex = useMemo(() => {
    let max = -1;
    let idx = 0;
    values.forEach((v, i) => {
      if (v > max) {
        max = v;
        idx = i;
      }
    });
    return idx;
  }, [values]);

  // Chart dimensions
  const width = 860;
  const height = 280;
  const paddingX = 48;
  const paddingTop = 36;
  const paddingBottom = 46;
  const innerWidth = width - paddingX * 2;
  const innerHeight = height - paddingTop - paddingBottom;

  // Average Y position
  const avgY = paddingTop + innerHeight - ((averageValue - minValue) / (maxValue - minValue)) * innerHeight;

  // Active Points Coordinates
  const points = useMemo(() => {
    return activeData.map((d, i) => {
      const x = paddingX + (i / (activeData.length - 1)) * innerWidth;
      const y = paddingTop + innerHeight - ((d[metric] - minValue) / (maxValue - minValue)) * innerHeight;
      return { x, y, data: d, index: i, priorVal: priorValues[i] };
    });
  }, [activeData, metric, minValue, maxValue, innerWidth, innerHeight, paddingX, paddingTop, priorValues]);

  // Prior Points Coordinates (for comparison curve)
  const priorPoints = useMemo(() => {
    return priorValues.map((val, i) => {
      const x = paddingX + (i / (priorValues.length - 1)) * innerWidth;
      const y = paddingTop + innerHeight - ((val - minValue) / (maxValue - minValue)) * innerHeight;
      return { x, y, val };
    });
  }, [priorValues, minValue, maxValue, innerWidth, innerHeight, paddingX, paddingTop]);

  // Smooth Bezier spline generator (Catmull-Rom like cubic interpolation)
  const { pathD, areaD, priorPathD, stepPathD, stepAreaD } = useMemo(() => {
    if (points.length < 2) {
      return { pathD: '', areaD: '', priorPathD: '', stepPathD: '', stepAreaD: '' };
    }

    // 1. Spline path
    let pD = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpX = curr.x + (next.x - curr.x) / 2;
      pD += ` C ${cpX},${curr.y} ${cpX},${next.y} ${next.x},${next.y}`;
    }
    const aD = `${pD} L ${points[points.length - 1].x},${height - paddingBottom} L ${points[0].x},${height - paddingBottom} Z`;

    // 2. Prior period spline
    let priorD = `M ${priorPoints[0].x},${priorPoints[0].y}`;
    for (let i = 0; i < priorPoints.length - 1; i++) {
      const curr = priorPoints[i];
      const next = priorPoints[i + 1];
      const cpX = curr.x + (next.x - curr.x) / 2;
      priorD += ` C ${cpX},${curr.y} ${cpX},${next.y} ${next.x},${next.y}`;
    }

    // 3. Step path (Stepped area like Linear / Datadog)
    let sD = `M ${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      sD += ` H ${next.x} V ${next.y}`;
    }
    const sAD = `${sD} L ${points[points.length - 1].x},${height - paddingBottom} L ${points[0].x},${height - paddingBottom} Z`;

    return { pathD: pD, areaD: aD, priorPathD: priorD, stepPathD: sD, stepAreaD: sAD };
  }, [points, priorPoints, height, paddingBottom]);

  const hoveredPoint = hoverIndex !== null && hoverIndex >= 0 && hoverIndex < points.length ? points[hoverIndex] : null;

  const metricMeta: Record<MetricType, { label: string; stroke: string; glow: string; fill: string; unit: string }> = {
    visits: {
      label: 'Visitas Web',
      stroke: '#09090B',
      glow: 'rgba(9, 9, 11, 0.25)',
      fill: '#09090B',
      unit: 'visitas únicas',
    },
    whatsappClicks: {
      label: 'Clics en WhatsApp',
      stroke: '#059669',
      glow: 'rgba(5, 150, 105, 0.35)',
      fill: '#10B981',
      unit: 'inicios de conversación',
    },
    conversions: {
      label: 'Leads Cualificados',
      stroke: '#4F46E5',
      glow: 'rgba(79, 70, 229, 0.35)',
      fill: '#6366F1',
      unit: 'formularios enviados',
    },
  };

  const currentTheme = metricMeta[metric];

  // Tooltip position clamped
  const tooltipXPercent = hoveredPoint ? (hoveredPoint.x / width) * 100 : 0;
  const isRightEdge = hoveredPoint ? hoveredPoint.x > width * 0.72 : false;
  const isLeftEdge = hoveredPoint ? hoveredPoint.x < width * 0.28 : false;

  const barWidth = period === '7d' ? 38 : 14;

  return (
    <div className="rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-7 shadow-xs">
      {/* 1. Header: Metric Selector Tabs with Real-time Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-6 border-b border-zinc-100">
        {(['visits', 'whatsappClicks', 'conversions'] as MetricType[]).map((m) => {
          const isSelected = metric === m;
          const meta = metricMeta[m];
          const tabTotal = activeData.reduce((acc, curr) => acc + curr[m], 0);

          return (
            <button
              key={m}
              type="button"
              onClick={() => setMetric(m)}
              className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? 'border-zinc-950 bg-zinc-50/70 ring-1 ring-zinc-950/10 shadow-xs'
                  : 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:bg-zinc-50/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className={`font-semibold transition-colors ${isSelected ? 'text-zinc-950' : 'text-zinc-500'}`}>
                  {meta.label}
                </span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                  <ArrowUpRight className="h-3 w-3" />
                  {m === 'visits' ? '+14.8%' : m === 'whatsappClicks' ? '+22.4%' : '+18.9%'}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 tabular-nums">
                  {tabTotal.toLocaleString('es-CL')}
                </span>
                <span className="text-[11px] text-zinc-400 font-normal">
                  {period === '7d' ? 'esta semana' : 'en 30 días'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 2. Chart Sub-Controls Bar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          {/* Active legend */}
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: currentTheme.stroke }} />
            <span className="font-medium text-zinc-800">
              {hoveredPoint ? `${hoveredPoint.data.label}: ${hoveredPoint.data[metric].toLocaleString('es-CL')}` : currentTheme.label}
            </span>
          </div>

          {/* Prior period reference indicator */}
          <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
            <span className="inline-block w-4 border-b-2 border-dashed border-zinc-300" />
            <span>Período anterior</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
            <span>Promedio: <strong className="text-zinc-700">{averageValue}/día</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Chart Style Switcher (Area / Bar / Step) */}
          <div className="inline-flex rounded-lg border border-zinc-200/90 bg-zinc-50 p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => setChartStyle('area')}
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 transition-all ${
                chartStyle === 'area' ? 'bg-white font-semibold text-zinc-950 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Curva suave spline"
            >
              <AreaChart className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Suave</span>
            </button>
            <button
              type="button"
              onClick={() => setChartStyle('bar')}
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 transition-all ${
                chartStyle === 'bar' ? 'bg-white font-semibold text-zinc-950 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Columnas redondeadas"
            >
              <BarChart3 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Barras</span>
            </button>
            <button
              type="button"
              onClick={() => setChartStyle('step')}
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 transition-all ${
                chartStyle === 'step' ? 'bg-white font-semibold text-zinc-950 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Escalonado lineal"
            >
              <Layers className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Escalón</span>
            </button>
          </div>

          {/* Period Range Switcher (7D vs 30D) */}
          <div className="inline-flex rounded-lg border border-zinc-200/90 bg-zinc-50 p-0.5 shadow-2xs font-mono font-medium">
            <button
              type="button"
              onClick={() => setPeriod('7d')}
              className={`rounded-md px-2.5 py-1 transition-all ${
                period === '7d' ? 'bg-white font-bold text-zinc-950 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              7D
            </button>
            <button
              type="button"
              onClick={() => setPeriod('30d')}
              className={`rounded-md px-2.5 py-1 transition-all ${
                period === '30d' ? 'bg-white font-bold text-zinc-950 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              30D
            </button>
          </div>
        </div>
      </div>

      {/* 3. SVG Canvas Workspace with Vercel/Linear Laser Tracking */}
      <div className="relative mt-6">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible cursor-crosshair select-none"
          onMouseLeave={() => setHoverIndex(null)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const mouseX = ((e.clientX - rect.left) / rect.width) * width;
            let closestIdx = 0;
            let closestDist = Infinity;
            points.forEach((p, idx) => {
              const dist = Math.abs(p.x - mouseX);
              if (dist < closestDist) {
                closestDist = dist;
                closestIdx = idx;
              }
            });
            setHoverIndex(closestIdx);
          }}
        >
          <defs>
            {/* Multi-stop Vercel Area Gradient */}
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={currentTheme.fill} stopOpacity="0.22" />
              <stop offset="45%" stopColor={currentTheme.fill} stopOpacity="0.08" />
              <stop offset="100%" stopColor={currentTheme.fill} stopOpacity="0.0" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id={glowFilterId} x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor={currentTheme.glow} />
            </filter>
          </defs>

          {/* Horizontal Grid guidelines */}
          {[0, 0.25, 0.5, 0.75].map((ratio) => {
            const y = paddingTop + innerHeight * ratio;
            const labelVal = Math.round(maxValue - ratio * maxValue);
            return (
              <g key={ratio}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#F4F4F5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingX - 12}
                  y={y + 3.5}
                  textAnchor="end"
                  fontSize="10"
                  fill="#A1A1AA"
                  className="font-mono tabular-nums"
                >
                  {labelVal}
                </text>
              </g>
            );
          })}

          {/* Average Baseline Reference */}
          <g>
            <line
              x1={paddingX}
              y1={avgY}
              x2={width - paddingX}
              y2={avgY}
              stroke="#D4D4D8"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
            <text
              x={width - paddingX + 8}
              y={avgY + 3}
              fontSize="9"
              fill="#A1A1AA"
              className="font-mono font-medium"
            >
              avg
            </text>
          </g>

          {/* Baseline X-axis */}
          <line
            x1={paddingX}
            y1={height - paddingBottom}
            x2={width - paddingX}
            y2={height - paddingBottom}
            stroke="#E4E4E7"
            strokeWidth="1"
          />

          {/* Prior Period Benchmark (Subtle dotted line) */}
          <path
            d={priorPathD}
            fill="none"
            stroke="#A1A1AA"
            strokeWidth="1.6"
            strokeDasharray="3 3"
            strokeOpacity="0.65"
          />

          {/* MODE 1: AREA (Smooth Spline) */}
          {chartStyle === 'area' && (
            <>
              <path d={areaD} fill={`url(#${gradientId})`} />
              <path
                d={pathD}
                fill="none"
                stroke={currentTheme.stroke}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={`url(#${glowFilterId})`}
              />
            </>
          )}

          {/* MODE 2: STEP (Linear / Datadog Stepped Area) */}
          {chartStyle === 'step' && (
            <>
              <path d={stepAreaD} fill={`url(#${gradientId})`} />
              <path
                d={stepPathD}
                fill="none"
                stroke={currentTheme.stroke}
                strokeWidth="2.4"
                filter={`url(#${glowFilterId})`}
              />
            </>
          )}

          {/* MODE 3: BARS (Vercel Columns) */}
          {chartStyle === 'bar' && (
            <g>
              {points.map((p, idx) => {
                const isHovered = hoveredPoint && hoveredPoint.index === idx;
                const barHeight = height - paddingBottom - p.y;
                return (
                  <rect
                    key={idx}
                    x={p.x - barWidth / 2}
                    y={p.y}
                    width={barWidth}
                    height={Math.max(barHeight, 2)}
                    rx={barWidth > 18 ? 4 : 2}
                    fill={isHovered ? currentTheme.stroke : '#E4E4E7'}
                    className="transition-colors duration-150"
                  />
                );
              })}
            </g>
          )}

          {/* Peak Point Pin Marker */}
          {points[peakIndex] && (
            <g transform={`translate(${points[peakIndex].x}, ${points[peakIndex].y - 12})`}>
              <rect
                x="-36"
                y="-18"
                width="72"
                height="18"
                rx="9"
                fill="#18181B"
                className="shadow-sm"
              />
              <text
                x="0"
                y="-6"
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill="#FFFFFF"
                className="font-mono"
              >
                ★ Pico {values[peakIndex]}
              </text>
            </g>
          )}

          {/* Laser Crosshair and Target Anchor (Active Hover) */}
          {hoveredPoint && (
            <g>
              {/* Vertical laser guideline */}
              <line
                x1={hoveredPoint.x}
                y1={paddingTop}
                x2={hoveredPoint.x}
                y2={height - paddingBottom}
                stroke="#71717A"
                strokeWidth="1"
                strokeDasharray="2 3"
              />

              {/* Concentric Glow Target */}
              <circle
                cx={hoveredPoint.x}
                cy={hoveredPoint.y}
                r="10"
                fill={currentTheme.fill}
                fillOpacity="0.16"
              />
              <circle
                cx={hoveredPoint.x}
                cy={hoveredPoint.y}
                r="5.5"
                fill={currentTheme.fill}
                fillOpacity="0.32"
              />
              <circle
                cx={hoveredPoint.x}
                cy={hoveredPoint.y}
                r="3.5"
                fill="#FFFFFF"
                stroke={currentTheme.stroke}
                strokeWidth="2.5"
              />
            </g>
          )}

          {/* X Axis Date Labels */}
          {points.map((p, idx) => {
            if (period === '30d' && idx % 5 !== 0 && idx !== points.length - 1) return null;
            const isSelected = hoveredPoint && hoveredPoint.data.date === p.data.date;

            return (
              <text
                key={idx}
                x={p.x}
                y={height - 16}
                textAnchor="middle"
                fontSize="11"
                fill={isSelected ? '#09090B' : '#71717A'}
                fontWeight={isSelected ? '600' : '500'}
                className="font-mono transition-colors"
              >
                {p.data.label}
              </text>
            );
          })}
        </svg>

        {/* 4. Floating Glass Tooltip Card */}
        {hoveredPoint && (
          <div
            className="pointer-events-none absolute z-20 rounded-xl border border-zinc-800 bg-zinc-950/95 px-4 py-3 text-xs text-white shadow-2xl backdrop-blur-md transition-all"
            style={{
              left: `${tooltipXPercent}%`,
              top: '8px',
              transform: isRightEdge
                ? 'translate(-105%, 0)'
                : isLeftEdge
                  ? 'translate(5%, 0)'
                  : 'translate(-50%, 0)',
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs font-semibold text-zinc-300">
                {hoveredPoint.data.label}
              </span>
              <span className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                {currentTheme.label}
              </span>
            </div>

            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-mono text-xl font-bold tabular-nums text-white">
                {hoveredPoint.data[metric].toLocaleString('es-CL')}
              </span>
              <span className="text-[11px] text-zinc-400">{currentTheme.unit}</span>
            </div>

            {/* Comparison with prior period */}
            <div className="mt-2.5 flex items-center justify-between gap-3 border-t border-zinc-800/90 pt-2 text-[10px] font-mono">
              <div className="flex items-center gap-1 text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span>Semana previa: {hoveredPoint.priorVal}</span>
              </div>
              <span className="text-emerald-400 font-semibold">
                +{Number((((hoveredPoint.data[metric] - hoveredPoint.priorVal) / (hoveredPoint.priorVal || 1)) * 100).toFixed(0))}%
              </span>
            </div>

            {/* Mobile / Desktop Breakdown */}
            <div className="mt-1 flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
              <span>📱 Móvil: {hoveredPoint.data.mobile}</span>
              <span>💻 Desktop: {hoveredPoint.data.desktop}</span>
            </div>
          </div>
        )}
      </div>

      {/* 5. Bottom Insights Bar (Intelligence Metrics) */}
      <div className="mt-5 pt-4 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-600">
          <Smartphone className="h-4 w-4 text-zinc-400 shrink-0" />
          <div>
            <div className="text-[10px] font-mono uppercase text-zinc-400">Tráfico Móvil</div>
            <div className="font-mono font-bold text-zinc-950">76.2% de visitas</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-zinc-600">
          <Monitor className="h-4 w-4 text-zinc-400 shrink-0" />
          <div>
            <div className="text-[10px] font-mono uppercase text-zinc-400">Escritorio</div>
            <div className="font-mono font-bold text-zinc-950">23.8% de visitas</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-zinc-600">
          <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
          <div>
            <div className="text-[10px] font-mono uppercase text-zinc-400">Crecimiento</div>
            <div className="font-mono font-bold text-emerald-700">+{deltaPercentage}% vs previo</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-zinc-600">
          <Sparkles className="h-4 w-4 text-amber-500 shrink-0" />
          <div>
            <div className="text-[10px] font-mono uppercase text-zinc-400">Pico Semanal</div>
            <div className="font-mono font-bold text-zinc-950">Martes (740)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
