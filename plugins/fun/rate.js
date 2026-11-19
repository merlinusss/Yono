module.exports = {
  command: 'rate',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} Penampilan gw*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const persen = Math.floor(Math.random() * 101)
  m.reply(`*Rate : ${q}*\n🔮 *Jawaban : ${persen}%*`)
  },
};
