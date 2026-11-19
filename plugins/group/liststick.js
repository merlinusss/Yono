module.exports = {
  command: 'liststick',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, groupName, libs } = ctx;
    const { fs, isAlreadyResponStickGroup } = libs;

if (text) return
  let db_sticker = JSON.parse(fs.readFileSync('./storage/databaseSticker.json'))
  if (!isAlreadyResponStickGroup(m.chat, db_sticker)) return m.reply(`*Belum Ada Sticker Yang Terdaftar Di Grup Ini*`);
  let sortedList = db_sticker.filter(i => i.id === m.chat).sort((a, b) => a.key.localeCompare(b.key));
  let tek = `List Sticker Yang Terdaftar Di Group ${groupName}\n`
  for (let i of sortedList) {
    tek += `\n> *${i.key}*`
  }
  m.reply(tek)
  },
};
