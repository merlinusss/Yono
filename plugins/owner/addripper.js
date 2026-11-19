module.exports = {
  command: 'addripper',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, text, command, prefix, isCreator, isBotAdmins, mess, owner, libs } = ctx;
    const { fs, path } = libs;

if (!isCreator) return m.reply(mess.owner)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
    if (!text) return m.reply(`Masukkan nomor yang ingin ditambahkan.\nContoh: ${prefix + command} 628xxx`)

    let nomor = text.replace(/[^0-9]/g, '')
    var cek = await lenwy.onWhatsApp(nomor)
    if (cek.length < 1) return m.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
    const filePath = path.join(__dirname, './storage/dataRipper.json');

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }

    let data = JSON.parse(fs.readFileSync(filePath));

    if (data.includes(nomor)) {
        return m.reply(`Nomor ${nomor} sudah terdaftar sebagai ripper.`)
    }

    data.push(nomor);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    m.reply(`Nomor ${nomor} berhasil ditambahkan ke daftar ripper.`)
  },
};
