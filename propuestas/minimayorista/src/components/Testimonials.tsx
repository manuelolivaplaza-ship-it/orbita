import React from "react";
import { TESTIMONIOS_EJEMPLO } from "../lib/productos";
import { Star, MessageSquareQuote, Info } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1890FF] block mb-1">
            Experiencia de Clientes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Lo que dicen nuestras familias y clientes
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            La confianza de nuestros vecinos en La Florida, Puente Alto, Peñalolén y todo Santiago.
          </p>
        </div>

        {/* Notice Disclaimer */}
        <div className="max-w-xl mx-auto mb-8 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-3 text-xs flex items-center gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Aviso de transparencia:</strong> Muestras de testimonios de ejemplo (espacio reservado para sincronizar opiniones reales de Google Maps).
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIOS_EJEMPLO.map((test) => (
            <div
              key={test.id}
              className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col justify-between relative"
            >
              <MessageSquareQuote className="w-8 h-8 text-[#1890FF]/20 absolute top-4 right-4" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(test.calificacion)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment Quote */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-4">
                  "{test.comentario}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#111827]">{test.nombre}</p>
                  <p className="text-gray-500">{test.comuna}</p>
                </div>
                <span className="text-gray-400 text-[11px] font-medium">{test.fecha}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
