module.exports = {
  command: 'cekkodam',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
const tik = await (await fetch(`https://${global.api.ham.domain}/primbon/cekkhodam?apikey=${global.api.ham.apikey}&name=${q}`)).json()
m.reply(tik.result.message)
  },
};
