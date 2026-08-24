import { formatAppointment, formatMinutes } from '../data/booking';
import { clip, FIELD_MAX, isHoneyFilled } from './formLimits';
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

const BOOKING_KNOWN_ERRORS = [
  'Nombre inválido',
  'Email inválido',
  'Fecha inválida',
  'Solo lunes a viernes',
  'No se puede reservar una fecha pasada',
  'Elegí una fecha dentro de los próximos 60 días',
  'Horario inválido',
  'Ese horario ya no está disponible',
  'El mensaje es demasiado largo',
  'La agenda está ocupada. Probá de nuevo en un momento',
  'Ya tenés una reunión pendiente con ese email',
  'Ese horario ya está reservado',
];

function publicBookingError(message: string | undefined): Error {
  if (message && BOOKING_KNOWN_ERRORS.includes(message)) return new Error(message);
  return new Error('No se pudo reservar ese horario. Probá de nuevo.');
}

export async function createBooking(input: {
  nombre: string;
  email: string;
  telefono?: string;
  tema?: string;
  nota?: string;
  ymd: string;
  minutes: number;
  honey?: string;
}): Promise<string> {
  if (isHoneyFilled(input.honey)) {
    await new Promise((r) => setTimeout(r, 400));
    return 'ok';
  }
  if (!isSupabaseConfigured()) {
    throw new Error('La agenda aún no está conectada. Configura Supabase.');
  }
  const { data, error } = await getSupabase().rpc('create_booking', {
    p_nombre: clip(input.nombre, FIELD_MAX.nombre),
    p_email: clip(input.email, FIELD_MAX.email).toLowerCase(),
    p_telefono: clip(input.telefono, FIELD_MAX.telefono),
    p_tema: clip(input.tema, FIELD_MAX.tema),
    p_nota: clip(input.nota, FIELD_MAX.nota),
    p_slot_date: input.ymd,
    p_slot_minutes: input.minutes,
    p_slot_label: formatAppointment(input.ymd, input.minutes).slice(0, 160),
  });
  if (error) throw publicBookingError(error.message);
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
