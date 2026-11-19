const toMs = require('ms');

module.exports = {
  command: 'jeda',
  category: 'GROUP',
  async execute({ lenwy, m, from, args, command, prefix, isAdmins, isBotAdmins, mess }) {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isAdmins) return m.reply(mess.admin);
    if (!isBotAdmins) return m.reply(mess.botAdmin);
    if (!args[0]) {
      return m.reply(`Pilih durasi:\n- s = detik\n- m = menit\n- h = jam\n- d = hari\n\nContoh: ${prefix + command} 10m`);
    }

    const timeArg = args[0];
    const timer = toMs(timeArg);
    if (!timer || timer <= 0) {
      return m.reply(`❌ Format waktu tidak valid. Contoh: ${prefix + command} 10m`);
    }

    try {
      await lenwy.groupSettingUpdate(from, 'announcement');
      await m.reply(`Grup ditutup selama ${timeArg} dan akan dibuka otomatis setelah waktu habis.`);
      setTimeout(async () => {
        try {
          await lenwy.groupSettingUpdate(from, 'not_announcement');
          await m.reply(`Grup telah dibuka kembali setelah ${timeArg}.`);
        } catch (err) {
          console.error('Error membuka grup:', err);
          m.reply('❌ Gagal membuka grup kembali.');
        }
      }, timer);
    } catch (err) {
      console.error('Error menutup grup:', err);
      m.reply('❌ Gagal menutup grup.');
    }
  },
};
