module.exports = {
  command: 'createqr',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, text, mess, quoted, LenwyLD } = ctx;

if (!text) return m.reply(`*Contoh : Createqr ${botname}*`)
LenwyLD()
const qrcode = require('qrcode')
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
lenwy.sendMessage(from, { image: data, caption: mess.success }, { quoted: m })
  },
};
