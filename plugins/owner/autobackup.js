module.exports = {
  command: 'autobackup',
  category: 'OWNER',
  async execute({ m, text, q, command, prefix, isCreator, mess }) {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(`*Ketik ${prefix + command} on/off*`);
    const val = q.toLowerCase().trim();
    if (val === 'on') {
      global.autobackup = true;
      m.reply(mess.success);
    } else if (val === 'off') {
      global.autobackup = false;
      m.reply(mess.success);
    } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
    }
  },
};
