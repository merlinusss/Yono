module.exports = {
  command: 'setprofit',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, args, text, command, prefix, isCreator, libs } = ctx;
    const { fs } = libs;

if (!isCreator) return;
  if (!text) return m.reply(`Contoh: ${prefix + command} topup 7 5 2

Note:
2 = 2%
Format: ${prefix + command} jenis profit1 profit2 profit3`);

  if (args[0] !== "topup" && args[0] !== "kebsos") return m.reply(`Masukkan profit apa yang mau di edit.
> Contoh: ${prefix + command} topup 7 5 2

Note:
Hanya bisa ${prefix + command} topup atau ${prefix + command} kebsos`);
  let rawData = fs.readFileSync('./project/database/config.json');
  let profitData = JSON.parse(rawData);
  if (!args[1] || !args[2] || !args[3]) return m.reply(`Semua nilai profit harus diisi.`);

  if (args[0] === "topup") {
    profitData.profit1Topup = parseFloat(args[1]);
    profitData.profit2Topup = parseFloat(args[2]);
    profitData.profit3Topup = parseFloat(args[3]);
  } else if (args[0] === "kebsos") {
    profitData.profit1Kebsos = parseFloat(args[1]);
    profitData.profit2Kebsos = parseFloat(args[2]);
    profitData.profit3Kebsos = parseFloat(args[3]);
  }

  try {
    fs.writeFileSync('./project/database/config.json', JSON.stringify(profitData, null, 2));
  } catch (err) {
    return m.reply('❌ Gagal menyimpan perubahan.');
  }

  m.reply(`Profit ${args[0]} berhasil diperbarui:
${global.settings.roles.role1}: ${args[1]}%
${global.settings.roles.role2}: ${args[2]}%
${global.settings.roles.role3}: ${args[3]}%`);
  },
};
