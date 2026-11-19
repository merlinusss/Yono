module.exports = {
  command: 'setsimbol',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, isAdmins, mess, libs } = ctx;
    const { fs } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!global.datagc[m.chat]) global.datagc[m.chat] = {};

    global.datagc[m.chat].text_list_simbol = text || '';
    fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2));
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
