module.exports = {
  command: 'reloadplugins',
  aliases: ['reload'],
  category: 'OWNER',
  async execute({ m, isCreator, mess, reloadPlugins }) {
    if (!isCreator) return m.reply(mess.owner);
    const map = reloadPlugins();
    m.reply(`✅ Plugin berhasil di-reload (${map.size} command terdaftar).`);
  },
};
