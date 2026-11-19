module.exports = {
  command: 'reloadplugins',
  aliases: ['reload'],
  category: 'OWNER',
  async execute({ lenwy, m, isCreator, mess, reloadPlugins }) {
    if (!isCreator) return m.reply(mess.owner);
    reloadPlugins();
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
