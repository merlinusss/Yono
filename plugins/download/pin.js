module.exports = {
  command: 'pin',
  aliases: ['pinterest'],
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, q, command, prefix, quoted, LenwyLD, libs } = ctx;
    const { axios, sleep } = libs;

if (!text) return m.reply(`*Contoh:* ${prefix + command} FF🗿`)
  LenwyLD()
  await sleep(200)
  try {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randIndex]] = [array[randIndex], array[i]];
      }
    }
    let { data } = await axios.get(`https://api.nexray.eu.cc/search/pinterest?q=${encodeURIComponent(text)}`)
    if (!data.status || !data.result || data.result.length === 0) {
      throw new Error("Gagal mengambil data atau gambar tidak ditemukan")
    }
    let res = data.result
    shuffleArray(res)
    res = res.slice(0, 10)
    let cards = []
    let i = 1;
    for (let pinData of res) {
      cards.push({
        image: {
          url: pinData.images_url
        },
        caption: `*${pinData.grid_title || 'Pinterest'}*\n\nImage Ke ${i++}/${res.length}`,
        footer: `By ${botname}`,
        nativeFlow: [{
          text: '🌐 Source Pin',
          url: pinData.pin,
          useWebview: true
        }]
      })
    }
    await lenwy.sendMessage(m.chat, {
      text: '*P I N T E R E S T*',
      footer: '*Hasil Dari:* ' + text,
      cards: cards
    }, { quoted: m })
  } catch (e) {
    console.log(e) 
    m.reply('Yah error di bagian: ' + e.message) 
  }
  },
};
