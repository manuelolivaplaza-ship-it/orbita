/** Posición solar aproximada (NOAA-lite) para el taller en Providencia. */

export const SANTIAGO = {
  lat: -33.4247,
  lon: -70.6108,
  tz: "America/Santiago",
} as const;

const RAD = Math.PI / 180;

function julianDay(date: Date) {
  return date.getTime() / 86_400_000 + 2_440_587.5;
}

export type SolarPoint = {
  elevation: number;
  azimuth: number;
  hourAngle: number;
};

export function solarPosition(
  date: Date,
  lat = SANTIAGO.lat,
  lon = SANTIAGO.lon,
): SolarPoint {
  const JD = julianDay(date);
  const n = JD - 2_451_545.0;
  const L = ((280.46 + 0.9856474 * n) % 360 + 360) % 360;
  const g = ((357.528 + 0.9856003 * n) % 360 + 360) % 360;
  const lambda =
    L + 1.915 * Math.sin(g * RAD) + 0.02 * Math.sin(2 * g * RAD);
  const epsilon = 23.439 - 0.0000004 * n;
  const alpha = Math.atan2(
    Math.cos(epsilon * RAD) * Math.sin(lambda * RAD),
    Math.cos(lambda * RAD),
  );
  const delta = Math.asin(Math.sin(epsilon * RAD) * Math.sin(lambda * RAD));

  let gmst = 280.46061837 + 360.98564736629 * (JD - 2_451_545);
  gmst = ((gmst % 360) + 360) % 360;
  const lst = (((gmst + lon) % 360) + 360) % 360;
  const alphaDeg = (((alpha / RAD) % 360) + 360) % 360;
  const H = ((lst - alphaDeg + 540) % 360) - 180;

  const phi = lat * RAD;
  const sinAlt =
    Math.sin(phi) * Math.sin(delta) +
    Math.cos(phi) * Math.cos(delta) * Math.cos(H * RAD);
  const alt = Math.asin(Math.min(1, Math.max(-1, sinAlt)));
  const cosAz =
    (Math.sin(delta) - Math.sin(phi) * sinAlt) /
    (Math.cos(phi) * Math.cos(alt) || 1e-6);
  let az = Math.acos(Math.min(1, Math.max(-1, cosAz)));
  if (Math.sin(H * RAD) > 0) az = 2 * Math.PI - az;

  return {
    elevation: alt / RAD,
    azimuth: az / RAD,
    hourAngle: H,
  };
}

export function northLit(point: SolarPoint) {
  if (point.elevation < 2) return false;
  return point.azimuth < 90 || point.azimuth > 270;
}

export type DayPath = {
  samples: { t: number; elevation: number; azimuth: number }[];
  sunrise: Date | null;
  sunset: Date | null;
  noon: Date | null;
  noonElevation: number;
};

function santiagoYmd(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: SANTIAGO.tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Muestras del día civil en Santiago, cada 10 minutos. */
export function dayPath(date = new Date()): DayPath {
  const ymd = santiagoYmd(date);
  const start = Date.UTC(
    Number(ymd.slice(0, 4)),
    Number(ymd.slice(5, 7)) - 1,
    Number(ymd.slice(8, 10)) - 1,
    0,
    0,
    0,
  );
  const samples: DayPath["samples"] = [];
  let sunrise: Date | null = null;
  let sunset: Date | null = null;
  let noon: Date | null = null;
  let noonElevation = -90;

  for (let i = 0; i < 36 * 6; i++) {
    const t = new Date(start + i * 10 * 60 * 1000);
    if (santiagoYmd(t) !== ymd) continue;
    const p = solarPosition(t);
    samples.push({ t: t.getTime(), elevation: p.elevation, azimuth: p.azimuth });
    if (p.elevation > noonElevation) {
      noonElevation = p.elevation;
      noon = t;
    }
  }

  for (let i = 1; i < samples.length; i++) {
    const a = samples[i - 1];
    const b = samples[i];
    if (a.elevation < 0 && b.elevation >= 0 && !sunrise) {
      sunrise = new Date(b.t);
    }
    if (a.elevation >= 0 && b.elevation < 0 && !sunset) {
      sunset = new Date(b.t);
    }
  }

  return { samples, sunrise, sunset, noon, noonElevation };
}

export function formatSantiago(date: Date, opts?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("es-CL", {
    timeZone: SANTIAGO.tz,
    ...opts,
  }).format(date);
}

export function santiagoParts(date: Date) {
  const time = formatSantiago(date, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: SANTIAGO.tz,
      hour: "2-digit",
      hour12: false,
    }).format(date),
  );
  let moment = "noche";
  if (hour >= 6 && hour < 8) moment = "orto";
  else if (hour >= 8 && hour < 12) moment = "mañana";
  else if (hour >= 12 && hour < 14) moment = "cenit";
  else if (hour >= 14 && hour < 19) moment = "tarde";
  else if (hour >= 19 && hour < 21) moment = "ocaso";
  return { time, moment, hour };
}
