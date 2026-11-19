module.exports = {
  command: 'del',
  aliases: ['delete'],
  category: 'GROUP',
  async execute({ lenwy, m, isAdmins, isBotAdmins, mess }) {
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!m.quoted) return m.reply('*Balas Pesan Yang Ingin Dihapus Oleh Bot*');
    await lenwy.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        id: m.quoted.id,
        participant: m.quoted.sender,
      },
    });
  },
};
