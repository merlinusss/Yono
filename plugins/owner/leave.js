module.exports = {
  command: 'leave',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, isCreator, mess, owner, libs } = ctx;
    const { getGroupIdFromLink } = libs;

if (!isCreator) return m.reply(mess.owner)

 if (m.isGroup) {
 if (text) return
 setTimeout(async () => {
 try {
 await lenwy.groupLeave(m.chat)
 console.log(`Successfully left the group ${m.chat}`)
 } catch (err) {
 console.error('Error leaving the group:', err)
 await m.reply('*Gagal meninggalkan grup.*')
 }
 }, 2000)
 } else if (!m.isGroup) {
 if (!text) return m.reply('*Mana ID Grup / Link Nya?*\n*Ketik cekidgc Buat Liat Id Nya*')
 let groupId
 if (text.includes('https://chat.whatsapp.com')) {
 let linknya = text
 if (text.includes('?')) linknya = text.split('?')[0]
 groupId = await getGroupIdFromLink(linknya, lenwy)
 } else if (text.includes('@g.us')) {
 groupId = text
 } else {
 return m.reply(`Itu bukan id grup ataupun link grup`)
 }
 setTimeout(async () => {
 try {
 await lenwy.groupLeave(groupId)
 m.reply(`Berhasil keluar dari grup ${groupId}`)
 } catch (err) {
 console.error('Error leaving the group:', err)
 await m.reply('*Gagal meninggalkan grup.*')
 }
 }, 2000)
 }
  },
};
