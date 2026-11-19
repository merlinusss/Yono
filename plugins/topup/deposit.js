module.exports = {
  command: 'deposit',
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, from, sender, pushname, args, text, command, prefix, isCreator, quoted, time, time2, libs } = ctx;
    const { fs, axios, color, sleep, generateQris, checkQrisStatus, formatSaldo } = libs;

if (!text) {
    return m.reply(`Ada 2 cara deposit

*Owner*
> 1. Menggunakan Nomor
Contoh: ${prefix + command} +10000 6285261255548

> 2. Menggunakan Reply
Contoh: Reply pesan user lalu ketik ${prefix + command} +10000

*User deposit via QRIS*
Contoh: ${prefix + command} 10000`)
  }

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
  const config = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'))

  if (isCreator) {
    let user
    let nominalRaw = args[0]

    if (!nominalRaw) {
      return m.reply(`Contoh:
${prefix + command} +10000 6285261255548
atau reply chat user lalu ketik
${prefix + command} +10000`)
    }

    if (!m.quoted) {
      if (!args[1]) return m.reply(`Masukkan nomor target.\n\nContoh: ${prefix + command} +10000 6285261255548`);
      user = args[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      const cek = await lenwy.onWhatsApp(user.split('@')[0])
      if (cek.length < 1) return m.reply(`Nomor tersebut tidak terdaftar di WhatsApp\n\n> Contoh: ${prefix + command} +10000 6285261255548`);
      if (args[1].startsWith('0')) return m.reply(`Nomor harus diawali dengan kode negara (62)\n\n> Contoh: ${prefix + command} +10000 6285261255548`);
    } else {
      user = m.quoted.sender
    }

    const userIndex = users.findIndex(u => u.id === user)
    if (userIndex === -1) return m.reply(`User tersebut belum terdaftar, silakan ketik ${prefix}daftar terlebih dahulu`);

    if (!nominalRaw.startsWith('+') && !nominalRaw.startsWith('-')) return m.reply(`Jumlah harus diawali dengan + untuk menambah atau - untuk mengurangi.`);

    let nominal = parseFloat(nominalRaw)
    if (isNaN(nominal)) return m.reply(`Jumlah harus berupa angka.`);

    const saldoLama = Number(users[userIndex].saldo || 0)
    const saldoBaru = saldoLama + nominal

    if (saldoBaru < 0) return m.reply(`Saldo user tidak cukup untuk dikurangi.`);

    users[userIndex].saldo = saldoBaru
    fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2))

    const sukses = `Saldo @${user.split("@")[0]} berhasil ${nominal > 0 ? 'ditambah' : 'dikurangi'} ${formatSaldo(Math.abs(nominal))}.
Saldo sekarang: ${formatSaldo(users[userIndex].saldo)}`
    return lenwy.sendMessage(m.chat, { text: sukses, mentions: [user] }, { quoted: m })
  }

  const nominal = parseFloat(args[0])
  if (isNaN(nominal) || nominal <= 0) return m.reply(`Masukkan nominal deposit yang valid.\n\nContoh: ${prefix + command} 10000`)

  const userIndex = users.findIndex(u => u.id === m.sender)
  if (userIndex === -1) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`)

  let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const pendingTransaction = transactions.find(tx =>
    tx.id === m.sender &&
    tx.status === 'pending'
  )

  if (pendingTransaction) {
    if (pendingTransaction.dari === 'deposit') {
      return m.reply(`❌ Anda masih memiliki deposit pending.
> Nominal: ${formatSaldo(pendingTransaction.harga)}

Ketik N untuk membatalkan.`)
    }

    return m.reply(`❌ Anda masih memiliki transaksi pending.
> Item: ${pendingTransaction.item}
> Tujuan: ${pendingTransaction.tujuan}
> Harga: ${formatSaldo(pendingTransaction.harga)}

Ketik N untuk membatalkan transaksi sebelumnya.`)
  }

  const qris = await generateQris(nominal, config.qrisPackage, 7)
  if (qris.status !== 200) return m.reply(`Error saat generate QRIS\n${qris.message}`)

  const transactionId = qris.data.transactionId
  const qrString = qris.data.qr_string
  const qrUrl = `https://larabert-qrgen.hf.space/v1/create-qr-code?size=500x500&style=1&color=1A1A2E&data=${encodeURIComponent(qrString)}`
  const getImage = await axios.get(qrUrl, { responseType: 'arraybuffer' })
  const qrBuffer = Buffer.from(getImage.data, 'binary')

  const caption = `*DEPOSIT QRIS*
> User: @${m.sender.split('@')[0]}
> Nominal: ${formatSaldo(nominal)}
> Status: Menunggu pembayaran

Scan QR di atas untuk melakukan pembayaran.
Ketik N untuk membatalkan.`

  let { key } = await lenwy.sendMessage(
    m.chat,
    { image: qrBuffer, caption, mentions: [m.sender] },
    { quoted: m }
  )

  const depositData = {
    id: m.sender,
    item: 'deposit',
    tujuan: m.sender.split('@')[0],
    nama: 'DEPOSIT QRIS',
    status: 'pending',
    dari: 'deposit',
    time: time2,
    harga: nominal,
    transactionId: transactionId,
    username: pushname || '-',
    key
  }

  transactions.push(depositData)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))

  let paid = false
  let attempt = 0
  const maxAttempts = 28

  while (!paid) {
    attempt++
    await sleep(15000)

    let latestTransactions = []
    if (fs.existsSync('./project/database/processTopup.json')) {
      latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
    }

    const depositIndex = latestTransactions.findIndex(tx =>
      tx.id === m.sender &&
      tx.status === 'pending' &&
      tx.dari === 'deposit'
    )

    if (depositIndex === -1) {
      paid = true
      continue
    }

    if (attempt >= maxAttempts) {
      latestTransactions.splice(depositIndex, 1)
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2))
      try {
        await lenwy.sendMessage(m.chat, { delete: key })
      } catch {}
      return m.reply(`❌ Deposit dibatalkan karena melewati batas waktu pembayaran.`)
    }

    try {
      const res = await checkQrisStatus(transactionId)
      console.log(`Attempt: ${attempt} - ${maxAttempts}`)
      console.log(res)
      if (res.status === 200 && res.data.status === 'paid') {
        paid = true

        try {
          await lenwy.sendMessage(m.chat, { delete: key })
        } catch {}

        let finalTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const finalDepositIndex = finalTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.status === 'pending' &&
          tx.dari === 'deposit'
        )

        if (finalDepositIndex === -1) return m.reply(`❌ Data deposit tidak ditemukan atau sudah dibatalkan.`)

        finalTransactions[finalDepositIndex].status = 'paid'
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(finalTransactions, null, 2))

        let latestUsers = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'))
        const latestUserIndex = latestUsers.findIndex(u => u.id === m.sender)

        if (latestUserIndex === -1) return m.reply(`User tidak ditemukan di database saat update saldo.`)

        latestUsers[latestUserIndex].saldo = Number(latestUsers[latestUserIndex].saldo || 0) + nominal
        fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(latestUsers, null, 2))

        let cleanTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
        const cleanIndex = cleanTransactions.findIndex(tx =>
          tx.id === m.sender &&
          tx.dari === 'deposit'
        )

        if (cleanIndex !== -1) {
          cleanTransactions.splice(cleanIndex, 1)
          fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(cleanTransactions, null, 2))
        }

        return lenwy.sendMessage(m.chat, {
          text: `✅ Deposit berhasil
> User: @${m.sender.split('@')[0]}
> Nominal: ${formatSaldo(nominal)}
> Saldo sekarang: ${formatSaldo(latestUsers[latestUserIndex].saldo)}`,
          mentions: [m.sender]
        }, { quoted: m })
      }
    } catch (err) {
      console.log('Error check QRIS:', err)
    }
  }
  },
};
