module.exports = {
  command: 'delsession',
  aliases: ['delsesi'],
  category: 'OWNER',
  async execute(ctx) {
    const { m, sender, isCreator, libs } = ctx;
    const { fs, sleep } = libs;

if (!isCreator) return
 fs.readdir(`./${global.sessionName}`, async function(err, files) {
 if (err) {
 console.log('Unable to scan directory: ' + err)
 return m.reply('Unable to scan directory: ' + err)
 }
 let filteredArray = files.filter(item => 
 item.startsWith("pre-key") || 
 item.startsWith("sender-key") || 
 item.startsWith("session-") || 
 item.startsWith("app-state")
 )
 console.log(filteredArray.length)
 let teks = `Detected ${filteredArray.length} junk files\n\n`
 if (filteredArray.length === 0) return m.reply('Sedang menghapus sampah...')
 filteredArray.forEach((item, i) => {
 teks += (i + 1) + `. ${item}\n`
 })
 console.log(teks)
 await sleep(200)
 m.reply("Menghapus session...")
 for (const file of filteredArray) {
 fs.unlinkSync(`./${global.sessionName}/${file}`)
 }
 await sleep(200)
 m.reply('Sukses menghapus session!')
 })
  },
};
