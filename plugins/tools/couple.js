module.exports = {
  command: 'couple',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, from, quoted, libs } = ctx;
    const { fetchJson } = libs;

let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
lenwy.sendMessage(from, { image: { url: random.male }, caption: `🎁 *Couple Male*` }, {quoted:m})
lenwy.sendMessage(from, { image: { url: random.female }, caption: `🎁 *Couple Female*` }, {quoted:m})
  },
};
