const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const STORAGE_DIR = path.join(ROOT_DIR, 'storage');

const FILES = {
  owner: {
    target: path.join(STORAGE_DIR, 'user-owner.json'),
    legacy: [path.join(STORAGE_DIR, 'owner.json'), path.join(ROOT_DIR, 'author.json')],
  },
  premium: {
    target: path.join(STORAGE_DIR, 'user-premium.json'),
    legacy: [path.join(STORAGE_DIR, 'premium.json'), path.join(ROOT_DIR, 'premium.json')],
  },
  banned: {
    target: path.join(STORAGE_DIR, 'user-banned.json'),
    legacy: [path.join(STORAGE_DIR, 'banned.json'), path.join(ROOT_DIR, 'banned.json')],
  },
};

const cache = {
  owner: null,
  premium: null,
  banned: null,
};

function normalizeNumber(input) {
  let num = String(input || '')
    .split('@')[0]
    .split(':')[0]
    .replace(/[^0-9]/g, '');
  if (num.startsWith('08')) num = '62' + num.slice(1);
  return num;
}

function readJsonArray(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(data)) return null;
    return [...new Set(data.map(normalizeNumber).filter(Boolean))];
  } catch {
    return null;
  }
}

function ensureMigrated(role) {
  const cfg = FILES[role];
  if (!fs.existsSync(STORAGE_DIR)) fs.mkdirSync(STORAGE_DIR, { recursive: true });

  if (!fs.existsSync(cfg.target)) {
    let initial = [];
    for (const legacyPath of cfg.legacy) {
      const legacyData = readJsonArray(legacyPath);
      if (legacyData && legacyData.length > 0) {
        initial = legacyData;
        break;
      }
    }
    fs.writeFileSync(cfg.target, JSON.stringify(initial, null, 2), 'utf8');
    // Hapus file legacy di root setelah migrasi agar tidak membingungkan
    for (const legacyPath of cfg.legacy) {
      if (fs.existsSync(legacyPath)) {
        try { fs.unlinkSync(legacyPath); } catch {}
      }
    }
  }
}

function getList(role) {
  if (!FILES[role]) return [];
  if (cache[role]) return cache[role];
  ensureMigrated(role);
  cache[role] = readJsonArray(FILES[role].target) || [];
  return cache[role];
}

function saveList(role, list) {
  if (!FILES[role]) return;
  ensureMigrated(role);
  const clean = [...new Set((list || []).map(normalizeNumber).filter(Boolean))];
  cache[role] = clean;
  fs.writeFileSync(FILES[role].target, JSON.stringify(clean, null, 2), 'utf8');
}

function addToList(role, number) {
  const num = normalizeNumber(number);
  if (!num) return { ok: false, reason: 'invalid' };
  const list = getList(role);
  if (list.includes(num)) return { ok: false, reason: 'exists', number: num };
  list.push(num);
  saveList(role, list);
  return { ok: true, number: num };
}

function removeFromList(role, number) {
  const num = normalizeNumber(number);
  if (!num) return { ok: false, reason: 'invalid' };
  const list = getList(role);
  const idx = list.indexOf(num);
  if (idx === -1) return { ok: false, reason: 'not_found', number: num };
  list.splice(idx, 1);
  saveList(role, list);
  return { ok: true, number: num };
}

function getSuperOwners() {
  const raw = Array.isArray(global.owner) ? global.owner : [global.owner];
  return [...new Set(raw.map(normalizeNumber).filter(Boolean))];
}

function isSuperOwner(jidOrNumber) {
  const num = normalizeNumber(jidOrNumber);
  return Boolean(num) && getSuperOwners().includes(num);
}

function getAllOwners() {
  return [...new Set([...getSuperOwners(), ...getList('owner')])];
}

function isOwner(jidOrNumber) {
  const num = normalizeNumber(jidOrNumber);
  return Boolean(num) && getAllOwners().includes(num);
}

module.exports = {
  FILES,
  normalizeNumber,
  getList,
  saveList,
  addToList,
  removeFromList,
  getSuperOwners,
  isSuperOwner,
  getAllOwners,
  isOwner,
};
