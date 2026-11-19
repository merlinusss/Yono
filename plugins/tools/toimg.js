module.exports = {
  command: 'toimg',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, command, prefix, isBan, mess, quoted, mime, LenwyLD, libs } = ctx;
    const { fs, ffmpeg, Image, exec, sleep, getRandom } = libs;

if (isBan) return m.reply(mess.ban)
try {
  LenwyLD()
  await sleep(200)
if (!quoted) return m.reply ('Reply Image')
if (!/webp/.test(mime)) reply `Balas sticker dengan caption *${prefix + command}*`
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply(err)
let buffer = fs.readFileSync(ran)
lenwy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
} catch (e) {
    m.reply('[!] pastikan kamu reply stiker yang tidak gerak')
}
  },
};
