module.exports = {
  command: 'lirik',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (!text) return m.reply(`Masukan Judul Lagu`)
  if (text.length > 30) return m.reply(`Maksimal 30 Karakter`)    
  LenwyLD()
  await sleep(200)
  try{
    let anu = await (await fetch(`https://endpoint.web.id/tools/lirik?key=315602&query=${text}`)).json()
    let result = anu.result
    let caption = '📃 Judul : ' + result.title + '\n📣 Artis : ' + result.artist + '\n\n🎁 Lirik :\n' + result.lyrics
    m.reply(caption)
  } catch (error) {
    m.reply(`⚠️ Lirik Lagu Tidak Ditemukan ${error}`)
  }
  },
};
