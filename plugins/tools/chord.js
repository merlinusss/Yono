module.exports = {
  command: 'chord',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted, LenwyLD, libs } = ctx;
    const { sleep } = libs;

if (!text) return m.reply('masukkan judul lagunya!')
  try {
    let chord = await (await fetch('https://endpoint.web.id/search/chord?key=315602&query=' + text)).json()
    LenwyLD()
    await sleep(200)
    let result = chord.result;
    
    let message = `${result.title}\n\n`
    message += `Artis: ${result.artist}\n`
    message += `URL: ${result.url}\n`
    message += `URL Artis: ${result.artistUrl}\n\n`
    message += `Chord:\n${result.lyrics}`;
    
    lenwy.sendMessage(m.chat, { text: message }, { quoted: m })
  } catch (e) {
    m.reply('terjadi kesalahan: ' + e)
  }
  },
};
