module.exports = {
  command: 'txt2img',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, q, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (!q) return m.reply(`*Mau Gambar Apa?*`)

    LenwyLD
    await sleep(200)


    try {
        const apiUrl = `https://endpoint.web.id/ai/txt2img?key=315602&prompt=${encodeURIComponent(q)}`;

        let response = await fetch(apiUrl)
        let json = await response.json()

        if (json.status && json.code === 200) {
            let imageUrl = json.result.url;

            lenwy.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Gambar untuk prompt: "${q}"` }, { quoted: m })
        } else {
            m.reply(`Gagal mendapatkan gambar. Silakan coba lagi.`)
        }
    } catch (error) {
        console.error('Error:', error)
        m.reply(`Terjadi kesalahan saat memproses permintaan.`)
    }
  },
};
