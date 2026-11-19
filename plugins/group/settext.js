const fs = require('fs');
const { loadTemplate, saveTemplate } = require('../../library/template');

const DB_GROUP_PATH = './storage/databaseGroup.json';

const TARGETS = {
  list: {
    label: 'List Produk',
    dbKey: 'text_list',
    templateFile: 'list',
    fallback: 'Halo {TAG}\n\n{SIMBOL}',
    placeholders: [
      ['{GROUPNAME}', 'Nama grup'],
      ['{TAG}', 'Tag pengirim'],
      ['{JAM}', 'Jam sekarang (WIB)'],
      ['{NAMAHARI}', 'Nama hari'],
      ['{TANGGAL}', 'Tanggal lengkap'],
      ['{SIMBOL}', 'Daftar seluruh item list (wajib ada)'],
      ['@ITEM = ...', 'Opsional di baris atas sebelum --- (pakai {KEY}, {KEY_UPPER}, {KEY_LOWER}, {NO})'],
    ],
    example: '@ITEM = ▸ {NO}. *{KEY_UPPER}*\n---\n╭─〔 📋 DAFTAR MENU 〕\n│ Halo {TAG}\n│ 📅 {NAMAHARI}, {TANGGAL} ({JAM} WIB)\n│ 🏠 {GROUPNAME}\n│ {SIMBOL}\n╰──────────────',
  },
  simbol: {
    label: 'Simbol / Format Item List',
    dbKey: 'text_list_simbol',
    templateFile: null,
    fallback: '    ⋆˙⟡ ',
    placeholders: [
      ['{KEY}', 'Nama item asli (opsional; jika kosong otomatis jadi "<simbol> *{KEY}*")'],
      ['{KEY_UPPER}', 'Nama item HURUF BESAR SEMUA'],
      ['{KEY_LOWER}', 'Nama item huruf kecil semua'],
      ['{NO}', 'Nomor urut item (1, 2, 3, ...)'],
    ],
    example: '▸ {NO}. *{KEY_UPPER}*',
  },
  proses: {
    label: 'Pesan Proses',
    dbKey: 'text_proses',
    templateFile: 'proses',
    fallback: 'Pesanan {TAGREPLY} sedang diproses.\nPesanan: {PESANAN}',
    placeholders: [
      ['{GROUPNAME}', 'Nama grup'],
      ['{TAGDIRI}', 'Tag admin/pengirim'],
      ['{TAGREPLY}', 'Tag customer yang direply'],
      ['{PESANAN}', 'Catatan pesanan'],
      ['{HARI}', 'Nama hari'],
      ['{TANGGAL}', 'Tanggal (angka)'],
      ['{BULAN}', 'Bulan (angka)'],
      ['{NAMABULAN}', 'Nama bulan'],
      ['{TAHUN}', 'Tahun'],
      ['{JAM}', 'Jam'],
      ['{MENIT}', 'Menit'],
      ['{DETIK}', 'Detik'],
    ],
    example: '⏳ Halo {TAGREPLY}, pesanan sedang diproses!\n📦 Pesanan: {PESANAN}\n📅 {HARI}, {TANGGAL} {NAMABULAN} {TAHUN} ({JAM}:{MENIT} WIB)',
  },
  done: {
    label: 'Pesan Done',
    dbKey: 'text_done',
    templateFile: 'done',
    fallback: 'Pesanan {TAGREPLY} selesai!\nPesanan: {PESANAN}',
    placeholders: [
      ['{GROUPNAME}', 'Nama grup'],
      ['{TAGDIRI}', 'Tag admin/pengirim'],
      ['{TAGREPLY}', 'Tag customer yang direply'],
      ['{PESANAN}', 'Catatan pesanan'],
      ['{HARI}', 'Nama hari'],
      ['{TANGGAL}', 'Tanggal (angka)'],
      ['{BULAN}', 'Bulan (angka)'],
      ['{NAMABULAN}', 'Nama bulan'],
      ['{TAHUN}', 'Tahun'],
      ['{JAM}', 'Jam'],
      ['{MENIT}', 'Menit'],
      ['{DETIK}', 'Detik'],
    ],
    example: '✅ Pesanan {TAGREPLY} selesai!\n📦 Pesanan: {PESANAN}\n📅 {HARI}, {TANGGAL} {NAMABULAN} {TAHUN} ({JAM}:{MENIT} WIB)',
  },
  close: {
    label: 'Pesan Tutup Grup',
    dbKey: 'text_close',
    templateFile: 'close',
    fallback: '_*Group Berhasil Ditutup*_ 「 🔒 」',
    placeholders: [
      ['{GROUPNAME}', 'Nama grup'],
      ['{TAG}', 'Tag admin yang menutup'],
      ['{JAM}', 'Jam sekarang (WIB)'],
      ['{NAMAHARI}', 'Nama hari'],
      ['{TANGGAL}', 'Tanggal lengkap'],
    ],
    example: '🔒 Grup {GROUPNAME} ditutup oleh {TAG}\n📅 {NAMAHARI}, {TANGGAL} ({JAM} WIB)',
  },
  open: {
    label: 'Pesan Buka Grup',
    dbKey: 'text_open',
    templateFile: 'open',
    fallback: '_*Group Berhasil Dibuka*_ 「 🔓 」',
    placeholders: [
      ['{GROUPNAME}', 'Nama grup'],
      ['{TAG}', 'Tag admin yang membuka'],
      ['{JAM}', 'Jam sekarang (WIB)'],
      ['{NAMAHARI}', 'Nama hari'],
      ['{TANGGAL}', 'Tanggal lengkap'],
    ],
    example: '🔓 Grup {GROUPNAME} dibuka oleh {TAG}\n📅 {NAMAHARI}, {TANGGAL} ({JAM} WIB)',
  },
  menu: {
    label: 'Header Menu (Global/Owner)',
    dbKey: null,
    templateFile: 'menu',
    fallback: '{MENU}',
    placeholders: [
      ['{RUNTIME}', 'Lama bot aktif'],
      ['{CREATOR}', 'Nama creator'],
      ['{NAME}', 'Nama pengirim'],
      ['{NUMBER}', 'Nomor pengirim'],
      ['{STATUS}', 'Status user (Creator/Premium/User)'],
      ['{MENU}', 'Daftar isi menu (wajib ada)'],
      ['@HEADER / @ITEM / @FOOTER', 'Opsional di baris atas sebelum --- (pakai {CATEGORY}, {CMD}, {CMD_UPPER}, {CMD_LOWER}, {NO})'],
    ],
    example: '@HEADER = ⭐ *{CATEGORY_UPPER}*\n@ITEM = ▸ {NO}. _{CMD}_\n@FOOTER = ──────────\n---\n🤖 *YONO BOT*\nHalo {NAME} ({STATUS})\nRuntime: {RUNTIME}\n\n{MENU}',
  },
};

function saveGroupDb() {
  fs.writeFileSync(DB_GROUP_PATH, JSON.stringify(global.datagc, null, 2));
}

function buildFeatureHelp(prefix, command, key, cfg, currentGroupText, isCreator) {
  const activeMode = currentGroupText ? 'Custom Grup' : 'Bawaan (templates/)';
  const phLines = cfg.placeholders.length > 0
    ? cfg.placeholders.map(([k, d]) => `• \`${k}\` = ${d}`).join('\n')
    : '• _(Tidak menggunakan placeholder)_';

  let msg = `*⚙️ Pengaturan Teks: ${cfg.label} (${key})*\n`;
  msg += `Status saat ini: *${activeMode}*\n\n`;
  msg += `*Cara Pakai:*\n`;
  if (cfg.dbKey) {
    msg += `• *${prefix + command} ${key} <teks baru>* → ubah khusus grup ini\n`;
    msg += `• *${prefix + command} ${key} reset* → kembalikan ke bawaan\n`;
  }
  if (cfg.templateFile && isCreator) {
    msg += `• *${prefix + command} default ${key} <teks baru>* → ubah bawaan permanen semua grup (Owner)\n`;
  }
  msg += `\n*Placeholder yang bisa dipakai:*\n${phLines}\n\n`;
  msg += `*Contoh:*\n${prefix + command} ${cfg.dbKey ? key : 'default ' + key}\n${cfg.example}`;
  return msg;
}

module.exports = {
  command: 'settext',
  aliases: ['edittext', 'settemplate'],
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, command, prefix, isAdmins, isCreator, mess } = ctx;
    if (!isAdmins && !isCreator) return m.reply(mess.admin);

    const raw = (text || '').trim();
    if (!raw) {
      const listKeys = Object.entries(TARGETS)
        .map(([k, v]) => `• *${k}* — ${v.label}`)
        .join('\n');
      return m.reply(
        `*⚙️ Pengaturan Template Teks*\n\n` +
        `*Daftar fitur:*\n${listKeys}\n\n` +
        `*Cara pakai:*\n` +
        `• *${prefix + command} <fitur>* → lihat placeholder & contoh\n` +
        `• *${prefix + command} <fitur> <teks baru>* → ubah khusus grup ini\n` +
        `• *${prefix + command} <fitur> reset* → reset ke bawaan\n` +
        (isCreator ? `• *${prefix + command} default <fitur> <teks baru>* → ubah bawaan permanen (Owner)\n` : '') +
        `\n*Contoh:* \`${prefix + command} list\``
      );
    }

    // Parse mode default (owner-only) vs per-grup, menjaga baris baru (\n) tetap utuh
    const firstMatch = raw.match(/^(\S+)(?:\s+([\s\S]*))?$/);
    const firstWord = (firstMatch?.[1] || '').toLowerCase();
    const restAfterFirst = (firstMatch?.[2] || '').trim();

    if (firstWord === 'default') {
      if (!isCreator) return m.reply(mess.owner);
      const defMatch = restAfterFirst.match(/^(\S+)(?:\s+([\s\S]*))?$/);
      const targetKey = (defMatch?.[1] || '').toLowerCase();
      const newBody = (defMatch?.[2] || '').trim();
      const cfg = TARGETS[targetKey];

      if (!cfg || !cfg.templateFile) {
        const valid = Object.entries(TARGETS).filter(([, v]) => v.templateFile).map(([k]) => k).join(', ');
        return m.reply(`⚠️ Fitur bawaan tidak valid.\nPilih salah satu: *${valid}*`);
      }

      if (!newBody) {
        const currentTpl = loadTemplate(cfg.templateFile, cfg.fallback);
        return m.reply(
          buildFeatureHelp(prefix, command, targetKey, cfg, '', true) +
          `\n\n*Isi templates/${cfg.templateFile}.txt saat ini:*\n${currentTpl}`
        );
      }

      saveTemplate(cfg.templateFile, newBody);
      return m.reply(`✅ Template bawaan permanen *templates/${cfg.templateFile}.txt* berhasil diperbarui untuk semua grup.`);
    }

    // Mode per-grup
    const targetKey = firstWord;
    const cfg = TARGETS[targetKey];
    if (!cfg) {
      return m.reply(`⚠️ Fitur *${targetKey}* tidak dikenal.\nKetik *${prefix + command}* untuk melihat daftar fitur.`);
    }

    if (!cfg.dbKey) {
      return m.reply(`⚠️ Fitur *${targetKey}* hanya bisa diubah secara global oleh Owner via:\n*${prefix + command} default ${targetKey} <teks baru>*`);
    }

    if (!m.isGroup) return m.reply(mess.group);
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};

    const currentGroupText = global.datagc[m.chat][cfg.dbKey] || '';

    if (!restAfterFirst) {
      return m.reply(buildFeatureHelp(prefix, command, targetKey, cfg, currentGroupText, isCreator));
    }

    if (restAfterFirst.toLowerCase() === 'reset') {
      global.datagc[m.chat][cfg.dbKey] = '';
      saveGroupDb();
      return m.reply(`✅ Teks *${targetKey}* di grup ini berhasil direset ke bawaan.`);
    }

    global.datagc[m.chat][cfg.dbKey] = restAfterFirst;
    saveGroupDb();
    return m.reply(`✅ Teks *${targetKey}* khusus grup ini berhasil diperbarui.\nKetik *${prefix + command} ${targetKey} reset* kapan saja untuk kembali ke bawaan.`);
  },
};
