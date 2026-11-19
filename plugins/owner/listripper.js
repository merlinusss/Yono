module.exports = {
  command: 'listripper',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, from, text, isCreator, mess, owner, quoted, libs } = ctx;
    const { fs } = libs;

  {
if (!isCreator) return m.reply(mess.owner)

    let owner;
    try {
        owner = JSON.parse(fs.readFileSync('./storage/dataRipper.json', 'utf8'))
    } catch (err) {
        console.error('Error reading premium.json:', err)
        return m.reply('*Gagal Memuat Daftar Premium.*')
    }

    if (owner.length === 0) return m.reply('*Daftar Ripper Masih Kosong.*')

    let teksooo = '\`— 𝗟𝗶𝘀𝘁 𝗥𝗶𝗽𝗽𝗲𝗿\`\n';
    for (let i of owner) {
        teksooo += `✉️ ${i}\n`
    }
    teksooo += `\nTotal: ${owner.length}`;

    lenwy.sendMessage(from, { text: teksooo.trim() }, { quoted: m })
  }
  },
};
