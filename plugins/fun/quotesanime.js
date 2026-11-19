module.exports = {
  command: 'quotesanime',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, text, isBan, quoted, libs } = ctx;
    const { fs, Quotes } = libs;

if (isBan) return m.reply(global.mess.ban)
const an1 = JSON.parse(fs.readFileSync("./storage/teks/quotesanime.json"))
const r4ndan1 = an1[Math.floor(Math.random() * an1.length)]
const tgt99 = `*Random Quotes Anime*

🍁 *Nama Anime : ${r4ndan1.anime}*
🍁 *Nama Character : ${r4ndan1.character}*
🍁 *Episode : ${r4ndan1.episode}*

🎁 *Quotes : ${r4ndan1.quotes}*`
lenwy.sendMessage(from, { text: tgt99 }, { quoted: m })
  },
};
