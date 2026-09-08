const ZEN_URL = 'https://opencode.ai/zen/v1/chat/completions';
const DEFAULT_MODEL = 'deepseek-v4-flash-free';
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

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function clipTurns(messages) {
  const clean = [];
  if (!Array.isArray(messages)) return clean;
  for (const msg of messages) {
    if (!msg || (msg.role !== 'user' && msg.role !== 'assistant')) continue;
    if (typeof msg.content !== 'string') continue;
    const content = msg.content.trim().slice(0, MAX_CHARS);
    if (!content) continue;
    clean.push({ role: msg.role, content });
  }
  return clean.slice(-MAX_TURNS);
}

function asText(value) {
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) {
    return value
      .map((part) => {
        if (typeof part === 'string') return part;
        if (part && typeof part === 'object') {
          if (typeof part.text === 'string') return part.text;
          if (typeof part.content === 'string') return part.content;
        }
        return '';
      })
      .join('');
  }
  return '';
}

function extractJsonObject(raw) {
  const trimmed = String(raw || '').trim();
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

function normalizePlan(value) {
  if (typeof value !== 'string') return null;
  const clean = value.replace(/^Plan\s+/i, '').trim();
  if (/sonda/i.test(clean)) return 'Sonda';
  if (/estaci/i.test(clean)) return 'Estación';
  if (/constel/i.test(clean)) return 'Constelación';
  if (/aplicaci|pwa|app/i.test(clean)) return 'Aplicación';
  return null;
}

function parseReply(raw) {
  const source = asText(raw).trim();
  const parsed = extractJsonObject(source);
  if (!parsed || typeof parsed !== 'object') {
    return { text: source || '¿Me cuentas un poco más de tu negocio?', action: null };
  }
  const text =
    (typeof parsed.text === 'string' && parsed.text.trim()) ||
    (typeof parsed.answer === 'string' && parsed.answer.trim()) ||
    source;
  const action = parsed.action;
  if (!action || typeof action !== 'object') return { text, action: null };
  if (action.type === 'schedule') return { text, action: { type: 'schedule' } };
  if (action.type === 'plan') {
    const plan = normalizePlan(action.plan || action.name);
    return plan ? { text, action: { type: 'plan', plan } } : { text, action: null };
  }
  if (action.type === 'quote') {
    const plan = normalizePlan(action.plan || action.name) || undefined;
    return { text, action: { type: 'quote', plan } };
  }
  if (action.type === 'proposal') {
    const sector = typeof action.sector === 'string' ? action.sector.trim().toLowerCase() : '';
    return sector && SECTORS.has(sector)
      ? { text, action: { type: 'proposal', sector } }
      : { text, action: null };
  }
  return { text, action: null };
}

function baiErrorMessage(body) {
  try {
    const errJson = JSON.parse(body);
    if (typeof errJson.error === 'string') return errJson.error;
    if (errJson.error && typeof errJson.error.message === 'string') return errJson.error.message;
    if (typeof errJson.message === 'string') return errJson.message;
  } catch {
    /* keep default */
  }
  return 'OpenCode Zen rechazó la solicitud';
}

function isRateLimit(status, message) {
  return (
    status === 429 ||
    /rate limit|too many|quota|频率|速率|限流/i.test(String(message || ''))
  );
}

function isUnavailable(status, message) {
  return (
    status === 404 ||
    /unavailable|not found|not available|does not exist|unknown model|model_not_found/i.test(
      String(message || ''),
    )
  );
}

function modelCandidates(preferred) {
  return [
    ...new Set(
      [preferred, process.env.OPENCODE_MODEL, DEFAULT_MODEL, 'deepseek-v4-flash', 'big-pickle'].filter(
        Boolean,
      ),
    ),
  ];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function completeOrbChat({ messages, apiKey, model }) {
  const turns = clipTurns(messages);
  if (turns.length === 0) {
    const err = new Error('Mensaje vacío');
    err.status = 400;
    throw err;
  }
  if (!turns.some((t) => t.role === 'user')) {
    const err = new Error('Falta un mensaje del visitante');
    err.status = 400;
    throw err;
  }

  const models = modelCandidates(model);
  let lastMessage = 'OpenCode Zen rechazó la solicitud';
  let lastStatus = 400;

  for (let m = 0; m < models.length; m += 1) {
    const payload = JSON.stringify({
      model: models[m],
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...turns],
      temperature: 0.5,
      max_tokens: 2048,
    });

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 55000);
      let res;
      try {
        res = await fetch(ZEN_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'x-opencode-session': 'reclu-orb',
          },
          body: payload,
          signal: controller.signal,
        });
      } catch (err) {
        const timeout = err && err.name === 'AbortError';
        const wrapped = new Error(timeout ? 'La IA tardó demasiado' : 'No pude contactar a OpenCode Zen');
        wrapped.status = timeout ? 504 : 502;
        throw wrapped;
      } finally {
        clearTimeout(timer);
      }

      const body = await res.text();
      if (res.ok) {
        try {
          const data = JSON.parse(body);
          const content =
            data.choices && data.choices[0] && data.choices[0].message
              ? data.choices[0].message.content
              : '';
          return parseReply(content);
        } catch {
          const err = new Error('Respuesta inválida de OpenCode Zen');
          err.status = 502;
          throw err;
        }
      }

      lastMessage = baiErrorMessage(body);
      lastStatus = res.status;
      if (isUnavailable(res.status, lastMessage)) break;
      if (!isRateLimit(res.status, lastMessage) || attempt === 2) {
        const err = new Error(
          isRateLimit(lastStatus, lastMessage)
            ? 'Hay mucha demanda en la IA ahora. Esperá unos segundos y preguntame de nuevo.'
            : lastMessage,
        );
        err.status = isRateLimit(lastStatus, lastMessage)
          ? 429
          : lastStatus === 401 || lastStatus === 403 || lastStatus >= 500
            ? 502
            : 400;
        throw err;
      }
      await sleep(800 * (attempt + 1));
    }
  }

  const err = new Error(
    isUnavailable(lastStatus, lastMessage)
      ? 'Ese modelo no está disponible ahora en OpenCode Zen. Probá de nuevo en un rato.'
      : lastMessage,
  );
  err.status = 502;
  throw err;
}

export function GET() {
  return json(405, { error: 'Método no permitido' });
}

export function OPTIONS() {
  return new Response(null, { status: 204 });
}

export async function POST(request) {
  try {
    const apiKey = process.env.OPENCODE_API_KEY || process.env.OPENCODE_ZEN_API_KEY;
    if (!apiKey) {
      return json(503, { error: 'Falta OPENCODE_API_KEY en el servidor' });
    }
    const payload = await request.json().catch(() => ({}));
    const reply = await completeOrbChat({
      messages: payload.messages,
      apiKey,
      model: process.env.OPENCODE_MODEL,
    });
    return json(200, reply);
  } catch (err) {
    const status = Number(err && err.status) || 500;
    const message = err && err.message ? err.message : 'Error de Orb';
    return json(status, { error: message });
  }
}
