module.exports = {
  command: 'kalkulator',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, q } = ctx;

if (!q) return m.reply(`*Contoh:*
> kalkulator 12/2
> kalkulator 12*2
> kalkulator 12+2
> kalkulator 12-2`)

    const operator = q.match(/[+\-*/]/)?.[0]
    if (!operator) return m.reply('*Operator tidak valid!*')

    const [a, b] = q.split(operator).map(x => Number(x.trim()))
    if (isNaN(a) || isNaN(b)) return m.reply('*Input harus berupa angka!*')
    if (operator === '/' && b === 0) return m.reply('*Pembagian dengan nol tidak diperbolehkan!*')

    const hasil = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b
    }[operator]

    m.reply(`🎁 *Hasil:* ${hasil}`)
  },
};
