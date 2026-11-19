const t3xt = require('../../storage/teks/asmaulhusna.json');

module.exports = {
  command: 'asmaulhusna',
  aliases: ['asmaul'],
  category: 'FUN',
  async execute(ctx) {
    const { lenwy, m, from } = ctx;
    const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)];
    await lenwy.sendMessage(from, { text: r4andT3xt }, { quoted: m });
  },
};
