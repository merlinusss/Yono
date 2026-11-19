module.exports = {
  command: 'reminder',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, sender, args, text, quoted, time, libs } = ctx;
    const { toMs } = libs;

  {
if (!args[0] || !args[1]) return m.reply('*Format : Reminder Waktu s/m/h/d Pesan*\n\n📑 *Contoh : Reminder 30m Jangan Lupa Sholat*')
const time = toMs(args[0])
const message = args.slice(1).join(' ')
setTimeout(() => {
lenwy.sendMessage(from, { text : `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo:{mentionedJid:[sender]}}, { quoted: m })}, time)
m.reply(`📑 *Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
  }
  },
};
