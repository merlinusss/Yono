module.exports = {
  command: 'add',
  category: 'GROUP',
  async execute({ lenwy, m, text, isAdmins, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!text && !m.quoted && !m.mentionedJid?.[0]) {
      return m.reply('Masukkan nomor atau balas pesan target.');
    }

    const target = m.mentionedJid?.[0] || (m.quoted ? m.quoted.sender : `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`);
    const targetNum = target.split('@')[0];
    if (!targetNum) return m.reply('❌ Nomor tidak valid.');

    const cek = await lenwy.onWhatsApp(targetNum);
    if (!cek || cek.length < 1) return m.reply('❌ Nomor tersebut tidak terdaftar di WhatsApp.');

    const res = await lenwy.groupParticipantsUpdate(m.chat, [target], 'add');
    const status = res?.[0]?.status;
    if (status == 200) {
      await lenwy.sendMessage(m.chat, { text: `Berhasil menambahkan @${targetNum} ke grup.`, mentions: [target] }, { quoted: m });
    } else if (status == 409) {
      await lenwy.sendMessage(m.chat, { text: `@${targetNum} sudah ada di dalam grup.`, mentions: [target] }, { quoted: m });
    } else if (status == 408 || status == 403) {
      await lenwy.sendMessage(m.chat, { text: `❌ Gagal menambahkan @${targetNum} karena pengaturan privasi target membatasi undangan grup.`, mentions: [target] }, { quoted: m });
    }
  },
};
