module.exports = {
  command: 'math',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, sender, text, prefix, isBan, kuismath, libs } = ctx;
    const { sleep } = libs;

let { genMath, modes } = require('../../library/math')
  if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply('⚠️ *Masih Ada Sesi Yang Belum Diselesaikan!*')
  if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}
Contoh penggunaan: ${prefix}math medium`);
  let result = await genMath(text.toLowerCase())
  await lenwy.sendText(from,
    `*Berapa Hasil Dari : ${result.soal.toLowerCase()}*?
🕒 *Waktu : ${(result.waktu / 1000).toFixed(2)} detik*`,
  m).then(() => {
    kuismath[m.sender.split('@')[0]] = result.jawaban
  })
  await sleep(result.waktu)
  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
    console.log("Jawaban: " + result.jawaban)
    m.reply("🕒 *Waktu Habis*\n🎁 *Jawaban :* " + kuismath[m.sender.split('@')[0]])
    delete kuismath[m.sender.split('@')[0]]
  }
  },
};
