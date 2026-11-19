module.exports = {
  command: 'addpay',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, quoted, mime, libs } = ctx;
    const { fs, readDatabasePayment, writeDatabasePayment } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text || !text.includes('@')) {
      return m.reply(`Kirim atau balas gambar dengan caption:\n${prefix + command} ewallet@Berikut nomor e-wallet:\nGopay: 085261255548\nDana: 085261255548`);
    }
    if (!/image/.test(mime)) return m.reply('Kirim atau balas gambar dengan perintah ini.');

    const sepIdx = text.indexOf('@');
    const paymentMethod = text.slice(0, sepIdx).trim();
    const paymentData = text.slice(sepIdx + 1).trim();
    if (!paymentMethod || !paymentData) {
      return m.reply(`Format salah. Contoh: ${prefix + command} ewallet@nomor e-wallet`);
    }

    const groupID = m.chat;
    const _db = readDatabasePayment() || [];
    if (_db.some(entry => entry.id === groupID && entry.key === paymentMethod)) {
      return m.reply(`❌ Metode ${paymentMethod} sudah ada di grup ini.`);
    }

    fs.mkdirSync('./storage/data/image', { recursive: true });
    const paymentDataId = `${groupID.split('@')[0]}-${paymentMethod}`;
    const imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/image/${paymentDataId}`);

    _db.push({ id: groupID, key: paymentMethod, paymentData, imageUrl });
    writeDatabasePayment(_db);
    return m.reply(`Pembayaran ${paymentMethod} tersimpan.\nTambahkan tombol lewat ${prefix}btnlink atau ${prefix}btncopy.`);
  },
};
