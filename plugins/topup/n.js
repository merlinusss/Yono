module.exports = {
  command: 'n',
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, sender, libs } = ctx;
    const { fs, formatSaldo } = libs;

let transactions = []
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'))
  }

  const transactionIndex = transactions.findIndex(tx =>
    tx.id === m.sender &&
    tx.status === 'pending'
  )

  if (transactionIndex === -1) return m.reply('❌ Tidak ada transaksi pending.')

  const trx = transactions[transactionIndex]
  transactions.splice(transactionIndex, 1)
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2))
  if (trx.key) {
    try {
      await lenwy.sendMessage(m.chat, { delete: trx.key })
    } catch (error) {
      console.log('Gagal menghapus pesan QR:', error)
    }
  }
  if (trx.dari === 'deposit') {
    return m.reply(`❌ Deposit dibatalkan
> Nominal: ${formatSaldo(trx.harga)}`)
  }

  if (trx.dari === 'upgrade') {
    return m.reply(`❌ Upgrade dibatalkan
> Upgrade ke: ${trx.roleName}
> Harga: ${formatSaldo(trx.harga)}`)
  }

  return m.reply(`❌ Transaksi dibatalkan
> Item: ${trx.nama}
> Kode: ${trx.item}
> Harga: ${formatSaldo(trx.harga)}`)
  },
};
