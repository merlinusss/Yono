module.exports = {
  command: 'meme',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, libs } = ctx;
    const { JalanTikusMeme } = libs;

    const reis = await JalanTikusMeme();
    const teks = `Random meme\n\nSource: ${reis}`;
    await lenwy.sendMessage(m.chat, { image: { url: reis }, caption: teks }, { quoted: m });
  },
};
