module.exports = {
  command: 'bot',
  category: 'INFO',
  async execute({ m, text, pushname }) {
    if (text) return;
    m.reply(`Iya Kak, ${pushname}`);
  },
};
