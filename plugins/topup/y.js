module.exports = {
  command: 'y',
  aliases: ['qris'],
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, from, sender, text, command, quoted, libs } = ctx;
    const { fs, axios, color, sleep, orderDigi, cekOrderanDigi, generateQris, checkQrisStatus, formatSaldo } = libs;

let transactions = [];
  if (fs.existsSync('./project/database/processTopup.json')) {
    transactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
  }

  const transactionIndex = transactions.findIndex(t =>
    t.id === m.sender &&
    t.status === 'pending' &&
    t.dari === 'digiflazz'
  );

  if (transactionIndex === -1) return;
  const transaction = transactions[transactionIndex];
  const isQrisMethod = command === 'qris';

  if (isQrisMethod && transaction.isQris) return; 

  let isPaid = false;

  if (!isQrisMethod) {
    const users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
    const userIndex = users.findIndex(u => u.id === m.sender);
    if (userIndex === -1) return m.reply(`User tidak ditemukan di database`);

    if (users[userIndex].saldo < transaction.harga) {
      return m.reply(`❌ Saldo tidak cukup.\n> Saldo Anda: ${formatSaldo(users[userIndex].saldo)}\n> Harga Total: ${formatSaldo(transaction.harga)}`);
    }

    users[userIndex].saldo -= transaction.harga;
    fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2));
    isPaid = true;

  } else {
    const projectconfig = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'));
    const data = await generateQris(transaction.harga, projectconfig.qrisPackage, 5);
    
    if (data.status !== 200) return m.reply(`Error saat generate QR\n${data.message}`);

    const url1 = `https://larabert-qrgen.hf.space/v1/create-qr-code?size=500x500&style=1&color=1A1A2E&data=${encodeURIComponent(data.data.qr_string)}`;
    const getImage = await axios.get(url1, { responseType: 'arraybuffer' });
    const pay = Buffer.from(getImage.data, 'binary');
    const transactionId = data.data.transactionId;

    transactions[transactionIndex].isQris = true;
    transactions[transactionIndex].qrisTransactionId = transactionId;
    fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(transactions, null, 2));

    const teksnya = `‼ KONFIRMASI QRIS @${m.sender.split("@")[0]}
> Nama Produk: ${transaction.nama}
> Kode Produk: ${transaction.item}
> Id: ${transaction.tujuan}
> Nickname: ${transaction.username}
> Jumlah Beli: ${transaction.qty}x
> Total Harga: ${formatSaldo(transaction.harga)}

Ketik N untuk batal`;

    let { key } = await lenwy.sendMessage(m.chat, { image: pay, caption: teksnya, mentions: [m.sender] }, { quoted: m });

    let statusPay = false;
    let attempt = 0;
    const maxAttempts = 18;

    while (!statusPay) {
      attempt++;
      await sleep(15000);

      let latestTransactions = [];
      if (fs.existsSync('./project/database/processTopup.json')) {
        latestTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
      }

      const latestIndex = latestTransactions.findIndex(t => t.id === m.sender && t.status === 'pending' && t.dari === 'digiflazz');
      if (latestIndex === -1) break; 

      if (attempt >= maxAttempts) {
        latestTransactions.splice(latestIndex, 1);
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2));
        try { await lenwy.sendMessage(m.chat, { delete: key }); } catch {}
        return m.reply('❌ Pemesanan telah melewati batas waktu');
      }

      try {
        let res = await checkQrisStatus(transactionId);
        if (res.status === 200 && res.data.status === 'paid') {
          try { await lenwy.sendMessage(m.chat, { delete: key }); } catch {}
          m.reply(`Pembayaran QRIS terdeteksi.`);
          isPaid = true;
          statusPay = true;
        }
      } catch (error) {
        console.log('Error Cek QRIS:', error);
        latestTransactions.splice(latestIndex, 1);
        fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(latestTransactions, null, 2));
        try { await lenwy.sendMessage(m.chat, { delete: key }); } catch {}
        return m.reply('Ada kendala pada server QRIS, pesanan dibatalkan.\nSilakan lakukan pembelian ulang');
      }
    }
  }

  if (isPaid) {
    let activeTransactions = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
    let activeIndex = activeTransactions.findIndex(t => t.id === m.sender && t.dari === 'digiflazz');
    
    if (activeIndex === -1) return; 
    
    activeTransactions[activeIndex].status = 'Processing';
    fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(activeTransactions, null, 2));
    
    let txData = activeTransactions[activeIndex];
    let successesCount = 0; 
    let intervals = {}; 
    
    m.reply(`Memproses pesanan anda ke server sebanyak ${txData.qty}x...`);

    for (let i = 0; i < txData.qty; i++) {
      let currentRefId = txData.ref_ids[i];
      if (i > 0) await sleep(2000); 

      const orderResult = await orderDigi(txData.item, txData.tujuan, currentRefId);

      if (!orderResult?.data?.ref_id) {
        m.reply(`❌ Gagal membuat pesanan ke-${i + 1} ke server. Tag Admin`);
        if (!isQrisMethod) {
          let users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
          let userIndex = users.findIndex(u => u.id === m.sender);
          if (userIndex !== -1) {
            users[userIndex].saldo += txData.harga_satuan;
            fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2));
            m.reply(`✅ Saldo di-refund sebesar ${formatSaldo(txData.harga_satuan)} untuk transaksi ke-${i + 1}`);
          }
        }
        
        successesCount++;
        if (successesCount === txData.qty) {
          let fTx = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
          let idx = fTx.findIndex(t => t.id === m.sender && t.dari === 'digiflazz');
          if (idx !== -1) { fTx.splice(idx, 1); fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(fTx, null, 2)); }
        }
        continue; 
      }

      const checkStatusOrder = async (refId, orderIndex) => {
        const orderStatus = await cekOrderanDigi(refId, txData.item, txData.tujuan);
        const SN = orderStatus?.data?.sn || '-';

        if (orderStatus?.data?.status === 'Sukses') {
          clearInterval(intervals[refId]); 
          let msg = `✅ Transaksi ke-${orderIndex + 1} Sukses @${m.sender.split("@")[0]}
> Invoice: ${refId}
> Item: ${txData.nama}
> Kode: ${txData.item}
> Tujuan: ${txData.tujuan}
> Harga: ${formatSaldo(txData.harga_satuan)}
> SN: ${SN}`;
          
          await lenwy.sendMessage(m.chat, { text: msg, mentions: [m.sender] }, { quoted: m });
          
          successesCount++;
          if (successesCount === txData.qty) {
            let fTx = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
            let idx = fTx.findIndex(t => t.id === m.sender && t.dari === 'digiflazz');
            if (idx !== -1) { fTx.splice(idx, 1); fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(fTx, null, 2)); }
          }
        } else if (orderStatus?.data?.status === 'Pending') {
          console.log(`Status transaksi ke-${orderIndex + 1} (${refId}) masih pending...`);
        } else {
          clearInterval(intervals[refId]); 
          m.reply(`❌ Pesanan ke-${orderIndex + 1} gagal. Tag Admin\n> Status: ${orderStatus?.data?.status || '-'}\n> Pesan: ${orderStatus?.data?.message || 'Tidak ada informasi.'}`);
          
          if (!isQrisMethod) {
            let users = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
            let userIndex = users.findIndex(u => u.id === m.sender);
            if (userIndex !== -1) {
              users[userIndex].saldo += txData.harga_satuan;
              fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(users, null, 2));
              m.reply(`✅ Saldo di-refund sebesar ${formatSaldo(txData.harga_satuan)} untuk transaksi ke-${orderIndex + 1}`);
            }
          }
          
          successesCount++;
          if (successesCount === txData.qty) {
            let fTx = JSON.parse(fs.readFileSync('./project/database/processTopup.json', 'utf8'));
            let idx = fTx.findIndex(t => t.id === m.sender && t.dari === 'digiflazz');
            if (idx !== -1) { fTx.splice(idx, 1); fs.writeFileSync('./project/database/processTopup.json', JSON.stringify(fTx, null, 2)); }
          }
        }
      };

      intervals[currentRefId] = setInterval(() => checkStatusOrder(currentRefId, i), 7000);
    }
  }
  },
};
