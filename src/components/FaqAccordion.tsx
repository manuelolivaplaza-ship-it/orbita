import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿Cuánto tarda un proyecto típico?',
      answer: 'Un proyecto promedio toma entre 2 y 4 semanas según el nivel de complejidad y la órbita seleccionada. Definimos un calendario estricto desde el día 1.',
    },
    {
      question: '¿Los textos los escriben ustedes?',
      answer: 'Sí, escribimos el copywriting en español orientado a conversión a partir de tu brief inicial. Tú revisas y validas el tono antes de publicar.',
    },
    {
      question: '¿Incluye hosting y dominio?',
      answer: 'No por defecto. Nos enfocamos en el diseño y desarrollo. Te dejamos el proyecto optimizado y listo para desplegar en Vercel, Cloud Run o tu servidor de preferencia.',
    },
    {
      question: '¿Solo trabajan en Chile?',
      answer: 'No. Trabajamos 100% online con clientes en todo Chile y Latinoamérica. Mantenemos coordinación fluida por Google Meet y WhatsApp.',
    },
    {
      question: '¿Puedo usar mi logo actual?',
      answer: 'Totalmente. Si ya tienes identidad de marca, la integramos respetando sus guías. Si no tienes logo, creamos un wordmark tipográfico limpio y moderno para la web.',
    },
    {
      question: '¿Qué necesito para empezar?',
      answer: 'Solo 3 cosas: claridad sobre qué vendes y a quién, 2 o 3 páginas web de referencia que te gusten visualmente, y el objetivo principal que quieres lograr.',
    },
    {
      question: '¿Puedo agendar una reunión?',
      answer: 'Sí. En Agendar eliges un día hábil (lunes a viernes) entre 8:00 y 19:00, hora de Santiago. La llamada dura 30 minutos y te confirmamos el link.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white px-6 py-24 relative z-10 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium mb-10 text-center text-[#0B0B12] tracking-tight">
          Preguntas en tierra firme
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-zinc-200/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-base sm:text-lg font-medium text-[#0B0B12] group-hover:text-[#6B7280] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-[#0B0B12] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-600 text-sm sm:text-base leading-relaxed border-t border-zinc-100/80 pt-4 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
