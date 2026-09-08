export type ChatTurn = { role: 'user' | 'assistant'; content: string };

export type OrbAction =
  | { type: 'plan'; plan: string }
  | { type: 'proposal'; sector: string }
  | { type: 'schedule' }
  | { type: 'quote'; plan?: string };

export type OrbReply = { text: string; action: OrbAction | null };

const BAI_URL = 'https://api.b.ai/v1/chat/completions';
const DEFAULT_MODEL = 'glm-5.3-flash';
const MAX_TURNS = 12;
const MAX_CHARS = 1200;

const SYSTEM_PROMPT = `Eres Orb, el copiloto con IA de Reclu (reclu.cl), un estudio en Santiago de Chile que crea sitios web que venden.

Tono: cercano, claro, en español de Chile (tuteo: "te", "tu"). Sin jerga vacía. Respuestas cortas (máx. 90 palabras). Puedes usar **negritas**.

Qué hace Reclu:
- Sitios claros y rápidos en 7–14 días hábiles, con WhatsApp para que te escriban.
- Cada sitio incluye panel CRM (catálogo, prospectos, agenda, pedidos, alerta a WhatsApp). Sin HubSpot.
- Galería de demos de rubro navegables (no son sitios de clientes). Casos reales: ProgramBI y Maverlang.
- Contacto: hola@reclu.cl · WhatsApp +56 9 3540 9699.

Planes de desarrollo (compra única, neto + 19% IVA; 50% al partir y 50% al publicar):
- Sonda: $420.000 / 10,5 UF — landing / campaña.
- Estación (recomendado): $890.000 / 22,5 UF — sitio comercial + CRM.
- Constelación: $1.490.000 / 37,5 UF — multi-sección / rediseño.
- Aplicación: $1.890.000 / 48,0 UF — web app / PWA / portales.
1 UF ≈ $39.600 CLP.

Hasta el 31/10 el Modo Turbo (7 días hábiles) va a $0 en Sonda y Estación si entregan contenidos a tiempo. Plazo estándar: 10–14 días hábiles.

Suscripción mensual (sitio + CRM + Orbit, el mismo chat con IA):
- Esencial: $99.000 / 2,5 UF — 2.000 chats/mes.
- Pro: $198.000 / 5 UF — 5.000 chats/mes.
- Escala: $277.000 / 7 UF — 10.000 chats/mes.
Un chat = una conversación completa, no un mensaje suelto. Sin permanencia.

Rubros con demo: legal, dental, inmobiliaria, veterinaria, marketing, software, diseno, ecommerce, arquitectura, bienestar, contabilidad, centro-medico, concesionaria, estetica, gastronomia, neumaticos, repuestos, ferreteria, distribuidora.

Responde SIEMPRE en JSON válido, sin markdown alrededor:
{
  "text": "respuesta al visitante",
  "action": null
}

"action" puede ser:
- {"type":"plan","plan":"Sonda"|"Estación"|"Constelación"|"Aplicación"} cuando hables de un plan de desarrollo.
- {"type":"proposal","sector":"<slug>"} cuando el visitante nombre un rubro y quieras mostrar una demo.
- {"type":"schedule"} si pide reunión, llamada o agendar.
- {"type":"quote","plan":"Estación"} si pide cotización.
- null si solo conversas.

No inventes precios ni plazos distintos a los de arriba. Si no sabes algo, dilo y ofrece cotizar o agendar. No hables de otros proveedores de IA.`;

function clipTurns(messages: ChatTurn[]): ChatTurn[] {
  const clean: ChatTurn[] = [];
  for (const msg of messages) {
    if (msg.role !== 'user' && msg.role !== 'assistant') continue;
    const content = String(msg.content || '').trim().slice(0, MAX_CHARS);
    if (!content) continue;
    clean.push({ role: msg.role, content });
  }
  return clean.slice(-MAX_TURNS);
}

function extractJsonObject(raw: string): unknown {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1].trim() : trimmed;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

const PLAN_IDS = new Set(['Sonda', 'Estación', 'Constelacion', 'Constelación', 'Aplicación', 'Aplicacion']);
const SECTORS = new Set([
  'legal',
  'dental',
  'inmobiliaria',
  'veterinaria',
  'marketing',
  'software',
  'diseno',
  'ecommerce',
  'arquitectura',
  'bienestar',
  'contabilidad',
  'centro-medico',
  'concesionaria',
  'estetica',
  'gastronomia',
  'neumaticos',
  'repuestos',
  'ferreteria',
  'distribuidora',
]);

function normalizePlan(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const clean = value.replace(/^Plan\s+/i, '').trim();
  if (/sonda/i.test(clean)) return 'Sonda';
  if (/estaci/i.test(clean)) return 'Estación';
  if (/constel/i.test(clean)) return 'Constelación';
  if (/aplicaci|pwa|app/i.test(clean)) return 'Aplicación';
  return PLAN_IDS.has(clean) ? clean : null;
}

function parseReply(raw: string): OrbReply {
  const parsed = extractJsonObject(raw);
  if (!parsed || typeof parsed !== 'object') {
    return { text: raw.trim() || '¿Me cuentas un poco más de tu negocio?', action: null };
  }
  const obj = parsed as Record<string, unknown>;
  const textCandidate =
    (typeof obj.text === 'string' && obj.text.trim()) ||
    (typeof obj.answer === 'string' && obj.answer.trim()) ||
    '';
  const text = textCandidate || raw.trim();
  const actionRaw = obj.action;
  if (!actionRaw || typeof actionRaw !== 'object') {
    return { text, action: null };
  }
  const action = actionRaw as Record<string, unknown>;
  const type = action.type;
  if (type === 'schedule') return { text, action: { type: 'schedule' } };
  if (type === 'plan') {
    const plan = normalizePlan(action.plan ?? action.name);
    return plan ? { text, action: { type: 'plan', plan } } : { text, action: null };
  }
  if (type === 'quote') {
    const plan = normalizePlan(action.plan ?? action.name) ?? undefined;
    return { text, action: { type: 'quote', plan } };
  }
  if (type === 'proposal') {
    const sector = typeof action.sector === 'string' ? action.sector.trim().toLowerCase() : '';
    return sector && SECTORS.has(sector) ? { text, action: { type: 'proposal', sector } } : { text, action: null };
  }
  return { text, action: null };
}

export async function completeOrbChat(input: {
  messages: ChatTurn[];
  apiKey: string;
  model?: string;
}): Promise<OrbReply> {
  const turns = clipTurns(input.messages);
  if (turns.length === 0) {
    throw Object.assign(new Error('Mensaje vacío'), { status: 400 });
  }
  if (!turns.some((t) => t.role === 'user')) {
    throw Object.assign(new Error('Falta un mensaje del visitante'), { status: 400 });
  }

  const model = input.model || process.env.BAI_MODEL || DEFAULT_MODEL;
  const payload = {
    model,
    messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...turns],
    temperature: 0.5,
    max_tokens: 2048,
    response_format: { type: 'json_object' },
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  let res: Response;
  try {
    res = await fetch(BAI_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${input.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      throw Object.assign(new Error('La IA tardó demasiado'), { status: 504 });
    }
    throw Object.assign(new Error('No pude contactar a B.AI'), { status: 502 });
  } finally {
    clearTimeout(timer);
  }

  const body = await res.text();
  if (!res.ok) {
    let message = 'B.AI rechazó la solicitud';
    try {
      const errJson = JSON.parse(body) as { error?: { message?: string } };
      if (errJson.error?.message) message = errJson.error.message;
    } catch {
      /* keep default */
    }
    const status = res.status === 401 || res.status === 403 ? 502 : res.status >= 500 ? 502 : 400;
    throw Object.assign(new Error(message), { status });
  }

  let content = '';
  try {
    const json = JSON.parse(body) as {
      choices?: { message?: { content?: string } }[];
    };
    content = json.choices?.[0]?.message?.content ?? '';
  } catch {
    throw Object.assign(new Error('Respuesta inválida de B.AI'), { status: 502 });
  }

  return parseReply(content);
}
