module.exports = {
  command: 'delsewa',
  aliases: ['hapussewa'],
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isCreator, mess, owner, pathsewa, libs } = ctx;
    const { fs, getGroupIdFromLink } = libs;

if (!isCreator) return m.reply(mess.owner)

 if (!text && !m.isGroup) {
 return m.reply(`Untuk menghapus sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
 }

 try {
 let groupId
 let link = text
 if (m.isGroup) {
 groupId = m.chat
 } else if (text.includes('@g.us')) {
 groupId = text
 } else if (text.includes('https')) {
 if (text.includes('?')) link = text.split('?')[0];
 groupId = await getGroupIdFromLink(link, lenwy)
 }

 let sewa = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
 const index = sewa.findIndex(entry => entry.groupId === groupId)

 if (index === -1) return m.reply('Grup ini tidak ditemukan dalam daftar sewa.')

 sewa.splice(index, 1)
 fs.writeFileSync(pathsewa, JSON.stringify(sewa, null, 2))

 lenwy.sendMessage(groupId, {text: `Masa sewa di group ini telah *hapus*.`})
 m.reply('✅ Sewa grup berhasil dihapus.')
 } catch (err) {
 console.error('Error saat delsewa:', err)
 m.reply('❌ Gagal menghapus sewa grup.')
 }
  },
};
