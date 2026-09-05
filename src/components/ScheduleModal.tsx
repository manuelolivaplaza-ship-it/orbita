import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Clock, MapPin, Video, X } from 'lucide-react';
import {
  BOOKING,
  buildMonthGrid,
  canGoNextMonth,
  canGoPrevMonth,
  formatAppointment,
  formatLongDate,
  formatMinutes,
  formatMonthTitle,
  santiagoNow,
  slotPeriod,
  slotsForDay,
} from '../data/booking';
import { HoneypotField } from './HoneypotField';
import { FIELD_MAX } from '../lib/formLimits';
import { createBooking, fetchTakenMinutes } from '../lib/bookings';

const WEEK_HEAD = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const now = santiagoNow();
  const [year, setYear] = useState(now.year);
  const [monthIndex, setMonthIndex] = useState(now.monthIndex);
  const [selectedYmd, setSelectedYmd] = useState<string | null>(null);
  const [selectedMin, setSelectedMin] = useState<number | null>(null);
  const [step, setStep] = useState<'pick' | 'details' | 'done'>('pick');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tema, setTema] = useState('descubrimiento');
  const [nota, setNota] = useState('');
  const [honey, setHoney] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [taken, setTaken] = useState<Set<number>>(new Set());
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      const t = santiagoNow();
      setYear(t.year);
      setMonthIndex(t.monthIndex);
      setSelectedYmd(null);
      setSelectedMin(null);
      setStep('pick');
      setNombre('');
      setEmail('');
      setTelefono('');
      setTema('descubrimiento');
      setNota('');
      setHoney('');
      setError(null);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    dialogRef.current?.querySelector<HTMLElement>('button, input')?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !selectedYmd) {
      setTaken(new Set());
      return;
    }
    let cancelled = false;
    fetchTakenMinutes(selectedYmd)
      .then((next) => {
        if (!cancelled) setTaken(next);
      })
      .catch(() => {
        if (!cancelled) setTaken(new Set());
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, selectedYmd]);

  const grid = useMemo(() => buildMonthGrid(year, monthIndex), [year, monthIndex]);
  const slots = useMemo(() => {
    const base = selectedYmd ? slotsForDay(selectedYmd) : [];
    return base.map((slot) => ({
      ...slot,
      available: slot.available && !taken.has(slot.minutes),
    }));
  }, [selectedYmd, taken]);
  const openSlots = slots.filter((s) => s.available);
  const canPrev = canGoPrevMonth(year, monthIndex);
  const canNext = canGoNextMonth(year, monthIndex);

  const grouped = useMemo(() => {
    const groups: { label: string; items: typeof slots }[] = [];
    for (const slot of openSlots) {
      const label = slotPeriod(slot.minutes);
      const last = groups[groups.length - 1];
      if (!last || last.label !== label) groups.push({ label, items: [slot] });
      else last.items.push(slot);
    }
    return groups;
  }, [openSlots]);

  const shiftMonth = (dir: -1 | 1) => {
    if (dir < 0 && !canPrev) return;
    if (dir > 0 && !canNext) return;
    const next = monthIndex + dir;
    if (next < 0) {
      setYear((y) => y - 1);
      setMonthIndex(11);
    } else if (next > 11) {
      setYear((y) => y + 1);
      setMonthIndex(0);
    } else {
      setMonthIndex(next);
    }
  };

  const pickDay = (ymd: string, bookable: boolean) => {
    if (!bookable) return;
    setSelectedYmd(ymd);
    setSelectedMin(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedYmd || selectedMin === null) return;
    setSending(true);
    setError(null);
    try {
      await createBooking({
        nombre,
        email,
        telefono,
        tema,
        nota,
        ymd: selectedYmd,
        minutes: selectedMin,
        honey,
      });
      setTaken((prev) => new Set(prev).add(selectedMin));
      setStep('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo confirmar. Prueba de nuevo.');
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  const summary =
    selectedYmd && selectedMin !== null ? formatAppointment(selectedYmd, selectedMin) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="fixed inset-0 bg-[#0B0B12]/50 backdrop-blur-md" onClick={onClose} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedule-title"
        className="relative w-full max-w-5xl max-h-[100dvh] sm:max-h-[92vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-zinc-200/90 z-10 flex flex-col overflow-hidden animate-fade-in-up"
      >
        <div className="flex flex-col lg:flex-row min-h-0 flex-1">
          {/* Left rail */}
          <aside className="relative lg:w-[18.5rem] shrink-0 bg-[#0B0B12] text-white px-5 py-4 sm:px-7 sm:py-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute top-24 -right-10 w-36 h-36 rounded-full border border-white/8 pointer-events-none" />
            <div className="absolute bottom-10 right-6 w-2 h-2 rounded-full bg-white/70 pointer-events-none" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 mb-1 sm:mb-3">
              Órbita · Agenda
            </p>
            <h2 id="schedule-title" className="text-xl sm:text-2xl font-medium tracking-tight leading-tight mb-1 sm:mb-2">
              Reunión de 30 minutos
            </h2>
            <p className="text-xs text-white/60 mb-2 sm:hidden">
              30 min · Google Meet · {BOOKING.timezoneLabel}
            </p>
            <p className="hidden sm:block text-sm text-white/60 leading-relaxed mb-6">
              Una llamada para entender qué vendes y si tiene sentido trabajar juntos.
            </p>

            <ul className="hidden sm:block space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 text-white/45 shrink-0" />
                30 min · lun a vie, 8:00–19:00
              </li>
              <li className="flex items-start gap-2.5">
                <Video className="w-4 h-4 mt-0.5 text-white/45 shrink-0" />
                Google Meet o llamada
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-white/45 shrink-0" />
                Horario de {BOOKING.timezoneLabel}
              </li>
            </ul>

            {summary && (
              <div className="mt-8 rounded-2xl bg-white/8 border border-white/10 px-4 py-3">
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Reservado</p>
                <p className="text-sm font-medium leading-snug capitalize">{summary}</p>
              </div>
            )}
          </aside>

          {/* Right */}
          <div className="flex-1 min-h-0 flex flex-col bg-[#F7F8FC]">
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-zinc-200/80 bg-white/70">
              <p className="text-sm font-medium text-[#0B0B12]">
                {step === 'pick' && 'Elige día y hora'}
                {step === 'details' && 'Tus datos'}
                {step === 'done' && 'Listo'}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {step === 'pick' && (
                <div className="grid lg:grid-cols-[1fr_15.5rem] gap-0 lg:min-h-[32rem]">
                  <div className="p-5 sm:p-7 bg-white">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-xl font-medium tracking-tight text-[#0B0B12]">
                        {formatMonthTitle(year, monthIndex)}
                      </h3>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => shiftMonth(-1)}
                          disabled={!canPrev}
                          className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 disabled:opacity-30 disabled:pointer-events-none"
                          aria-label="Mes anterior"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => shiftMonth(1)}
                          disabled={!canNext}
                          className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 disabled:opacity-30 disabled:pointer-events-none"
                          aria-label="Mes siguiente"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 mb-2">
                      {WEEK_HEAD.map((d, i) => (
                        <div
                          key={d}
                          className={`text-center text-[10px] font-semibold uppercase tracking-wider py-1 ${
                            i >= 5 ? 'text-zinc-300' : 'text-zinc-400'
                          }`}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {grid.map((cell) => {
                        const selected = selectedYmd === cell.ymd;
                        return (
                          <button
                            key={cell.ymd}
                            type="button"
                            disabled={!cell.bookable}
                            onClick={() => pickDay(cell.ymd, cell.bookable)}
                            className={`relative aspect-square rounded-2xl text-sm font-medium transition-all ${
                              !cell.inMonth
                                ? 'text-zinc-300 pointer-events-none'
                                : cell.bookable
                                  ? selected
                                    ? 'bg-[#0B0B12] text-white shadow-md scale-[1.04]'
                                    : 'text-[#0B0B12] hover:bg-zinc-100'
                                  : 'text-zinc-300 cursor-not-allowed'
                            }`}
                          >
                            {cell.day}
                            {cell.isToday && !selected && (
                              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0B0B12]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-[11px] text-zinc-400">
                      Sábados y domingos no están disponibles. Hasta {BOOKING.horizonDays} días. Punto = hoy.
                    </p>
                  </div>

                  <div className="border-t lg:border-t-0 lg:border-l border-zinc-200/80 bg-[#F7F8FC] p-5 sm:p-6">
                    {!selectedYmd ? (
                      <div className="h-full min-h-[14rem] flex flex-col items-center justify-center text-center px-2">
                        <CalendarDays className="w-8 h-8 text-zinc-300 mb-3" />
                        <p className="text-sm text-zinc-500 leading-relaxed">
                          Selecciona un día hábil para ver los horarios.
                        </p>
                      </div>
                    ) : openSlots.length === 0 ? (
                      <div className="h-full min-h-[14rem] flex flex-col items-center justify-center text-center px-2">
                        <p className="text-sm font-medium text-[#0B0B12] mb-1">Sin cupos este día</p>
                        <p className="text-xs text-zinc-500">Prueba otro día de la semana.</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                          Horarios
                        </p>
                        <p className="text-sm font-medium text-[#0B0B12] capitalize mb-4">
                          {formatLongDate(selectedYmd)}
                        </p>
                        <div className="space-y-4 max-h-[22rem] overflow-y-auto pr-1">
                          {grouped.map((group) => (
                            <div key={group.label}>
                              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                                {group.label}
                              </p>
                              <div className="grid grid-cols-2 gap-1.5">
                                {group.items.map((slot) => {
                                  const on = selectedMin === slot.minutes;
                                  return (
                                    <button
                                      key={slot.minutes}
                                      type="button"
                                      onClick={() => setSelectedMin(slot.minutes)}
                                      className={`py-2 rounded-xl text-sm font-medium border transition-all ${
                                        on
                                          ? 'bg-[#0B0B12] text-white border-[#0B0B12]'
                                          : 'bg-white text-[#0B0B12] border-zinc-200 hover:border-zinc-400'
                                      }`}
                                    >
                                      {slot.label}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 'details' && selectedYmd && selectedMin !== null && (
                <form onSubmit={handleSubmit} className="p-5 sm:p-8 max-w-lg">
                  <button
                    type="button"
                    onClick={() => setStep('pick')}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-[#0B0B12] mb-5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Cambiar horario
                  </button>
                  <h3 className="text-2xl font-medium tracking-tight text-[#0B0B12] mb-1">
                    Confirma la reunión
                  </h3>
                  <p className="text-sm text-zinc-500 capitalize mb-6">{summary}</p>

                  <div className="space-y-3 relative">
                    <HoneypotField value={honey} onChange={setHoney} />
                    <input
                      required
                      placeholder="Nombre *"
                      value={nombre}
                      maxLength={FIELD_MAX.nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-zinc-400"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email *"
                      value={email}
                      maxLength={FIELD_MAX.email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-zinc-400"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp / teléfono"
                      value={telefono}
                      maxLength={FIELD_MAX.telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-zinc-400"
                    />
                    <select
                      value={tema}
                      onChange={(e) => setTema(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-zinc-400"
                    >
                      <option value="descubrimiento">Quiero ver si calzamos</option>
                      <option value="landing">Landing / campaña</option>
                      <option value="redisenio">Rediseño de sitio</option>
                      <option value="otro">Otra cosa</option>
                    </select>
                    <textarea
                      rows={3}
                      placeholder="Contexto breve (opcional)"
                      value={nota}
                      maxLength={FIELD_MAX.nota}
                      onChange={(e) => setNota(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none focus:border-zinc-400 resize-none"
                    />
                  </div>
                  {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#0B0B12] text-white py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 disabled:opacity-70"
                  >
                    {sending ? 'Confirmando…' : 'Confirmar reunión'}
                    <ArrowRight className="w-4 h-4 text-zinc-400" />
                  </button>
                </form>
              )}

              {step === 'done' && (
                <div className="p-10 text-center max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 mb-5">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#0B0B12] mb-2">Reunión pedida</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed capitalize mb-2">{summary}</p>
                  <p className="text-xs text-zinc-500 mb-8">
                    Te confirmamos el link de la llamada. El horario es de {BOOKING.timezoneLabel}.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-[#0B0B12] text-white text-sm font-medium"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>

            {step === 'pick' && (
              <div className="shrink-0 border-t border-zinc-200/80 bg-white px-5 sm:px-7 py-4 flex items-center justify-between gap-3">
                <p className="text-xs text-zinc-500 hidden sm:block">
                  {selectedMin !== null && selectedYmd
                    ? `${formatMinutes(selectedMin)} · 30 min`
                    : 'Elige un horario para continuar'}
                </p>
                <button
                  type="button"
                  disabled={selectedMin === null}
                  onClick={() => setStep('details')}
                  className="ml-auto inline-flex items-center gap-2 bg-[#0B0B12] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 disabled:opacity-35 disabled:pointer-events-none"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
