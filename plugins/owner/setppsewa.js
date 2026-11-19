module.exports = {
  command: 'setppsewa',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess, owner, quoted, mime, libs } = ctx;
    const { fs, path } = libs;

  {
if (!isCreator) return m.reply(mess.owner);
  if (!/image/.test(mime)) return m.reply(`Fotonya Mana?`);
  
  const path = './storage/data/image/fotosewa'; // Menentukan path file foto
  
  if (fs.existsSync(path)) {
    fs.unlinkSync(path); // Menghapus file yang sudah ada
    console.log(`File "${path}" berhasil dihapus.`);
  }

  await lenwy.downloadAndSaveMediaMessage(quoted, path);

  m.reply('Foto berhasil diperbarui menjadi foto sewa.');
  }
  },
};
