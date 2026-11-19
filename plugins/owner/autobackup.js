module.exports = {
  command: 'autobackup',
  category: 'OWNER',
  async execute({ lenwy, m, text, q, command, prefix, isCreator, mess }) {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(`Ketik ${prefix + command} on/off`);
    const val = q.toLowerCase().trim();
    if (val === 'on') {
      global.autobackup = true;
      return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
    }
    if (val === 'off') {
      global.autobackup = false;
      return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
    }
    return m.reply(`Ketik ${prefix + command} on/off`);
  },
};
