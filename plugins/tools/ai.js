module.exports = {
  command: 'ai',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted, mime, LenwyLD, libs } = ctx;
    const { fs, uploader60Minute } = libs;

    if (!text) return m.reply('Masukkan pertanyaan untuk AI.');
    LenwyLD();

    if (quoted && /image/.test(mime)) {
      let media;
      try {
        media = await lenwy.downloadAndSaveMediaMessage(quoted);
        const anu = await uploader60Minute(media);
        const res = await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`, {
          method: 'POST',
          headers: {
            'x-maelyn-auth': global.api.maelyn.apikey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: text,
            model: 'gemini-3-flash-preview',
            mode: 'chat',
            images: [anu],
          }),
        });
        const data = await res.json();
        return m.reply(data?.result?.text || '❌ Tidak ada respons dari AI.');
      } catch (e) {
        console.error(e);
        return m.reply('❌ Terjadi kesalahan saat memproses gambar dengan AI.');
      } finally {
        if (media && fs.existsSync(media)) fs.unlinkSync(media);
      }
    }

    try {
      const res = await fetch(`https://${global.api.maelyn.domain}/api/ai/gemini`, {
        method: 'POST',
        headers: {
          'x-maelyn-auth': global.api.maelyn.apikey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: text,
          mode: 'chat',
          model: 'gemini-3-flash-preview',
        }),
      });
      const gpt = await res.json();
      return m.reply(gpt?.result?.text || '❌ Tidak ada respons dari AI.');
    } catch (e) {
      console.error(e);
      return m.reply('❌ Terjadi kesalahan saat menghubungi AI.');
    }
  },
};
