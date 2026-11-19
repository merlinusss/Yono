module.exports = {
  command: 'dellistsampah',
  category: 'GROUP',
  async execute(ctx) {
    const { lenwy, m, isCreator, mess, db_respon_list, libs } = ctx;
    const { deleteListSampah } = libs;

    if (!isCreator) return m.reply(mess.owner);
    await lenwy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    const getGroups = await lenwy.groupFetchAllParticipating();
    const groupIDs = Object.keys(getGroups);
    const deletedCount = deleteListSampah(db_respon_list, groupIDs);

    if (deletedCount > 0) {
      return m.reply(`Selesai membersihkan list sampah. Total dihapus: ${deletedCount} data.`);
    }
    return m.reply('Tidak ada list sampah yang ditemukan.');
  },
};
