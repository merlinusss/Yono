const fs = require('fs');
const path = require('path');

const VERSION_FILE = path.join(process.cwd(), 'storage', '.version.json');
const CONFIRM_TTL_MS = 2 * 60 * 1000; // 2 menit di RAM

// Sesi konfirmasi per user (disimpan di RAM, otomatis kedaluwarsa dalam 2 menit)
const pendingUpdates = new Map();

// File/folder milik buyer yang TIDAK BOLEH ditimpa otomatis
const PROTECTED_EXACT = new Set([
  'author.json',
  'banned.json',
  'premium.json',
  '.npmrc',
  '.gitignore',
  'AGENTS.md',
]);

const PROTECTED_PREFIXES = [
  'storage/',
  'Session/',
  'node_modules/',
];

const PERSONAL_LEN_KEYS = [
  'owner', 'developer', 'botNumber', 'ownername', 'developername',
  'botname', 'emoji', 'packname', 'author', 'sessionName',
  'anticall', 'autobackup', 'usePairingCode',
  'licenseKeycash', 'idQris', 'productkeydigi', 'usernamedigi',
];

function getUpdaterConfig() {
  const domain = global.api?.merlinus?.domain || 'merlapi.xyz';
  return {
    baseUrl: `https://${domain}/api/bot/yono`,
    apikey: global.api?.merlinus?.apikey || '',
    branch: 'main',
  };
}

function isProtectedPath(filePath) {
  const norm = filePath.replace(/\\/g, '/').replace(/^\/+/, '');
  if (PROTECTED_EXACT.has(norm)) return true;
  if (PROTECTED_PREFIXES.some(p => norm.startsWith(p))) return true;
  // templates/*.txt tidak ditimpa jika sudah ada di buyer (hanya boleh tambah file baru)
  if (norm.startsWith('templates/') && fs.existsSync(path.join(process.cwd(), norm))) return true;
  return false;
}

function readLocalVersion() {
  try {
    if (fs.existsSync(VERSION_FILE)) {
      return JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
    }
  } catch {}
  return { sha: null, updatedAt: null };
}

function saveLocalVersion(sha, branch) {
  const dir = path.dirname(VERSION_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(VERSION_FILE, JSON.stringify({
    sha,
    branch,
    updatedAt: new Date().toISOString(),
  }, null, 2), 'utf8');
}

function mergeLenJs(newLenContent) {
  const lenPath = path.join(process.cwd(), 'len.js');
  if (!fs.existsSync(lenPath)) return newLenContent;
  const oldLen = fs.readFileSync(lenPath, 'utf8');
  let merged = newLenContent;

  for (const key of PERSONAL_LEN_KEYS) {
    const m = oldLen.match(new RegExp(`^global\\.${key}\\s*=\\s*(.+)$`, 'm'));
    if (m) {
      merged = merged.replace(
        new RegExp(`^global\\.${key}\\s*=\\s*(.+)$`, 'm'),
        `global.${key} = ${m[1].trim()}`
      );
    }
  }
  return merged;
}

async function downloadFileFromServer(cfg, ref, filePath) {
  const url = `${cfg.baseUrl}/file?path=${encodeURIComponent(filePath)}&ref=${encodeURIComponent(ref)}&apikey=${encodeURIComponent(cfg.apikey)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Gagal unduh ${filePath} (${res.status})`);
  return Buffer.from(await res.arrayBuffer());
}

async function checkUpdatesFromServer(cfg, localSha) {
  const url = `${cfg.baseUrl}/check?since=${encodeURIComponent(localSha || '')}&branch=${encodeURIComponent(cfg.branch)}&apikey=${encodeURIComponent(cfg.apikey)}`;
  const res = await fetch(url);
  const data = await res.json().catch(() => null);
  if (!res.ok || !data || !data.status) {
    throw new Error(data?.message || `Server updater merespons ${res.status}`);
  }
  return {
    latestSha: data.latestSha,
    newCommits: (data.commits || []).map(c => ({ sha: c.sha, message: c.message || '' })),
    changedFiles: data.files || [],
  };
}

function statusBadge(status) {
  if (status === 'added') return 'Baru';
  if (status === 'removed') return 'Hapus';
  if (status === 'renamed') return 'Rename';
  return 'Ubah';
}

function parseSelectedIndices(argStr, maxLen) {
  const nums = argStr
    .split(/[\s,]+/)
    .map(s => parseInt(s.trim(), 10))
    .filter(n => !Number.isNaN(n) && n >= 1 && n <= maxLen);
  return [...new Set(nums)];
}

module.exports = {
  command: 'updatebot',
  aliases: ['cekupdate'],
  category: 'OWNER',
  async execute(ctx) {
    const { m, args, command, prefix, isCreator, mess, reloadPlugins } = ctx;
    if (!isCreator) return m.reply(mess.owner);

    const senderKey = m.sender;
    const sub = (args[0] || '').toLowerCase();
    const cfg = getUpdaterConfig();
    const { branch } = cfg;

    if (sub === 'cancel') {
      if (pendingUpdates.delete(senderKey)) {
        return m.reply('✅ Proses update dibatalkan.');
      }
      return m.reply('ℹ️ Tidak ada proses update yang sedang menunggu konfirmasi.');
    }

    if (sub === 'confirm') {
      const pending = pendingUpdates.get(senderKey);
      if (!pending || Date.now() > pending.expiresAt) {
        pendingUpdates.delete(senderKey);
        return m.reply(`⚠️ Sesi konfirmasi tidak ada atau sudah lewat 2 menit.\nKetik *${prefix + command}* terlebih dahulu untuk cek update.`);
      }

      const selectionArg = args.slice(1).join(' ').trim();
      let chosenFiles = pending.files;
      let isPartial = false;

      if (selectionArg && selectionArg.toLowerCase() !== 'all') {
        const indices = parseSelectedIndices(selectionArg, pending.files.length);
        if (indices.length === 0) {
          return m.reply(`⚠️ Nomor file tidak valid.\nContoh: *${prefix + command} confirm 1,2* atau *${prefix + command} confirm* untuk semua.`);
        }
        chosenFiles = indices.map(i => pending.files[i - 1]);
        isPartial = chosenFiles.length < pending.files.length;
      }

      pendingUpdates.delete(senderKey);
      await m.reply(`🔄 Menerapkan *${chosenFiles.length} file* (\`${pending.latestSha.slice(0, 7)}\`)...`);

      const applied = [];
      const skipped = [];
      let packageChanged = false;
      let coreChanged = false;

      try {
        for (const f of chosenFiles) {
          const filePath = f.filename;
          if (isProtectedPath(filePath)) {
            skipped.push(`${filePath} (diproteksi)`);
            continue;
          }

          const absPath = path.join(process.cwd(), filePath);

          if (f.status === 'removed') {
            if (fs.existsSync(absPath)) fs.unlinkSync(absPath);
            applied.push(`[Hapus] ${filePath}`);
            continue;
          }

          const buf = await downloadFileFromServer(pending, pending.latestSha, filePath);
          const dir = path.dirname(absPath);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

          if (filePath === 'len.js') {
            const merged = mergeLenJs(buf.toString('utf8'));
            fs.writeFileSync(absPath, merged, 'utf8');
          } else {
            fs.writeFileSync(absPath, buf);
          }

          applied.push(`[${statusBadge(f.status)}] ${filePath}`);
          if (filePath === 'package.json') packageChanged = true;
          if (filePath === 'index.js' || filePath === 'lenwy.js' || filePath === 'len.js') coreChanged = true;
        }

        if (!isPartial) {
          saveLocalVersion(pending.latestSha, pending.branch);
        }

        let report = `✅ *Update selesai!*\n`;
        report += `Commit: \`${pending.latestSha.slice(0, 7)}\`${isPartial ? ' _(Parsial)_' : ''}\n\n`;
        if (applied.length > 0) {
          report += `*Diterapkan (${applied.length}):*\n${applied.map(x => `• ${x}`).join('\n')}\n`;
        }
        if (skipped.length > 0) {
          report += `\n*Dilewati (${skipped.length}):*\n${skipped.map(x => `• ${x}`).join('\n')}\n`;
        }
        if (packageChanged) {
          report += `\n⚠️ *package.json berubah* — jalankan \`npm install\` di panel jika ada dependensi baru.`;
        }

        if (coreChanged) {
          report += `\n\n♻️ File inti berubah, bot akan restart dalam 2 detik...`;
          await m.reply(report);
          setTimeout(() => process.exit(0), 2000);
        } else {
          if (typeof reloadPlugins === 'function') reloadPlugins();
          report += `\n\n⚡ Plugin otomatis di-reload tanpa perlu restart bot!`;
          await m.reply(report);
        }
      } catch (err) {
        console.error('[updatebot]', err);
        return m.reply(`❌ *Gagal menerapkan update:*\n\`\`\`${err.message}\`\`\``);
      }
      return;
    }

    // ─── STEP 1: CHECK & PREVIEW ───
    await m.reply('🔍 Mengecek pembaruan dari server...');
    try {
      const localVer = readLocalVersion();
      const { latestSha, newCommits, changedFiles } = await checkUpdatesFromServer(cfg, localVer.sha);

      if (localVer.sha && localVer.sha === latestSha) {
        const latestMsg = newCommits[0]?.message?.split('\n')[0] || '-';
        return m.reply(
          `✅ *Bot sudah versi terbaru!*\n` +
          `• Commit: \`${latestSha.slice(0, 7)}\`\n` +
          `• Pesan: ${latestMsg}`
        );
      }

      const selectableFiles = changedFiles.filter(f => !isProtectedPath(f.filename));
      if (selectableFiles.length === 0) {
        saveLocalVersion(latestSha, branch);
        return m.reply(`✅ Tidak ada file kode yang perlu di-update (hanya file diproteksi). Versi lokal disinkronkan ke \`${latestSha.slice(0, 7)}\`.`);
      }

      pendingUpdates.set(senderKey, {
        ...cfg,
        latestSha,
        files: selectableFiles,
        expiresAt: Date.now() + CONFIRM_TTL_MS,
      });

      const commitList = newCommits
        .map(c => `• \`${c.sha.slice(0, 7)}\` ${(c.message || '').split('\n')[0]}`)
        .join('\n');

      const fileList = selectableFiles
        .map((f, i) => `${i + 1}. [${statusBadge(f.status)}] \`${f.filename}\``)
        .join('\n');

      const hasPkg = selectableFiles.some(f => f.filename === 'package.json');

      let msg = `📦 *Update Tersedia!*\n`;
      msg += `• Lokal   : \`${localVer.sha ? localVer.sha.slice(0, 7) : 'belum tercatat'}\`\n`;
      msg += `• Terbaru : \`${latestSha.slice(0, 7)}\`\n\n`;
      msg += `📝 *Yang Baru (Commit):*\n${commitList}\n\n`;
      msg += `📂 *File Berubah (${selectableFiles.length}):*\n${fileList}\n`;
      if (hasPkg) msg += `\n⚠️ _Terdapat perubahan pada \`package.json\`._\n`;
      msg += `\n⏳ *Konfirmasi (berlaku 2 menit):*\n`;
      msg += `• *${prefix + command} confirm* → update semua file di atas\n`;
      msg += `• *${prefix + command} confirm 1,2* → update hanya nomor pilihan\n`;
      msg += `• *${prefix + command} cancel* → batalkan`;

      return m.reply(msg);
    } catch (err) {
      console.error('[updatebot]', err);
      return m.reply(`❌ *Gagal mengecek update:*\n\`\`\`${err.message}\`\`\``);
    }
  },
};
