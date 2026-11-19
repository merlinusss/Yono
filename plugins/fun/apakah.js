module.exports = {
  command: 'apakah',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw lagi marah*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const apa = ['Iya', 'Tidak', 'Bisa jadi', 'Betul', 'Gak mungkin lah bro', 'Yoi dong', 'Kayaknya sih iya', 'Mimpi aja terus', 'Tentu tidak', 'Rahasia Ilahi']
  const kah = apa[Math.floor(Math.random() * apa.length)]
  m.reply(`*Pertanyaan : Apakah ${q}*\n🔮 *Jawaban : ${kah}*`)
  },
};
