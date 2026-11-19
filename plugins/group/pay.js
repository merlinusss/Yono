module.exports = {
  command: 'pay',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, libs } = ctx;
    const { readDatabasePayment } = libs;

    const _db = readDatabasePayment();
    const payments = _db.filter(item => item.id === m.chat);
    if (payments.length === 0) return m.reply('Belum ada data pembayaran di grup ini.');

    const missingButtons = payments
      .filter(p => !p.buttonData || p.buttonData.length === 0)
      .map(p => p.key);
    if (missingButtons.length > 0) {
      return m.reply(`❌ Key "${missingButtons.join(', ')}" belum diatur tombolnya.`);
    }

    const cards = payments.map(payment => ({
      image: { url: payment.imageUrl },
      caption: payment.paymentData,
      footer: '',
      nativeFlow: payment.buttonData.map(button => ({
        name: button.name,
        buttonParamsJson: button.buttonParamsJson,
      })),
    }));

    await lenwy.sendMessage(
      m.chat,
      {
        text: 'Daftar metode pembayaran',
        footer: `> ${global.botname}`,
        cards,
      },
      { quoted: m }
    );
  },
};
