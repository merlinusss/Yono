module.exports = {
  command: 'addpay',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, quoted, mime, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

if (!isAdmins) return m.reply(mess.admin);
  if (!text || !text.includes('@')) return m.reply(`Contoh: Kirim foto dengan caption:\n${prefix + command} ewallet@Berikut Nomor E-Wallet nya:\nGopay: 085261255548\nDana: 085261255548`);
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);

  let [paymentMethod, ...paymentDataArr] = text.split('@');
  let paymentData = paymentDataArr.join('@');
  let groupID = m.chat;
  let paymentDataId = `${groupID.split('@')[0]}-${paymentMethod}`;
  
  let imageUrl = await lenwy.downloadAndSaveMediaMessage(quoted, `./storage/data/image/${paymentDataId}`);
  let _db = readDatabasePayment() || [];

  if (_db.some(entry => entry.id === groupID && entry.key === paymentMethod)) {
      return m.reply(`Key dengan metode ${paymentMethod} sudah ada untuk grup ini.`);
  }

  _db.push({ id: groupID, key: paymentMethod, paymentData, imageUrl });
  writeDatabasePayment(_db);
  return m.reply(`Pembayaran dengan metode ${paymentMethod} berhasil disimpan.
lanjutkan dengan menambahkan tombol
menggunakan perintah ${prefix}btnlink atau ${prefix}btncopy`);
  },
};
