module.exports = {
  command: 'bisakah',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw hamil*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const bisa = ['Bisa', 'Gak bisa', 'Gak bisa awokawok', 'Tentu kamu pasti bisa!!!!', 'Coba aja sendiri', 'Mungkin bisa, kalau ada keajaiban', 'Mustahil bos', 'Bisa sih, tapi boong', 'Bisa dong, kan lu anak dewa']
  const ga = bisa[Math.floor(Math.random() * bisa.length)]
  m.reply(`*Pertanyaan : Bisakah ${q}*\n🔮 *Jawaban : ${ga}*`)
  },
};
