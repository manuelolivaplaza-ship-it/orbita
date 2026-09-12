import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { HOME_FAQS } from '../data/faq';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = HOME_FAQS;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-10 border-t border-zinc-100 bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-medium mb-10 text-center text-[#0B0B12] tracking-tight">
          Preguntas frecuentes
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
                  className="group flex w-full items-center justify-between px-4 py-4 text-left focus:outline-none sm:px-6 sm:py-5"
                >
                  <span className="text-base sm:text-lg font-medium text-[#0B0B12] group-hover:text-[#6B7280] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-[#0B0B12] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="animate-fade-in-up border-t border-zinc-100/80 px-4 pt-4 pb-5 text-sm leading-relaxed text-zinc-600 sm:px-6 sm:pb-6 sm:text-base">
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
