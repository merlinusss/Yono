module.exports = {
  command: 'cuaca',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, q, quoted, LenwyLD, libs } = ctx;
    const { axios, sleep } = libs;

if (!text) return m.reply('*Mana Lokasinya?*')
if (text.length > 20) return m.reply(`*Maksimal 20 Karakter*`)
LenwyLD()
await sleep(200)
try {
let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`)
let Lenwy_txt = ""
Lenwy_txt += `*Cuaca Dari : ${text}*\n`
Lenwy_txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
Lenwy_txt += `🧾 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
Lenwy_txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
Lenwy_txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
Lenwy_txt += `🧴 *kelembapan :* *${wdata.data.main.humidity}*\n`
Lenwy_txt += `🛳️ *Garis Bujur :* *${wdata.data.coord.lat}*\n`
Lenwy_txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`
lenwy.sendMessage(m.chat, { text: Lenwy_txt, }, { quoted: m })
} catch (e) {
m.reply(`Pastikan Wilayahnya Adalah Kota`)
}
  },
};
