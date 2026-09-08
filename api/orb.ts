import { completeOrbChat, type ChatTurn } from '../lib/complete-orb';

export const config = {
  runtime: 'nodejs',
  maxDuration: 30,
};

type NodeReq = {
  method?: string;
  headers?: Record<string, string | string[] | undefined>;
  body?: unknown;
  on?: (event: string, cb: (chunk?: Buffer) => void) => void;
};

type NodeRes = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
};

function jsonResponse(status: number, payload: unknown) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function isNodeRes(res: unknown): res is NodeRes {
  return Boolean(
    res &&
      typeof res === 'object' &&
      typeof (res as NodeRes).end === 'function' &&
      typeof (res as NodeRes).setHeader === 'function',
  );
}

function asTurns(value: unknown): ChatTurn[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const row = item as { role?: unknown; content?: unknown };
      if (row.role !== 'user' && row.role !== 'assistant') return null;
      if (typeof row.content !== 'string') return null;
      return { role: row.role, content: row.content };
    })
    .filter((row): row is ChatTurn => Boolean(row));
}

function readStream(req: NodeReq): Promise<string> {
  const on = req.on;
  if (!on) return Promise.resolve('');
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    on('data', (chunk) => {
      if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
    });
    on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    on('error', reject);
  });
}

async function readBody(req: Request | NodeReq): Promise<unknown> {
  if (typeof (req as Request).text === 'function' && typeof (req as Request).headers?.get === 'function') {
    const text = await (req as Request).text();
    return JSON.parse(text || '{}');
  }
  const node = req as NodeReq;
  if (typeof node.body === 'string') return JSON.parse(node.body || '{}');
  if (node.body && typeof node.body === 'object') return node.body;
  return JSON.parse((await readStream(node)) || '{}');
}

async function run(method: string, load: () => Promise<unknown>): Promise<Response> {
  if (method === 'OPTIONS') return new Response(null, { status: 204 });
  if (method !== 'POST') return jsonResponse(405, { error: 'Método no permitido' });

  const apiKey = process.env.BAI_API_KEY;
  if (!apiKey) {
    return jsonResponse(503, { error: 'Falta BAI_API_KEY en el servidor' });
  }

  const payload = (await load()) as { messages?: unknown };
  const reply = await completeOrbChat({
    messages: asTurns(payload.messages),
    apiKey,
    model: process.env.BAI_MODEL,
  });
  return jsonResponse(200, reply);
}

export default async function handler(req: Request | NodeReq, res?: NodeRes) {
  try {
    const method = (req as { method?: string }).method || 'GET';
    const response = await run(method, () => readBody(req));
    if (!isNodeRes(res)) return response;
    const body = await response.text();
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.end(body);
  } catch (err) {
    const status = Number((err as { status?: number }).status) || 500;
    const message = err instanceof Error ? err.message : 'Error de Orb';
    const response = jsonResponse(status, { error: message });
    if (!isNodeRes(res)) return response;
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.end(JSON.stringify({ error: message }));
  }
}
