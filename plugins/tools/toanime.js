module.exports = {
  command: 'toanime',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, mess, quoted, mime, type, libs } = ctx;
    const { uploader60Minute } = libs;

  {
if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    const { key } = await lenwy.sendMessage(m.chat, { text: mess.wait }, { quoted: m })
    const type = ['jadinyata', 'toreal'].includes(command) ? 'anime2real' : 'anime2d'

    try {
        const media = await lenwy.downloadAndSaveMediaMessage(quoted)
        const url = await uploader60Minute(media)

        const res = await fetch(`${api.xterm.url}/api/img2img/filters?action=${type}&url=${url}&key=${api.xterm.key}`).then(v => v.json())
        if (!res.status) return m.reply(res.msg || 'Error!')

        let i = 0
        while (i < 55) {
            const s = await fetch(`${api.xterm.url}/api/img2img/filters/batchProgress?id=${res.id}`).then(v => v.json())
            await lenwy.sendMessage(m.chat, { text: s.progress || 'Prepare...', edit: key }, { quoted: m })

            if (s.status === 3) return s.url
                ? lenwy.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
                : m.reply('Gambar tidak tersedia. Coba lagi.')

            if (s.status === 4) return m.reply('Terjadi kesalahan. Gunakan gambar lain.')

            await new Promise(r => setTimeout(r, 5000))
            i++
        }
    } catch (e) {
        console.error(e)
        m.reply(e.message || 'Terjadi kesalahan')
    }
  }
  },
};
