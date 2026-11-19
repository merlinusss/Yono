module.exports = {
  command: 'addsewa',
  aliases: ['tambahsewa'],
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isCreator, mess, owner, pathsewa, libs } = ctx;
    const { fs, getGroupIdFromLink, addSewaGroup } = libs;

if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Penggunaan:\n1. ${prefix + command} [durasi] (dari dalam grup)\n2. ${prefix + command} [durasi] [link grup] (dari chat pribadi)\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let duration, groupId

 if (m.isGroup && !text.includes('http')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh: ${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
if (link.includes('?')) link = link.split('?')[0]
 duration = d

 const coded = link.split("https://chat.whatsapp.com/")[1]
 if (!coded) return m.reply("Link tidak valid 🤔")

 try {
 await lenwy.groupAcceptInvite(coded)
 m.reply('Bot berhasil masuk ke grup.')
 } catch (err) {
 if (err.message.includes('not-authorized')) {
 return m.reply('Gagal bergabung ke grup. Bot kemungkinan baru saja dikeluarkan.')
 } else if (err.message.includes('gone')) {
 return m.reply('Link grup sudah di reset.')
 } else if (err.message.includes('conflict')) {
 m.reply('Bot sudah berada di dalam grup.')
 } else if (err.message.includes('already-exists')) {
 return m.reply('Bot sudah meminta gabung ke grup.')
 } else {
 console.log(err)
 return m.reply('Terjadi error yang tidak dikenali.')
 }
 }

 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup.')
 }
 if (sewa.some(entry => entry.groupId === groupId)) {
 return m.reply(`Grup sudah ada dalam daftar sewa.`)
 }
 addSewaGroup(groupId, duration, sewa)
 m.reply(`✅ Grup berhasil ditambahkan ke daftar sewa selama *${duration}*.`)
 if (!m.isGroup) {
 await lenwy.sendMessage(groupId, {text: `Hallo semua, saya adalah bot ${global.botname}. Grup ini telah disewa selama *${duration}*.\n\n- Admin dapat cek sisa waktu dengan ketik *${prefix}ceksewa*\n- Untuk fitur lengkap ketik *${prefix}allmenu*`})
 }

 } catch (err) {
 console.error('Error saat addsewa:', err)
 m.reply('❌ Gagal menambahkan sewa grup.')
 }
  },
};
