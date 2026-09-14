import React, { createContext, useContext, useState, useEffect } from "react";
import { Producto, CategoriaTipo } from "../lib/productos";

export interface CartItem {
  producto: Producto;
  cantidad: number;
}

export interface LastOrderInfo {
  numeroPedido: string;
  cliente: string;
  telefono: string;
  direccion: string;
  comuna: string;
  total: number;
  items: CartItem[];
}

export interface CartContextType {
  cart: CartItem[];
  addItem: (producto: Producto, cantidad?: number, openDrawer?: boolean) => void;
  removeItem: (productoId: string) => void;
  updateQuantity: (productoId: string, cantidad: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  activeCategory: CategoriaTipo | "Todas";
  setActiveCategory: (cat: CategoriaTipo | "Todas") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  lastOrder: LastOrderInfo | null;
  setLastOrder: (order: LastOrderInfo | null) => void;
  openCheckout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "minimayorista_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error("Error al cargar carrito desde localStorage", e);
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoriaTipo | "Todas">("Todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [lastOrder, setLastOrder] = useState<LastOrderInfo | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Error al guardar carrito en localStorage", e);
    }
  }, [cart]);

  const addItem = (producto: Producto, cantidad = 1, openDrawer = false) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.producto.id === producto.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].cantidad += cantidad;
        return updated;
      } else {
        return [...prev, { producto, cantidad }];
      }
    });
    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const removeItem = (productoId: string) => {
    setCart((prev) => prev.filter((item) => item.producto.id !== productoId));
  };

  const updateQuantity = (productoId: string, cantidad: number) => {
    if (cantidad <= 0) {
      removeItem(productoId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.producto.id === productoId ? { ...item, cantidad } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.cantidad, 0);

  const cartSubtotal = cart.reduce((sum, item) => {
    // Si precio es 0 (ver WhatsApp), no suma al valor numérico
    return sum + (item.producto.precio * item.cantidad);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        lastOrder,
        setLastOrder,
        openCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
