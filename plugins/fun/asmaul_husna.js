module.exports = {
  command: 'asmaul husna',
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from, text, command, quoted } = ctx;

const t3xt = require(`./storage/teks/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m })
  },
};
