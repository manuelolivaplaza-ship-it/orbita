export const ASSISTANTS = [
  { name: 'Sofía', sector: 'Clínica dental', prompt: '¿Agendamos tu hora?', accent: '#0E7490', initial: 'S' },
  { name: 'Mateo', sector: 'Inmobiliaria', prompt: '¿Buscas arriendo o venta?', accent: '#1D4ED8', initial: 'M' },
  { name: 'Elena', sector: 'Estudio jurídico', prompt: '¿En qué trámite te ayudo?', accent: '#92400E', initial: 'E' },
  { name: 'Lucas', sector: 'Gimnasio', prompt: '¿Quieres conocer los planes?', accent: '#B45309', initial: 'L' },
  { name: 'Valentina', sector: 'Restaurante', prompt: '¿Reservas para esta noche?', accent: '#9F1239', initial: 'V' },
  { name: 'Andrés', sector: 'Taller', prompt: '¿Agendamos la mantención?', accent: '#3F3F46', initial: 'A' },
  { name: 'Camila', sector: 'Estética', prompt: '¿Qué tratamiento buscas?', accent: '#7E22CE', initial: 'C' },
  { name: 'Paula', sector: 'Veterinaria', prompt: '¿Tu mascota necesita hora?', accent: '#0D9488', initial: 'P' },
] as const;

export type AssistantPreview = (typeof ASSISTANTS)[number];

function AssistantChip({
  name,
  sector,
  prompt,
  accent,
  initial,
  compact = false,
}: AssistantPreview & { compact?: boolean }) {
  return (
    <div
      className={`assistant-chip flex shrink-0 items-center rounded-full border border-zinc-200/90 bg-white shadow-xs ${
        compact ? 'gap-2 py-1 pl-1 pr-2.5' : 'gap-2.5 py-1.5 pl-1.5 pr-3.5'
      }`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full font-semibold text-white ${
          compact ? 'h-6 w-6 text-[10px]' : 'h-8 w-8 text-xs'
        }`}
        style={{ backgroundColor: accent }}
        aria-hidden
      >
        {initial}
      </span>
      <span className="min-w-0 text-left">
        {!compact && (
          <span className="block text-[10px] font-medium leading-tight text-zinc-500">
            {name} · {sector}
          </span>
        )}
        <span
          className={`block font-semibold leading-tight text-[#0B0B12] ${
            compact ? 'text-[11px]' : 'text-xs'
          }`}
        >
          {prompt}
        </span>
      </span>
      {!compact && (
        <span className="ml-1 rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wide text-zinc-600">
          IA
        </span>
      )}
    </div>
  );
}

function MarqueeTrack({
  items,
  compact = false,
  duration = 38,
}: {
  items: readonly AssistantPreview[];
  compact?: boolean;
  duration?: number;
}) {
  const loop = [...items, ...items];
  return (
    <div className="assistant-marquee">
      <div
        className="assistant-marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((assistant, index) => (
          <AssistantChip
            key={`${assistant.name}-${index}`}
            {...assistant}
            compact={compact}
          />
        ))}
      </div>
    </div>
  );
}

export function AiAssistantsMarquee() {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-5 sm:p-7 shadow-xs">
      <div className="mb-5 max-w-2xl">
        <p className="text-[11px] font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-2">
          Asistente con IA, a medida
        </p>
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#0B0B12] mb-2">
          Cada sitio lleva el suyo.
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed">
          No es el mismo chat de esta página. Lo armamos con tu marca, tu tono y tu oferta:
          responde 24/7, deriva a WhatsApp o al CRM y se ve como parte de tu negocio.
        </p>
      </div>

      <div className="-mx-5 sm:-mx-7">
        <div className="px-5 sm:px-7">
          <MarqueeTrack items={ASSISTANTS} />
        </div>
      </div>
    </div>
  );
}

export function AiHelpChips({
  items,
  duration = 28,
}: {
  items: readonly AssistantPreview[];
  duration?: number;
}) {
  return (
    <div className="-mx-1">
      <MarqueeTrack items={items} compact duration={duration} />
    </div>
  );
}
