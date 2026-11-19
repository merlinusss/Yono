module.exports = {
  command: 'btnlink',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isAdmins, mess, libs } = ctx;
    const { readDatabasePayment, writeDatabasePayment } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!text || !text.includes('@')) {
      return m.reply(`Cara pakai: ${prefix + command} key@namaTombol@url`);
    }

    const parts = text.split('@');
    const key = (parts[0] || '').trim();
    const displayName = (parts[1] || '').trim();
    const url = parts.slice(2).join('@').trim();
    if (!key || !displayName || !url) {
      return m.reply(`Format salah. Contoh: ${prefix + command} qris@Buka Link@https://contoh.com`);
    }

    const _db = readDatabasePayment();
    const paymentData = _db.find(item => item.key === key && item.id === m.chat);
    if (!paymentData) return m.reply(`❌ Key "${key}" tidak ditemukan di grup ini.`);

    paymentData.buttonData = paymentData.buttonData || [];
    paymentData.buttonData.push({
      name: 'cta_url',
      buttonParamsJson: JSON.stringify({ display_text: displayName, url }),
    });

    writeDatabasePayment(_db);
    return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
  },
};
