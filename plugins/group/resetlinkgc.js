const fs = require('fs');

module.exports = {
  command: 'resetlinkgc',
  category: 'GROUP',
  async execute({ lenwy, m, from, isAdmins, isBotAdmins, mess }) {
    if (!isAdmins) return m.reply(mess.admin);
    if (!m.isGroup) return m.reply(mess.group);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    try {
      await lenwy.groupRevokeInvite(from);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newLink = await lenwy.groupInviteCode(from);
      m.reply(`*Link Grup Berhasil Di Reset*\n\n*Menjadi:* https://chat.whatsapp.com/${newLink}`);
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
    } catch (err) {
      console.error('Error saat mereset link grup:', err);
      m.reply('Terjadi kesalahan saat mereset link grup.');
    }
  },
};
