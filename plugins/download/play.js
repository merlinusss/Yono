module.exports = {
  command: 'play',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, isBan, mess, quoted, LenwyLD } = ctx;

if (isBan) return m.reply(mess.ban);
 if (!text) return m.reply(`*Mau Dengerin Lagu Apa?*`);
 LenwyLD();
 try {
 let searchnya = await (await fetch(`https://${global.api.merlinus.domain}/api/downloader/play?query=${encodeURIComponent(text)}&apikey=${global.api.merlinus.apikey}`)).json();
 let res = searchnya.result;
 console.log(res)
 await lenwy.sendMessage(m.chat, { audio: { url: res.urlDownload }, mimetype: 'audio/mp4' }, { quoted: m })
 } catch (e) {
 console.log(e)
 }
  },
};
