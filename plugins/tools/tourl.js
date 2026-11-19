module.exports = {
  command: 'tourl',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, q, quoted, mime, LenwyLD, libs } = ctx;
    const { util, uploader60Minute, sleep, format } = libs;

if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`*Mana Foto Atau Video Nya?*`)
if (/image/.test(mime)) {
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    console.log(link)
    await m.reply(`${link}`)
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
  },
};
