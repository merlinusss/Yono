module.exports = {
  command: 'kick',
  category: 'GROUP',
  async execute({ lenwy, m, text, isAdmins, isBotAdmins, mess, botNumber }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!text && !m.quoted && !m.mentionedJid?.[0]) {
      return m.reply('Tag, balas pesan, atau masukkan nomor yang ingin dikeluarkan.');
    }

    try {
      const users = m.mentionedJid?.[0] || (m.quoted ? m.quoted.sender : `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`);
      if (botNumber[0] && users.includes(botNumber[0])) {
        return m.reply('❌ Bot tidak bisa mengeluarkan dirinya sendiri.');
      }
      await lenwy.groupParticipantsUpdate(m.chat, [users], 'remove');
      await lenwy.sendMessage(m.chat, { text: `Berhasil mengeluarkan @${users.split('@')[0]} dari grup.`, mentions: [users] }, { quoted: m });
    } catch (e) {
      return m.reply(`❌ Gagal mengeluarkan anggota: ${e.message || e}`);
    }
  },
};
