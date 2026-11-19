module.exports = {
  command: 'cekipurl',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, text, command, prefix, libs } = ctx;
    const { dns } = libs;

if (!text) return m.reply(`Contoh: ${prefix + command} urlNya\n\n> Note: Tanpa https://`)
if (text.startsWith('https://')) return m.reply(`Note: Tanpa https://`)
  try {
    const address = await dns.lookup(text);
    m.reply(`IPv4 Address of https://${text}: ${address.address}`);
  } catch (err) {
    console.error('Error:', err.message);
  }
  },
};
