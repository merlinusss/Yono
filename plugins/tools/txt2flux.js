module.exports = {
  command: 'txt2flux',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, isBan, mess, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*Mau Gambar Apa?*`)
LenwyLD()
await sleep(200)
try{
let result = await (await fetch(`https://endpoint.web.id/ai/flux-schnell?key=315602&prompt=${text}`)).json()
lenwy.sendMessage(m.chat, { image: { url: result.result }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
} catch (error) {
m.reply(mess.error)
}
  },
};
