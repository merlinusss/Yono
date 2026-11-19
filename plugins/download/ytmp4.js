module.exports = {
  command: 'ytmp4',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, quoted, LenwyLD } = ctx;

if (!text) return m.reply(`*Link Youtubenya Mana?*`)
    try {
        LenwyLD()
        m.reply('Process sending video, mungkin membutuhkan 1-3 menit jika durasi video terlalu panjang!')
        
        let res = await (await fetch(`https://${global.api.merlinus.domain}/api/downloader/youtube?url=${encodeURIComponent(text)}&action=video&apikey=${global.api.merlinus.apikey}`)).json();
        
        let dl = res.result?.downloads;
        let selected = dl?.find(v => v.note?.includes('480p') && v.hasAudio) 
                    || dl?.find(v => v.note?.includes('360p') && v.hasAudio) 
                    || dl?.find(v => v.note?.includes('720p') && v.hasAudio)
                    || dl?.find(v => v.hasVideo && v.hasAudio);
        
        let videoUrl = selected?.dlink || selected?.url || res.result?.dlink;
        if (!videoUrl) return m.reply('Gagal mendapatkan link video dari API!');

        lenwy.sendMessage(m.chat, { video: { url: videoUrl }, caption: `*${res.result?.caption}*` }, { quoted: m });
    } catch (e) {
        m.reply('terjadi error :' + e)
    }
  },
};
