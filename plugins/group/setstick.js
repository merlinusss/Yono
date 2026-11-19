module.exports = {
  command: 'setstick',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, quoted, mime, libs } = ctx;
    const { fs } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text) return m.reply(`Cara pakai: balas gambar atau stiker lalu ketik ${prefix + command} <key>`);
    if (!/image|webp/.test(mime)) return m.reply('Balas gambar atau stiker terlebih dahulu.');

    const nameKey = text.toLowerCase().trim();
    const groupID = m.chat;
    let db_sticker = [];
    try {
      db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json', 'utf8'));
    } catch {}
    if (!Array.isArray(db_sticker)) db_sticker = [];

    if (db_sticker.some(entry => entry.id === groupID && entry.key === nameKey)) {
      return m.reply(`❌ Stiker dengan key ${nameKey} sudah ada di grup ini.`);
    }

    fs.mkdirSync('./storage/data/sticker', { recursive: true });
    const imageUrl = await lenwy.downloadAndSaveMediaMessage(
      quoted,
      `./storage/data/sticker/${nameKey + groupID}`
    );

    db_sticker.push({ id: groupID, key: nameKey, imageUrl });
    fs.writeFileSync('./storage/databaseSticker.json', JSON.stringify(db_sticker, null, 3), 'utf-8');
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
