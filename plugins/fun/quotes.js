module.exports = {
  command: 'quotes',
  category: 'FUN',
  async execute(ctx) {
    const { m, isBan, author, libs } = ctx;
    const { Quotes } = libs;

if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
var resi = await Quotes()
teks = `\n${global.emoji} *Author: ${resi.author}*\n`
teks = `\n🎁 *Quotes:*\n`
teks = `*${resi.quotes}*\n`
m.reply(teks)
  },
};
