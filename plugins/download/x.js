module.exports = {
  command: 'x',
  category: 'DOWNLOAD',
  async execute(ctx) {
    const { lenwy, m, text, mess, quoted, LenwyLD, libs } = ctx;
    const { isUrl, sleep } = libs;

if (!text) return m.reply(`*Link Twitternya Mana?*`)
  if (!isUrl(text)) return m.reply(mess.link)
  LenwyLD()
  try {
    let response = await (await fetch(`https://${global.api.maelyn.domain}/api/x?url=${text}`, {
      headers: {
        'x-maelyn-auth': global.api.maelyn.apikey
      }
    })).json()
    lenwy.sendMessage(m.chat, { video: { url: response.result.video_hd }, caption: `Caption: ${response.result.desc}` }, { quoted: m })
    await sleep(200)
    await lenwy.sendMessage(m.chat, { audio: { url: response.result.audio }, mimetype: 'audio/mp4' }, { quoted: m });
  } catch (error) {
    console.error(error)
    m.reply(mess.error)
  }
  },
};
