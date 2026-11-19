module.exports = {
  command: 'addcase',
  aliases: ['editcase', 'delcase'],
  category: 'OWNER',
  async execute(ctx) {
    const { m, prefix, isCreator, mess, owner } = ctx;

if (!isCreator) return m.reply(mess.owner)
  return m.reply(`ℹ️ Semua fitur sekarang berbentuk modular di folder *plugins/*.\nEdit/tambah/hapus file langsung di \`plugins/<kategori>/\`, lalu ketik *${prefix}reloadplugins* atau gunakan *${prefix}updatebot*.`)
  },
};
