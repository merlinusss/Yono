module.exports = {
  command: 'afk',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, pushname, text, isAdmins, isBan, mess } = ctx;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (isBan) return m.reply(mess.ban);
    if (text.length > 100) return m.reply('Alasan AFK maksimal 100 karakter.');

    const user = global.db.data.users[m.sender];
    user.afk ??= {};
    user.afk[m.chat] = {
      time: +new Date(),
      reason: text,
    };

    await lenwy.sendMessage(m.chat, {
      text: `${pushname} sedang AFK.\nAlasan: ${text || 'Tidak ada'}`,
    });
  },
};
