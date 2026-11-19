module.exports = {
  command: 'cekcantik',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const can = ['Normal', 'Cantik njir', 'Cantik amat sih', 'Jaga penampilan ya', 'Kurang', 'Lumayan', 'Boleh juga', 'Kek bidadari jatuh dari surga', 'Damage nya parah', 'Cantik maksimal', 'Biasa aja wir', 'Spek bidadari']
  const tik = can[Math.floor(Math.random() * can.length)]
  m.reply(`*Nama :* ${q}\n🔮 *Jawaban : ${tik} (${Math.floor(Math.random() * 101)}%)*`)
  },
};
