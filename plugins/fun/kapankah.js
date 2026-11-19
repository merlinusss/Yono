module.exports = {
  command: 'kapankah',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix, libs } = ctx;
    const { up } = libs;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw masuk rsj*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const kapan = ['Besok', 'Lusa', 'Tahun depan', 'Nggak akan pernah', 'Bulan depan', 'Minggu depan', 'Kapan-kapan', `Abis command ini juga lu ${q}`, 'Nunggu lu glow up', 'Gak tau, tanya aja sama rumput yang bergoyang', '10 abad lagi', 'Bentar lagi kayaknya']
  const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
  m.reply(`*Pertanyaan : Kapankah ${q}*\n🔮 *Jawaban : ${kapankah}*`)
  },
};
