module.exports = {
  command: 'owner',
  category: 'INFO',
  async execute({ lenwy, m, text, author }) {
    if (text) return;
    await lenwy.sendContact(m.chat, author.map(i => i.split('@')[0]), m.quoted ? m.quoted.fakeObj : m);
  },
};
