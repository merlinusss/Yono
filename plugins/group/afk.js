module.exports = {
  command: 'afk',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, sender, pushname, text, isAdmins, isBan, mess, time } = ctx;

if (!m.isGroup) return m.reply('❌ *Fitur ini hanya dapat digunakan di dalam grup!*')
    if (!isAdmins) return m.reply(mess.admin)
    if (isBan) return m.reply('⚠️ *Kamu Di Ban Owner*')
    if (text.length > 100) return m.reply(`*Maksimal 100 Karakter*`)
    let user = global.db.data.users[m.sender]
    user.afk ??= {}
    user.afk[m.chat] = {
        time: + new Date(),
        reason: text
    }
    lenwy.sendMessage(m.chat, { text: `*${pushname} Sedang AFK*\n⚠️ *Dengan Alasan :* ${text ? text : 'Tidak ada'}` })
  },
};
