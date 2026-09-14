import React from "react";
import { useCart } from "../context/CartContext";
import { formatCLP } from "../lib/productos";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Truck } from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    cartSubtotal,
    openCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1890FF] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-[#111827]">
                  Tu Carrito de Compra
                </h2>
                <p className="text-xs text-gray-500">
                  {cart.length} {cart.length === 1 ? "producto" : "productos diferentes"}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1890FF] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-base text-[#111827]">
                  Tu carrito está vacío
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Explora nuestras ofertas y agrega víveres, carnes y congelados a precio de mayorista.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#1890FF] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  Ir al catálogo
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.producto.id} className="pt-4 first:pt-0 flex items-center gap-3">
                  <img
                    src={item.producto.imagen}
                    alt={item.producto.nombre}
                    className="w-16 h-16 object-cover rounded-xl border border-gray-200 shrink-0 bg-gray-50"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-[#111827] truncate">
                      {item.producto.nombre}
                    </h4>
                    <p className="text-[11px] text-gray-500 mb-1">
                      {item.producto.unidad}
                    </p>

                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display font-extrabold text-sm text-[#111827]">
                        {formatCLP(item.producto.precio * item.cantidad)}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
                        <button
                          onClick={() => updateQuantity(item.producto.id, item.cantidad - 1)}
                          className="w-6 h-6 rounded-md bg-white text-gray-700 flex items-center justify-center shadow-2xs hover:bg-gray-200 transition-colors cursor-pointer text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1.5 min-w-[20px] text-center">
                          {item.cantidad}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.producto.id, item.cantidad + 1)}
                          className="w-6 h-6 rounded-md bg-[#1890FF] text-white flex items-center justify-center shadow-2xs hover:bg-blue-600 transition-colors cursor-pointer text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.producto.id)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    title="Eliminar producto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-gray-200 bg-[#F5F7FA] space-y-4">
              
              {/* Delivery Estimate */}
              <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-gray-700 font-medium">
                  <span className="flex items-center gap-1.5 text-[#1890FF] font-bold">
                    <Truck className="w-4 h-4" /> Despacho Santiago:
                  </span>
                  <span>24-48 horas</span>
                </div>
                <div className="flex items-center justify-between text-[#111827] font-bold text-sm pt-1 border-t border-gray-100">
                  <span>Subtotal del pedido:</span>
                  <span className="font-display font-extrabold text-base text-[#1890FF]">
                    {formatCLP(cartSubtotal)}
                  </span>
                </div>
              </div>

              {/* Clear & Checkout Buttons */}
              <div className="space-y-2">
                <button
                  onClick={openCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer focus:ring-2 focus:ring-[#1890FF]"
                >
                  <span>Finalizar compra</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                  <button
                    onClick={clearCart}
                    className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    Vaciar carrito
                  </button>

                  <span className="flex items-center gap-1 text-gray-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Paga al recibir tu pedido
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
