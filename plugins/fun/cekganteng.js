module.exports = {
  command: 'cekganteng',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const gan = ['Normal', 'Ganteng njir', 'Ganteng amat bang', 'Jaga penampilan ya', 'Kurang', 'Lumayan', 'Boleh juga', 'Muka lu kek abang bakso', 'Damage nya parah', 'Ganteng maksimal', 'Biasa aja wir']
  const teng = gan[Math.floor(Math.random() * gan.length)]
  m.reply(`*Nama :* ${q}\n🔮 *Jawaban : ${teng} (${Math.floor(Math.random() * 101)}%)*`)
  },
};
