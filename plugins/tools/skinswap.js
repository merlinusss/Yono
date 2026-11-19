module.exports = {
  command: 'skinswap',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted, mime, libs } = ctx;
    const { util, uploader60Minute, format } = libs;

if (!quoted) return m.reply(`Fotonya Mana?`)
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`)

  let color_Skin = ["black", "pink", "green", "blue", "purple", "red", "gold", "silver", "brown", "orange"]

  if (!color_Skin.includes(text.toLowerCase())) {
      return m.reply(`Warna *${text}* tidak tersedia!\nGunakan salah satu dari:\n${color_Skin.join(', ')}`)
  }
  let media = await lenwy.downloadAndSaveMediaMessage(quoted)
  let anu = await uploader60Minute(media)
  let result = (util.format(anu))
  try {
      const result2 = await (await fetch(`https://${global.api.maelyn.domain}/api/img2img/skinswap?url=${result}&style=${text.toLowerCase()}`, {
          headers: {
              'x-maelyn-auth': global.api.maelyn.apikey
          }
      })).json()
      await lenwy.sendMessage(m.chat, { image: { url: result2.result }, caption: 'Selesai' }, { quoted: m })
  } catch (e) {
      console.log(e)
      return m.reply('Error saat proses skinswap!')
  }
  },
};
