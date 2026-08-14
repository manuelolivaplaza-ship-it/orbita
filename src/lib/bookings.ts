import { formatAppointment, formatMinutes } from '../data/booking';
import { getSupabase, isSupabaseConfigured } from './supabase';

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export type BookingRow = {
  id: string;
  created_at: string;
  nombre: string;
  email: string;
  telefono: string | null;
  tema: string | null;
  nota: string | null;
  slot_date: string;
  slot_minutes: number;
  slot_label: string | null;
  status: BookingStatus;
};

export async function fetchTakenMinutes(ymd: string): Promise<Set<number>> {
  if (!isSupabaseConfigured()) return new Set();
  const { data, error } = await getSupabase().rpc('list_taken_slots', { p_date: ymd });
  if (error) throw error;
  return new Set((data ?? []).map((row: { slot_minutes: number }) => row.slot_minutes));
}

export async function createBooking(input: {
  nombre: string;
  email: string;
  telefono?: string;
  tema?: string;
  nota?: string;
  ymd: string;
  minutes: number;
}): Promise<string> {
  if (!isSupabaseConfigured()) {
    throw new Error('La agenda aún no está conectada. Configura Supabase.');
  }
  const { data, error } = await getSupabase().rpc('create_booking', {
    p_nombre: input.nombre,
    p_email: input.email,
    p_telefono: input.telefono ?? '',
    p_tema: input.tema ?? '',
    p_nota: input.nota ?? '',
    p_slot_date: input.ymd,
    p_slot_minutes: input.minutes,
    p_slot_label: formatAppointment(input.ymd, input.minutes),
  });
  if (error) throw new Error(error.message || 'No se pudo reservar ese horario');
  return data as string;
}

export async function listBookings(): Promise<BookingRow[]> {
  const { data, error } = await getSupabase()
    .from('bookings')
    .select('*')
    .order('slot_date', { ascending: true })
    .order('slot_minutes', { ascending: true });
  if (error) throw error;
  return (data ?? []) as BookingRow[];
}

export async function updateBookingStatus(id: string, status: BookingStatus): Promise<void> {
  const { error } = await getSupabase().from('bookings').update({ status }).eq('id', id);
  if (error) throw error;
}

export function bookingWhen(row: BookingRow): string {
  return row.slot_label || `${row.slot_date} · ${formatMinutes(row.slot_minutes)}`;
}
