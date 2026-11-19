const roles = require('../../library/roles');

module.exports = {
  command: 'prem',
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, from, args, isCreator, mess } = ctx;
    if (!isCreator) return m.reply(mess.owner);

    const react = (emoji) => lenwy.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
    const action = args[0] ? args[0].toLowerCase() : '';
    if (!['add', 'del', 'list'].includes(action)) {
      return m.reply('Format salah.\nContoh:\n- prem add 62812345678\n- prem del 62812345678\n- prem list');
    }

    const premiumNumbers = roles.getList('premium');

    if (action === 'list') {
      if (premiumNumbers.length === 0) return m.reply('Daftar premium masih kosong.');
      const list = premiumNumbers.map((n, i) => `${i + 1}. ${n}`).join('\n');
      return lenwy.sendMessage(from, { text: `Daftar premium (${premiumNumbers.length}):\n${list}` }, { quoted: m });
    }

    if (!args[1]) return m.reply(`Masukkan nomornya.\nContoh: prem ${action} 62812345678`);

    const number = roles.normalizeNumber(args[1]);
    if (!number) return m.reply('❌ Nomor tidak valid.');

    if (action === 'add') {
      if (premiumNumbers.includes(number)) return m.reply(`Nomor ${number} sudah terdaftar di premium.`);
      try {
        const isRegistered = await lenwy.onWhatsApp(number + '@s.whatsapp.net');
        if (isRegistered && isRegistered.length > 0) {
          roles.addToList('premium', number);
          return react('👍');
        }
        return m.reply(`❌ Nomor ${number} tidak terdaftar di WhatsApp.`);
      } catch {
        return m.reply('❌ Gagal mengecek nomor ke WhatsApp.');
      }
    }

    if (action === 'del') {
      const res = roles.removeFromList('premium', number);
      if (!res.ok) return m.reply(`❌ Nomor ${number} tidak ada di daftar premium.`);
      return react('👍');
    }
  },
};
