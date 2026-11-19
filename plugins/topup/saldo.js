module.exports = {
  command: 'saldo',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, sender, pushname, text, prefix, isGcTopup, libs } = ctx;
    const { fs, formatSaldo } = libs;

if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`)
  if (text) return
  let filePathdataBuyer = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  let dataUser = filePathdataBuyer.find(obj => obj.id === m.sender);
  if (!dataUser) return m.reply(`Ketik ${prefix}daftar terlebih dahulu`)
  let userRole = dataUser.role == "1" ? global.settings.roles.role1 :
    dataUser.role == "2" ? global.settings.roles.role2 :
    dataUser.role == "3" ? global.settings.roles.role3 : global.settings.roles.role4;

  m.reply(`[ Data Anda ]

> Nama: ${pushname}
> Role: ${userRole}
> Saldo: ${formatSaldo(dataUser.saldo)}`)
  },
};
