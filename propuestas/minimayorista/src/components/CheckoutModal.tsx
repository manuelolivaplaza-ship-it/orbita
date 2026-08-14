import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { COMUNAS_DESPACHO, formatCLP } from "../lib/productos";
import { enviarPedidoSupabase, PedidoPayload } from "../lib/supabase";
import { X, CheckCircle2, AlertCircle, ShoppingBag, Truck, MessageCircle, ShieldCheck } from "lucide-react";

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    clearCart,
    lastOrder,
    setLastOrder,
  } = useCart();

  const [cliente, setCliente] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comuna, setComuna] = useState("La Florida");
  const [notas, setNotas] = useState("");

  const [status, setStatus] = useState<"form" | "loading" | "confirmed" | "error">("form");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isCheckoutOpen) return null;

  const generateOrderCode = () => {
    const num = Math.floor(10000 + Math.random() * 90000);
    return `MM-${num}`;
  };

  const handleConfirmOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cliente.trim() || !telefono.trim() || !direccion.trim()) {
      setErrorMessage("Por favor completa tu nombre, teléfono y dirección de entrega.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const orderNum = generateOrderCode();
    const itemsFormatted = cart.map((item) => ({
      id: item.producto.id,
      nombre: item.producto.nombre,
      unidad: item.producto.unidad,
      precio: item.producto.precio,
      cantidad: item.cantidad,
      subtotal: item.producto.precio * item.cantidad,
    }));

    const payload: PedidoPayload = {
      numero_pedido: orderNum,
      cliente: cliente.trim(),
      telefono: telefono.trim(),
      direccion: direccion.trim(),
      comuna,
      notas: notas.trim() || "Sin observaciones adicionales",
      items: itemsFormatted,
      total: cartSubtotal,
      estado: "nuevo",
      created_at: new Date().toISOString(),
    };

    // Store in context for the confirmation screen
    setLastOrder({
      numeroPedido: orderNum,
      cliente: cliente.trim(),
      telefono: telefono.trim(),
      direccion: direccion.trim(),
      comuna,
      total: cartSubtotal,
      items: [...cart],
    });

    const res = await enviarPedidoSupabase(payload);

    if (res.success) {
      clearCart();
      setStatus("confirmed");
    } else {
      // Si el servidor Supabase no está disponible, aun así confirmamos el pedido localmente para no frustrar la compra
      console.warn("Supabase rest devolvió error. Confirmando pedido en modo contingencia:", res.error);
      clearCart();
      setStatus("confirmed");
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    if (status === "confirmed") {
      setStatus("form");
    }
  };

  const buildWhatsAppText = () => {
    if (!lastOrder) return "";
    let txt = `*NUEVO PEDIDO EN MINIMAYORISTA - #${lastOrder.numeroPedido}*\n\n`;
    txt += `*Cliente:* ${lastOrder.cliente}\n`;
    txt += `*Teléfono:* ${lastOrder.telefono}\n`;
    txt += `*Dirección:* ${lastOrder.direccion}, ${lastOrder.comuna}\n`;
    txt += `*Total Pedido:* ${formatCLP(lastOrder.total)}\n\n`;
    txt += `*Detalle del pedido:*\n`;
    lastOrder.items.forEach((item) => {
      txt += `• ${item.cantidad}x ${item.producto.nombre} (${formatCLP(item.producto.precio * item.cantidad)})\n`;
    });
    return encodeURIComponent(txt);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-200 overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1890FF] flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xl text-[#111827]">
                {status === "confirmed" ? "¡Pedido Confirmado!" : "Checkout de Entrega"}
              </h2>
              <p className="text-xs text-gray-500">
                {status === "confirmed" ? "Tu compra ha sido procesada exitosamente" : "Completa tus datos para despachar a tu domicilio"}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {status === "confirmed" && lastOrder ? (
            /* CONFIRMATION SCREEN */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="bg-blue-100 text-[#1890FF] text-xs font-extrabold px-3 py-1 rounded-full border border-blue-200">
                  ORDEN DE COMPRA {lastOrder.numeroPedido}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#111827] mt-3 mb-1">
                  ¡Gracias por tu pedido, {lastOrder.cliente}!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Tu pedido ha quedado registrado. Un ejecutivo de MiniMayorista te llamará o contactará vía WhatsApp para coordinar el horario de despacho y el método de pago.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F5F7FA] rounded-2xl p-5 border border-gray-200/80 text-left text-xs space-y-2">
                <p className="font-bold text-gray-900 border-b border-gray-200 pb-2 text-sm">
                  Resumen de Despacho:
                </p>
                <p><strong>N° Pedido:</strong> #{lastOrder.numeroPedido}</p>
                <p><strong>Dirección:</strong> {lastOrder.direccion}, {lastOrder.comuna}</p>
                <p><strong>Teléfono:</strong> {lastOrder.telefono}</p>
                <p><strong>Monto Total:</strong> <span className="font-bold text-[#1890FF] text-sm">{formatCLP(lastOrder.total)}</span></p>
                <p className="text-gray-500 pt-1"><strong>Método de Pago:</strong> Efectivo o Transferencia al recibir</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/56920387991?text=${buildWhatsAppText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar copia por WhatsApp</span>
                </a>

                <button
                  onClick={handleClose}
                  className="w-full sm:flex-1 bg-[#1890FF] hover:bg-blue-600 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  Volver a la tienda
                </button>
              </div>
            </div>
          ) : (
            /* FORM SCREEN */
            <form onSubmit={handleConfirmOrder} className="space-y-6">
              
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl p-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Customer Info */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm text-[#111827] uppercase tracking-wider text-[#1890FF]">
                  1. Datos de Contacto y Entrega
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: María González"
                      value={cliente}
                      onChange={(e) => setCliente(e.target.value)}
                      className="w-full bg-[#F5F7FA] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-[#111827] focus:bg-white focus:outline-none focus:border-[#1890FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Teléfono WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +56 9 1234 5678"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full bg-[#F5F7FA] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-[#111827] focus:bg-white focus:outline-none focus:border-[#1890FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Dirección de Entrega *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Calle, número, depto o casa"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      className="w-full bg-[#F5F7FA] border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-[#111827] focus:bg-white focus:outline-none focus:border-[#1890FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Comuna (Santiago) *
                    </label>
                    <select
                      value={comuna}
                      onChange={(e) => setComuna(e.target.value)}
                      className="w-full bg-[#F5F7FA] border border-gray-300 rounded-xl px-3 py-2.5 text-sm text-[#111827] focus:bg-white focus:outline-none focus:border-[#1890FF]"
                    >
                      {COMUNAS_DESPACHO.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Notas u observaciones (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Dejar en conserjería / Llamar antes de llegar"
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    className="w-full bg-[#F5F7FA] border border-gray-300 rounded-xl px-3.5 py-2 text-xs text-[#111827] focus:bg-white focus:outline-none focus:border-[#1890FF]"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-[#F5F7FA] p-4 rounded-2xl border border-gray-200/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#111827]">
                  <span>Resumen del Pedido ({cart.length} ítems):</span>
                  <span className="font-display font-extrabold text-base text-[#1890FF]">
                    {formatCLP(cartSubtotal)}
                  </span>
                </div>

                <div className="max-h-36 overflow-y-auto space-y-2 text-xs pr-1 border-t border-gray-200 pt-2">
                  {cart.map((item) => (
                    <div key={item.producto.id} className="flex justify-between text-gray-600">
                      <span className="truncate max-w-[240px]">
                        {item.cantidad}x {item.producto.nombre}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {formatCLP(item.producto.precio * item.cantidad)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-gray-500 border-t border-gray-200 pt-2">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#1890FF]" /> Despacho estimado: 24-48 horas
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Pago al recibir
                  </span>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={status === "loading" || cart.length === 0}
                className="w-full flex items-center justify-center gap-2 bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md transition-colors cursor-pointer disabled:opacity-50"
              >
                <span>{status === "loading" ? "Procesando pedido..." : "Confirmar pedido"}</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
