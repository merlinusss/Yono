module.exports = {
  command: 'txt2waifu',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, isBan, mess, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*Mau Gambar Apa?*`)
  LenwyLD()
  await sleep(200)
  try {
      let result = await (await fetch(`https://endpoint.web.id/ai/sdxl-waifu?key=315602&prompt=${text}`)).json()
      let imageUrl = result.result.image;
      lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${text}"` }, { quoted: m })
  } catch (error) {
      console.error(error)
      m.reply(mess.error)
  }
  },
};
