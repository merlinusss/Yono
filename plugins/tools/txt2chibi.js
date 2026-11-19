module.exports = {
  command: 'txt2chibi',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, quoted, LenwyLD } = ctx;

if (!text) m.reply(`Contoh: ${prefix + command} a boy with a black jacket and blue hair`)
  LenwyLD()
  let res = await (await fetch(`https://${global.api.maelyn.domain}/api/txt2chibi?prompt=${text}&resolution=Square`, {
    headers: {
      'x-maelyn-auth': global.api.maelyn.apikey
    }
  })).json()
  for (let imageUrl of res.result) {
    await lenwy.sendMessage(m.chat, { image: { url: imageUrl }}, { quoted: m })
  }
  },
};
