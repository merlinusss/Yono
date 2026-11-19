module.exports = {
  command: 'resetlist',
  category: 'GROUP',
  async execute(ctx) {
    const { m, isAdmins, mess, db_respon_list, libs } = ctx;
    const { resetList } = libs;

if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  if (resetList(m.chat, db_respon_list)) {
      m.reply(`📑 *Sukses mereset list*`);
  } else {
      m.reply(`⚠️ *Gagal mereset list*`);
  }
  },
};
