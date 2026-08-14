import React from 'react';
import { ArrowRight, Eye, MessageSquare, MousePointerClick, Smartphone } from 'lucide-react';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

interface ShowcasePanelProps {
  onOpenQuoteModal: (planName?: string) => void;
}

const VIDEO_SHOWCASE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4';

const points = [
  {
    icon: Eye,
    title: 'Se entiende al instante',
    body: 'En pocos segundos queda claro qué ofreces y a quién le sirve. Sin rodeos ni texto de relleno.',
  },
  {
    icon: MousePointerClick,
    title: 'Un solo camino a contacto',
    body: 'Botones claros para pedirte presupuesto o escribirte por WhatsApp. El visitante no se pierde.',
  },
  {
    icon: Smartphone,
    title: 'Se ve bien en el celular',
    body: 'La mayoría entra desde el móvil. Tu sitio se lee y se usa bien en pantalla chica.',
  },
  {
    icon: MessageSquare,
    title: 'Pensada para que te escriban',
    body: 'No es solo “bonita”: cada sección empuja a la acción que te importa — un mensaje o una llamada.',
  },
];

export const ShowcasePanel: React.FC<ShowcasePanelProps> = ({ onOpenQuoteModal }) => {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <section id="prueba" className="bg-white px-6 py-24 sm:py-28 relative z-10">
      <div className="max-w-[88rem] mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="md:pr-4">
          <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-3">
            Qué hace tu web por ti
          </p>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight text-[#0B0B12] mb-5"
            style={{ letterSpacing: '-0.04em' }}
          >
            Clara, rápida
            <br />
            y hecha para vender.
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md mb-10">
            No llenamos la página de bloques decorativos. Diseñamos solo lo que ayuda a que alguien confíe en tu marca y te deje un mensaje.
          </p>

          <ul className="space-y-5 mb-10">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shrink-0 text-[#0B0B12]">
                  <Icon className="w-4.5 h-4.5 w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-base font-medium text-[#0B0B12] mb-0.5 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center gap-3 group text-[#0B0B12] font-medium text-base hover:text-zinc-600 transition-colors focus:outline-none"
          >
            <span className="w-10 h-10 rounded-full bg-zinc-100 group-hover:bg-[#0B0B12] group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
            <span>Pedir presupuesto</span>
          </button>
        </div>

        {/* RIGHT — panel visual */}
        <div className="relative rounded-3xl overflow-hidden min-h-[520px] sm:min-h-[600px] md:min-h-[680px] shadow-xl shadow-zinc-300/50 border border-zinc-200/80 flex flex-col justify-end bg-zinc-100">
          {!reducedMotion && (
            <video
              src={VIDEO_SHOWCASE}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <div className="absolute top-6 left-6 z-10 bg-white/95 border border-zinc-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-800 flex items-center gap-2 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Ejemplo de resultado</span>
          </div>

          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.88) 68%, rgba(255,255,255,0.98) 100%)',
            }}
          />

          <div className="relative z-10 p-8 sm:p-10 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              Para servicios y negocios
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#0B0B12] mb-3">
              Una web que trabaja aunque tú no estés.
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base max-w-md mb-6 leading-relaxed">
              Ideal si vendes un servicio o producto y necesitas presencia seria, clara y con un formulario o WhatsApp que realmente funcione.
            </p>
            <a
              href="#precios"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#precios')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#0B0B12] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              <span>Ver planes y precios</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
