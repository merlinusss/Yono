module.exports = {
  command: 'kick',
  category: 'GROUP',
  async execute({ lenwy, m, text, isAdmins, isBotAdmins, mess, botNumber }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!text && !m.quoted) return m.reply('tag atau @user');

    try {
      const users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      if (users.includes(botNumber[0])) return m.reply('Ngapain kick bot? Bot tidak bisa mengeluarkan dirinya sendiri');
      await lenwy.groupParticipantsUpdate(m.chat, [users], 'remove');
      await lenwy.sendMessage(m.chat, { text: `Berhasil Mengeluarkan @${users.split('@')[0]} Dari Grup Ini`, mentions: [users] }, { quoted: m });
    } catch (e) {
      return m.reply(e.toString());
    }
  },
};
