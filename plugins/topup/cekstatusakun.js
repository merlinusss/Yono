module.exports = {
  command: 'cekstatusakun',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, isCreator, libs } = ctx;
    const { cekStatusAkunDigi, formatSaldo } = libs;

if (!isCreator) return

  let statusDataDigi = await cekStatusAkunDigi()
  let dataDigi = statusDataDigi?.data || {}

  let mesnya = ` [ Status Akun ]

Saldo Topup: ${formatSaldo(dataDigi.deposit) || '-'}`
  m.reply(mesnya)
  },
};
