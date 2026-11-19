module.exports = {
  command: 'left',
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
- ${prefix + command} on : aktifkan pesan keluar
- ${prefix + command} off : nonaktifkan pesan keluar
- ${prefix + command} edit <teks> : ubah teks keluar

Placeholder yang tersedia:
- {GROUPNAME} : nama grup
- {TAG} : tag anggota yang keluar
- {JAM} : jam saat ini
- {NAMAHARI} : nama hari
- {TANGGAL} : tanggal lengkap

Contoh:
${prefix + command} edit Sampai jumpa {TAG} dari grup {GROUPNAME} ({NAMAHARI}, {TANGGAL} | {JAM})`);
    }

    const sub = (args[0] || '').toLowerCase();
    if (sub === 'on') {
      global.db.data.chats[m.chat].left = true;
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      return m.reply('Fitur pesan keluar diaktifkan.');
    }
    if (sub === 'off') {
      global.db.data.chats[m.chat].left = false;
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      return m.reply('Fitur pesan keluar dinonaktifkan.');
    }
    if (sub === 'edit') {
      const teksnye = args.slice(1).join(' ').trim();
      global.datagc[m.chat].text_left = teksnye;
      fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
      return m.reply(teksnye ? 'Teks keluar berhasil diubah.' : 'Teks keluar direset ke bawaan.');
    }
    return m.reply('❌ Pilihan tidak valid. Gunakan: on, off, atau edit.');
  },
};
