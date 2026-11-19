module.exports = {
  command: 'btncopy',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, command, prefix, isAdmins, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

if (!isAdmins) return;
  if (!text.includes('@')) return m.reply(`Contoh: ${prefix + command} <key>@<namaTombol>@<teksCopy>`);

  let [key, displayName, nilaiCopy] = text.split('@');
  let _db = readDatabasePayment();
  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  
  if (!paymentData) return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);

  paymentData.buttonData = paymentData.buttonData || [];
  paymentData.buttonData.push({
      name: "cta_copy",
      buttonParamsJson: JSON.stringify({ display_text: displayName, id: nilaiCopy, copy_code: nilaiCopy })
  });

  writeDatabasePayment(_db);
  return m.reply(`Tombol salin "${nilaiCopy}" berhasil diset untuk key "${key}".`);
  },
};
