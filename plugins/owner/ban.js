module.exports = {
  command: 'ban',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, args, isCreator, mess, owner, bannedFilePathh, libs } = ctx;
    const { fs } = libs;

if (!isCreator) return m.reply(mess.owner)
  
  let action = args[0] ? args[0].toLowerCase() : ''
  if (!['add', 'del', 'list'].includes(action)) {
    return m.reply('*Format Salah!*\nContoh:\n- ban add 62812345678\n- ban del 62812345678\n- ban list')
  }

  let bannedData = []
  try {
    bannedData = JSON.parse(fs.readFileSync(bannedFilePathh, 'utf8'))
  } catch (err) {
    bannedData = []
  }

  if (action === 'list') {
    if (bannedData.length === 0) return m.reply('*Daftar Banned Masih Kosong.*')

    let response = '*Daftar Banned:*\n\n'
    response += bannedData.map((number, index) => `${index + 1}. ${number}`).join('\n')
    return m.reply(response)
  }

  if (!args[1]) return m.reply(`*Mana nomornya?*\nContoh: ban ${action} 62812345678`)

  let number = args[1].replace(/[^0-9]/g, '')
  if (number.length === 0) return m.reply('*Nomor tidak valid!*')

  if (action === 'add') {
    if (bannedData.includes(number)) return m.reply(`⚠️ *Nomor ${number} sudah ada di daftar banned.*`)

    try {
      let isRegistered = await lenwy.onWhatsApp(number + '@s.whatsapp.net')
      if (isRegistered && isRegistered.length > 0) {
        bannedData.push(number)
        fs.writeFileSync(bannedFilePathh, JSON.stringify(bannedData, null, 2))
        return m.reply(`✅ *Sukses!*\nNomor ${number} berhasil ditambahkan ke daftar banned.`)
      } else {
        return m.reply(`❌ *Gagal!*\nNomor ${number} tidak terdaftar di WhatsApp.`)
      }
    } catch (err) {
      return m.reply(`❌ *Error saat mengecek nomor ke WhatsApp.*`)
    }
  }

  if (action === 'del') {
    let index = bannedData.indexOf(number)
    if (index !== -1) {
      bannedData.splice(index, 1)
      fs.writeFileSync(bannedFilePathh, JSON.stringify(bannedData, null, 2))
      return m.reply(`✅ *Sukses!*\nNomor ${number} berhasil dihapus dari daftar banned.`)
    } else {
      return m.reply(`❌ *Gagal!*\nNomor ${number} tidak ditemukan di database.`)
    }
  }
  },
};
