module.exports = {
  command: 'toimg',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, command, prefix, isBan, mess, quoted, mime, LenwyLD, libs } = ctx;
    const { fs, exec, sleep, getRandom } = libs;

    if (isBan) return m.reply(mess.ban);
    try {
      LenwyLD();
      await sleep(200);
      if (!quoted) return m.reply('Balas stiker yang ingin diubah menjadi gambar.');
      if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan caption ${prefix + command}`);

      const media = await lenwy.downloadAndSaveMediaMessage(quoted);
      const ran = getRandom('.png');
      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        if (fs.existsSync(media)) fs.unlinkSync(media);
        if (err) return m.reply(`❌ Gagal mengonversi stiker: ${err.message}`);
        const buffer = fs.readFileSync(ran);
        lenwy.sendMessage(from, { image: buffer }, { quoted: m });
        if (fs.existsSync(ran)) fs.unlinkSync(ran);
      });
    } catch {
      m.reply('❌ Pastikan kamu membalas stiker yang tidak bergerak.');
    }
  },
};
