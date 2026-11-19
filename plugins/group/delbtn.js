module.exports = {
  command: 'delbtn',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, isAdmins, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

if (!isAdmins) return;
  if (!text) return m.reply('Contoh: delbutton key');
  
  let _db = readDatabasePayment();
  let payment = _db.find(item => item.id === m.chat && item.key === text);
  
  if (!payment) return m.reply(`Key "${text}" tidak ditemukan di grup ini.`);

  payment.buttonData = [];
  writeDatabasePayment(_db);
  return m.reply(`Semua tombol untuk key "${text}" berhasil dihapus.`);
  },
};
