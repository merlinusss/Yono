module.exports = {
  command: 'readmore',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, command, quoted, readmore } = ctx;

m.reply(`*Pemisahnya adalah "|"*\n\n*Contoh:*\n> ${command} Hai, |Nama Saya Adalah ${botname}`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
lenwy.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
  },
};
