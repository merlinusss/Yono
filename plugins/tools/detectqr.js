module.exports = {
  command: 'detectqr',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, quoted, LenwyLD, libs } = ctx;
    const { fs, util, uploader60Minute } = libs;

    LenwyLD();
    let mee;
    try {
      mee = await lenwy.downloadAndSaveMediaMessage(quoted);
      const mem = await uploader60Minute(mee);
      const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`);
      const data = await res.json();
      return m.reply(util.format(data[0]));
    } catch {
      return m.reply('❌ Gagal membaca QR. Pastikan kamu membalas gambar QR yang valid.');
    } finally {
      if (mee && fs.existsSync(mee)) fs.unlinkSync(mee);
    }
  },
};
