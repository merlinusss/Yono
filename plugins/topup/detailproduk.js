module.exports = {
  command: 'detailproduk',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, text, isGcTopup, libs } = ctx;
    const { fs, cekItemDigi, formatSaldo } = libs;

if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`)
  if (!text) return m.reply(`*Masukkan nama item nya*`)
  let resultdigi = await cekItemDigi(text)
  let resultkebsos = await cekLayanan()
  let dataMedan = resultkebsos?.data || []
  console.log(resultdigi)
  let selectedService = dataMedan.find(service => service.id.toString() === text)
  console.log(selectedService)
  let rawDataProfit = fs.readFileSync('./project/database/config.json')
  let profitData = JSON.parse(rawDataProfit)
  if (resultdigi) {
      let basePrice = resultdigi.data[0].price
      let harga1Topup = Math.round(basePrice * (1 + profitData.profit1Topup / 100));
      let harga2Topup = Math.round(basePrice * (1 + profitData.profit2Topup / 100));
      let harga3Topup = Math.round(basePrice * (1 + profitData.profit3Topup / 100));
      let statusIcon = resultdigi.data[0].seller_product_status && resultdigi.data[0].buyer_product_status ? "✅" : "⛔"
      m.reply(`───〔 *Detail Produk Topup* 〕───
» *Nama Produk:* ${resultdigi.data[0].product_name}
» *Kategori:* ${resultdigi.data[0].category}
» *Brand:* ${resultdigi.data[0].brand}
» *Stok:* ${resultdigi.data[0].stock}
» *Harga ${global.settings.roles.role1}:* ${formatSaldo(harga1Topup)}
» *Harga ${global.settings.roles.role2}:* ${formatSaldo(harga2Topup)}
» *Harga ${global.settings.roles.role3}:* ${formatSaldo(harga3Topup)}
» *Deskripsi:* ${resultdigi.data[0].desc}
» *Status:* ${statusIcon}`)
  }
  if (selectedService) {
      let basePrice = selectedService.price
      let harga1Kebsos = Math.round(basePrice * (1 + profitData.profit1Kebsos / 100));
      let harga2Kebsos = Math.round(basePrice * (1 + profitData.profit2Kebsos / 100));
      let harga3Kebsos = Math.round(basePrice * (1 + profitData.profit3Kebsos / 100));
      m.reply(`───〔 *Detail Produk Kebsos* 〕───
» *Nama Produk:* ${selectedService.name}
» *Kategori:* ${selectedService.category}
» *Minimal Order:* ${selectedService.min}
» *Maksimal Order:* ${selectedService.max}
» *Harga ${global.settings.roles.role1}/K:* ${formatSaldo(harga1Kebsos)}
» *Harga ${global.settings.roles.role2}/K:* ${formatSaldo(harga2Kebsos)}
» *Harga ${global.settings.roles.role3}/K:* ${formatSaldo(harga3Kebsos)}
» *Deskripsi:* ${selectedService.description}
» *Rata-rata pengerjaan:* ${selectedService.average_time}`)
  }
  },
};
