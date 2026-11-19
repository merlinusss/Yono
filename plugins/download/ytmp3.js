module.exports = {
  command: 'ytmp3',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (!text) return m.reply(`*Link Youtubenya Mana?*`)
    try {
        LenwyLD()
        await sleep(200)
        m.reply('Process sending audio, mungkin ini membutuhkan 1-3 menit jika durasi audio terlalu panjang!')
        
        let res = await (await fetch(`https://${global.api.merlinus.domain}/api/downloader/youtube?url=${encodeURIComponent(text)}&action=audio&apikey=${global.api.merlinus.apikey}`)).json();
        
        let dl = res.result?.downloads;
        let selected = dl?.find(v => v.language === 'id' || v.note?.toLowerCase().includes('indonesian')) 
                    || dl?.find(v => v.language?.startsWith('en') || v.note?.toLowerCase().includes('english')) 
                    || dl?.[0];
        
        let audioUrl = selected?.dlink || selected?.url || res.result?.dlink;
        if (!audioUrl) return m.reply('Gagal mendapatkan link audio dari API!');

        lenwy.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
    } catch (e) {
        m.reply('terjadi error :' + e)
    }
  },
};
