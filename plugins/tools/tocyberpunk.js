module.exports = {
  command: 'tocyberpunk',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, q, command, prefix, isBan, mess, quoted, mime, libs } = ctx;
    const { uploader60Minute } = libs;

if (isBan) return m.reply(mess.ban)
    if (!quoted) return m.reply('*Fotonya Mana?*')
    if (!/image/.test(mime)) return m.reply(`*Send/Reply Foto Dengan Caption ${prefix + command}*`)

    try {
        m.reply('Process converting image, mohon tunggu...')
        const q = m.quoted || m
        const url = await uploader60Minute(await q.download())
        const res = await fetch(`https://api.nyxs.pw/ai-image/jadicyberpunk?url=${url}`).then(v => v.json())

        lenwy.sendMessage(m.chat, { image: { url: res.result }, caption: 'Nih Bos' }, { quoted: m })
    } catch (e) {
        console.error(e)
        m.reply('Harap coba beberapa saat lagi')
    }
  },
};
