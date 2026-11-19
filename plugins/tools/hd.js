module.exports = {
  command: 'hd',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, quoted, mime, LenwyLD, libs } = ctx;
    const { util, uploader60Minute, format } = libs;

if (!quoted) return m.reply(`Fotonya Mana?`)
 if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)
 await LenwyLD()
 try {
 let media = await lenwy.downloadAndSaveMediaMessage(quoted)
 let anu = await uploader60Minute(media)
 let result = (util.format(anu))
 console.log(anu)
 await lenwy.sendMessage(m.chat, { image: { url: `https://api.nexray.eu.cc/tools/v1/enhancer?url=${result}` }, caption: 'SUCCESS ✅' }, { quoted: m })
 } catch (e) {
 console.error(e);
 return m.reply('Error, Coba Pakai hd2')
 }
  },
};
