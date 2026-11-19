module.exports = {
  command: 'btncopy',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text || !text.includes('@')) {
      return m.reply(`Cara pakai: ${prefix + command} key@namaTombol@teksSalin`);
    }

    const parts = text.split('@');
    const key = (parts[0] || '').trim();
    const displayName = (parts[1] || '').trim();
    const nilaiCopy = parts.slice(2).join('@').trim();
    if (!key || !displayName || !nilaiCopy) {
      return m.reply(`Format salah. Contoh: ${prefix + command} gopay@Salin Nomor@08123456789`);
    }

    const _db = readDatabasePayment();
    const paymentData = _db.find(item => item.key === key && item.id === m.chat);
    if (!paymentData) return m.reply(`❌ Key "${key}" tidak ditemukan di grup ini.`);

    paymentData.buttonData = paymentData.buttonData || [];
    paymentData.buttonData.push({
      name: 'cta_copy',
      buttonParamsJson: JSON.stringify({ display_text: displayName, id: nilaiCopy, copy_code: nilaiCopy }),
    });

    writeDatabasePayment(_db);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
