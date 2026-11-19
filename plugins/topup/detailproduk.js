module.exports = {
  command: 'detailproduk',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, text, isGcTopup, libs } = ctx;
    const { fs, cekItemDigi, formatSaldo } = libs;

    if (!isGcTopup) return m.reply('Grup ini belum terdaftar sebagai grup topup.');
    if (!text) return m.reply('Masukkan kode atau nama item yang ingin dicari.');

    const resultdigi = await cekItemDigi(text);
    if (!resultdigi?.data?.length) {
      return m.reply(`❌ Produk "${text}" tidak ditemukan.`);
    }

    const profitData = JSON.parse(fs.readFileSync('./project/database/config.json', 'utf8'));
    const item = resultdigi.data[0];
    const basePrice = item.price;
    const harga1Topup = Math.round(basePrice * (1 + profitData.profit1Topup / 100));
    const harga2Topup = Math.round(basePrice * (1 + profitData.profit2Topup / 100));
    const harga3Topup = Math.round(basePrice * (1 + profitData.profit3Topup / 100));
    const statusLabel = item.seller_product_status && item.buyer_product_status ? 'Tersedia' : 'Gangguan/Kosong';

    return m.reply(`Detail produk topup

Nama produk: ${item.product_name}
Kategori: ${item.category}
Brand: ${item.brand}
Stok: ${item.stock}
Harga ${global.settings.roles.role1}: ${formatSaldo(harga1Topup)}
Harga ${global.settings.roles.role2}: ${formatSaldo(harga2Topup)}
Harga ${global.settings.roles.role3}: ${formatSaldo(harga3Topup)}
Deskripsi: ${item.desc}
Status: ${statusLabel}`);
  },
};
