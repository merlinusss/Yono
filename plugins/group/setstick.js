module.exports = {
  command: 'setstick',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, quoted, mime, libs } = ctx;
    const { fs } = libs;

if (!isAdmins) return m.reply(mess.admin);
  if (!text) return m.reply(`Contoh: Reply foto/sticker dengan caption:\n${prefix + command} (Key)`)
  if (!/image/.test(mime)) return m.reply(`Foto atau Sticker nya Mana?`);

  let nameKey = text
  let groupID = m.chat;
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/sticker/${nameKey + groupID}`)
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))

  if (!Array.isArray(db_sticker)) {
    db_sticker = [];
  }
  let existingPayment = db_sticker.find(entry => entry.id === groupID && entry.key === nameKey);
  if (existingPayment) {
      return m.reply(`Sticker dengan key ${nameKey} sudah ada untuk grup ini.`);
  }
  let obj_add = {
    id: groupID,
    key: nameKey,
    imageUrl: imageUrl
  };

  db_sticker.push(obj_add);
  fs.writeFileSync('./storage/databaseSticker.json', JSON.stringify(db_sticker, null, 3), 'utf-8');
  m.reply(`Sticker ${nameKey} berhasil disimpan`);
  },
};
