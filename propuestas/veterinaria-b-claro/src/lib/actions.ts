"use server";

export type AppointmentState =
  | { ok: true }
  | { ok: false; error: string }
  | null;

function required(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function requestAppointment(
  _prev: AppointmentState,
  formData: FormData,
): Promise<AppointmentState> {
  const owner = required(formData, "owner");
  const phone = required(formData, "phone");
  const pet = required(formData, "pet");
  const species = required(formData, "species");
  const service = required(formData, "service");
  const date = required(formData, "date");
  const slot = required(formData, "slot");

  if (!owner || !phone || !pet || !species || !service || !date || !slot) {
    return {
      ok: false,
      error: "Faltan datos. Complete titular, teléfono, animal, servicio y horario.",
    };
  }

  if (phone.replace(/\D/g, "").length < 8) {
    return {
      ok: false,
      error: "Revise el teléfono: necesitamos uno al que podamos escribir por WhatsApp.",
    };
  }

  return { ok: true };
}
