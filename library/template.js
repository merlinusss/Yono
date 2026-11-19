const fs = require('fs');
const path = require('path');

const TEMPLATE_DIR = path.join(__dirname, '..', 'templates');

/**
 * Baca template teks permanen dari folder `templates/<name>.txt`.
 * Dibaca langsung dari disk agar perubahan teks langsung berlaku tanpa restart bot.
 */
function loadTemplate(name, fallback = '') {
  const filePath = path.join(TEMPLATE_DIR, `${name}.txt`);
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8').trim();
      if (content) return content;
    }
  } catch (err) {
    console.error(`[template] Gagal baca ${name}.txt:`, err.message);
  }
  return fallback;
}

/**
 * Simpan template permanen ke `templates/<name>.txt`.
 */
function saveTemplate(name, content) {
  if (!fs.existsSync(TEMPLATE_DIR)) fs.mkdirSync(TEMPLATE_DIR, { recursive: true });
  const filePath = path.join(TEMPLATE_DIR, `${name}.txt`);
  fs.writeFileSync(filePath, String(content || '').trim() + '\n', 'utf8');
  return filePath;
}

/**
 * Pisahkan header direktif `@KEY = VALUE` (sebelum garis `---`) dari isi template utama.
 * Mendukung `\n` di dalam value direktif.
 * Jika tidak ada blok `@KEY = ...` + `---`, `meta` kosong dan `body` = seluruh teks.
 */
function parseTemplate(raw = '') {
  const text = String(raw || '');
  const sepMatch = text.match(/^([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!sepMatch) return { meta: {}, body: text };

  const headerPart = sepMatch[1];
  const body = sepMatch[2];
  const meta = {};
  let hasDirective = false;

  for (const line of headerPart.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const m = line.match(/^\s*@([A-Za-z0-9_]+)\s*= ?(.*)$/);
    if (m) {
      hasDirective = true;
      meta[m[1].toUpperCase()] = m[2].replace(/\\n/g, '\n');
    }
  }

  if (!hasDirective) return { meta: {}, body: text };
  return { meta, body };
}

/**
 * Ganti semua placeholder di template (case-insensitive).
 * Contoh: applyTemplate(tpl, { '{TAG}': '@628xxx', '{JAM}': '12:00' })
 */
function applyTemplate(template, replacers = {}) {
  let result = String(template || '');
  for (const [key, value] of Object.entries(replacers)) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(escaped, 'gi'), String(value ?? ''));
  }
  return result;
}

module.exports = {
  TEMPLATE_DIR,
  loadTemplate,
  saveTemplate,
  parseTemplate,
  applyTemplate,
};
