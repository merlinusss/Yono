module.exports = {
  command: 'perpanjangsewa',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isCreator, mess, owner, pathsewa, now, libs } = ctx;
    const { fs, toMs, sleep, format, getGroupIdFromLink, checkSewaGroup } = libs;

if (!isCreator) return m.reply(mess.owner)
 if (!text && !m.isGroup) {
 return m.reply(`Ada 2 cara untuk melakukan ${prefix + command} ini:\n1. Di dalam grup tanpa tambahan (cukup durasi).\n2. Di private chat dengan menyertakan *durasi* + *link grup*.\n\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 }

 await sleep(500)
 let currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))

 try {
 let groupId, duration;

 if (m.isGroup && !text.includes('https://chat.whatsapp.com/')) {
 [duration] = text.split(' ')
 if (!duration) return m.reply(`Durasi harus diisi!\nContoh:\n${prefix + command} 30d`)
 groupId = m.chat
 } else {
 let [d, link] = text.split(' ')
 if (!d || !link) return m.reply(`Durasi dan link grup harus diisi!\nContoh:\n${prefix + command} 30d https://chat.whatsapp.com/xxxxx`)
 duration = d
if (link.includes('?')) link = link.split('?')[0]
 groupId = await getGroupIdFromLink(link, lenwy)
 if (!groupId) return m.reply('Gagal mendapatkan ID grup dari link.')
 }

 if (!checkSewaGroup(groupId, currentDir)) {
 return m.reply('Grup ini tidak ditemukan dalam daftar sewa. Anda tidak dapat memperpanjang masa sewanya.')
 }

 const pos = currentDir.findIndex(entry => entry.groupId === groupId)
 if (pos !== -1) {
 const isLifetime = ['alifetime', 'permanent', 'permanen', 'perma'].includes(duration.toLowerCase())

 if (isLifetime) {
 currentDir[pos].expired = null
 currentDir[pos].isAlifetime = true
 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} diperpanjang menjadi *Permanen*.`)
 await lenwy.sendMessage(groupId, { text: `🎉 Masa sewa grup ini telah di ubah menjadi *Permanen*!` })
 } else {
 if (currentDir[pos].expired === null || currentDir[pos].isAlifetime === true) {
 currentDir[pos].expired = Date.now() + toMs('3s') // Atau kamu bisa langsung toMs(duration)
 await sleep(500)
 }

 currentDir[pos].expired += toMs(duration)
 currentDir[pos].isAlifetime = false // Reset lifetime

 currentDir[pos].reminded1d = false
 currentDir[pos].reminded1h = false
 currentDir[pos].reminded1m = false
 let entry = currentDir[pos]
 let expiry = entry.expired
 let remainingTime = expiry - Date.now()
 var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
 var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
 var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
 
 let status = `${days} hari ${hours} jam ${minutes} menit`;
 await lenwy.sendMessage(groupId, { text: `⏳ Masa sewa telah diperpanjang selama *${duration}*. Sisa masa sewa saat ini adalah:\n*${status}*` })
 m.reply(`✅ Masa sewa grup${m.isGroup ? '' : ` dengan ID ${groupId}`} berhasil diperpanjang selama *${duration}*.`)
 }

 fs.writeFileSync(pathsewa, JSON.stringify(currentDir, null, 2))
 }

 } catch (err) {
 console.error('Error:', err)
 m.reply('Terjadi kesalahan saat memperpanjang sewa. Pastikan format benar dan link masih aktif.')
 }
  },
};
