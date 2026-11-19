module.exports = {
  command: 'kisahnabi',
  category: 'FUN',
  async execute(ctx) {
    const { m, text, mess, libs } = ctx;
    const { fetchJson } = libs;

if (!text) return m.reply(`*Tolong Masukkan Nama Nabi*`) 
try{
let ilenwy = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/kisahnabi?apikey=QIO8xicLNkEV43Y&nabi=${text}`)
const namanabi = ilenwy.result.name
const kelahiran = ilenwy.result.birth
const wafat = ilenwy.result.death_age
const asal = ilenwy.result.country_from
const ceritanabi = ilenwy.result.story
var lenwy_result = `*Kisah Nabi*
🎁 *Nama Nabi : ${namanabi}*
🗓️ *Hari Kelahiran : ${kelahiran}*
🕒 *Wafat Pada Umur : ${wafat}*
🌏 *Asal : ${asal}*

📑 *Kisah Dari Nabi ${namanabi} :*
${ceritanabi}`
m.reply(lenwy_result) 
} catch (error) {
    return m.reply(mess.error)
}
  },
};
