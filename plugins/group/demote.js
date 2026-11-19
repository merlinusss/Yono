module.exports = {
  command: 'demote',
  category: 'GROUP',
  async execute({ lenwy, m, from, text, isAdmins, isBotAdmins, mess, botNumber }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!isAdmins) return m.reply(mess.admin);
    const users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (users.includes(botNumber[0])) return m.reply('Ngapain demote bot? Bot tidak bisa demote dirinya sendiri.');
    await lenwy.groupParticipantsUpdate(from, [users], 'demote');
    m.reply(mess.success);
  },
};
