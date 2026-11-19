module.exports = {
  command: 'delripper',
  category: 'OWNER',
  async execute(ctx) {
    const { m, text, command, prefix, isCreator, mess, owner, libs } = ctx;
    const { fs, path } = libs;

if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply(`Masukkan nomor yang ingin dihapus.\nContoh: ${prefix + command} 628xxx`);

    let nomor = text.replace(/[^0-9]/g, '');
    const filePath = path.join(__dirname, './storage/dataRipper.json');

    if (!fs.existsSync(filePath)) {
        return m.reply('Daftar ripper masih kosong.');
    }

    let data;
    try {
        data = JSON.parse(fs.readFileSync(filePath));
        if (!Array.isArray(data)) data = [];
    } catch (e) {
        data = [];
    }

    if (!data.includes(nomor)) {
        return m.reply(`Nomor ${nomor} tidak ditemukan dalam daftar ripper.`);
    }

    data = data.filter(n => n !== nomor);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    m.reply(`Nomor ${nomor} berhasil dihapus dari daftar ripper.`);
  },
};
