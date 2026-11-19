module.exports = {
  command: 'order',
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, sender, args, text, command, prefix, isGcTopup, quoted, time, time2, libs } = ctx;
    const { fs, crypto, moment, format, cekStatusAkunDigi, cekItemDigi, formatSaldo, cekMl } = libs;

if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);
  if (!text) return m.reply(`Contoh: ${prefix + command} <kode_produk> <nomor_pelanggan> [id_server] [jumlah]\n\n> Jika game yang memiliki 2 id maka dipisah\n> ${prefix + command} ml5 12345678 1234 2\n\n> Jika 1 id:\n> ${prefix + command} tsel10 0812345678 2`);

  const statusData = await cekStatusAkunDigi();
  if (!statusData?.data || statusData.data.deposit === 0) return m.reply(`Transaksi dibatalkan. Tag Admin\n\n> Note: Saldo deposit kosong / tidak tersedia`);

  const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  const dataUser = users.find(user => user.id === m.sender);
  if (!dataUser) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`);

  const buyerSkuCode = args[0]?.toLowerCase();
  const id = args[1];
  
  let serverId = '';
  let qty = 1;
  if (args.length >= 4) {
    serverId = args[2];
    qty = parseInt(args[3]) || 1;
  } else if (args.length === 3) {
    if (args[2].length <= 3 && !isNaN(args[2])) {
      qty = parseInt(args[2]);
    } else {
      serverId = args[2];
    }
  }

  let customerNo = id;
  if (serverId) customerNo = id + serverId;

  if (!buyerSkuCode || !customerNo) return m.reply(`Contoh: ${prefix + command} <kode_produk> <nomor_pelanggan> [id_server] [jumlah]`);

  const result = await cekItemDigi(buyerSkuCode);
  if (!result || !result.data || !result.data[0]) return m.reply(`❌ Produk tidak ditemukan atau terjadi kesalahan.`);

  const projectconfig = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'));

  let userName = '-';
  if (serverId) {
    let data = await cekMl(id, serverId);
    let userData = data?.message || '';
    let nicknameMatch = userData.match(/In-Game Nickname:\s*(.+)/);
    let nicknameUser = nicknameMatch ? nicknameMatch[1].trim() : 'Tidak ditemukan';
    userName = nicknameUser || customerNo || '-';
  }

  const basePrice = Number(result.data[0].price);
  let adjustedPrice = basePrice;
  let userRole = dataUser.role == "1" ? global.settings.roles.role1 :
    dataUser.role == "2" ? global.settings.roles.role2 :
    dataUser.role == "3" ? global.settings.roles.role3 : global.settings.roles.role4;
  if (userRole === global.settings.roles.role1) {
    adjustedPrice = Math.round(basePrice * (1 + projectconfig.profit1Topup / 100));
  } else if (userRole === global.settings.roles.role2) {
    adjustedPrice = Math.round(basePrice * (1 + projectconfig.profit2Topup / 100));
  } else if (userRole === global.settings.roles.role3) {
    adjustedPrice = Math.round(basePrice * (1 + projectconfig.profit3Topup / 100));
  } else if (userRole === global.settings.roles.role4) {
    adjustedPrice = basePrice;
  }

  const totalHarga = adjustedPrice * qty;

  let transactions = [];
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
  }

  const pendingTransaction = transactions.find(tx =>
    tx.id === m.sender &&
    tx.status === 'pending' &&
    tx.dari === 'digiflazz'
  );

  if (pendingTransaction) {
    return m.reply(`❌ Anda sudah memiliki pemesanan pending.
> Item: ${pendingTransaction.item}
> Id: ${pendingTransaction.tujuan}
> Harga Total: ${formatSaldo(pendingTransaction.harga)}

Y = Proses saldo
N = Batal
QRIS = Bayar pakai QRIS`);
  }

  let refIds = [];
  for (let i = 0; i < qty; i++) {
    const date = moment.tz('Asia/Jakarta').format('DDMMMMYYYY');
    const randomString = Math.random().toString(36).substring(2, 9);
    const hashonya = crypto.createHash('md5').update(date + randomString + i).digest('hex');
    const arr = hashonya.split('');
    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    const random5Digits = arr.slice(0, 5).join('');
    
    refIds.push(`${global.ownername.toUpperCase()}${random5Digits.toUpperCase()}`);
  }

  const teksnya = `‼ KONFIRMASI @${m.sender.split("@")[0]}
> Nama Produk: ${result.data[0].product_name}
> Kode Produk: ${buyerSkuCode}
> Id: ${customerNo}
> Nickname: ${userName}
> Jumlah Beli: ${qty}x
> Total Harga: ${formatSaldo(totalHarga)}
> Saldo Anda: ${formatSaldo(dataUser.saldo)}

Y = Proses saldo
N = Batal
QRIS = Bayar pakai QRIS`;

  let { key } = await lenwy.sendMessage(
    m.chat,
    { text: teksnya, mentions: [m.sender] },
    { quoted: m }
  );

  const transaction = {
    id: m.sender,
    ref_ids: refIds,
    qty: qty,
    item: buyerSkuCode,
    tujuan: customerNo,
    nama: result.data[0].product_name,
    status: 'pending',
    dari: 'digiflazz',
    time: time2,
    harga_satuan: adjustedPrice,
    harga: totalHarga,
    username: userName,
    key
  };

  transactions.push(transaction);
  fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2));

  setTimeout(async () => {
    let transactions = [];
    if (fs.existsSync('./project/database/processTopup.json')) {
      transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
    }

    const index = transactions.findIndex(tx =>
      tx.id === m.sender &&
      tx.status === 'pending' &&
      tx.dari === 'digiflazz'
    );

    if (index !== -1) {
      transactions.splice(index, 1);
      fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2));

      try {
        await lenwy.sendMessage(m.chat, { delete: key });
      } catch (e) {
        console.error('Gagal menghapus pesan:', e);
      }

      await lenwy.sendMessage(
        m.chat,
        { text: `❌ Pemesanan dibatalkan otomatis karena tidak ada konfirmasi dalam 1 menit.` },
        { quoted: m }
      );
    }
  }, 60 * 1000);
  },
};
