module.exports = {
  command: 'onlyadmin',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, args, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};
    if (!text) return m.reply(`Cara pakai: ${prefix + command} on atau off`);

    const mode = (args[0] || '').toLowerCase();
    if (mode === 'on') {
      global.db.data.chats[m.chat].onlyAdmin = true;
    } else if (mode === 'off') {
      global.db.data.chats[m.chat].onlyAdmin = false;
    } else {
      return m.reply(`Cara pakai: ${prefix + command} on atau off`);
    }

    fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
