module.exports = {
  command: 'setsimbol',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, isAdmins, mess, libs } = ctx;
    const { fs } = libs;

if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins) return m.reply(mess.admin);
  let teks_simbol = text || ''
  global.datagc[m.chat].text_list_simbol = teks_simbol;
  m.reply(mess.success)
  fs.writeFileSync('./storage/databaseGroup.json', JSON.stringify(global.datagc, null, 2))
  },
};
