module.exports = {
  command: 'sendlist',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, budy, text, command, prefix, isAdmins, isCreator, mess, db_respon_list, libs } = ctx;
    const { updateId, getGroupIdFromLink } = libs;

    try {
      let oldId;
      let newId;
      if (!m.isGroup) {
        if (!isCreator) return m.reply(mess.owner);
        if (!text || !budy.includes('|')) {
          return m.reply(`Cara pakai: ${prefix + command} linkGrupAsal|linkGrupTujuan`);
        }
        const links = text.split('|');
        oldId = await getGroupIdFromLink(links[0].trim(), lenwy);
        newId = await getGroupIdFromLink(links[1].trim(), lenwy);
      } else {
        if (!isAdmins) return m.reply(mess.admin);
        if (!text) return m.reply(`Cara pakai: ${prefix + command} linkGrupTujuan`);
        oldId = m.chat;
        newId = await getGroupIdFromLink(text.trim(), lenwy);
      }

      const datagrup = await lenwy.groupMetadata(newId);
      if (updateId(oldId, newId, db_respon_list)) {
        return m.reply(`List berhasil dipindahkan ke grup ${datagrup.subject}.`);
      }
      return m.reply(`❌ Tidak ada list untuk dipindahkan ke grup ${datagrup.subject}.`);
    } catch (err) {
      return m.reply(`❌ ${err.message || 'Gagal memindahkan list.'}`);
    }
  },
};
