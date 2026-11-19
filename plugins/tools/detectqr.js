module.exports = {
  command: 'detectqr',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, quoted, LenwyLD, libs } = ctx;
    const { util, uploader60Minute, format } = libs;

LenwyLD()
try {
mee = await lenwy.downloadAndSaveMediaMessage(quoted)
mem = await uploader60Minute(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json()
m.reply(util.format(data[0]))
} catch (err) {
m.reply(`*Mana Qrnya?*`)
}
  },
};
