module.exports = {
  command: 'toanime',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, command, prefix, mess, quoted, mime, libs } = ctx;
    const { fs, uploader60Minute } = libs;

    if (!quoted) return m.reply('Balas foto yang ingin diubah.');
    if (!/image/.test(mime)) return m.reply(`Kirim atau balas foto dengan caption ${prefix + command}`);
    if (!global.api?.xterm?.url || !global.api?.xterm?.key) {
      return m.reply('❌ API xterm belum dikonfigurasi di len.js.');
    }

    const { key } = await lenwy.sendMessage(m.chat, { text: mess.wait }, { quoted: m });
    const filterType = ['jadinyata', 'toreal'].includes(command) ? 'anime2real' : 'anime2d';

    let media;
    try {
      media = await lenwy.downloadAndSaveMediaMessage(quoted);
      const url = await uploader60Minute(media);

      const res = await fetch(
        `${global.api.xterm.url}/api/img2img/filters?action=${filterType}&url=${url}&key=${global.api.xterm.key}`
      ).then(v => v.json());
      if (!res.status) return m.reply(`❌ ${res.msg || 'Gagal memproses gambar.'}`);

      let i = 0;
      while (i < 55) {
        const s = await fetch(
          `${global.api.xterm.url}/api/img2img/filters/batchProgress?id=${res.id}`
        ).then(v => v.json());
        await lenwy.sendMessage(m.chat, { text: s.progress || 'Prepare...', edit: key }, { quoted: m });

        if (s.status === 3) {
          return s.url
            ? lenwy.sendMessage(m.chat, { image: { url: s.url } }, { quoted: m })
            : m.reply('❌ Gambar tidak tersedia. Coba lagi.');
        }

        if (s.status === 4) return m.reply('❌ Terjadi kesalahan. Gunakan gambar lain.');

        await new Promise(r => setTimeout(r, 5000));
        i++;
      }
    } catch (e) {
      console.error(e);
      m.reply(`❌ ${e.message || 'Terjadi kesalahan.'}`);
    } finally {
      if (media && fs.existsSync(media)) fs.unlinkSync(media);
    }
  },
};
