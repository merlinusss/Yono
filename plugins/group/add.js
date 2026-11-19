module.exports = {
  command: 'add',
  category: 'GROUP',
  async execute({ lenwy, m, text, isAdmins, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    const teks = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const cek = await lenwy.onWhatsApp(`${teks.split('@')[0]}`);
    if (cek.length < 1) return m.reply('Nomor Tersebut Tidak Terdaftar Di WhatsApp');
    const a = await lenwy.groupParticipantsUpdate(m.chat, [teks], 'add');
    const status = a?.[0]?.status;
    if (status == 200) {
      await lenwy.sendMessage(m.chat, { text: `Berhasil Menambahkan @${teks.split('@')[0]} Kedalam Grup Ini`, mentions: [teks] }, { quoted: m });
    } else if (status == 409) {
      await lenwy.sendMessage(m.chat, { text: `@${teks.split('@')[0]} Sudah Ada Di Dalam Grup Ini!`, mentions: [teks] }, { quoted: m });
    } else if (status == 408 || status == 403) {
      await lenwy.sendMessage(m.chat, { text: `Gagal Menambahkan @${teks.split('@')[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`, mentions: [teks] }, { quoted: m });
    }
  },
};
