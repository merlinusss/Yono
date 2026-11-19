module.exports = {
  command: 'updatenamelist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, q, prefix, isAdmins, mess, db_respon_list, libs } = ctx;
    const { updateKey } = libs;

    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    const sepIdx = q.indexOf('|');
    if (sepIdx === -1) return m.reply(`Cara pakai: ${prefix}updatenamelist KeyLama|KeyBaru\nContoh: ${prefix}updatenamelist wdp|antri wdp`);
    const oldKey = q.slice(0, sepIdx).toLowerCase().trim();
    const newKey = q.slice(sepIdx + 1).toLowerCase().trim();
    if (!oldKey || !newKey) return m.reply(`Cara pakai: ${prefix}updatenamelist KeyLama|KeyBaru\nContoh: ${prefix}updatenamelist wdp|antri wdp`);
    if (updateKey(m.chat, oldKey, newKey, db_respon_list)) {
      return lenwy.sendMessage(m.chat, { react: { text: '👍', key: m.key } });
    }
    return m.reply(`❌ Item ${oldKey} belum terdaftar di grup ini.`);
  },
};
