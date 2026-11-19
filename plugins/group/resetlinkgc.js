const fs = require('fs');

module.exports = {
  command: 'resetlinkgc',
  category: 'GROUP',
  async execute({ lenwy, m, from, isAdmins, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    try {
      await lenwy.groupRevokeInvite(from);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const newLink = await lenwy.groupInviteCode(from);
      global.db.data.chats[m.chat].linkgc = `https://chat.whatsapp.com/${newLink}`;
      fs.writeFileSync('./storage/database.json', JSON.stringify(global.db.data, null, 2));
      return m.reply(`Link grup berhasil direset.\nLink baru: https://chat.whatsapp.com/${newLink}`);
    } catch (err) {
      console.error('Error saat mereset link grup:', err);
      return m.reply('❌ Gagal mereset link grup.');
    }
  },
};
