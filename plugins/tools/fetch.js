module.exports = {
  command: 'fetch',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text } = ctx;

if (!text) m.reply('Masukkan link nya')
try {
let res = await (await fetch(`${text}`)).json()
console.log(res)
m.reply(`${text}\n\n`+ JSON.stringify(res, null, 2))
} catch (e) {
m.reply(JSON.stringify(e, null, 2))
m.reply(e.message)
}
  },
};
