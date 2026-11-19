module.exports = {
  command: 'listmember',
  category: 'TOPUP',
  async execute(ctx) {
    const { lenwy, m, isCreator, libs } = ctx;
    const { formatSaldo } = libs;

try {
    if (!isCreator) return m.reply('❌ Anda tidak memiliki akses untuk perintah ini.');
    const userList = require('../../project/database/dataBuyerDigi.json');
    const filteredUsers = userList.filter(user =>
      typeof user.id === 'string' &&
      user.id.endsWith('@s.whatsapp.net')
    );
    if (filteredUsers.length === 0) return m.reply('⚠️ Tidak ada data member yang sesuai.');
    let result = '*📋 Data Semua Member*\n\n';
    for (const user of filteredUsers) {
      const waId = user.id;
      const role = user.role;
      const saldo = user.saldo;
      const namaOrng = await lenwy.getName(waId);
      result += `• ${waId.replace('@s.whatsapp.net', '')} | ${namaOrng}
Role: ${role}
Saldo: ${formatSaldo(saldo)}\n\n`;
    }
    return m.reply(result.trim());
  } catch (err) {
    console.error(err);
    return m.reply('❗ Terjadi kesalahan saat mengambil data.\n' + String(err));
  }
  },
};
