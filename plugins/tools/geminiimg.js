module.exports = {
  command: 'geminiimg',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, text, quoted, mime, libs } = ctx;
    const { axios, uploader60Minute } = libs;

if (!quoted) return m.reply('Mana Gambarnya?')
m.reply('Sabar Yaa')
if (!/image/.test(mime)) return m.reply("Hanya Support Gambar")
let media = await lenwy.downloadAndSaveMediaMessage(quoted)
let anu = await uploader60Minute(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ anu +"&prompt=" + text)
m.reply(data.text)
  },
};
