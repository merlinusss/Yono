module.exports = {
  command: 'demote',
  category: 'GROUP',
  async execute({ lenwy, m, from, text, isAdmins, isBotAdmins, mess, botNumber }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text && !m.quoted && !m.mentionedJid?.[0]) {
      return m.reply('Tag, balas pesan, atau masukkan nomor anggota.');
    }

    const users = m.mentionedJid?.[0] || (m.quoted ? m.quoted.sender : `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`);
    if (botNumber[0] && users.includes(botNumber[0])) {
      return m.reply('❌ Bot tidak bisa menurunkan jabatan dirinya sendiri.');
    }
    await lenwy.groupParticipantsUpdate(from, [users], 'demote');
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
