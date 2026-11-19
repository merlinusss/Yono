module.exports = {
  command: 'checksewa',
  aliases: ['ceksewa'],
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, from, text, command, prefix, isAdmins, isCreator, mess, pathsewa, now, libs } = ctx;
    const { fs, getGroupIdFromLink } = libs;

if (!isAdmins && !isCreator) return m.reply(mess.admin)
  if (!m.isGroup && !text) return m.reply(`Untuk mengecek sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
  let groupId = from
  let link = text
  if (!m.isGroup) {
    if (text.includes('?')) link = text.split('?')[0]
    groupId = await getGroupIdFromLink(link, lenwy)
    if (!groupId) return m.reply(`Untuk mengecek sewa grup dari chat pribadi, sertakan link grup.\nContoh:\n${prefix + command} https://chat.whatsapp.com/xxxxx`)
  }
  try {
    const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
    const entry = currentDir.find(entry => entry.groupId === groupId)
    if (!entry) return m.reply(`Perintah ini hanya bisa dilakukan di dalam grup yang sudah di "${prefix}addsewa"`)
    if (entry.isAlifetime) return m.reply(`Akan Habis Hingga Owner Pensiun.`)
    const expiry = entry.expired;
    const remainingTime = expiry - Date.now()
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const status = `${days} hari ${hours} jam ${minutes} menit`;
    m.reply(`Akan Habis Hingga ${status}.`)
  } catch (error) {
    m.reply('Terjadi kesalahan: ' + error.message)
  }
  },
};
