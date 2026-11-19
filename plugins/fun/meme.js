module.exports = {
  command: 'meme',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, quoted, libs } = ctx;
    const { JalanTikusMeme } = libs;

var reis = await JalanTikusMeme()
teks = ""
teks += "*Random Meme*\n\n"
teks += `🎁 *Source Meme :* ${reis}`
teks += ""
lenwy.sendMessage(m.chat, { image : { url : reis }, caption: teks }, { quoted:m })
  },
};
