import React, { useState } from "react";
import { FAQS } from "../lib/productos";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 bg-[#F5F7FA] border-t border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1890FF] block mb-1">
            Resuelve tus dudas
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Todo lo que necesitas saber sobre cómo pedir, métodos de pago y tiempos de entrega.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-base text-[#111827] hover:text-[#1890FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1890FF] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#1890FF] shrink-0" />
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#1890FF]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1 pl-12">
                    {faq.respuesta}
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
