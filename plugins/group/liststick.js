module.exports = {
  command: 'liststick',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, groupName, mess, libs } = ctx;
    const { fs, isAlreadyResponStickGroup } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (text) return;

    let db_sticker = [];
    try {
      db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json', 'utf8'));
    } catch {}
    if (!Array.isArray(db_sticker)) db_sticker = [];

    if (!isAlreadyResponStickGroup(m.chat, db_sticker)) {
      return m.reply('Belum ada stiker yang terdaftar di grup ini.');
    }

    const sortedList = db_sticker
      .filter(i => i.id === m.chat)
      .sort((a, b) => a.key.localeCompare(b.key));
    const lines = sortedList.map(i => `- ${i.key}`).join('\n');
    return m.reply(`Daftar stiker di grup ${groupName}:\n${lines}`);
  },
};
