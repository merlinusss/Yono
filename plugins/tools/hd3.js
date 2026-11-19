module.exports = {
  command: 'hd3',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, quoted, mime, LenwyLD, libs } = ctx;
    const { util, uploader60Minute, format } = libs;

if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
LenwyLD()
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let result = (util.format(anu))
try {
 await lenwy.sendMessage(m.chat,{ image:{ url: `https://api.nexray.eu.cc/tools/v1/upscale?url=${result}` }, caption:'Selesai' },{ quoted: m })
} catch (e) {
 return m.reply('Error, Coba Pakai hd4')
}
  },
};
