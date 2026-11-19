module.exports = {
  command: 'cwr',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text } = ctx;

if (!text) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return m.reply('*Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return m.reply('⚠️ *Pastikan Semuanya Berupa Angka*')
}
let tLose = tMatch * (100 - tWr) / 100;
let seratusPersen = tLose * (100 / (100 - wrReq))
let final = seratusPersen - tMatch;
const tekl = `*Winrate Calculator Mobile Legend*

📑 *Data Yang Diberikan*
 *⨠ Total Petandingan : ${tMatch}*
 *⨠ Winrate Saat Ini : ${tWr}%*
 *⨠ Target Winrate : ${wrReq}%*

🎁 *Hasil :*
*Butuh ${Math.round(final)} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate*`;
m.reply(tekl)
  },
};
