module.exports = {
  command: 'welcome',
  category: 'GROUP',
  async execute(ctx) {
    const { m, args, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};

    if (!text) {
      return m.reply(`Pengaturan fitur ${command}

Cara pakai:
- ${prefix + command} on : aktifkan pesan selamat datang
- ${prefix + command} off : nonaktifkan pesan selamat datang
- ${prefix + command} edit <teks> : ubah teks selamat datang

Placeholder yang tersedia:
- {GROUPNAME} : nama grup
- {TAG} : tag anggota baru
- {JAM} : jam saat ini
- {NAMAHARI} : nama hari
- {TANGGAL} : tanggal lengkap

Contoh:
${prefix + command} edit Halo {TAG}, selamat datang di {GROUPNAME} ({TANGGAL} | {JAM})`);
    }

    const sub = (args[0] || '').toLowerCase();
    if (sub === 'on') {
      global.db.data.chats[m.chat].wlcm = true;
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      return m.reply('Fitur selamat datang diaktifkan.');
    }
    if (sub === 'off') {
      global.db.data.chats[m.chat].wlcm = false;
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      return m.reply('Fitur selamat datang dinonaktifkan.');
    }
    if (sub === 'edit') {
      const teksnye = args.slice(1).join(' ').trim();
      global.datagc[m.chat].text_welcome = teksnye;
      fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
      return m.reply(teksnye ? 'Teks selamat datang berhasil diubah.' : 'Teks selamat datang direset ke bawaan.');
    }
    return m.reply('❌ Pilihan tidak valid. Gunakan: on, off, atau edit.');
  },
};
