module.exports = {
  command: 'caratopup',
  category: 'TOPUP',
  async execute(ctx) {
    const { m, text, isGcTopup } = ctx;

if (!isGcTopup) return m.reply(`Group ini tidak terdaftar di group Topup`)
if (text) return
m.reply(`   °┄─────── 𓊔 ───────┄° 
*Cara Topup :*
order Kode Id Server [ order ML5 12345678 1234 ]
order2 Kode Id Server [ order2 ML5 12345678 1234 ]`)
  },
};
