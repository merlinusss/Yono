module.exports = {
  command: 'sc',
  category: 'INFO',
  async execute({ m, text }) {
    if (text) return;
    m.reply(`*Script?*\n📑 *No Enc, Pairing Code*\n🎁 *Beli? :* wa.me/${global.developer}\n🤖 *Sewa? :* wa.me/${global.owner}`);
  },
};
