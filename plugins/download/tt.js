module.exports = {
  command: 'tt',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, mess, quoted, LenwyLD, libs } = ctx;
    const { isUrl } = libs;

if (!text) return m.reply(`*Link Tiktoknya Mana?*`);
  if (!isUrl(text)) return m.reply(mess.link);
  
  LenwyLD();

  try {
    let response = await (await fetch(`https://api.siputzx.my.id/api/d/tiktok/v2?url=${encodeURIComponent(text)}`)).json();
    console.log(response);

    if (!response.status || !response.data) {
      return m.reply("Gagal mengambil data dari API.");
    }

    let data = response.data;
    
    let capt = `*Title:* ${data.text || 'No Title'}\n` +
               `*Author:* ${data.author_nickname}\n` +
               `*Views:* ${data.play_count.toLocaleString()} | *Likes:* ${data.like_count.toLocaleString()}\n` +
               `*Shares:* ${data.share_count.toLocaleString()}`;

    if (data.slides && typeof data.slides === 'object') {
      for (const key in data.slides) {
        const slide = data.slides[key];
        if (slide?.url) {
          await lenwy.sendMessage(m.chat, { image: { url: slide.url } }, { quoted: m });
        }
      }
      m.reply(capt || '');
    } else if (data.no_watermark_link) {
      let videoUrl = data.no_watermark_link;
      await lenwy.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: capt
      }, { quoted: m });
    } else {
      m.reply("Tipe konten tidak dikenali atau media tidak ditemukan.");
    }

    if (data.music_link) {
      let audioTitle = 'Tiktok_Audio';
      await lenwy.sendMessage(m.chat, {
        audio: { url: data.music_link },
        mimetype: 'audio/mpeg',
        fileName: `${audioTitle}.mp3`
      }, { quoted: m });
    }

  } catch (error) {
    console.error("Error TikTok DL:", error);
    m.reply("Terjadi kesalahan saat memproses permintaan.");
  }
  },
};
