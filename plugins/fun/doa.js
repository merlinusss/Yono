module.exports = {
  command: 'doa',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, mess, LenwyLD, libs } = ctx;
    const { sleep, fetchJson } = libs;

if (!text) return m.reply(`*Tolong Masukkan Doa Yang Ingin Dicari*`) 
try{
LenwyLD()
await sleep(200)
let ilenwy = await fetchJson(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${text}`)
const namadoa = ilenwy.doa
const ayat = ilenwy.ayat
const latin = ilenwy.latin
var lenwy_result = `*Pencarian : ${namadoa}*

*${ayat}*

*${latin}*`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
  },
};
