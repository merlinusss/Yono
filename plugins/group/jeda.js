const toMs = require('ms');

module.exports = {
  command: 'jeda',
  category: 'GROUP',
  async execute({ lenwy, m, from, args, command, prefix, isAdmins, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!args[0]) return m.reply(`*Pilih Waktu:*\n-s = Second\n-m = Minute\n-h = Hour\n-d = Day\n\n*Contoh:*\n${prefix + command} 10m`);

    const timeArg = args[0];
    const timer = toMs(timeArg);
    if (!timer || timer <= 0) return m.reply(`Format waktu tidak valid. Contoh: *${prefix + command} 10m*`);

    m.reply(`*Group akan ditutup selama ${timeArg}*`);
    try {
      await lenwy.groupSettingUpdate(from, 'announcement');
      m.reply(`Group telah ditutup selama ${timeArg}. Grup akan dibuka kembali setelah waktu habis.`);
      setTimeout(async () => {
        try {
          await lenwy.groupSettingUpdate(from, 'not_announcement');
          m.reply(`Group telah dibuka kembali setelah ${timeArg}.`);
        } catch (err) {
          console.error('Error membuka grup:', err);
          m.reply('Terjadi kesalahan saat membuka grup kembali.');
        }
      }, timer);
    } catch (err) {
      console.error('Error menutup grup:', err);
      m.reply('Terjadi kesalahan saat menutup grup.');
    }
  },
};
