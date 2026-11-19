module.exports = {
  command: 'ig',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, mess, quoted, type, LenwyLD, libs } = ctx;
    const { axios, isUrl, sleep, igdl } = libs;

if (!text) return m.reply(`*Link Instagramnya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  
  LenwyLD()
  await sleep(200)
  try {
    let ress = await igdl(text);
    console.log(ress);
    
    const total = ress.length;
    const step = Math.floor(Math.sqrt(total));
    const batas = step;
    for (let i = 0; i < step; i++) {
      let responseIg = await axios.head(ress[i].url); 
      let contentType = responseIg.headers['content-type'];
      if (contentType.startsWith('image/')) {
        await lenwy.sendMessage(m.chat, { image: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      } else {
        await lenwy.sendMessage(m.chat, { video: { url: ress[i].url}, caption: mess.success }, { quoted: m });
      }
    }
  } catch (e) {
    m.reply(e)
  }
  },
};
