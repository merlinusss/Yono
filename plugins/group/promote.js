module.exports = {
  command: 'promote',
  category: 'GROUP',
  async execute({ lenwy, m, from, text, isAdmins, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text && !m.quoted && !m.mentionedJid?.[0]) {
      return m.reply('Tag, balas pesan, atau masukkan nomor anggota.');
    }

    const users = m.mentionedJid?.[0] || (m.quoted ? m.quoted.sender : `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`);
    await lenwy.groupParticipantsUpdate(from, [users], 'promote');
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
