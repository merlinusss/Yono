module.exports = {
  command: 'bagaimanakah',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, q, command, prefix } = ctx;

if (!q) return m.reply(`*Contoh: ${prefix + command} gw kuyang*`)
  if (text.length > 40) return m.reply(`*Maksimal 40 Karakter*`)
  const gimana = ['Ya begitulah', 'Gak normal', 'Maaf bot tidak bisa menjawab', 'Coba deh cari di gugel', 'Kayaknya lanjut part 2', 'Kepo kamu', 'Gimana aja', 'Di luar nalar', 'Agak laen emang', 'Sulit dipercaya tapi nyata']
  const ya = gimana[Math.floor(Math.random() * gimana.length)]
  m.reply(`*Pertanyaan : Bagaimanakah ${q}*\n🔮 *Jawaban : ${ya}*`)
  },
};
