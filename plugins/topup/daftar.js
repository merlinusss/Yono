module.exports = {
  command: 'daftar',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, sender, text, isGcTopup, libs } = ctx;
    const { fs } = libs;

if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`);
  if (text) return;
  let filePathdataBuyer = JSON.parse(fs.readFileSync('./project/database/dataBuyerDigi.json', 'utf8'));
  let dataUser = filePathdataBuyer.find(obj => obj.id === m.sender);
  if (dataUser) return m.reply(`Anda sudah terdaftar...`)
  filePathdataBuyer.push({
    id: m.sender,
    role: '1',
    saldo: 0
  });
  m.reply(`Berhasil mendaftar dengan ID:\n${m.sender}`);
  fs.writeFileSync('./project/database/dataBuyerDigi.json', JSON.stringify(filePathdataBuyer, null, 2));
  },
};
