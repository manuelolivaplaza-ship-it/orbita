import React from "react";
import { ShoppingCart, ClipboardCheck, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const pasos = [
    {
      numero: "1",
      titulo: "1. Selecciona tus productos",
      descripcion: "Agrega al carrito lo que necesites a precios al costo.",
      icono: <ShoppingCart className="w-5 h-5 text-[#1890FF]" />,
    },
    {
      numero: "2",
      titulo: "2. Ingresa tus datos",
      descripcion: "Dirección y teléfono en Santiago. Sin registrarte.",
      icono: <ClipboardCheck className="w-5 h-5 text-[#1890FF]" />,
    },
    {
      numero: "3",
      titulo: "3. Recibe en 24-48h",
      descripcion: "Despacho directo y paga con transferencia o efectivo.",
      icono: <CheckCircle2 className="w-5 h-5 text-[#1890FF]" />,
    },
  ];

  return (
    <section className="py-8 bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1890FF]">
            ¿Cómo comprar? — Pide en 3 simples pasos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pasos.map((paso, idx) => (
            <div
              key={idx}
              className="bg-[#F5F7FA] rounded-xl p-4 border border-gray-200/80 flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-blue-200 text-[#1890FF] flex items-center justify-center shrink-0 shadow-xs">
                {paso.icono}
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-[#111827]">
                  {paso.titulo}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
