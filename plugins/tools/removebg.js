module.exports = {
  command: 'removebg',
  aliases: ['nobg'],
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, quoted, mime, LenwyLD, libs } = ctx;
    const { util, uploader60Minute, format } = libs;

if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Mana Fotonya?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
const proses = await (await fetch(`https://${global.api.merlinus.domain}/api/tools/removebg?image=${result}&apikey=${global.api.merlinus.apikey}`)).json()
console.log(proses)
await lenwy.sendMessage(m.chat, { image: { url: proses.result.url }, caption: '🎁 *Removebg Selesai*'}, { quoted: m })
  },
};
