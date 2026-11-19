module.exports = {
  command: 'tovid',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, command, prefix, isBan, mess, quoted, mime, libs } = ctx;
    const { webpToMp4 } = libs;

    if (isBan) return m.reply(mess.ban);
    try {
      if (!quoted || !/webp/.test(mime)) {
        return m.reply(`Balas stiker animasi dengan caption ${prefix + command}`);
      }

      const mediaBuf = await lenwy.downloadMediaMessage(quoted);
      if (!mediaBuf || !mediaBuf.includes(Buffer.from('ANIM'))) {
        return m.reply('❌ Stiker yang dibalas bukan stiker animasi.');
      }

      const videoBuf = await webpToMp4(mediaBuf);
      await lenwy.sendMessage(
        from,
        { video: videoBuf, caption: 'Stiker berhasil diubah ke video.' },
        { quoted: m }
      );
    } catch (e) {
      m.reply(`❌ Gagal mengonversi stiker ke video: ${e.message}`);
    }
  },
};
