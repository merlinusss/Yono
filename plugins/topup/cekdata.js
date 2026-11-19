module.exports = {
  command: 'cekdata',
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, sender, budy, args, text, command, prefix, isCreator, quoted, libs } = ctx;
    const { fs, formatSaldo } = libs;

if (!isCreator) return
  let user
  if (!m.quoted && !budy.includes('@')) {
    user = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const cek = await lenwy.onWhatsApp(user.split("@")[0])

    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} 6285261255548`)
    if (user.startsWith("0")) return m.reply(`Nomor Harus Diawali Dengan Kode Nomor Negara (62)\n\n> Contoh: ${prefix + command} 6285261255548`)
  } else if (!m.quoted && budy.includes('@')) {
    user = text.split('@')[1] + '@s.whatsapp.net'
    const cek = await lenwy.onWhatsApp(user.split("@")[0])
    if (cek.length < 1) return m.reply(`Nomor Tersebut Tidak Terdaftar Di WhatsApp\n\n> Contoh: ${prefix + command} @6285261255548`)
  } else if (m.quoted && !budy.includes('@')) {
    user = m.quoted.sender
  } else {
    return m.reply(`Hanya bisa
1. ${prefix + command} @User
2. ${prefix + command} 6285261255548
3. ${prefix + command} sambil reply chat yang mau di cek data`)
  }
  let filePathdataBuyer = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  let dataUser = filePathdataBuyer.find(obj => obj.id === user);
  if (!dataUser) return m.reply(`User belum terdaftar`)
  m.reply(`[ Data User ]

> Id: ${user}
> Role: ${dataUser.role}
> Saldo: ${formatSaldo(dataUser.saldo)}`)
  },
};
