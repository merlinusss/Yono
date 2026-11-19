module.exports = {
  command: 'delbtn',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text) return m.reply(`Cara pakai: ${prefix + command} key`);

    const _db = readDatabasePayment();
    const payment = _db.find(item => item.id === m.chat && item.key === text.trim());
    if (!payment) return m.reply(`❌ Key "${text.trim()}" tidak ditemukan di grup ini.`);

    payment.buttonData = [];
    writeDatabasePayment(_db);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
