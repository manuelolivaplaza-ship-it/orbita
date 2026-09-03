import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  Send,
  Sparkles,
  RotateCcw,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  Zap,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { Orb, type OrbState } from '../orb';
import catalogo from 'virtual:propuestas-catalogo';
import { SECTORES } from '../../data/sectores';
import { plans, BASE_PRICES, BASE_PRICES_UF, UF_APPROX_CLP } from '../../data/pricing';
import { whatsappUrl } from '../../data/site';

interface OrbAssistantProps {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'orb' | 'user';
  text: string;
  timestamp: string;
  actionType?: 'proposal' | 'plan' | 'schedule' | 'quote';
  actionPayload?: any;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init-1',
  sender: 'orb',
  text: '¡Hola! Soy **Orb** 🫧, tu copiloto con IA en Órbita.\n\nPuedo ayudarte a encontrar la propuesta exacta para tu rubro, comparar planes en **CLP** o **UF**, o mostrarte cómo funciona el CRM con WhatsApp. ¿Qué tipo de negocio tienes o qué buscas para tu web?',
  timestamp: 'Ahora',
};

const SUGGESTED_PROMPTS = [
  '¿Qué plan me recomiendas?',
  'Busco una propuesta para mi rubro',
  '¿Cuánto cuesta en UF y qué incluye?',
  '¿Cómo funciona el CRM y WhatsApp?',
  '¿Cuánto demora la entrega (Modo Turbo)?',
];

export const OrbAssistant: React.FC<OrbAssistantProps> = ({
  onOpenQuoteModal,
  onOpenSchedule,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [appearKey, setAppearKey] = useState(0);
  const [orbState, setOrbState] = useState<OrbState>('idle');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setBubbleVisible(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Handle user sending message
  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setOrbState('thinking');

    // Simulate AI response engine with intelligent contextual understanding
    setTimeout(() => {
      const response = generateOrbResponse(query);
      setIsTyping(false);
      setOrbState(response.state || 'happy');
      setMessages((prev) => [
        ...prev,
        {
          id: `orb-${Date.now()}`,
          sender: 'orb',
          text: response.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionType: response.actionType,
          actionPayload: response.actionPayload,
        },
      ]);

      // Reset to idle after 2.5s
      setTimeout(() => setOrbState('idle'), 2500);
    }, 850);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setOrbState('happy');
    setTimeout(() => setOrbState('idle'), 1500);
  };

  return (
    <>
      {/* 1. FLOATING ORB TRIGGER (Esquina inferior derecha, puro y sin círculo) */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3 select-none">
          {/* Subtle Speech Bubble on Hover or First Load */}
          {bubbleVisible && (
            <div
              onClick={() => {
                setOrbState('happy');
                setIsOpen(true);
              }}
              className="hidden sm:flex items-center gap-2 rounded-2xl border border-zinc-200/90 bg-white/95 px-3.5 py-2 text-xs font-medium text-zinc-800 shadow-xl backdrop-blur-md transition-all hover:border-zinc-300 hover:shadow-2xl cursor-pointer animate-fade-in-up"
            >
              <span>¿Dudas con tu web? Pregúntame 🫧</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setBubbleVisible(false);
                }}
                className="ml-1 text-zinc-400 hover:text-zinc-600"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {/* Orb Character: direct, floating with its own SVG shadow and spawn animation */}
          <button
            type="button"
            onClick={() => {
              setOrbState('happy');
              setIsOpen(true);
            }}
            aria-label="Abrir asistente de IA Orb"
            className="group relative cursor-pointer border-0 bg-transparent p-0 transition-transform hover:scale-110 active:scale-95 focus:outline-none"
          >
            <Orb
              size={68}
              tone="ink"
              state={orbState}
              playful
              hop
              shadow
              trackPointer
              appear
              appearKey={appearKey}
              appearDuration={1600}
            />
          </button>
        </div>
      )}

      {/* 2. THE AI CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col w-[calc(100vw-2rem)] sm:w-[420px] max-w-[430px] h-[600px] sm:h-[630px] max-h-[88vh] rounded-3xl border border-zinc-200/90 bg-white shadow-[0_24px_80px_-16px_rgba(15,23,42,0.25)] overflow-hidden animate-fade-in-up">
          {/* CHAT HEADER: ORB SITS EXACTLY AT TOP-LEFT WITHOUT ARTIFICIAL CARDS */}
          <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 sm:px-5">
            {/* Top-Left: Orb with live status */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <Orb
                  size={42}
                  tone="ink"
                  state={isTyping ? 'thinking' : orbState}
                  playful
                  trackPointer
                  appear
                  flourish={orbState === 'happy'}
                />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-zinc-950">Orb</h3>
                  <span className="inline-flex items-center gap-0.5 rounded bg-zinc-200/80 px-1.5 py-0.2 font-mono text-[9px] font-bold text-zinc-700">
                    <Sparkles className="h-2.5 w-2.5 text-zinc-600" />
                    IA
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500">
                  {isTyping ? 'Pensando respuesta...' : 'Asistente de Estudio Órbita'}
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                title="Reiniciar conversación"
                className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Cerrar chat"
                className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-200/60 hover:text-zinc-900 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isOrb = msg.sender === 'orb';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isOrb ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`relative max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                      isOrb
                        ? 'bg-[#F7F8FC] border border-zinc-200/70 text-zinc-800 rounded-tl-xs shadow-2xs'
                        : 'bg-[#0B0B12] text-white rounded-tr-xs shadow-xs'
                    }`}
                  >
                    {/* Format bold tags safely */}
                    {formatMessageText(msg.text)}

                    {/* Interactive Action Payload if present */}
                    {msg.actionType === 'proposal' && msg.actionPayload && (
                      <div className="mt-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-2xs">
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mb-1">
                          <span>{msg.actionPayload.sectorLabel}</span>
                          <span className="capitalize text-zinc-600">{msg.actionPayload.variant}</span>
                        </div>
                        <h4 className="font-semibold text-zinc-900 text-sm mb-2">
                          {msg.actionPayload.brand}
                        </h4>
                        <Link
                          to={`/propuesta/${msg.actionPayload.slug}`}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-emerald-700 transition-colors"
                        >
                          <span>Ver propuesta en vivo</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    )}

                    {msg.actionType === 'plan' && msg.actionPayload && (
                      <div className="mt-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-2xs">
                        <div className="flex items-baseline justify-between mb-1.5">
                          <span className="font-semibold text-zinc-900 text-sm">
                            {msg.actionPayload.name}
                          </span>
                          <span className="font-mono font-bold text-zinc-950 text-xs">
                            {msg.actionPayload.price} / {msg.actionPayload.priceUf}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 mb-3">
                          {msg.actionPayload.hint}
                        </p>
                        <button
                          type="button"
                          onClick={() => onOpenQuoteModal(msg.actionPayload.name)}
                          className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-[#0B0B12] py-2 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors"
                        >
                          <span>Cotizar este plan</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    )}

                    {msg.actionType === 'schedule' && (
                      <div className="mt-3 flex gap-2">
                        <button
                          type="button"
                          onClick={onOpenSchedule}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#0B0B12] px-3.5 py-2 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors"
                        >
                          <Calendar className="h-3.5 w-3.5 text-amber-400" />
                          <span>Agendar Videollamada</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <span className="mt-1 text-[10px] text-zinc-400 px-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-zinc-500 bg-[#F7F8FC] border border-zinc-200/70 px-3.5 py-2.5 rounded-2xl rounded-tl-xs max-w-[140px]">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.15s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.3s]" />
                <span className="text-[11px] font-mono text-zinc-400 ml-1">Orb...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* QUICK SUGGESTIONS PILLS */}
          <div className="border-t border-zinc-100 bg-zinc-50/50 px-3 py-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex items-center gap-1.5">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] text-zinc-600 hover:border-zinc-400 hover:text-zinc-950 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* INPUT FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="border-t border-zinc-200/80 bg-white p-3 sm:p-4 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pregúntale a Orb sobre webs, planes o CRM..."
              className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B0B12] text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// Helper: Formatter for bold text in chat bubbles
function formatMessageText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-zinc-950">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

// INTELLIGENT CONTEXTUAL ENGINE FOR ORB
function generateOrbResponse(query: string): {
  text: string;
  state?: OrbState;
  actionType?: 'proposal' | 'plan' | 'schedule';
  actionPayload?: any;
} {
  const q = query.toLowerCase();

  // 1. GREETINGS
  if (/hola|buenos dias|buenas|hey|que tal/i.test(q)) {
    return {
      text: '¡Hola! 🫧 Qué gusto saludarte. Soy **Orb**, el asistente de Órbita. ¿Estás buscando una web nueva para tu empresa, rediseñar la actual o quieres saber sobre nuestros precios en CLP o UF?',
      state: 'happy',
    };
  }

  // 2. PRICING & UF QUESTIONS
  if (/precio|cuanto cuesta|valor|uf|clp|costo|cotiz/i.test(q)) {
    if (/uf/i.test(q)) {
      return {
        text: `En **UF** tenemos tres niveles principales (referencia 1 UF ≈ $${UF_APPROX_CLP.toLocaleString('es-CL')} CLP + IVA):\n\n• **Plan Sonda**: 12,5 UF (Landing de alta conversión)\n• **Plan Estación**: 25,0 UF (Sitio comercial con CRM Pro y alertas WhatsApp) — *Más elegido*\n• **Plan Constelación**: 42,5 UF (Multi-sección / Rediseño corporativo)\n\n¿Quieres que te prepare una cotización formal?`,
        state: 'happy',
        actionType: 'plan',
        actionPayload: {
          name: 'Plan Estación',
          price: '$990.000 CLP',
          priceUf: '25,0 UF',
          hint: 'Web comercial + Panel CRM con Kanban y WhatsApp',
        },
      };
    }
    return {
      text: 'Nuestros planes principales son:\n\n• **Plan Sonda**: $490.000 CLP / 12,5 UF\n• **Plan Estación (Más elegido)**: $990.000 CLP / 25,0 UF (Incluye Panel CRM y WhatsApp)\n• **Plan Constelación**: $1.690.000 CLP / 42,5 UF\n\nTodos se pagan 50% al partir y 50% al publicar con tu aprobación. ¿Te interesa cotizar alguno?',
      state: 'happy',
      actionType: 'plan',
      actionPayload: {
        name: 'Plan Estación',
        price: '$990.000 CLP',
        priceUf: '25,0 UF',
        hint: 'El 68% de nuestros clientes eligen este plan',
      },
    };
  }

  // 3. CRM & WHATSAPP QUESTIONS
  if (/crm|whatsapp|panel|lead|prospecto|alerta|kanban/i.test(q)) {
    return {
      text: '¡El CRM es nuestra especialidad! 🔥 Con Órbita, tu sitio no es solo una vitrina: incluye un **Panel CRM privado** donde ves en tiempo real:\n\n1. **Alertas inmediatas a tu WhatsApp** cuando alguien llena el formulario.\n2. **Embudo Kanban** para arrastrar prospectos (Nuevo → Contactado → Cotizado → Cerrado).\n3. **Analítica en vivo**: visitas únicas, clics en tu WhatsApp y comunas de Santiago.\n\nPuedes probarlo directamente en la sección CRM de nuestra web.',
      state: 'happy',
    };
  }

  // 4. TIMELINES & TURBO MODE
  if (/tiempo|demora|plazo|entrega|cuanto tarda|turbo|dias/i.test(q)) {
    return {
      text: 'El plazo estándar es de **10 a 14 días hábiles**, pero actualmente tenemos activa la promoción de **Modo Turbo gratis** ($0 extra):\n\n🚀 Si tienes prisa, entregamos tu sitio completamente terminado, redactado y listo para publicar en **7 días hábiles**.\n\n¿Tienes una fecha límite en mente?',
      state: 'happy',
    };
  }

  // 5. SCHEDULE / MEETING
  if (/reunion|agendar|llamada|videollamada|juntarnos|conversar/i.test(q)) {
    return {
      text: '¡Excelente idea! Puedes agendar una videollamada de 15 minutos con nuestro equipo para revisar tu proyecto sin ningún compromiso:',
      state: 'happy',
      actionType: 'schedule',
    };
  }

  // 6. SECTORS & PROPOSALS SEARCH
  // Check if query matches any sector or keyword in catalog
  const matchingSector = SECTORES.find((s) => q.includes(s.slug) || q.includes(s.label.toLowerCase()));
  if (matchingSector) {
    const proposal = catalogo.find((p) => p.sector === matchingSector.slug) || catalogo[0];
    return {
      text: `¡Sí, tenemos propuestas especializadas para el rubro **${matchingSector.label}**! 🎯\n\nNuestros diseños para este sector están optimizados con llamados a la acción claros, botones de WhatsApp y catálogo de servicios listos para tu marca.`,
      state: 'happy',
      actionType: 'proposal',
      actionPayload: {
        slug: proposal.slug,
        brand: proposal.brand,
        variant: proposal.variant,
        sectorLabel: matchingSector.label,
      },
    };
  }

  // Keywords matching (dental, medico, abogado, fitness, etc.)
  const keywordsMap: Record<string, string> = {
    dentist: 'salud',
    diente: 'salud',
    odontolog: 'salud',
    clinic: 'salud',
    medic: 'salud',
    salud: 'salud',
    psicolog: 'salud',
    abogad: 'legal',
    ley: 'legal',
    juridic: 'legal',
    gym: 'fitness',
    gimnasio: 'fitness',
    entrenador: 'fitness',
    fit: 'fitness',
    inmobiliaria: 'inmobiliaria',
    propiedad: 'inmobiliaria',
    arquitect: 'arquitectura',
    restauran: 'gastronomia',
    comida: 'gastronomia',
  };

  for (const [key, sectorSlug] of Object.entries(keywordsMap)) {
    if (q.includes(key)) {
      const proposal = catalogo.find((p) => p.sector === sectorSlug || p.slug.includes(key)) || catalogo[0];
      const sectorObj = SECTORES.find((s) => s.slug === proposal.sector);
      return {
        text: `Tenemos justamente propuestas diseñadas para ese rubro. Mira este ejemplo en vivo de **${proposal.brand}** con arquitectura enfocada en conseguir pacientes o clientes:`,
        state: 'happy',
        actionType: 'proposal',
        actionPayload: {
          slug: proposal.slug,
          brand: proposal.brand,
          variant: proposal.variant,
          sectorLabel: sectorObj?.label || 'Especializado',
        },
      };
    }
  }

  // DEFAULT / FALLBACK RESPONSE
  return {
    text: 'Entiendo perfectamente. En Órbita creamos sitios de alto impacto con **Panel CRM y WhatsApp integrados**, entregados en 7 días con Modo Turbo.\n\nPuedes ver nuestra **Galería de 25 propuestas**, consultar nuestros **Planes desde $490.000 / 12,5 UF**, o agendar una videollamada para orientarte mejor.',
    state: 'idle',
  };
}
