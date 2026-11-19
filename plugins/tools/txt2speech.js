module.exports = {
  command: 'txt2speech',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, args, text, q, isBan } = ctx;

if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
if (args.length == 0) return m.reply(`*Mo Convert Text Apa Ke Suara?*`)
try {
  let result = await (await fetch(`https://deoberon-api.vercel.app/tools/text-to-speech?text=${q}`)).json()
  let data = result.result
  let dataTts = data.find(u => u.voice_name.toLowerCase() == "eminem")
  lenwy.sendMessage(m.chat, { audio: { url: dataTts.eminem }, mimetype: 'audio/mp4' })
} catch (e) {
m.reply('Error')
console.log(e)
}
  },
};
