/// <reference types="vite/client" />

/**
 * CLIENTE SUPABASE REST - MINIMAYORISTA
 * 
 * Integra los endpoints de Supabase REST utilizando las variables globales
 * window.SUPABASE_URL y window.SUPABASE_ANON_KEY con placeholders de respaldo
 * TU_SUPABASE_URL / TU_SUPABASE_ANON_KEY de acuerdo a los requerimientos del proyecto.
 */

declare global {
  interface Window {
    SUPABASE_URL?: string;
    SUPABASE_ANON_KEY?: string;
  }
}

export const SUPABASE_URL =
  (typeof window !== "undefined" && window.SUPABASE_URL) ||
  ((import.meta as any).env?.VITE_SUPABASE_URL as string) ||
  "https://TU_SUPABASE_URL.supabase.co";

export const SUPABASE_ANON_KEY =
  (typeof window !== "undefined" && window.SUPABASE_ANON_KEY) ||
  ((import.meta as any).env?.VITE_SUPABASE_ANON_KEY as string) ||
  "TU_SUPABASE_ANON_KEY";


export interface PedidoPayload {
  numero_pedido: string;
  cliente: string;
  telefono: string;
  direccion: string;
  comuna: string;
  notas?: string;
  items: Array<{
    id: string;
    nombre: string;
    unidad: string;
    precio: number;
    cantidad: number;
    subtotal: number;
  }>;
  total: number;
  estado: string; // 'nuevo'
  created_at: string;
}

export interface ContactoPayload {
  nombre: string;
  email: string;
  mensaje: string;
  created_at: string;
}

/**
 * Registra un nuevo pedido en la tabla /rest/v1/pedidos de Supabase
 */
export async function enviarPedidoSupabase(payload: PedidoPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/pedidos`;
    
    // Si sigue con el placeholder predeterminado, simulamos respuesta exitosa para no bloquear la UX
    if (SUPABASE_URL.includes("TU_SUPABASE_URL") || SUPABASE_ANON_KEY.includes("TU_SUPABASE_ANON_KEY")) {
      console.warn("Supabase configurado con placeholders predeterminados (TU_SUPABASE_URL). Se simula guardado local.");
      return { success: true };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Error al enviar pedido a Supabase REST:", response.status, errText);
      return { success: false, error: `Error ${response.status}: ${errText}` };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Excepción en enviarPedidoSupabase:", err);
    return { success: false, error: err?.message || "Error de red al conectar con el servidor" };
  }
}

/**
 * Registra un mensaje de contacto en la tabla /rest/v1/contactos de Supabase
 */
export async function enviarContactoSupabase(payload: ContactoPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const url = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/contactos`;

    if (SUPABASE_URL.includes("TU_SUPABASE_URL") || SUPABASE_ANON_KEY.includes("TU_SUPABASE_ANON_KEY")) {
      console.warn("Supabase configurado con placeholders predeterminados (TU_SUPABASE_URL). Se simula envío de contacto.");
      return { success: true };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Error al enviar contacto a Supabase REST:", response.status, errText);
      return { success: false, error: `Error ${response.status}: ${errText}` };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Excepción en enviarContactoSupabase:", err);
    return { success: false, error: err?.message || "Error de conexión al enviar mensaje" };
  }
}
