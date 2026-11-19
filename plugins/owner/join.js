module.exports = {
  command: 'join',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, isCreator, mess, owner, libs } = ctx;
    const { isUrl } = libs;

if (!isCreator) return m.reply(mess.owner)
 if (!text) return m.reply('Masukkan Link Group!')
 if (!isUrl(text) || !text.includes('whatsapp.com')) return m.reply('Link tidak valid! 🤔')
 let linknya = text
 if (text.includes('?')) linknya = text.split('?')[0]
 m.reply('Sabar Yaa')

 try {
 let result = linknya.split('https://chat.whatsapp.com/')[1]
 if (!result) return m.reply('Link tidak valid! 🤔')
 
 await lenwy.groupAcceptInvite(result)
 m.reply('Bot berhasil bergabung ke grup!')
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
  },
};
