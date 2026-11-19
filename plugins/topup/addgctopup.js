module.exports = {
  command: 'addgctopup',
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
  if (gcList.includes(gcnya)) {
    return m.reply(`Grup dengan ID "${gcnya}" sudah ada dalam daftar.`);
  }
  gcList.push(gcnya);
  fs.writeFileSync('./project/database/gcTopup.json', JSON.stringify(gcList, null, 2));
  console.log(`ID grup "${gcnya}" berhasil ditambahkan ke gcTopup.json`);
  m.reply(`ID grup "${gcnya}" berhasil ditambahkan ke daftar gcTopup.`);
  },
};
