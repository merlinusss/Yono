module.exports = {
  command: 'ssweb',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, from, q, command, prefix, mess, quoted } = ctx;

if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  try {
      lenwy.sendMessage(from, { image: { url: `https://api.autoresbot.com/api/ssweb?url=${encodeURIComponent(q)}&apikey=4c04faf21fb8524bad4a9cb7` }, caption: mess.success }, { quoted: m })
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
  },
};
