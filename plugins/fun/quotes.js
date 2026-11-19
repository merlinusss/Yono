module.exports = {
  command: 'quotes',
  category: 'FUN',
  async execute(ctx) {
    const { m, isBan, mess, libs } = ctx;
    const { Quotes } = libs;

    if (isBan) return m.reply(mess.ban);
    const resi = await Quotes();
    const teks = `"${resi.quotes}"\n(${resi.author || 'Anonim'})`;
    return m.reply(teks);
  },
};
