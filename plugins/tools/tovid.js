module.exports = {
  command: 'tovid',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, command, prefix, isBan, mess, quoted, mime, libs } = ctx;
    const { fs, ffmpeg, exec, format, getRandom } = libs;

if (isBan) return m.reply(mess.ban);
  try {
    if (!quoted) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`);

    if (/webp/.test(mime)) {
      let media = await lenwy.downloadAndSaveMediaMessage(quoted); // Download sticker
      let ran = await getRandom('.mp4'); // Generate nama file video

      const isAnimated = await isAnimatedWebp(media);
      if (!isAnimated) {
        return m.reply('Sticker yang kamu kirim bukan animasi webp. Harap kirim sticker animasi.');
      }

      exec(`ffmpeg -v error -i ${media} -t 10 -c:v libx264 -pix_fmt yuv420p -f mp4 ${ran}`, (err) => {
        fs.unlinkSync(media); // Hapus file sticker
        if (err) {
          return m.reply(`Terjadi kesalahan saat mengonversi sticker: ${err.message}`);
        }

        let buffer = fs.readFileSync(ran); // Baca file video
        lenwy.sendMessage(from, { video: buffer, caption: 'Sticker converted to video' }, { quoted: m }); // Kirim video hasil konversi
        fs.unlinkSync(ran); // Hapus file video setelah dikirim
      });
    }
  } catch (e) {
    m.reply(`[!] Pastikan kamu reply sticker dengan benar (format sticker GIF atau video). Error: ${e.message}`);
  }
  },
};
