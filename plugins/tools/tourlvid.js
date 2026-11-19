module.exports = {
  command: 'tourlvid',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, q, quoted, mime, LenwyLD, libs } = ctx;
    const { fs, util, uploader60Minute, sleep, format } = libs;

if (!/video/.test(mime)) return m.reply(`*Mana Video Nya?*`)
LenwyLD()
await sleep(200)
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
if (/video/.test(mime)) {
  let q = m.quoted ? m.quoted : m;

    let media = await q.download()
    let link = await uploader60Minute(media)
    await m.reply(`${link}`)
} else if (/video/.test(mime)) {
let anu = await uploader60Minute(media)
m.reply(util.format(anu))
} else {
m.reply(`Mokad kah? Chat Developer!!!`)
}
await fs.unlinkSync(media)
  },
};
