module.exports = {
  command: 'fb',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, mess, quoted, LenwyLD, libs } = ctx;
    const { isUrl, sleep } = libs;

if (!text) return m.reply(`*Link Fbnya Mana?*`)
 if (!isUrl(text)) return m.reply(mess.link)
 LenwyLD()
 await sleep(200)
 try {
 let { status, result } = await (await fetch(`https://${global.api.maelyn.domain}/api/facebook?url=${text}`, {
   headers: {
     'x-maelyn-auth': global.api.maelyn.apikey
   }
 })).json()
 if (status === "Success") {
 let videoHD = result.medias.find(media => media.quality === 'hd')
 await lenwy.sendMessage(m.chat, { video: { url: videoHD?.url }}, { quoted: m })
 } else {
 m.reply(`Gagal mengambil data`)
 }
 } catch (error) {
 m.reply(`Error: ${error}`)
 console.log(error)
 }
  },
};
