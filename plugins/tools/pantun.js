module.exports = {
  command: 'pantun',
  category: 'TOOLS',
  async execute(ctx) {
    const { m, libs } = ctx;
    const { axios } = libs;

try {
        let response = await axios.get('https://apis.xyrezz.online-server.biz.id/api/pantun');
        let pantunList = response.data;
        let randomIndex = Math.floor(Math.random() * pantunList.length);
        let randomPantun = pantunList[randomIndex];

        m.reply(randomPantun.trim());
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memuat pantun.');
    }
  },
};
