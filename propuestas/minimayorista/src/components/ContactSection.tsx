import React, { useState } from "react";
import { enviarContactoSupabase } from "../lib/supabase";
import { MessageCircle, Instagram, Facebook, Send, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setErrorMessage("Por favor completa todos los campos del formulario.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const payload = {
      nombre: formData.nombre.trim(),
      email: formData.email.trim(),
      mensaje: formData.mensaje.trim(),
      created_at: new Date().toISOString(),
    };

    const res = await enviarContactoSupabase(payload);

    if (res.success) {
      setStatus("success");
      setFormData({ nombre: "", email: "", mensaje: "" });
    } else {
      setStatus("error");
      setErrorMessage(res.error || "Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <section id="contacto" className="py-14 bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1890FF] block mb-1">
                Atención Directa
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Ponte en contacto con MiniMayorista
              </h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                ¿Tienes consultas sobre compras por volumen, precios mayoristas especiales para tu negocio o cobertura de flete? Llámanos o escríbenos directamente.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/56920387991?text=Hola%20MiniMayorista,%20quisiera%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">WhatsApp Directo</p>
                  <p className="font-display font-extrabold text-base text-emerald-950">+56 9 2038 7991</p>
                </div>
              </a>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://instagram.com/mini_mayorista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 hover:bg-gray-100 hover:text-pink-600 font-semibold text-xs transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@mini_mayorista</span>
                </a>

                <a
                  href="https://facebook.com/filetitosdepollo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 hover:bg-gray-100 hover:text-blue-600 font-semibold text-xs transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook (filetitosdepollo)</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F7FA] border border-gray-200/80 text-xs text-gray-600 space-y-1">
              <p className="font-bold text-gray-900 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#1890FF]" /> Horarios de atención telefónica:
              </p>
              <p>Lunes a Viernes de 10:00 a 21:00 hrs | Sábados de 10:00 a 18:00 hrs</p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#F5F7FA] rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
            <h3 className="font-display font-bold text-xl text-[#111827] mb-2">
              Envíanos un mensaje
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Responderemos tus dudas a la brevedad en tu correo electrónico.
            </p>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 my-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-lg text-emerald-950">
                  ¡Mensaje enviado con éxito!
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Gracias por contactar a MiniMayorista. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl p-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#1890FF] focus:ring-2 focus:ring-[#1890FF]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#1890FF] focus:ring-2 focus:ring-[#1890FF]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Mensaje o consulta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe aquí tus dudas sobre productos, despachos o cotizaciones al por mayor..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-[#111827] focus:outline-none focus:border-[#1890FF] focus:ring-2 focus:ring-[#1890FF]/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "loading" ? "Enviando mensaje..." : "Enviar mensaje"}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
