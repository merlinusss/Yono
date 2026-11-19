module.exports = {
  command: 'delpay',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { fs, readDatabasePayment, writeDatabasePayment } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text) return m.reply(`Cara pakai: ${prefix + command} key`);

    const targetKey = text.trim();
    const _db = readDatabasePayment();
    const paymentIndex = _db.findIndex(item => item.key === targetKey && item.id === m.chat);

    if (paymentIndex === -1) {
      const availableKeys = _db
        .filter(item => item.id === m.chat)
        .map((item, i) => `${i + 1}. ${item.key}`);
      return m.reply(
        availableKeys.length === 0
          ? 'Belum ada data pembayaran di grup ini.'
          : `❌ Key "${targetKey}" tidak ditemukan. Key tersedia:\n${availableKeys.join('\n')}`
      );
    }

    const [deletedPayment] = _db.splice(paymentIndex, 1);
    if (deletedPayment.imageUrl && fs.existsSync(deletedPayment.imageUrl)) {
      fs.unlinkSync(deletedPayment.imageUrl);
    }

    writeDatabasePayment(_db);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
