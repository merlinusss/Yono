module.exports = {
  command: 'ocr',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted, mime, libs } = ctx;
    const { util, uploader60Minute, format } = libs;

if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
try{
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://deoberon-api.vercel.app/tools/ocr?url=${result}`)).json()
let teks = proses.result
await lenwy.sendMessage(m.chat, { text: `Hasilnya: ${teks}` }, { quoted: m})
} catch (error) {
console.error(error)
m.reply('Error')
}
  },
};
