export const BOOKING = {
  timezone: 'America/Santiago',
  timezoneLabel: 'Santiago, Chile',
  startHour: 8,
  endHour: 19,
  durationMin: 30,
  slotMin: 30,
  bufferMin: 30,
} as const;

const WEEKDAYS_ES = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'] as const;
const MONTHS_ES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
] as const;

export type CalendarCell = {
  ymd: string;
  day: number;
  inMonth: boolean;
  weekday: number;
  isWeekend: boolean;
  isPast: boolean;
  isToday: boolean;
  bookable: boolean;
};

export type TimeSlot = {
  minutes: number;
  label: string;
  available: boolean;
};

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function toYmd(year: number, monthIndex: number, day: number): string {
  return `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
}

/** Fecha/hora civil en America/Santiago. */
export function santiagoNow(ref = new Date()): {
  ymd: string;
  year: number;
  monthIndex: number;
  day: number;
  minutes: number;
} {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: BOOKING.timezone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(ref);

  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  const year = get('year');
  const month = get('month');
  const day = get('day');
  return {
    ymd: toYmd(year, month - 1, day),
    year,
    monthIndex: month - 1,
    day,
    minutes: get('hour') * 60 + get('minute'),
  };
}

/** Mediodía UTC → mismo día civil en Chile. */
function weekdayMon0(ymd: string): number {
  const wd = new Date(`${ymd}T15:00:00.000Z`).getUTCDay();
  return (wd + 6) % 7;
}

export function formatMinutes(minutes: number): string {
  return `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
}

export function formatLongDate(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  const wd = weekdayMon0(ymd);
  return `${WEEKDAYS_ES[wd]} ${d} de ${MONTHS_ES[m - 1]} de ${y}`;
}

export function formatMonthTitle(year: number, monthIndex: number): string {
  const name = MONTHS_ES[monthIndex];
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${year}`;
}

export function formatAppointment(ymd: string, minutes: number): string {
  return `${formatLongDate(ymd)} · ${formatMinutes(minutes)}–${formatMinutes(minutes + BOOKING.durationMin)}`;
}

export function daysInMonth(year: number, monthIndex: number): number {
  return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

export function buildMonthGrid(year: number, monthIndex: number): CalendarCell[] {
  const today = santiagoNow();
  const firstYmd = toYmd(year, monthIndex, 1);
  const lead = weekdayMon0(firstYmd);
  const count = daysInMonth(year, monthIndex);
  const prevCount = daysInMonth(year, monthIndex === 0 ? 11 : monthIndex - 1);
  const prevYear = monthIndex === 0 ? year - 1 : year;
  const prevMonth = monthIndex === 0 ? 11 : monthIndex - 1;
  const nextYear = monthIndex === 11 ? year + 1 : year;
  const nextMonth = monthIndex === 11 ? 0 : monthIndex + 1;

  const cells: CalendarCell[] = [];

  for (let i = lead - 1; i >= 0; i--) {
    cells.push(makeCell(toYmd(prevYear, prevMonth, prevCount - i), prevCount - i, false, today));
  }
  for (let d = 1; d <= count; d++) {
    cells.push(makeCell(toYmd(year, monthIndex, d), d, true, today));
  }
  let n = 1;
  while (cells.length % 7 !== 0 || cells.length < 42) {
    cells.push(makeCell(toYmd(nextYear, nextMonth, n), n, false, today));
    n += 1;
    if (cells.length >= 42) break;
  }
  return cells;
}

function makeCell(
  ymd: string,
  day: number,
  inMonth: boolean,
  today: ReturnType<typeof santiagoNow>,
): CalendarCell {
  const weekday = weekdayMon0(ymd);
  const isWeekend = weekday >= 5;
  const isPast = ymd < today.ymd;
  const isToday = ymd === today.ymd;
  return {
    ymd,
    day,
    inMonth,
    weekday,
    isWeekend,
    isPast,
    isToday,
    bookable: inMonth && !isWeekend && !isPast,
  };
}

export function slotsForDay(ymd: string): TimeSlot[] {
  const today = santiagoNow();
  const slots: TimeSlot[] = [];
  const lastStart = BOOKING.endHour * 60 - BOOKING.durationMin;
  for (let m = BOOKING.startHour * 60; m <= lastStart; m += BOOKING.slotMin) {
    let available = true;
    if (ymd < today.ymd) available = false;
    if (ymd === today.ymd && m < today.minutes + BOOKING.bufferMin) available = false;
    slots.push({ minutes: m, label: formatMinutes(m), available });
  }
  return slots;
}

export function slotPeriod(minutes: number): 'Mañana' | 'Tarde' | 'Final del día' {
  if (minutes < 12 * 60) return 'Mañana';
  if (minutes < 16 * 60) return 'Tarde';
  return 'Final del día';
}

export function canGoPrevMonth(year: number, monthIndex: number): boolean {
  const t = santiagoNow();
  return year > t.year || (year === t.year && monthIndex > t.monthIndex);
}
