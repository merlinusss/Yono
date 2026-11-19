module.exports = {
  command: 'resetlist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, isAdmins, mess, db_respon_list, libs } = ctx;
    const { resetList } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);

    if (resetList(m.chat, db_respon_list)) {
      return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
    }
    return m.reply('❌ Belum ada item list di grup ini.');
  },
};
