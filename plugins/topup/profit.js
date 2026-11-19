module.exports = {
  command: 'profit',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, text, prefix, isCreator, libs } = ctx;
    const { fs } = libs;

if (!isCreator) return
  if (text) return
  let rawDataProfit = fs.readFileSync('./project/database/config.json')
  let profitData = JSON.parse(rawDataProfit)
  m.reply(`[ Persentase profit ]
> Profit Topup
${global.settings.roles.role1}: ${profitData.profit1Topup}
${global.settings.roles.role2}: ${profitData.profit2Topup}
${global.settings.roles.role3}: ${profitData.profit3Topup}

> Profit Kebsos
${global.settings.roles.role1}: ${profitData.profit1Kebsos}
${global.settings.roles.role2}: ${profitData.profit2Kebsos}
${global.settings.roles.role3}: ${profitData.profit3Kebsos}

NOTE:
5 = 5%
Edit Profit? ketik ${prefix}setprofit`)
  },
};
