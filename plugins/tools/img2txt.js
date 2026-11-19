module.exports = {
  command: 'img2txt',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, quoted, mime, LenwyLD, libs } = ctx;
    const { uploader60Minute } = libs;

if (!/image/.test(mime)) return m.reply(`Gambarnya Mana?`)
if (/image/.test(mime)) {
LenwyLD()
let mee = await lenwy.downloadAndSaveMediaMessage(quoted)
let mem = await uploader60Minute(mee)
let res = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
let result = res.result
lenwy.sendMessage(m.chat,{image:{url: mem}, caption:`${result}`},{quoted: m})
}
  },
};
