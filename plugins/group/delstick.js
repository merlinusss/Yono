module.exports = {
  command: 'delstick',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs, isKeyResponStick, delResponStick } = libs;

if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: ${prefix + command} (key)`);
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))
  if (!isKeyResponStick(m.chat, text.toLowerCase(), db_sticker)) return m.reply(`*Sticker Dengan Key ${text} Tidak Ada Dalam Liststick*`);
  await delResponStick(m.chat, text.toLowerCase(), db_sticker)
  m.reply(`*Sukses Menghapus Sticker Dengan Key ${text}*`)
  },
};
