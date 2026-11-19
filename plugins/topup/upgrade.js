module.exports = {
  command: 'upgrade',
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, from, sender, pushname, args, text, command, prefix, isCreator, quoted, time, time2, libs } = ctx;
    const { fs, axios, color, sleep, generateQris, checkQrisStatus, formatSaldo } = libs;

if (!text) return m.reply(`Ada 2 cara upgrade user:

*Creator / Owner (Bebas atur role)*
1. ${prefix + command} (${global.settings.roles.role1}/${global.settings.roles.role2}/${global.settings.roles.role3}) lalu reply ke chat target
2. ${prefix + command} (${global.settings.roles.role1}/${global.settings.roles.role2}/${global.settings.roles.role3}) 62852xxxx

*User biasa via QRIS*
1. ${prefix + command} ${global.settings.roles.role2}
2. ${prefix + command} ${global.settings.roles.role3}

Harga:
- ${global.settings.roles.role2}: ${formatSaldo(global.settings.roles.pricesrole2)}
- ${global.settings.roles.role3}: ${formatSaldo(global.settings.roles.pricesrole3)}`)

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
  const config = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'))

  let roleInput = args[0]
  if (!roleInput) return m.reply(`Contoh:
${prefix + command} ${global.settings.roles.role2}
${prefix + command} ${global.settings.roles.role3}`);

  let roleBaru
  let hargaUpgrade = 0
  let namaRole = ''

  if (roleInput.toLowerCase() === global.settings.roles.role1.toLowerCase()) {
    roleBaru = "1"
    namaRole = global.settings.roles.role1
    hargaUpgrade = 0
  } else if (roleInput.toLowerCase() === global.settings.roles.role2.toLowerCase()) {
    roleBaru = "2"
    namaRole = global.settings.roles.role2
    hargaUpgrade = Number(global.settings.roles.pricesrole2 || 0)
  } else if (roleInput.toLowerCase() === global.settings.roles.role3.toLowerCase()) {
    roleBaru = "3"
    namaRole = global.settings.roles.role3
    hargaUpgrade = Number(global.settings.roles.pricesrole3 || 0)
  }  else if (roleInput.toLowerCase() === global.settings.roles.role4.toLowerCase()) {
    roleBaru = "4"
    namaRole = global.settings.roles.role4
    hargaUpgrade = 0
  } else {
    return m.reply(`Role hanya bisa:
- ${global.settings.roles.role1}
- ${global.settings.roles.role2}
- ${global.settings.roles.role3}`)
  }

  if (isCreator) {
    let target
    if (!m.quoted) {
      if (!args[1]) return m.reply(`Masukkan nomor target.

Contoh:
${prefix + command} ${namaRole} 6285261255548`);
      target = args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      const cek = await lenwy.onWhatsApp(target.split("@")[0])
      if (cek.length < 1) return m.reply(`Nomor tersebut tidak terdaftar di WhatsApp`)
      if (args[1].startsWith("0")) return m.reply(`Nomor harus diawali dengan kode negara (62)`)
    } else {
      target = m.quoted.sender
    }

    const userIndex = users.findIndex(item => {
      if (Array.isArray(item.id)) return item.id.includes(target)
      return item.id === target
    })

    if (userIndex === -1) return m.reply(`User tersebut belum terdaftar, silakan ketik ${prefix}daftar terlebih dahulu`)
    if (String(users[userIndex].role) === roleBaru) return m.reply(`User @${target.split("@")[0]} sudah berada di role ${namaRole}`)

    users[userIndex].role = roleBaru
    fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2))

    return lenwy.sendMessage(m.chat, {
      text: `✅ Pengguna @${target.split("@")[0]} berhasil diubah ke role ${namaRole}`,
      mentions: [target]
    }, { quoted: m })
  }

  const userIndex = users.findIndex(item => {
    if (Array.isArray(item.id)) return item.id.includes(m.sender)
    return item.id === m.sender
  })

  if (userIndex === -1) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`)
  const roleSekarang = String(users[userIndex].role || "1")
  if (roleSekarang === roleBaru) return m.reply(`Role kamu sudah ${namaRole}`)

  if (roleBaru === "1") {
    return m.reply(`❌ Kamu tidak bisa membuat pesanan untuk ${global.settings.roles.role1} karena itu adalah role dasar.`)
  }

  if (roleBaru === "4") {
    return m.reply(`❌ Kamu tidak bisa upgrade ke role ${namaRole} karena ini khusus Owner.`)
  }

  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const pendingTransaction = transactions.find(tx =>
    tx.id === m.sender &&
    tx.status === 'pending'
  )

  if (pendingTransaction) return m.reply(`❌ Kamu masih punya transaksi pending.
> Jenis: ${pendingTransaction.dari}
> Harga: ${formatSaldo(pendingTransaction.harga)}

Ketik N untuk membatalkan transaksi sebelumnya.`)

  const qris = await generateQris(hargaUpgrade, config.qrisPackage, 5)
  if (qris.status !== 200) return m.reply(`Error saat generate QRIS\n${qris.message}`)

  const transactionId = qris.data.transactionId
  const qrString = qris.data.qr_string
  const qrUrl = `https://larabert-qrgen.hf.space/v1/create-qr-code?size=500x500&style=1&color=1A1A2E&data=${encodeURIComponent(qrString)}`
  const getImage = await axios.get(qrUrl, { responseType: 'arraybuffer' })
  const qrBuffer = Buffer.from(getImage.data, 'binary')

  const caption = `*UPGRADE ${namaRole.toUpperCase()}*
> User: @${m.sender.split('@')[0]}
> Upgrade ke: ${namaRole}
> Harga: ${formatSaldo(hargaUpgrade)}
> Status: Menunggu pembayaran

Scan QR di atas untuk melakukan pembayaran.
Ketik N untuk membatalkan.`

  let { key } = await lenwy.sendMessage(
    m.chat,
    { image: qrBuffer, caption, mentions: [m.sender] },
    { quoted: m }
  )

  const upgradeData = {
    id: m.sender,
    item: `upgrade-${namaRole.toLowerCase()}`,
    tujuan: m.sender.split('@')[0],
    nama: `UPGRADE ${namaRole.toUpperCase()}`,
    status: 'pending',
    dari: 'upgrade',
    time: time2,
    harga: hargaUpgrade,
    roleTujuan: roleBaru,
    roleName: namaRole,
    transactionId: transactionId,
    username: pushname || '-',
    key
  }

  transactions.push(upgradeData)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  let paid = false
  let attempt = 0
  const maxAttempts = 18

  while (!paid) {
    attempt++
    await sleep(15000)
    let latestTransactions = []
    if (fs.existsSync('./project/database/processTopup.json')) {
      latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
    }
    const upgradeIndex = latestTransactions.findIndex(tx =>
      tx.id === m.sender &&
      tx.status === 'pending' &&
      tx.dari === 'upgrade'
    )
    if (upgradeIndex === -1) {
      paid = true
      continue
    }
    if (attempt >= maxAttempts) {
      latestTransactions.splice(upgradeIndex, 1)
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      try {
        await lenwy.sendMessage(m.chat, { delete: key })
      } catch {}
      return m.reply(`❌ Upgrade dibatalkan karena melewati batas waktu pembayaran.`)
    }

    try {
      const res = await checkQrisStatus(transactionId)
      if (res.status === 200 && res.data.status === 'paid') {
        paid = true
        try {
          await lenwy.sendMessage(m.chat, { delete: key })
        } catch {}

        let finalTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const finalUpgradeIndex = finalTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.status === 'pending' &&
          tx.dari === 'upgrade'
        )

        if (finalUpgradeIndex === -1) return m.reply(`❌ Data upgrade tidak ditemukan atau sudah dibatalkan.`)
        finalTransactions[finalUpgradeIndex].status = 'paid'
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(finalTransactions, null, 2))
        let latestUsers = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
        const latestUserIndex = latestUsers.findIndex(item => {
          if (Array.isArray(item.id)) return item.id.includes(m.sender)
          return item.id === m.sender
        })

        if (latestUserIndex === -1) return m.reply(`User tidak ditemukan di database saat update role.`)
        latestUsers[latestUserIndex].role = roleBaru
        fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(latestUsers, null, 2))
        let cleanTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const cleanIndex = cleanTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.dari === 'upgrade'
        )
        if (cleanIndex !== -1) {
          cleanTransactions.splice(cleanIndex, 1)
          fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(cleanTransactions, null, 2))
        }
        return lenwy.sendMessage(m.chat, {
          text: `✅ Upgrade berhasil
> User: @${m.sender.split('@')[0]}
> Role baru: ${namaRole}`,
          mentions: [m.sender]
        }, { quoted: m })
      }
    } catch (err) {
      console.log('Error check QRIS upgrade:', err)
    }
  }
  },
};
