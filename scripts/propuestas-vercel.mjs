import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** En Vercel no hay dist commiteado. Cada demo se construye en su carpeta, con su vite.config. */
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.join(repo, 'propuestas');
const viteBin = path.join(repo, 'node_modules', 'vite', 'bin', 'vite.js');

const SKIP = new Set([
  'alba',
  'bruma',
  'casonorte',
  'lumen',
  'minimayorista',
  'pausa',
  'diseno-claro',
  'marketing-claro',
  'marketing-oscuro-premium',
  'eter-claro',
  'noctua-oscuro',
]);

function slugs() {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.') && !SKIP.has(d.name))
    .map((d) => d.name);
}

function readPkg(dir) {
  const file = path.join(dir, 'package.json');
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function isNext(pkg) {
  return Boolean(pkg?.dependencies?.next || pkg?.devDependencies?.next);
}

function hasDist(dir) {
  return fs.existsSync(path.join(dir, 'dist', 'index.html'));
}

function configFile(dir) {
  return ['vite.config.ts', 'vite.config.js', 'vite.config.mjs'].find((name) =>
    fs.existsSync(path.join(dir, name)),
  );
}

if (!fs.existsSync(viteBin)) {
  console.warn('[propuestas-vercel] no hay vite en node_modules, se omite el build de demos');
  process.exit(0);
}

let ok = 0;
let skip = 0;
let fail = 0;

for (const slug of slugs()) {
  const dir = path.join(root, slug);
  const pkg = readPkg(dir);
  if (!pkg) {
    skip += 1;
    continue;
  }
  if (isNext(pkg)) {
    console.log(`· ${slug} (Next: no se construye en Vercel)`);
    skip += 1;
    continue;
  }
  if (hasDist(dir)) {
    console.log(`· ${slug} (dist ya está)`);
    ok += 1;
    continue;
  }
  const config = configFile(dir);
  if (!config) {
    console.warn(`[propuestas-vercel] ${slug} sin vite.config, se omite`);
    skip += 1;
    continue;
  }

  console.log(`→ ${slug}`);
  const result = spawnSync(
    process.execPath,
    [
      viteBin,
      'build',
      '--config',
      config,
      '--base',
      `/propuestas/${slug}/`,
      '--outDir',
      path.join(dir, 'dist'),
      '--emptyOutDir',
    ],
    { cwd: dir, stdio: 'inherit', env: process.env, timeout: 120000 },
  );
  if (result.status === 0 && hasDist(dir)) {
    ok += 1;
  } else {
    console.warn(`[propuestas-vercel] ${slug} falló (status ${result.status ?? 'timeout'})`);
    fail += 1;
  }
}

console.log(`[propuestas-vercel] listas=${ok} omitidas=${skip} fallidas=${fail}`);
process.exit(0);
