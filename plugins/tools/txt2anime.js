module.exports = {
  command: 'txt2anime',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, q, mess, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (!text) return m.reply(`*Mau Gambar Apa?*`)
LenwyLD
await sleep(200)
LenwyLD()
await sleep(200)
try{
let mauGambar = text
let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-anime?key=315602&prompt=${q}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result.image }, caption: `Gambar untuk prompt: "${mauGambar}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
  },
};
