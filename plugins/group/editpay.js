module.exports = {
  command: 'editpay',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, command, prefix, isAdmins, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

if (!isAdmins) return;
  if (!text.includes('@')) return m.reply(`Contoh: ${prefix + command} key@teksBaru`);
  
  let [key, newWording] = text.split('@');
  let _db = readDatabasePayment();
  let payment = _db.find(item => item.id === m.chat && item.key === key);
  
  if (!payment) return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);

  payment.paymentData = newWording;
  writeDatabasePayment(_db);
  return m.reply(`Wording untuk key "${key}" berhasil diubah.`);
  },
};
