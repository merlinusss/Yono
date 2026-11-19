module.exports = {
  command: 'antilinktt',
  aliases: ['antilinkyt', 'antiwame', 'antilink1', 'antilink2', 'antitoxic1', 'antitoxic2', 'antilinkgc1', 'antilinkgc2', 'antisw1', 'antisw2'],
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, q, command, prefix, isAdmins, isCreator, isBotAdmins, mess, libs } = ctx;
    const { fs } = libs;

if (!m.isGroup) return m.reply(mess.group);
  if (!isAdmins && !isCreator) return m.reply(mess.admin);
  if (!isBotAdmins) return m.reply(mess.botAdmin);
  let dbKey = command;
  if (q === 'on') {
      global.db.data.chats[m.chat][dbKey] = true;
      if (['antilink1', 'antilink2', 'antilinkgc1', 'antilinkgc2'].includes(command)) {
          let newLink = await lenwy.groupInviteCode(m.chat);
          global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
          fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      }
      if (command.endsWith('1')) {
          let cmd2 = command.replace('1', '2');
          let displayCmd = cmd2.charAt(0).toUpperCase() + cmd2.slice(1);
          return m.reply(`*Berhasil Mengaktifkan ${command}*\n🎁 *Ketik ${displayCmd} Untuk Mengaktifkan Autokick*`);
      }
      m.reply(`*Berhasil Mengaktifkan ${command}*`);
  } else if (q === 'off') {
      global.db.data.chats[m.chat][dbKey] = false;
      if (['antilink1', 'antilink2', 'antilinkgc1', 'antilinkgc2'].includes(command)) {
          let newLink = await lenwy.groupInviteCode(m.chat);
          global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
          fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      }
      m.reply(`*Menonaktifkan ${command}*`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
  },
};
