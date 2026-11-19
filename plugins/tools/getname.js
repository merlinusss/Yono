module.exports = {
  command: 'getname',
  category: 'TOOLS',
  async execute(ctx) {
    const { lenwy, m, sender, quoted, qtod } = ctx;

if (qtod !== "true") return m.reply("✉️ *Reply Orangnya*");
  let namenye = await lenwy.getName(m.quoted.sender);
  m.reply(`Namanya: ${namenye}`);
  },
};
