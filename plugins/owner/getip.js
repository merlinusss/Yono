module.exports = {
  command: 'getip',
  category: 'OWNER',
  async execute({ m, isCreator, mess }) {
    if (!isCreator) return m.reply(mess.owner);
    try {
      const res = await fetch('http://ip-api.com/json/');
      const data = await res.json();
      if (data.query) {
        m.reply(`*📮INFO SERVER*\n\n*IP :* ${data.query}\n*Country :* ${data.city}, ${data.regionName}, ${data.country}`);
      } else {
        m.reply('Gagal mengambil informasi IP IPv4. Silakan coba lagi nanti.');
      }
    } catch (error) {
      console.error('Error fetching IP:', error);
      m.reply('Gagal mengambil informasi IP. Silakan coba lagi nanti.');
    }
  },
};
