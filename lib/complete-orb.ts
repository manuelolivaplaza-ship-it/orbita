export type ChatTurn = { role: 'user' | 'assistant'; content: string };

export type OrbAction =
  | { type: 'plan'; plan: string }
  | { type: 'proposal'; sector: string }
  | { type: 'schedule' }
  | { type: 'quote'; plan?: string };

export type OrbReply = { text: string; action: OrbAction | null };

const ZEN_BASE = 'https://opencode.ai/zen/v1';
const ZEN_URL = `${ZEN_BASE}/chat/completions`;
const DEFAULT_MODEL = 'deepseek-v4-flash-free';
const ZEN_FALLBACKS = ['deepseek-v4-flash-free', 'big-pickle', 'mimo-v2.5-free'];
const MAX_TURNS = 12;
const MAX_CHARS = 1200;

const SYSTEM_PROMPT = `Quién eres
Te llamas **Orb**. Eres el asistente con IA de Reclu (reclu.cl), un estudio en Santiago de Chile que crea sitios web que venden.
Tu nombre es solo Orb. Nunca te presentes con otro nombre (ni Eris, ni Orbit, ni DeepSeek, ni el de ningún modelo). Si te preguntan cómo te llamas o qué eres: "Soy Orb, el copiloto de Reclu."
Orb ≠ Orbit: tú eres Orb (este chat en reclu.cl). Orbit es el chat con IA que Reclu deja instalado en el sitio del cliente, con la suscripción mensual.

Tono
Español de Chile, tuteo ("te", "tu"). Cercano, concreto, sin jerga vacía ni emojis de más. Respuestas cortas: máximo 90 palabras. Puedes usar **negritas**. Una pregunta de cierre cuando ayude a avanzar.

Qué haces tú (Orb)
Ayudas a elegir plan, ver una demo de rubro, entender el CRM/WhatsApp, plazos y cómo cotizar o agendar. No cierras contratos: orientas y pasas a cotización o reunión.

Qué hace Reclu
- Sitios claros y rápidos en 7–14 días hábiles, con WhatsApp para que te escriban.
- Cada sitio incluye panel CRM (catálogo, prospectos, agenda, pedidos, alerta a WhatsApp). Sin HubSpot.
- Galería de demos de rubro (no son sitios de clientes). Casos reales: ProgramBI y Maverlang.
- Contacto: hola@reclu.cl · WhatsApp +56 9 3540 9699.

Planes de desarrollo (compra única, neto + 19% IVA; 50% al partir y 50% al publicar)
- Sonda: $420.000 / 10,5 UF — landing / campaña.
- Estación (recomendado): $890.000 / 22,5 UF — sitio comercial + CRM.
- Constelación: $1.490.000 / 37,5 UF — multi-sección / rediseño.
- Aplicación: $1.890.000 / 48,0 UF — web app / PWA / portales.
1 UF ≈ $39.600 CLP.
Hasta el 31/10 el Modo Turbo (7 días hábiles) va a $0 en Sonda y Estación si entregan contenidos a tiempo. Plazo estándar: 10–14 días hábiles.

Suscripción mensual (sitio + CRM + Orbit, el chat con IA en el sitio del cliente)
- Esencial: $99.000 / 2,5 UF — 2.000 chats/mes.
- Pro: $198.000 / 5 UF — 5.000 chats/mes.
- Escala: $277.000 / 7 UF — 10.000 chats/mes.
Un chat = una conversación completa, no un mensaje suelto. Sin permanencia.

Rubros con demo: legal, dental, inmobiliaria, veterinaria, marketing, software, diseno, ecommerce, arquitectura, bienestar, contabilidad, centro-medico, concesionaria, estetica, gastronomia, neumaticos, repuestos, ferreteria, distribuidora.

Reglas
- No inventes precios, plazos ni nombres. Si no sabes, dilo y ofrece cotizar o agendar.
- No hables de otros proveedores de IA ni del modelo que te ejecuta.
- Si el visitante nombra un rubro, ofrece ver una demo. Si pide precio, recomienda un plan. Si pide reunión, agenda.

Responde SIEMPRE en JSON válido, sin markdown alrededor:
{"text":"respuesta al visitante","action":null}

"action" puede ser:
- {"type":"plan","plan":"Sonda"|"Estación"|"Constelación"|"Aplicación"}
- {"type":"proposal","sector":"<slug>"}
- {"type":"schedule"}
- {"type":"quote","plan":"Estación"}
- null si solo conversas.`;

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

function asText(value: unknown): string {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value
      .map((part) => {
        if (typeof part === 'string') return part;
        if (part && typeof part === 'object') {
          const row = part as { text?: unknown; content?: unknown };
          if (typeof row.text === 'string') return row.text;
          if (typeof row.content === 'string') return row.content;
        }
        return '';
      })
      .join('');
  }
  return '';
}

function parseReply(raw: unknown): OrbReply {
  const source = asText(raw).trim();
  const parsed = extractJsonObject(source);
  if (!parsed || typeof parsed !== 'object') {
    return { text: source || '¿Me cuentas un poco más de tu negocio?', action: null };
  }
  const obj = parsed as Record<string, unknown>;
  const textCandidate =
    (typeof obj.text === 'string' && obj.text.trim()) ||
    (typeof obj.answer === 'string' && obj.answer.trim()) ||
    '';
  const text = textCandidate || source;
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

  const models = [
    ...new Set([input.model, process.env.OPENCODE_MODEL, ...ZEN_FALLBACKS].filter(Boolean)),
  ] as string[];

  let lastMessage = 'OpenCode Zen rechazó la solicitud';
  let lastStatus = 400;

  for (const current of models) {
    const payload = JSON.stringify({
      model: current,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...turns],
      temperature: 0.5,
      max_tokens: 2048,
    });

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 55000);
      let res: Response;
      try {
        res = await fetch(ZEN_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${input.apiKey}`,
            'Content-Type': 'application/json',
            'x-opencode-session': 'reclu-orb',
            'User-Agent': 'reclu-orb/zen',
          },
          body: payload,
          signal: controller.signal,
        });
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          throw Object.assign(new Error('La IA tardó demasiado'), { status: 504 });
        }
        throw Object.assign(new Error('No pude contactar a OpenCode Zen'), { status: 502 });
      } finally {
        clearTimeout(timer);
      }

      const body = await res.text();
      if (res.ok) {
        try {
          const json = JSON.parse(body) as {
            choices?: { message?: { content?: unknown } }[];
          };
          return parseReply(json.choices?.[0]?.message?.content ?? '');
        } catch {
          throw Object.assign(new Error('Respuesta inválida de OpenCode Zen'), { status: 502 });
        }
      }

      lastMessage = 'OpenCode Zen rechazó la solicitud';
      try {
        const errJson = JSON.parse(body) as {
          error?: string | { message?: string };
          message?: string;
        };
        if (typeof errJson.error === 'string') lastMessage = errJson.error;
        else if (errJson.error?.message) lastMessage = errJson.error.message;
        else if (errJson.message) lastMessage = errJson.message;
      } catch {
        /* keep default */
      }
      lastStatus = res.status;
      const unavailable =
        res.status === 404 ||
        /unavailable|not found|not available|does not exist|unknown model|model_not_found/i.test(
          lastMessage,
        );
      const rateLimited =
        res.status === 429 || /rate limit|too many|quota|频率|速率|限流/i.test(lastMessage);
      if (unavailable) break;
      if (!rateLimited || attempt === 2) {
        throw Object.assign(
          new Error(
            rateLimited
              ? 'Hay mucha demanda en la IA ahora. Esperá unos segundos y preguntame de nuevo.'
              : lastMessage,
          ),
          {
            status: rateLimited
              ? 429
              : lastStatus === 401 || lastStatus === 403 || lastStatus >= 500
                ? 502
                : 400,
          },
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
    }
  }

  throw Object.assign(
    new Error('Ese modelo no está disponible ahora en OpenCode Zen. Probá de nuevo en un rato.'),
    { status: 502 },
  );
}
