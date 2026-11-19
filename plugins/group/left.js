module.exports = {
  command: 'left',
  category: 'GROUP',
  async execute(ctx) {
    const { m, args, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs, tanggal } = libs;

if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (!text) {
    return m.reply(`*Pengaturan fitur ${command}*

Ketik:
- *${prefix + command} on* untuk mengaktifkan
- *${prefix + command} off* untuk menonaktifkan
- *${prefix + command} edit teksnya* untuk mengubah teks welcome

*Placeholder yang bisa dipakai:*
- {GROUPNAME} = nama grup
- {TAG} = tag yang masuk
- {JAM} = jam, menit, detik saat ini
- {NAMAHARI} = nama hari saat ini
- {TANGGAL} = tanggal, bulan, tahun saat ini

*Contoh:*
${prefix + command} edit Sampai jumpa {TAG} dari grup {GROUPNAME}
Keluar pada {NAMAHARI}, {TANGGAL} | {JAM}:{MENIT}`)
  }

  if (args[0] === 'on') {
    global.db.data.chats[m.chat].left = true
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Left berhasil diaktifkan.')
  }
  if (args[0] === 'off') {
    global.db.data.chats[m.chat].left = false
    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
    return m.reply('Fitur Left berhasil dinonaktifkan.')
  }
  if (args[0] === 'edit') {
    const teksnye = args.slice(1).join(' ').trim()
    global.datagc[m.chat].text_left = teksnye
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
    return m.reply(teksnye ? `Teks ${command} berhasil diubah` : `Teks ${command} berhasil direset ke bawaan`)
  }
  return m.reply(`Pilihan tidak valid.\nGunakan: on, off, atau edit`)
  },
};
