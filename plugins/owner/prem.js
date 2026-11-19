module.exports = {
  command: 'prem',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, from, args, text, isCreator, mess, owner, premiumNumbers, premiumFilePathh, quoted, libs } = ctx;
    const { fs } = libs;

if (!isCreator) return m.reply(mess.owner)
  
  let action = args[0] ? args[0].toLowerCase() : ''
  if (!['add', 'del', 'list'].includes(action)) {
    return m.reply('*Format Salah!*\nContoh:\n- prem add 62812345678\n- prem del 62812345678\n- prem list')
  }

  if (action === 'list') {
    if (premiumNumbers.length === 0) return m.reply('*Daftar Premium Masih Kosong.*')

    let teksooo = 'List Premium\n'
    for (let i of premiumNumbers) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${premiumNumbers.length}`

    return lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
  }

  if (!args[1]) return m.reply(`*Mana nomornya?*\nContoh: prem ${action} 62812345678`)

  let number = args[1].replace(/[^0-9]/g, '')
  if (number.length === 0) return m.reply('*Nomor tidak valid!*')

  if (action === 'add') {
    if (premiumNumbers.includes(number)) return m.reply(`⚠️ *Nomor ${number} sudah ada di database premium.*`)

    try {
      let isRegistered = await lenwy.onWhatsApp(number + '@s.whatsapp.net')
      if (isRegistered && isRegistered.length > 0) {
        premiumNumbers.push(number)
        fs.writeFileSync(premiumFilePathh, JSON.stringify(premiumNumbers, null, 2))
        return m.reply(`✅ *Sukses!*\nNomor ${number} berhasil ditambahkan ke premium.`)
      } else {
        return m.reply(`❌ *Gagal!*\nNomor ${number} tidak terdaftar di WhatsApp.`)
      }
    } catch (err) {
      return m.reply(`❌ *Error saat mengecek nomor ke WhatsApp.*`)
    }
  }

  if (action === 'del') {
    let index = premiumNumbers.indexOf(number)
    if (index !== -1) {
      premiumNumbers.splice(index, 1)
      fs.writeFileSync(premiumFilePathh, JSON.stringify(premiumNumbers, null, 2))
      return m.reply(`✅ *Sukses!*\nNomor ${number} berhasil dihapus dari premium.`)
    } else {
      return m.reply(`❌ *Gagal!*\nNomor ${number} tidak ditemukan di database.`)
    }
  }
  },
};
