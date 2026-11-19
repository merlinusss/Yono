module.exports = {
  command: 'btnlink',
  category: 'GROUP',
  async execute(ctx) {
    const { m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

if (!isAdmins) return m.reply(mess.admin);
  if (!text.includes('@')) return m.reply(`Contoh: ${prefix + command} key@namaTombol@url`);

  let [key, displayName, url] = text.split('@');
  let _db = readDatabasePayment();
  let paymentData = _db.find(item => item.key === key && item.id === m.chat);
  
  if (!paymentData) return m.reply(`Key "${key}" tidak ditemukan di grup ini.`);

  paymentData.buttonData = paymentData.buttonData || [];
  paymentData.buttonData.push({
      name: "cta_url",
      buttonParamsJson: JSON.stringify({ display_text: displayName, url: url })
  });

  writeDatabasePayment(_db);
  return m.reply(`Tombol URL "${displayName}" berhasil diset untuk key "${key}".`);
  },
};
