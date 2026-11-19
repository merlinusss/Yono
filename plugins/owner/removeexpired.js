module.exports = {
  command: 'removeexpired',
  aliases: ['cekexp', 'cekexpired'],
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess } = ctx;

    if (!isCreator) return m.reply(mess.owner);
    try {
      if (typeof global.expiredCheck !== 'function') {
        return m.reply('❌ Fungsi pengecekan sewa belum siap.');
      }
      await global.expiredCheck(lenwy);
      return m.reply('Pengecekan masa sewa selesai dijalankan.');
    } catch (error) {
      return m.reply(`❌ ${error.message}`);
    }
  },
};
