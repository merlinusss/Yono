module.exports = {
  command: 'smeme',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, mess, author, quoted, mime, LenwyLD, libs } = ctx;
    const { fs, uploader60Minute, sleep } = libs;

let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return
if (!text) return m.reply(respond)
LenwyLD()
await sleep(200)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
try {
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let awikwok = await lenwy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(awikwok)
} catch (e) {
m.reply(mess.error + e)
}
  },
};
