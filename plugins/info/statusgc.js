module.exports = {
  command: 'statusgc',
  category: 'INFO',
  async execute({ m, from, groupName }) {
    if (!m.isGroup) return m.reply('⚠️ Perintah ini hanya bisa digunakan di dalam grup!');
    try {
      const groupData = global.db.data.chats[from];
      if (!groupData) return m.reply('⚠️ Data grup tidak ditemukan dalam database. Coba kirim pesan apa saja di grup ini terlebih dahulu.');
      const check = (status) => (status ? '✅' : '❌');
      const statusMessage = `*📊 Status ${groupName}*\n\n` +
        `*Pengaturan Umum:*\n` +
        `• Onlyadmin: ${check(groupData.onlyAdmin)}\n` +
        `• Welcome: ${check(groupData.wlcm)}\n` +
        `• Left: ${check(groupData.left)}\n\n` +
        `*Keamanan:*\n` +
        `• Antilinktt: ${check(groupData.antilinktt)}\n` +
        `• Antilinkyt: ${check(groupData.antilinkyt)}\n` +
        `• Antiwame: ${check(groupData.antiwame)}\n` +
        `• Antilink1: ${check(groupData.antilink1)}\n` +
        `• Antilink2: ${check(groupData.antilink2)}\n` +
        `• Antitoxic1: ${check(groupData.antitoxic1)}\n` +
        `• Antitoxic2: ${check(groupData.antitoxic2)}\n` +
        `• Antilinkgc1: ${check(groupData.antilinkgc1)}\n` +
        `• Antilinkgc2: ${check(groupData.antilinkgc2)}\n` +
        `• Antisw1: ${check(groupData.antisw1)}\n` +
        `• Antisw2: ${check(groupData.antisw2)}`;
      m.reply(statusMessage);
    } catch (error) {
      console.error('Terjadi kesalahan di statusgc:', error);
      m.reply('⚠️ Terjadi kesalahan saat membaca database grup.');
    }
  },
};
