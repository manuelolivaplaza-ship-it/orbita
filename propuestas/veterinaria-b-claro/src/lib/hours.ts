import { hours } from "@/lib/clinic";

const TIME_ZONE = "America/Argentina/Buenos_Aires";

export type ClinicStatus = {
  open: boolean;
  label: string;
  detail: string;
};

function partsInBuenosAires(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const weekday = map.weekday;
  const day =
    weekday === "Sun"
      ? 0
      : weekday === "Mon"
        ? 1
        : weekday === "Tue"
          ? 2
          : weekday === "Wed"
            ? 3
            : weekday === "Thu"
              ? 4
              : weekday === "Fri"
                ? 5
                : 6;
  const minutes = Number(map.hour) * 60 + Number(map.minute);
  return { day, minutes };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function getClinicStatus(now = new Date()): ClinicStatus {
  const { day, minutes } = partsInBuenosAires(now);
  const today = hours.find((entry) =>
    (entry.days as readonly number[]).includes(day),
  );

  if (!today?.open || !today.close) {
    return {
      open: false,
      label: "Consultorio cerrado",
      detail: "Urgencias 24 h · 11 4800 2140",
    };
  }

  const openAt = toMinutes(today.open);
  const closeAt = toMinutes(today.close);
  const isOpen = minutes >= openAt && minutes < closeAt;

  if (isOpen) {
    return {
      open: true,
      label: "Consultorio abierto",
      detail: `Hoy hasta las ${today.close} h`,
    };
  }

  return {
    open: false,
    label: "Consultorio cerrado",
    detail: "Urgencias 24 h · 11 4800 2140",
  };
}
