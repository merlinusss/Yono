module.exports = {
  command: 'delstick',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs, isKeyResponStick, delResponStick } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text) return m.reply(`Cara pakai: ${prefix + command} <key>`);

    const targetKey = text.toLowerCase().trim();
    let db_sticker = [];
    try {
      db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json', 'utf8'));
    } catch {}
    if (!Array.isArray(db_sticker)) db_sticker = [];

    if (!isKeyResponStick(m.chat, targetKey, db_sticker)) {
      return m.reply(`❌ Stiker dengan key ${text.trim()} tidak ditemukan.`);
    }

    delResponStick(m.chat, targetKey, db_sticker);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
