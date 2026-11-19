module.exports = {
  command: 'listripper',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, from, text, isCreator, mess, owner, quoted, libs } = ctx;
    const { fs } = libs;

  {
if (!isCreator) return m.reply(mess.owner)

    let rippers;
    try {
        rippers = JSON.parse(fs.readFileSync('./storage/dataRipper.json', 'utf8'))
    } catch (err) {
        console.error('Error reading dataRipper.json:', err)
        return m.reply('❌ Gagal memuat daftar ripper.')
    }

    if (rippers.length === 0) return m.reply('Daftar ripper masih kosong.')

    let teksooo = 'Daftar ripper\n';
    for (let i of rippers) {
        teksooo += `- ${i}\n`
    }
    teksooo += `\nTotal: ${rippers.length}`;

    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
  }
  },
};
