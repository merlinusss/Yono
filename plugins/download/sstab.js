module.exports = {
  command: 'sstab',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, from, q, command, prefix, mess, quoted, libs } = ctx;
    const { axios } = libs;

if (!q) return m.reply(`*Contoh ${prefix + command} Link Kamu*`)
  const apiUrl = `https://endpoint.web.id/tools/sswebtab?key=315602&url=${encodeURIComponent(q)}`;
  try {
    const response = await axios.get(apiUrl)
    if (response.data.status && response.data.code === 200) {
      const imageUrl = response.data.result;
      lenwy.sendMessage(from, { image: { url: imageUrl }, caption: mess.success }, { quoted: m })
    } else {
      m.reply('Gagal mendapatkan tangkapan layar dari API.')
    }
  } catch (error) {
    console.error('Error saat memanggil API:', error)
    m.reply('Terjadi kesalahan saat memproses permintaan.')
  }
  },
};
