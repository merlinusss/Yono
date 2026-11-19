module.exports = {
  command: 'pay',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, text, quoted, libs } = ctx;
    const { readDatabasePayment } = libs;

let _db = readDatabasePayment();
  let payments = _db.filter(item => item.id === m.chat);
  
  if (payments.length === 0) return m.reply("Tidak ada data pembayaran di grup ini.");
  
  let missingButtons = payments.filter(p => !p.buttonData || p.buttonData.length === 0).map(p => p.key);
  if (missingButtons.length > 0) return m.reply(`Key "${missingButtons.join(', ')}" belum diset tombolnya.`);

  let cards = payments.map(payment => ({
    image: { 
      url: payment.imageUrl 
    },
    caption: payment.paymentData,
    footer: '',
    nativeFlow: payment.buttonData.map(button => ({
      name: button.name,
      buttonParamsJson: button.buttonParamsJson
    }))
  }));

  await lenwy.sendMessage(m.chat, {
    text: 'Berikut Daftarnya',
    footer: `> ${botname}`,
    cards: cards
  }, { quoted: m });
  },
};
