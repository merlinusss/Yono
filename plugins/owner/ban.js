const roles = require('../../library/roles');

module.exports = {
  command: 'ban',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, args, isCreator, mess } = ctx;
    if (!isCreator) return m.reply(mess.owner);

    const react = (emoji) => lenwy.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
    const action = args[0] ? args[0].toLowerCase() : '';
    if (!['add', 'del', 'list'].includes(action)) {
      return m.reply('Format salah.\nContoh:\n- ban add 62812345678\n- ban del 62812345678\n- ban list');
    }

    const bannedData = roles.getList('banned');

    if (action === 'list') {
      if (bannedData.length === 0) return m.reply('Daftar banned masih kosong.');
      const response = bannedData.map((number, index) => `${index + 1}. ${number}`).join('\n');
      return m.reply(`Daftar banned (${bannedData.length}):\n${response}`);
    }

    if (!args[1]) return m.reply(`Masukkan nomornya.\nContoh: ban ${action} 62812345678`);

    const number = roles.normalizeNumber(args[1]);
    if (!number) return m.reply('❌ Nomor tidak valid.');

    if (action === 'add') {
      if (bannedData.includes(number)) return m.reply(`Nomor ${number} sudah ada di daftar banned.`);
      try {
        const isRegistered = await lenwy.onWhatsApp(number + '@s.whatsapp.net');
        if (isRegistered && isRegistered.length > 0) {
          roles.addToList('banned', number);
          return react('👍');
        }
        return m.reply(`❌ Nomor ${number} tidak terdaftar di WhatsApp.`);
      } catch {
        return m.reply('❌ Gagal mengecek nomor ke WhatsApp.');
      }
    }

    if (action === 'del') {
      const res = roles.removeFromList('banned', number);
      if (!res.ok) return m.reply(`❌ Nomor ${number} tidak ada di daftar banned.`);
      return react('👍');
    }
  },
};
