module.exports = {
  command: 'spotify',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, quoted, LenwyLD, libs } = ctx;
    const { axios } = libs;

if (!text) return m.reply("*Mau Cari Lagu Apa?*");
  LenwyLD();
  try {
    var result = await axios.get(`https://api.vreden.my.id/api/v1/search/spotify?query=${text}&limit=3`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  } catch (error) {
    return m.reply('*Gagal melakukan pencarian, coba lagi nanti.*');
  }

  if (!result || !result.data.result || result.data.result.search_data.length === 0) {
    return m.reply('*Tidak ada hasil ditemukan*');
  }

  let res = result.data.result.search_data; // Ambil semua hasil pencarian
  let audioInfo = res[Math.floor(Math.random() * res.length)];
  console.log(audioInfo.song_link)
  let { data } = await axios.get(`https://api.vreden.my.id/api/v1/download/spotify?url=${audioInfo.song_link}`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
  console.log(data)

  if (data.result) {
    lenwy.sendMessage(m.chat, { audio: { url: data.result.download }, mimetype: 'audio/mp4' }, { quoted: m });
  } else {
    return m.reply('*Gagal mendapatkan audio preview, coba lagi nanti.*');
  }
  },
};
