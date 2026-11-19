module.exports = {
  command: 'editpay',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text || !text.includes('@')) {
      return m.reply(`Cara pakai: ${prefix + command} key@teksBaru`);
    }

    const sepIdx = text.indexOf('@');
    const key = text.slice(0, sepIdx).trim();
    const newWording = text.slice(sepIdx + 1).trim();
    if (!key || !newWording) {
      return m.reply(`Cara pakai: ${prefix + command} key@teksBaru`);
    }

    const _db = readDatabasePayment();
    const payment = _db.find(item => item.id === m.chat && item.key === key);
    if (!payment) return m.reply(`❌ Key "${key}" tidak ditemukan di grup ini.`);

    payment.paymentData = newWording;
    writeDatabasePayment(_db);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
