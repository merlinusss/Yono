module.exports = {
  command: 'delpay',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, command, prefix, isAdmins, libs } = ctx;
    const { fs, readDatabasePayment, writeDatabasePayment } = libs;

if (!isAdmins) return;
  if (!text) return m.reply(`Contoh: ${prefix + command} key`);

  let _db = readDatabasePayment();
  let paymentIndex = _db.findIndex(item => item.key === text && item.id === m.chat);

  if (paymentIndex === -1) {
      let availableKeys = _db.filter(item => item.id === m.chat).map((item, i) => `${i + 1}. ${item.key}`);
      return m.reply(availableKeys.length === 0 ? "Tidak ada data pembayaran." : `Key tidak ditemukan. Key tersedia:\n${availableKeys.join('\n')}`);
  }

  let [deletedPayment] = _db.splice(paymentIndex, 1);
  if (deletedPayment.imageUrl) {
      require('fs').unlink(deletedPayment.imageUrl, (err) => {
          if (err) console.error("Gagal menghapus file gambar:", err);
      });
  }

  writeDatabasePayment(_db);
  m.reply(`Data pembayaran "${text}" berhasil dihapus.`);
  },
};
