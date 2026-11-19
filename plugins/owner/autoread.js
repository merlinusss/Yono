module.exports = {
  command: 'autoread',
  category: 'OWNER',
  async execute(ctx) {
    const { m, q, command, prefix, isCreator, mess, botNumber, owner } = ctx;

if (!isCreator) return m.reply(mess.owner);
  if (q === 'on') {
      global.db.data.settings[botNumber].autoread = true;
      m.reply(`Berhasil mengubah autoread ke ${q}`);
  } else if (q === 'off') {
      global.db.data.settings[botNumber].autoread = false;
      m.reply(`Berhasil mengubah autoread ke ${q}`);
  } else {
      m.reply(`*Ketik ${prefix + command} on/off*`);
  }
  },
};
