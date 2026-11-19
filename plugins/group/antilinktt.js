module.exports = {
  command: 'antilinktt',
  aliases: [
    'antilinkyt',
    'antiwame',
    'antilink1',
    'antilink2',
    'antitoxic1',
    'antitoxic2',
    'antilinkgc1',
    'antilinkgc2',
    'antisw1',
    'antisw2',
  ],
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, q, command, prefix, isAdmins, isCreator, isBotAdmins, mess, libs } = ctx;
    const { fs } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins && !isCreator) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);

    const dbKey = command;
    const mode = (q || '').toLowerCase().trim();

    if (mode === 'on') {
      global.db.data.chats[m.chat][dbKey] = true;
      if (['antilink1', 'antilink2', 'antilinkgc1', 'antilinkgc2'].includes(command)) {
        const newLink = await lenwy.groupInviteCode(m.chat);
        global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
        fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      }
      if (command.endsWith('1')) {
        const cmd2 = command.replace('1', '2');
        return m.reply(`${command} diaktifkan.\nGunakan ${prefix}${cmd2} on jika ingin langsung mengeluarkan pelanggar.`);
      }
      return m.reply(`${command} diaktifkan.`);
    }

    if (mode === 'off') {
      global.db.data.chats[m.chat][dbKey] = false;
      if (['antilink1', 'antilink2', 'antilinkgc1', 'antilinkgc2'].includes(command)) {
        const newLink = await lenwy.groupInviteCode(m.chat);
        global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
        fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      }
      return m.reply(`${command} dinonaktifkan.`);
    }

    return m.reply(`Cara pakai: ${prefix + command} on atau off`);
  },
};
