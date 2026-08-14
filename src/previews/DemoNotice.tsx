import { useState, type FormEvent, type ReactNode } from 'react';

export function DemoForm({
  children,
  className,
  buttonLabel = 'Enviar',
  buttonClassName,
}: {
  children: ReactNode;
  className?: string;
  buttonLabel?: string;
  buttonClassName?: string;
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-current/10 bg-black/5 px-5 py-6 text-sm leading-relaxed">
        <p className="font-medium mb-1">Esta es una web de ejemplo.</p>
        <p className="opacity-70">
          El formulario no envía datos reales. En el sitio del cliente esto llega por email o WhatsApp.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-3 underline underline-offset-4 text-xs">
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
    </form>
  );
}

export function DemoWhatsApp({
  className,
  label = 'Escribir por WhatsApp',
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <button type="button" className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-label="Cerrar" />
          <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white text-[#0B0B12] p-6 shadow-2xl">
            <p className="text-sm font-medium mb-1">WhatsApp de ejemplo</p>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4">
              En el sitio real este botón abre el chat del cliente, con el mensaje ya armado. Acá no enviamos nada.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#0B0B12] text-white text-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function DemoFaq({
  items,
  questionClass,
  answerClass,
}: {
  items: { q: string; a: string }[];
  questionClass?: string;
  answerClass?: string;
}) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-current/10">
      {items.map((item, i) => {
        const on = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              className={`w-full text-left py-4 flex items-start justify-between gap-4 ${questionClass ?? ''}`}
            >
              <span>{item.q}</span>
              <span className="opacity-40 text-lg leading-none">{on ? '–' : '+'}</span>
            </button>
            {on && <p className={`pb-4 text-sm leading-relaxed opacity-70 ${answerClass ?? ''}`}>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
