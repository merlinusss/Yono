const roles = require('../../library/roles');

module.exports = {
  command: 'setowner',
  aliases: ['addowner', 'delowner', 'listowner'],
  category: 'OWNER',
  async execute(ctx) {
    const { lenwy, m, from, args, command, prefix, isSuperOwner } = ctx;
    if (!isSuperOwner) return m.reply('Fitur ini hanya bisa digunakan oleh superowner.');

    const react = (emoji) => lenwy.sendMessage(m.chat, { react: { text: emoji, key: m.key } });

    let action = '';
    let rawTarget = '';

    if (command === 'addowner') {
      action = 'add';
      rawTarget = args[0] || '';
    } else if (command === 'delowner') {
      action = 'del';
      rawTarget = args[0] || '';
    } else if (command === 'listowner') {
      action = 'list';
    } else {
      action = (args[0] || '').toLowerCase();
      rawTarget = args[1] || '';
    }

    if (!['add', 'del', 'list'].includes(action)) {
      return m.reply(
        `Format salah.\nContoh:\n` +
        `- ${prefix}setowner add 62812345678\n` +
        `- ${prefix}setowner del 62812345678\n` +
        `- ${prefix}setowner list`
      );
    }

    if (action === 'list') {
      const superOwners = roles.getSuperOwners();
      const owners = roles.getList('owner');
      let teks = `Superowner:\n${superOwners.map((n, i) => `${i + 1}. ${n}`).join('\n')}\n\n`;
      teks += owners.length > 0
        ? `Owner (${owners.length}):\n${owners.map((n, i) => `${i + 1}. ${n}`).join('\n')}`
        : 'Owner biasa masih kosong.';
      return lenwy.sendMessage(from, { text: teks.trim() }, { quoted: m });
    }

    const targetJid = m.mentionedJid?.[0] || m.quoted?.sender || rawTarget;
    const number = roles.normalizeNumber(targetJid);
    if (!number) return m.reply(`Masukkan atau tag nomornya.\nContoh: ${prefix}setowner ${action} 62812345678`);

    if (action === 'add') {
      if (roles.isSuperOwner(number)) return m.reply(`Nomor ${number} sudah menjadi superowner.`);
      if (roles.getList('owner').includes(number)) return m.reply(`Nomor ${number} sudah terdaftar sebagai owner.`);
      try {
        const isRegistered = await lenwy.onWhatsApp(number + '@s.whatsapp.net');
        if (!isRegistered || isRegistered.length === 0) {
          return m.reply(`❌ Nomor ${number} tidak terdaftar di WhatsApp.`);
        }
        roles.addToList('owner', number);
        return react('👍');
      } catch {
        return m.reply('❌ Gagal mengecek nomor ke WhatsApp.');
      }
    }

    if (action === 'del') {
      if (roles.isSuperOwner(number)) return m.reply('❌ Superowner dari global.owner tidak bisa dihapus lewat command.');
      const res = roles.removeFromList('owner', number);
      if (!res.ok) return m.reply(`❌ Nomor ${number} tidak ada di daftar owner.`);
      return react('👍');
    }
  },
};
