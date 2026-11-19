module.exports = {
  command: 'delgctopup',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, isCreator, gcTopup, libs } = ctx;
    const { fs } = libs;

if (!isCreator) return
  const gcnya = m.chat; // Mendapatkan ID grup
  let gcList;
  try {
    const data = fs.readFileSync('./project/database/gcTopup.json', 'utf-8');
    gcList = JSON.parse(data);
  } catch (error) {
    console.error('Error membaca file gcTopup.json:', error);
    gcList = []; // Inisialisasi dengan array kosong jika terjadi kesalahan
  }
  const index = gcList.indexOf(gcnya);
  if (index === -1) {
    return m.reply(`Grup dengan ID "${gcnya}" tidak ditemukan dalam daftar.`);
  }
  gcList.splice(index, 1);
  fs.writeFileSync('./project/database/gcTopup.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil dihapus dari gcTopup.json`);
  m.reply(`ID grup "${gcnya}" berhasil dihapus dari daftar gcTopup.`);
  },
};
