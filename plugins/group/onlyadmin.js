module.exports = {
  command: 'onlyadmin',
  category: 'GROUP',
  async execute(ctx) {
    const { m, args, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs } = libs;

if (!isAdmins) return m.reply(mess.admin)
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.datagc[m.chat]) global.datagc[m.chat] = {}
  if (!text) return m.reply(`Contoh:
${prefix + command} on / off`)
  if (args[0] === 'on') {
    global.db.data.chats[m.chat].onlyAdmin = true
  } else if (args[0] === 'off') {
    global.db.data.chats[m.chat].onlyAdmin = false
  }
  fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2))
  m.reply(mess.success)
  },
};
