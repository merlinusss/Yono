module.exports = {
  command: 'removeexpired',
  aliases: ['cekexp', 'cekexpired'],
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess, owner, pathsewa, libs } = ctx;
    const { fs } = libs;

if (!isCreator) return m.reply(mess.owner)
  try {
    const currentDir = JSON.parse(fs.readFileSync(pathsewa, 'utf8'))
    await expiredCheck(lenwy, currentDir) // Asumsikan `conn` adalah objek koneksi bot
    m.reply('Pengecekan masa sewa sedang dilakukan, grup yang masa sewanya telah habis akan dihapus secara otomatis.')
  } catch (error) {
    m.reply(error.message)
  }
  },
};
